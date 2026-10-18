import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Fannie Mae & Freddie Mac Multifamily Loans: Agency Financing for Stabilized Apartment Properties | Lender-Ready",
  description:
    "Fannie Mae and Freddie Mac fund stabilized apartment properties with long-term, often non-recourse loans and 5- to 10-year terms. Get the free agency guide.",
  path: "/fannie-mae-freddie-mac",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Fannie Mae & Freddie Mac Financing: Agency Multifamily Permanent
            Loans
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially with agency
            financing — the Agencies reward a clean rent roll and trailing
            operating history more than almost any other execution.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Fannie Mae and Freddie Mac (the "Agencies") are the primary sources
            of permanent financing for multifamily properties in the United
            States. Their programs offer long-term, competitive-rate debt for
            stabilized apartment communities, with both fixed-rate and
            floating-rate options, and in many cases non-recourse execution.
          </p>
          <p>
            These are not general commercial real estate loans. They are
            specialized multifamily programs with specific property, occupancy,
            and borrower requirements.
          </p>
        </div>
        <section className="block">
          <h2>What Agency Multifamily Financing Is Designed For</h2>
          <p>
            Fannie Mae and Freddie Mac financing typically fits when the
            property is a multifamily apartment community (generally 5+ units),
            the asset is stabilized or near-stabilized with strong occupancy and
            cash flow, the borrower wants long-term permanent debt with
            competitive pricing, the goal is acquisition or refinance of a
            performing multifamily asset, and the property and sponsor meet
            agency guidelines for experience, credit, and structure.
          </p>
          <p>
            Common property types include conventional garden and mid-rise
            apartments, some student housing, seniors housing (with specific
            programs), and certain manufactured housing communities under
            dedicated agency offerings.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Trailing 12-month operating performance and current rent roll
                </li>
                <li>Debt service coverage ratio and loan-to-value</li>
                <li>Property condition and capital needs</li>
                <li>Market fundamentals and comparable rents</li>
                <li>
                  Sponsor experience with multifamily ownership and management
                </li>
                <li>Borrower credit and financial strength</li>
                <li>
                  Compliance with specific agency guidelines (occupancy, unit
                  mix, etc.)
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Properties with significant vacancy, heavy renovation needs,
                  or lease-up risk
                </li>
                <li>
                  Non-multifamily commercial assets (office, retail, industrial,
                  etc.)
                </li>
                <li>
                  Ground-up construction (agency programs are primarily for
                  existing, stabilized properties)
                </li>
                <li>
                  Sponsors who do not meet experience or net-worth requirements
                </li>
                <li>
                  Situations that need very short-term or highly flexible
                  transitional capital
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, bridge, value-add, construction, or conventional
            bank financing is usually more appropriate first, with agency used
            later as a permanent take-out.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              DUS Lender Origination (Fannie Mae) — loans are originated by
              Fannie Mae's Delegated Underwriting and Servicing lender network,
              with Fannie Mae purchasing or guaranteeing the loan
            </li>
            <li>
              Optigo Lender Origination (Freddie Mac) — loans are originated by
              Freddie Mac's Optigo lender network, split into Small Balance
              ($2M–$10M) and Large Balance ($10M+) execution tiers with
              different pricing
            </li>
            <li>
              Term & Amortization Structure — terms commonly run 5 to 10 years
              (or longer in some executions) with up to 30-year amortization
            </li>
            <li>
              Fixed and Floating-Rate Structures — both fixed-rate and
              adjustable-rate options are available, most loans non-recourse
              with standard carve-outs
            </li>
          </ul>
          <p>
            Agency execution is often the benchmark against which other
            multifamily permanent financing is measured.
          </p>
        </section>
        <section className="block">
          <h2>
            What a Lender-Ready Package Looks Like for Fannie Mae / Freddie Mac
            Loans
          </h2>
          <ul className="check">
            <li>Trailing 12-month operating statements</li>
            <li>Current detailed rent roll</li>
            <li>
              Property condition assessment or recent inspection information
            </li>
            <li>Borrower/sponsor experience and financial statements</li>
            <li>Existing debt schedule (for refinances)</li>
            <li>Basic market and comparable information</li>
            <li>Entity documents and organizational structure</li>
            <li>
              Any specialized unit or occupancy data required by the specific
              program
            </li>
          </ul>
          <p>
            Because agency lenders follow relatively standardized guidelines,
            clean and complete information speeds the process significantly.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>
              Download the Free Fannie Mae & Freddie Mac Multifamily Loan Guide
            </h2>
            <p>
              This guide explains how agency multifamily financing works, how
              the two Agencies differ in practice, and what you can do to
              position a stabilized apartment property for approval.
            </p>
            <ReportForm
              report="fannie-mae-freddie-mac"
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
              team that already knows which Fannie Mae and Freddie Mac lenders
              fit your multifamily property, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/multifamily-financing">Multifamily Financing</Link>{" "}
            <Link href="/hud-223f">HUD 223(f)</Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/bridge-value-add-loans">Bridge & Value-Add Loans</Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              What is the main difference between Fannie Mae and Freddie Mac
              multifamily loans?
            </h4>
            <p>
              Both are government-sponsored enterprises that provide permanent
              multifamily financing through approved lenders. In practice they
              have different product menus, pricing conventions, and
              underwriting nuances. Many multifamily borrowers quote both to
              compare execution.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are agency loans non-recourse?</h4>
            <p>
              Many are non-recourse with standard carve-outs for "bad acts."
              Exact recourse structure depends on the specific program and
              lender.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Can agency financing be used for student housing or seniors
              housing?
            </h4>
            <p>
              Yes, both Agencies have programs or guidelines that can
              accommodate certain student housing and seniors housing
              properties, subject to specific eligibility rules.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need the property to be 90%+ occupied?</h4>
            <p>
              Strong occupancy is expected for standard permanent agency
              execution. Properties with meaningful vacancy or lease-up
              remaining are usually better candidates for bridge or value-add
              financing first.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean trailing operating statements, a detailed rent roll,
              and clear property information, then approach approved Fannie Mae
              and Freddie Mac lenders who actively close multifamily loans. The
              free guide on this page and the K2 Lender-Ready System are
              designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
