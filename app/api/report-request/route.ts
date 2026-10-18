import { createHash } from "node:crypto";
import { REPORTS } from "@/lib/reports";
import { SITE_URL } from "@/lib/metadata";

function jsonResponse(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mailchimpConfig() {
  const { MAILCHIMP_SERVER, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_API_KEY } =
    process.env;

  if (!MAILCHIMP_SERVER || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_KEY) {
    throw new Error("Mailchimp is not configured.");
  }

  return {
    baseUrl:
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0` +
      `/lists/${MAILCHIMP_AUDIENCE_ID}`,
    authorization: `Basic ${btoa(`any:${MAILCHIMP_API_KEY}`)}`,
  };
}

async function addMailchimpTag(subscriberHash: string) {
  const { baseUrl, authorization } = mailchimpConfig();

  const response = await fetch(`${baseUrl}/members/${subscriberHash}/tags`, {
    method: "POST",

    headers: {
      Authorization: authorization,

      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      tags: [
        {
          name: "lender-ready-report-request",
          status: "active",
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Mailchimp tag error:", errorText);

    throw new Error("Failed to add Mailchimp tag.");
  }
}

async function sendToMailchimp(email: string, report: string) {
  const { baseUrl, authorization } = mailchimpConfig();

  const normalizedEmail = normalizeEmail(email);

  /*
   * Mailchimp requires the MD5 hash of the lowercase email address
   * when addressing an existing audience member.
   */
  const subscriberHash = createHash("md5")
    .update(normalizedEmail)
    .digest("hex");

  const selectedReport = REPORTS[report];

  const reportUrl = `${SITE_URL}/reports/${selectedReport.file}`;

  /*
   * Add or update the contact.
   *
   * "subscribed" means the report requester becomes
   * an email subscriber in the Mailchimp audience.
   *
   * This should only be used if the client's consent
   * setup allows report-request users to be subscribed.
   */
  const memberResponse = await fetch(`${baseUrl}/members/${subscriberHash}`, {
    method: "PUT",

    headers: {
      Authorization: authorization,

      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email_address: normalizedEmail,

      status_if_new: "subscribed",

      merge_fields: {
        REPORTNAME: selectedReport.name,
        REPORTURL: reportUrl,
      },
    }),
  });

  if (!memberResponse.ok) {
    const errorText = await memberResponse.text();

    console.error("Mailchimp member error:", memberResponse.status, errorText);

    throw new Error(
      `Mailchimp contact update failed (${memberResponse.status}): ${errorText}`,
    );
  }

  await addMailchimpTag(subscriberHash);

  return {
    reportName: selectedReport.name,
    reportUrl,
  };
}

/*
 * Report form endpoint
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = typeof body.email === "string" ? body.email.trim() : "";

    const report = typeof body.report === "string" ? body.report.trim() : "";

    if (!isValidEmail(email)) {
      return jsonResponse(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        400,
      );
    }

    /*
     * Only allow simple report slugs.
     * This prevents someone from supplying
     * an arbitrary file path.
     */
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(report)) {
      return jsonResponse(
        {
          success: false,
          error: "Invalid report.",
        },
        400,
      );
    }

    if (!Object.hasOwn(REPORTS, report)) {
      return jsonResponse(
        {
          success: false,
          error: "This report is not configured yet.",
        },
        400,
      );
    }

    const result = await sendToMailchimp(email, report);

    return jsonResponse({
      success: true,
      message: "Your report has been requested successfully.",
      report: result.reportName,
    });
  } catch (error) {
    console.error("Report request error:", error);

    return jsonResponse(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      500,
    );
  }
}

function methodNotAllowed() {
  return jsonResponse(
    {
      success: false,
      error: "Method not allowed.",
    },
    405,
  );
}

export {
  methodNotAllowed as GET,
  methodNotAllowed as PUT,
  methodNotAllowed as PATCH,
  methodNotAllowed as DELETE,
};
