import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Long-Term Commercial Mortgage Loans: Permanent Financing for Stabilized Properties | Lender-Ready",
  description:
    "Permanent mortgages offer long terms and steady payments for stabilized property via bank, life company, and CMBS capital. Free guide at Lender-Ready.com.",
  path: "/long-term-commercial-mortgages",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Long-Term Commercial Mortgage Loans: Permanent Financing for
            Stabilized Properties
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the tool
            doesn't match the deal — permanent financing is built for
            stabilized, income-producing property, not transitional or
            construction-stage assets.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Long-term commercial mortgage loans (also called permanent loans)
            are designed for stabilized properties that generate consistent cash
            flow. These loans typically offer the longest terms, the most
            predictable payments, and, in many cases, the most competitive rates
            available in commercial real estate.
          </p>
          <p>
            They are not the right tool for heavy renovation, lease-up, or
            construction projects. Those situations usually require bridge,
            construction, or value-add capital first. Permanent financing comes
            into play once the property is performing.
          </p>
        </div>
        <section className="block">
          <h2>What Long-Term / Permanent Loans Are Designed For</h2>
          <p>
            Permanent commercial mortgages work best when the property is
            stabilized or near-stabilized, with occupancy and cash flow that are
            consistent and documented. Borrowers use this category when the goal
            is acquiring a performing asset or refinancing existing debt on
            favorable terms, and want longer-term debt with predictable payments
            rather than short-term, flexible capital.
          </p>
          <p>
            Common property types that use permanent financing include
            multifamily, industrial, medical office, retail (especially strong
            single-tenant or well-leased centers), self-storage, and certain
            special-purpose assets that have reached stable operations. Because
            these loans are meant to stay in place for years, lenders underwrite
            to the durability of the income stream rather than to a short-term
            exit — the core distinction from bridge, construction, or value-add
            capital.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Trailing 12-month (and often multi-year) operating performance
                  that is consistent and well documented
                </li>
                <li>
                  Current rent roll and occupancy that demonstrate stability
                </li>
                <li>
                  Debt service coverage ratio (DSCR) that comfortably clears the
                  program minimum
                </li>
                <li>
                  Property condition and remaining useful life that support a
                  long-term hold
                </li>
                <li>Borrower/sponsor experience and financial strength</li>
                <li>
                  Market fundamentals that support the specific property type
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>Properties in active lease-up or heavy renovation</li>
                <li>Ground-up construction</li>
                <li>
                  Assets with significant near-term vacancy or deferred
                  maintenance
                </li>
                <li>Situations that need fast, flexible, short-term capital</li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, bridge, construction, or value-add loans are
            typically the better first step, with permanent financing used later
            to take out the transitional debt.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Bank and Credit Union portfolio loans — relationship-driven,
              flexible, often good for a wide range of property types
            </li>
            <li>
              Life Company loans — among the most competitive rates for strong,
              stable, higher-quality assets
            </li>
            <li>
              Fannie Mae and Freddie Mac — primary agency source for multifamily
            </li>
            <li>
              CMBS loans — non-recourse, fixed-rate execution often used for
              larger or more standardized properties
            </li>
            <li>
              HUD programs (including 223(f)) — long-term, high-leverage options
              for eligible multifamily and healthcare-related assets
            </li>
            <li>
              SBA 504 — a permanent financing tool specifically for owner-user
              commercial properties
            </li>
          </ul>
          <p>
            Each of these sources has different guidelines on leverage,
            recourse, property type, loan size, and borrower experience.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for Permanent Loans</h2>
          <ul className="check">
            <li>Trailing 12-month operating statements</li>
            <li>Current detailed rent roll</li>
            <li>Property condition information</li>
            <li>Borrower/sponsor experience and financial statements</li>
            <li>Existing debt schedule (for refinances)</li>
            <li>Basic market and comparable information</li>
            <li>Entity documents</li>
          </ul>
          <p>
            The exact requirements vary by capital source (agency vs. bank vs.
            life company vs. CMBS), but clean historical performance and a clear
            rent roll are almost always foundational.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free Long-Term Commercial Mortgage Guide</h2>
            <p>
              This guide explains how permanent financing works, how the major
              capital sources differ, and what you can do to position a
              stabilized property for the best possible execution.
            </p>
            <ReportForm
              report="long-term-commercial-mortgages"
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
              team that already knows which permanent loan sources fit your
              property, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/fannie-mae-freddie-mac">Fannie Mae / Freddie Mac</Link>{" "}
            <Link href="/cmbs-loans">CMBS Loans</Link>{" "}
            <Link href="/hud-223f">HUD 223(f)</Link>{" "}
            <Link href="/sba-504-loans">SBA 504 Loans</Link>{" "}
            <Link href="/bridge-value-add-loans">Bridge & Value-Add Loans</Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              What is the main difference between a permanent loan and a bridge
              loan?
            </h4>
            <p>
              Permanent loans are designed for stabilized properties and
              typically offer longer terms and more predictable payments. Bridge
              loans are shorter-term, more flexible facilities used for
              transitional, value-add, or time-sensitive situations.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Do I need the property to be 100% occupied to get permanent
              financing?
            </h4>
            <p>
              Not always, but most permanent lenders want to see strong, stable
              occupancy and a clear history of performance. Light vacancy is
              often acceptable; heavy lease-up or significant deferred
              maintenance usually pushes the deal toward bridge or value-add
              capital first.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are permanent loans usually non-recourse?</h4>
            <p>
              Many life company, CMBS, and agency permanent loans are
              non-recourse (with standard carve-outs). Bank portfolio loans are
              more likely to include some form of recourse, depending on the
              institution and the deal.
            </p>
          </div>
          <div className="faq-item">
            <h4>How long are typical permanent loan terms?</h4>
            <p>
              Common terms range from 5 to 10 years (with 25–30 year
              amortization), though some agency and HUD executions can be
              longer. Exact term and amortization depend on the capital source.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean trailing operating statements, a detailed rent roll,
              and clear property information, then approach lenders whose
              permanent programs match your property type and loan size. The
              free guide on this page and the K2 Lender-Ready System are
              designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
