import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "SBA 504 Loans: Long-Term, Fixed-Rate Financing for Owner-User Commercial Real Estate | Lender-Ready",
  description:
    "SBA 504 loans pair a bank first mortgage with a fixed-rate SBA second mortgage over 10-25 years and as little as 10% down. Free Lender-Ready.com guide.",
  path: "/sba-504-loans",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            SBA 504 Loans: Long-Term, Fixed-Rate Financing for Owner-User
            Commercial Real Estate
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the real
            estate is your own building — SBA 504 pairs a long-term, fixed-rate
            second mortgage with a modest down payment that conventional lenders
            rarely match.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            SBA 504 loans are one of the most powerful tools available for
            businesses that want to buy, build, or refinance owner-occupied
            commercial real estate. The program is specifically designed to
            provide long-term, fixed-rate financing with relatively low down
            payments, making it easier for operating companies to own the
            buildings they use.
          </p>
          <p>
            It is not intended for pure real estate investors. The business must
            occupy the majority of the property.
          </p>
        </div>
        <section className="block">
          <h2>What SBA 504 Loans Are Designed For</h2>
          <p>
            SBA 504 financing typically fits when an operating business will
            occupy at least 51% of the property (the owner-user requirement),
            when the project involves the acquisition, construction, or major
            renovation of commercial real estate, and when the borrower wants a
            long-term, fixed-rate structure with a modest equity injection. It
            fits businesses that meet SBA size and eligibility standards and are
            seeking permanent financing rather than short-term or speculative
            capital. Common uses include office buildings, industrial and
            warehouse facilities, medical and professional buildings, retail
            locations occupied by the business, and many special-purpose
            properties used by the operating company.
          </p>
          <p>
            Because the loan is secured by real estate the business itself will
            occupy, the analysis is centered on the operating business — its
            cash flow, management, and track record — as much as on the property
            itself.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Business cash flow and ability to service the total debt
                </li>
                <li>Owner-occupancy percentage</li>
                <li>Time in business and management experience</li>
                <li>
                  Personal credit and financial strength of the principal owners
                </li>
                <li>Eligible use of proceeds and project costs</li>
                <li>Collateral (primarily the commercial property)</li>
                <li>Overall project feasibility</li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Pure investment properties with little or no owner occupancy
                </li>
                <li>
                  Projects that exceed SBA size standards or other eligibility
                  rules
                </li>
                <li>Situations that need very fast, short-term capital</li>
                <li>
                  Borrowers seeking non-recourse financing (personal guarantees
                  are required)
                </li>
                <li>
                  Speculative real estate development without an operating
                  company occupant
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, conventional permanent, bridge, or investor-focused
            programs are more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              First Mortgage (Bank or Private Lender) — usually 50% of the
              project cost
            </li>
            <li>
              Second Mortgage (Certified Development Company / SBA-backed) —
              usually 40% of the project cost; this SBA-guaranteed piece is what
              delivers the long-term, fixed-rate benefit that makes 504
              attractive
            </li>
            <li>
              Borrower Equity — usually 10% of the project cost (higher in some
              situations, such as startups or special-purpose properties)
            </li>
          </ul>
          <p>
            Terms on the SBA portion are commonly 10, 20, or 25 years, with
            fixed rates set at closing.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for SBA 504 Loans</h2>
          <ul className="check">
            <li>
              Business financial statements and tax returns (typically 2–3
              years)
            </li>
            <li>Year-to-date profit & loss and balance sheet</li>
            <li>Personal financial statements and tax returns of the owners</li>
            <li>Business debt schedule</li>
            <li>Details on the property and owner-occupancy plan</li>
            <li>Project cost breakdown and use of proceeds</li>
            <li>Entity documents and ownership structure</li>
            <li>Business history and management background</li>
            <li>
              Preliminary bank or CDC interest in the first and second mortgage
              pieces
            </li>
          </ul>
          <p>
            Clean business financials and a clear owner-user story are
            foundational.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free SBA 504 Loan Guide</h2>
            <p>
              This guide explains how the 504 program works, who qualifies, how
              the structure is put together, and what you can do to position an
              owner-user real estate project for approval.
            </p>
            <ReportForm
              report="sba-504-loans"
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
              team that already knows which banks and CDCs actively originate
              SBA 504 loans, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/sba-7a-loans">SBA 7(a) Loans</Link>{" "}
            <Link href="/owner-user-sba-loans">Owner-User & SBA Loans</Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/special-purpose-financing">
              Special Purpose Financing
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What is the biggest advantage of an SBA 504 loan?</h4>
            <p>
              Long-term, fixed-rate financing on the SBA portion combined with a
              relatively low down payment (often 10%) for eligible owner-user
              commercial real estate projects.
            </p>
          </div>
          <div className="faq-item">
            <h4>How much of the building must my business occupy?</h4>
            <p>
              Generally at least 51% of the rentable space for existing
              buildings. New construction has additional rules, but majority
              owner-occupancy remains the core requirement.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need both a bank and a Certified Development Company?</h4>
            <p>
              Yes. The classic 504 structure uses a conventional first mortgage
              (usually from a bank) and an SBA-backed second mortgage delivered
              through a Certified Development Company (CDC).
            </p>
          </div>
          <div className="faq-item">
            <h4>Are personal guarantees required?</h4>
            <p>
              Yes. Personal guarantees from the principal owners are standard
              for SBA 504 loans.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean business and personal financials, document the
              owner-occupancy plan clearly, and work with lenders and CDCs that
              actively originate 504 loans. The free guide on this page and the
              K2 Lender-Ready System are designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
