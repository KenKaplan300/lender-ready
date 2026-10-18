import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "HUD 223(f) Loans: Long-Term, High-Leverage Financing for Multifamily and Healthcare Properties | Lender-Ready",
  description:
    "HUD 223(f) offers FHA-insured multifamily loans with terms up to 35 years and high leverage on stabilized assets. Download the free guide at Lender-Ready.com.",
  path: "/hud-223f",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            HUD 223(f) Loans: Long-Term, High-Leverage Financing for Multifamily
            and Healthcare Properties
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially with HUD — the
            leverage and amortization are unmatched, but the process rewards
            sponsors who prepare early and document completely.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            HUD 223(f) is a Federal Housing Administration (FHA) insured loan
            program designed for the acquisition or refinance of existing
            multifamily and certain healthcare properties. It is known for
            offering long terms, high leverage, and relatively competitive fixed
            rates on stabilized assets that meet HUD's guidelines.
          </p>
          <p>
            It is a specialized government-insured program, not a general
            commercial mortgage. Execution involves HUD-approved lenders and a
            more detailed process than conventional bank or agency loans.
          </p>
        </div>
        <section className="block">
          <h2>What HUD 223(f) Loans Are Designed For</h2>
          <p>
            HUD 223(f) financing typically fits when the property is an existing
            multifamily apartment community (or eligible healthcare facility),
            the asset is stabilized with a solid operating history, the borrower
            wants long-term, fully amortizing, fixed-rate debt with high
            leverage, the project involves acquisition or refinance (including
            some cash-out in eligible cases), and the property and sponsor can
            meet HUD's underwriting, property condition, and compliance
            requirements.
          </p>
          <p>
            It is commonly used for garden-style and mid-rise apartments, and
            has related applications in seniors housing and certain healthcare
            properties under other HUD sections.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>Trailing operating performance and current rent roll</li>
                <li>
                  Debt service coverage and loan-to-value within HUD guidelines
                </li>
                <li>Property condition and required repairs (PCNA)</li>
                <li>Market study and appraisal meeting HUD standards</li>
                <li>Sponsor experience, credit, and financial strength</li>
                <li>
                  Compliance with HUD program rules and any affordability or
                  occupancy requirements
                </li>
                <li>Adequacy of reserves</li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Properties that need substantial renovation or are in active
                  lease-up (other HUD programs or bridge financing may be
                  better)
                </li>
                <li>Situations that require very fast closing</li>
                <li>
                  Non-multifamily commercial assets outside HUD's eligible
                  categories
                </li>
                <li>
                  Sponsors unwilling or unable to navigate the HUD process and
                  documentation requirements
                </li>
                <li>
                  Deals that fit more efficiently in Fannie Mae, Freddie Mac, or
                  conventional permanent execution
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, agency multifamily, bank, life company, or bridge
            financing is often more practical.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              MAP/TAP Lender Origination — loans are originated by HUD-approved
              MAP (Multifamily Accelerated Processing) or TAP lenders, with HUD
              insuring the loan
            </li>
            <li>
              Term Structure — terms can extend up to 35 years, fully amortizing
              in many cases, with leverage often higher than conventional
              permanent financing
            </li>
            <li>
              Fixed-Rate Pricing — interest rates are fixed, with a HUD
              application, review, and firm commitment process that takes longer
              than most conventional loans
            </li>
            <li>
              Property Condition Standards — properties must meet HUD's physical
              condition and repair standards, with a Project Capital Needs
              Assessment (PCNA) standard on every deal
            </li>
          </ul>
          <p>
            Because of the government insurance and longer timeline, 223(f) is
            best suited for borrowers who prioritize term and leverage over
            speed.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for HUD 223(f) Loans</h2>
          <ul className="check">
            <li>Trailing operating statements and detailed rent roll</li>
            <li>
              Property condition information and willingness to complete a PCNA
            </li>
            <li>Borrower/sponsor experience and financial statements</li>
            <li>Existing debt schedule (for refinances)</li>
            <li>Preliminary market and valuation information</li>
            <li>Entity documents and organizational structure</li>
            <li>
              Clear understanding of HUD's repair and reserve requirements
            </li>
            <li>Engagement with a HUD-approved lender early in the process</li>
          </ul>
          <p>
            Because the HUD process is more involved, complete and
            well-organized information from the start reduces delays.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free HUD 223(f) Loan Guide</h2>
            <p>
              This guide explains how the 223(f) program works, how it compares
              to agency and conventional multifamily financing, and what you can
              do to position a stabilized multifamily property for HUD
              execution.
            </p>
            <ReportForm report="hud-223f" buttonLabel="Get the Free Guide" />
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
              team that already knows which HUD-approved lenders fit your
              multifamily property, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/fannie-mae-freddie-mac">Fannie Mae / Freddie Mac</Link>{" "}
            <Link href="/multifamily-financing">Multifamily Financing</Link>{" "}
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
            <h4>What is HUD 223(f)?</h4>
            <p>
              It is an FHA-insured loan program for the acquisition or refinance
              of existing multifamily (and certain healthcare) properties. It
              offers long terms, high leverage, and fixed rates on stabilized
              assets that meet HUD guidelines.
            </p>
          </div>
          <div className="faq-item">
            <h4>How does 223(f) differ from Fannie Mae or Freddie Mac?</h4>
            <p>
              Agency loans are generally faster and more standardized for
              conventional multifamily. HUD 223(f) often provides longer
              amortization and higher leverage but involves a more detailed
              government-insured process and longer timeline.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Can 223(f) be used for value-add or heavy renovation projects?
            </h4>
            <p>
              Standard 223(f) is intended for existing, relatively stabilized
              properties. Substantial rehabilitation usually falls under other
              HUD programs (such as 221(d)(4)). Light repairs required by the
              PCNA are common and acceptable.
            </p>
          </div>
          <div className="faq-item">
            <h4>How long does a HUD 223(f) loan take?</h4>
            <p>
              Longer than most conventional or agency loans. The process
              includes lender underwriting, HUD review, and firm commitment, so
              borrowers should plan for an extended timeline.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean operating history, a solid rent roll, and be ready
              for a thorough property condition review. Work with an experienced
              HUD-approved lender and approach the process with realistic timing
              expectations. The free guide on this page and the K2 Lender-Ready
              System are designed to help you organize the preparation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
