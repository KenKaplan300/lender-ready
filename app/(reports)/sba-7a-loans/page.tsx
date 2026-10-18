import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "SBA 7(a) Loans: Flexible Financing for Business Real Estate, Equipment, and Working Capital | Lender-Ready",
  description:
    "SBA 7(a) loans fund real estate, equipment, working capital, or acquisitions in one loan, amortizing real estate up to 25 years. Free Lender-Ready.com guide.",
  path: "/sba-7a-loans",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            SBA 7(a) Loans: Flexible Financing for Business Real Estate,
            Equipment, and Working Capital
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when your need
            spans more than just real estate — SBA 7(a) is built to fund the
            property, the equipment, and the working capital in a single loan.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            SBA 7(a) loans are the SBA's most flexible and widely used program.
            They can finance commercial real estate, equipment, working capital,
            business acquisition, or a combination of these needs in a single
            loan. While SBA 504 is specialized for major fixed-asset real estate
            projects, 7(a) is the broader tool that covers a wider range of
            business purposes.
          </p>
          <p>
            For many owner-users and operating companies, 7(a) is the most
            practical SBA option when the project does not fit cleanly into 504
            guidelines or when a single-loan structure is preferred.
          </p>
        </div>
        <section className="block">
          <h2>What SBA 7(a) Loans Are Designed For</h2>
          <p>
            SBA 7(a) financing typically fits when the business needs to
            purchase or refinance owner-occupied commercial real estate, when
            equipment, working capital, or business acquisition is part of the
            capital need, or when a single loan structure is preferred over the
            two-loan 504 structure. It fits businesses that meet SBA size and
            eligibility standards, particularly when conventional financing is
            unavailable or offers less favorable terms. Common uses include real
            estate acquisition or refinance, heavy equipment purchases, partner
            buyouts, business acquisitions, and mixed-purpose projects that
            combine real estate with other business needs.
          </p>
          <p>
            Because a bank or other SBA lender originates and services the loan
            while the SBA guarantees a portion of it, credit criteria are often
            more flexible than a conventional bank loan — though the analysis
            still centers on the operating business's cash flow and its capacity
            to service the debt.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>Business cash flow and debt service coverage</li>
                <li>Owner-occupancy (when real estate is involved)</li>
                <li>Time in business and management experience</li>
                <li>Personal credit and financial strength of the owners</li>
                <li>Eligible use of proceeds</li>
                <li>
                  Collateral coverage (real estate, equipment, and other
                  business assets)
                </li>
                <li>Overall ability to repay from operations</li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Pure investment real estate with no significant owner
                  occupancy
                </li>
                <li>
                  Projects that fit better in the specialized 504 fixed-asset
                  structure and can benefit from its long-term fixed rate
                </li>
                <li>
                  Situations that exceed SBA size standards or other eligibility
                  rules
                </li>
                <li>Borrowers seeking non-recourse financing</li>
                <li>
                  Speculative ventures with little or no operating history or
                  repayment capacity
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, conventional permanent, bridge, 504, or
            investor-focused programs may be more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Bank or SBA Lender Origination — a bank or other SBA lender
              originates and services the loan, with the SBA guaranteeing a
              portion (the percentage varies by loan size and purpose)
            </li>
            <li>
              Real Estate Structure — real estate proceeds can amortize over up
              to 25 years
            </li>
            <li>
              Equipment and Working Capital Structure — these uses of proceeds
              carry shorter maximum terms than real estate
            </li>
            <li>
              Rate Structure — both variable and fixed-rate options are
              available depending on the lender and market
            </li>
          </ul>
          <p>
            Personal guarantees from principal owners are required across all
            use-of-proceeds structures.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for SBA 7(a) Loans</h2>
          <ul className="check">
            <li>
              Business financial statements and tax returns (typically 2–3
              years)
            </li>
            <li>Year-to-date profit & loss and balance sheet</li>
            <li>Personal financial statements and tax returns of the owners</li>
            <li>Business debt schedule</li>
            <li>
              Details on the use of proceeds (real estate, equipment, working
              capital, acquisition, etc.)
            </li>
            <li>
              Property information and owner-occupancy plan (if real estate is
              involved)
            </li>
            <li>Entity documents and ownership structure</li>
            <li>Business history and management background</li>
            <li>Collateral summary</li>
          </ul>
          <p>
            Clean financials and a clear, eligible use of proceeds are
            foundational.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free SBA 7(a) Loan Guide</h2>
            <p>
              This guide explains how the 7(a) program works, how it differs
              from 504, who qualifies, and what you can do to position a
              business real estate or mixed-purpose project for approval.
            </p>
            <ReportForm
              report="sba-7a-loans"
              buttonLabel="Get the Free Guide"
            />
            <div className="fineprint">No cost. No obligation.</div>
          </div>
        </section>
        <section className="block">
          <K2SystemBox />
        </section>
        <section className="block">
          <div className="brokerage">
            <h2 style={{ border: "none", padding: "0", fontSize: "19px" }}>
              Prefer Full Brokerage Support?
            </h2>
            <p style={{ margin: "0" }}>
              If you would rather work with an experienced commercial mortgage
              team that already knows which lenders actively originate SBA 7(a)
              loans, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/sba-504-loans">SBA 504 Loans</Link>{" "}
            <Link href="/owner-user-sba-loans">Owner-User & SBA Loans</Link>{" "}
            <Link href="/business-lines-of-credit">
              Business Lines of Credit
            </Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What is the main difference between SBA 7(a) and SBA 504?</h4>
            <p>
              SBA 504 is specialized for major fixed-asset real estate (and
              heavy equipment) projects and uses a two-loan structure that
              delivers long-term fixed rates on the SBA portion. SBA 7(a) is
              more flexible, can cover real estate plus other business needs in
              a single loan, and is often used when the project does not fit
              cleanly into 504.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can 7(a) be used for pure commercial real estate purchases?</h4>
            <p>
              Yes, as long as the owner-occupancy and other eligibility
              requirements are met. Many owner-user real estate deals are done
              with 7(a) when a single-loan structure is preferred or when other
              uses of proceeds are involved.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need a specific SBA lender?</h4>
            <p>
              Yes. The loan must be originated by an SBA-approved lender. Not
              every bank actively makes 7(a) loans, so working with lenders who
              regularly originate them improves execution.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are personal guarantees required?</h4>
            <p>
              Yes. Personal guarantees from the principal owners are standard.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean business and personal financials, document a clear
              and eligible use of proceeds, and approach lenders who actively
              originate SBA 7(a) loans. The free guide on this page and the K2
              Lender-Ready System are designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
