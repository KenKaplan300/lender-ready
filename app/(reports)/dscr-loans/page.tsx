import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "DSCR Loans: Qualify Investment Properties on Rental Income, Not Personal Income | Lender-Ready",
  description:
    "Qualify an investment property on its rental income instead of your personal income. Most DSCR programs target a 1.0 or higher ratio. Free guide inside.",
  path: "/dscr-loans",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            DSCR Loans: Qualify Investment Properties on Rental Income, Not
            Personal Income
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially with DSCR — the
            rent roll and the ratio have to tell a Lender-Ready story on their
            own.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            DSCR (Debt Service Coverage Ratio) loans allow real estate investors
            to finance rental properties based primarily on the property's
            expected rental income rather than the borrower's personal income or
            debt-to-income ratio. This makes them one of the most useful tools
            for building and scaling a rental portfolio.
          </p>
          <p>
            They sit between conventional residential investment mortgages and
            full commercial permanent financing, and are especially popular for
            1–8 unit residential and small multifamily properties.
          </p>
        </div>
        <section className="block">
          <h2>What DSCR Loans Are Designed For</h2>
          <p>
            DSCR financing typically fits when the borrower is an investor (not
            an owner-occupant), the property is a rental (single-family, 2–4
            unit, or small multifamily), qualification will be based on the
            ratio of rental income to the proposed mortgage payment, the
            investor wants to avoid or minimize traditional personal income
            documentation, and the goal is acquisition or refinance of
            investment property with streamlined underwriting.
          </p>
          <p>
            Common property types include single-family rentals, duplexes,
            triplexes, fourplexes, and certain 5–8+ unit properties depending on
            the lender.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Projected or actual rental income and the resulting DSCR
                </li>
                <li>
                  Market rents and lease documentation (or market rent analysis
                  for vacant properties)
                </li>
                <li>Borrower credit score and reserves/liquidity</li>
                <li>Property condition and appraisal</li>
                <li>Loan-to-value ratio</li>
                <li>
                  Experience as a landlord or investor (requirements vary by
                  lender)
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Owner-occupied primary residences (these belong in
                  conventional residential channels)
                </li>
                <li>
                  Larger true commercial assets that require full commercial
                  underwriting
                </li>
                <li>
                  Heavy value-add or construction projects that need bridge or
                  construction capital first
                </li>
                <li>
                  Borrowers who cannot meet minimum credit, liquidity, or DSCR
                  thresholds
                </li>
                <li>
                  Properties with unreliable or undocumented rental income
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, other loan program categories are more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              DSCR Calculation — the key underwriting metric is expected monthly
              rental income divided by proposed monthly debt service, with most
              programs looking for 1.0 or higher (some require 1.20–1.25)
            </li>
            <li>
              Streamlined Income Documentation — personal income tax returns are
              often not required, though credit score, liquidity, and property
              condition still matter
            </li>
            <li>
              Term Structure — loans can be short-term or longer-term depending
              on the program, with many available for both purchases and
              refinances, including cash-out in some cases
            </li>
            <li>
              Entity Vesting — LLC or similar entity vesting is commonly allowed
            </li>
          </ul>
          <p>
            DSCR lenders range from specialized non-bank investors to certain
            banks and private capital sources.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for DSCR Loans</h2>
          <ul className="check">
            <li>
              Property information and purchase contract or current mortgage
              details
            </li>
            <li>
              Rent roll or lease information (or market rent comps for vacant
              units)
            </li>
            <li>Clear calculation or support for the expected DSCR</li>
            <li>Borrower credit and liquidity documentation</li>
            <li>Appraisal or valuation support when available</li>
            <li>Experience summary as an investor (if required)</li>
            <li>Entity documents if title will be held in an LLC or similar</li>
            <li>Basic property condition information</li>
          </ul>
          <p>
            Clean rent support and a solid credit/liquidity profile are the
            foundation.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free DSCR Loan Guide</h2>
            <p>
              This guide explains how DSCR financing works, how lenders
              calculate coverage, what credit and reserve requirements typically
              look like, and how to position investment property deals for
              approval.
            </p>
            <ReportForm report="dscr-loans" buttonLabel="Get the Free Guide" />
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
              team that already knows which DSCR lenders fit your investment
              properties, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/rental-investor-loans">
              Rental Property Investor Loans
            </Link>{" "}
            <Link href="/1-4-unit-investment-property">
              1-4 Unit Investment Property
            </Link>{" "}
            <Link href="/residential-portfolio">Residential Portfolio</Link>{" "}
            <Link href="/multifamily-financing">Multifamily Financing</Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What does DSCR stand for?</h4>
            <p>
              Debt Service Coverage Ratio. It measures the property's expected
              rental income against the proposed mortgage payment. A DSCR of 1.0
              means the rent is expected to cover the payment exactly; higher
              ratios provide a cushion.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need to show personal income tax returns?</h4>
            <p>
              Often no. Many DSCR programs qualify the loan primarily on the
              property's rental income plus the borrower's credit and liquidity,
              without traditional personal income documentation.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I use DSCR loans for short-term rentals?</h4>
            <p>
              Some lenders allow short-term rental income; many prefer
              traditional longer-term leases. It depends on the specific program
              and how the income is documented and stressed.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              What is the difference between a DSCR loan and a conventional
              investment property mortgage?
            </h4>
            <p>
              Conventional investment mortgages usually still rely heavily on
              personal income and debt-to-income ratios. DSCR loans shift
              primary qualification to the property's cash flow, which is why
              they are popular with portfolio investors.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Support the rental income with leases or solid market rent data,
              maintain strong credit and liquidity, keep leverage reasonable,
              and approach lenders who actively originate DSCR loans. The free
              guide on this page and the K2 Lender-Ready System are designed to
              help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
