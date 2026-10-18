"use client";

import { useRef, useState, type FormEvent } from "react";

type ReportFormProps = {
  /** Report slug sent to /api/report-request (see lib/reports.ts). */
  report: string;
  buttonLabel: string;
};

export default function ReportForm({ report, buttonLabel }: ReportFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailRef.current?.value.trim() ?? "";

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/report-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          report,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to process your request.");
      }

      setStatus("success");
    } catch (error) {
      console.error("Report request error:", error);

      alert("We couldn't process your request. Please try again.");

      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="report-form-success">
          <h3>Thank you!</h3>
          <p>
            Your report is on its way. Please check your email for the download
            link.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={emailRef}
        type="email"
        placeholder="you@company.com"
        aria-label="Email address"
      />{" "}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
}
