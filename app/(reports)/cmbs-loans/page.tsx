import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "CMBS Loans: Non-Recourse, Fixed-Rate Permanent Financing for Commercial Properties | Lender-Ready",
  description:
    "CMBS loans offer non-recourse, fixed-rate permanent financing with 5, 7, or 10 year terms and 25-30 year amortization. Our free guide explains what's required.",
  path: "/cmbs-loans",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            CMBS Loans: Non-Recourse, Fixed-Rate Permanent Financing for
            Commercial Properties
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially in the capital
            markets — CMBS investors want to see clean trailing performance
            before they'll price your deal at their tightest spreads.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            CMBS (Commercial Mortgage-Backed Securities) loans are permanent
            commercial real estate loans that are originated by lenders and then
            pooled, securitized, and sold to investors. They are widely used for
            larger, stabilized commercial properties and are known for offering
            non-recourse, fixed-rate execution with competitive pricing when
            market conditions are favorable.
          </p>
          <p>
            CMBS is a capital-markets product. Pricing and availability move
            with the broader bond markets and investor demand.
          </p>
        </div>
        <section className="block">
          <h2>What CMBS Loans Are Designed For</h2>
          <p>
            CMBS financing typically fits when the property is stabilized with
            consistent cash flow, the loan size is large enough to fit CMBS
            conduit or single-asset programs (often several million dollars and
            up), the borrower wants non-recourse, fixed-rate permanent debt, the
            property type is commonly accepted in CMBS pools (multifamily,
            industrial, retail, office, self-storage, hospitality in some cases,
            and certain others), and the borrower is comfortable with the
            structure, covenants, and securitization process.
          </p>
          <p>
            CMBS is most often used for acquisition or refinance of performing
            commercial assets.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Trailing 12-month (and often longer) operating performance
                </li>
                <li>Current rent roll, occupancy, and tenant quality</li>
                <li>Debt service coverage and loan-to-value</li>
                <li>Property condition and remaining economic life</li>
                <li>Market fundamentals for the property type and location</li>
                <li>Borrower/sponsor experience and structure</li>
                <li>
                  Cash management and reserve requirements typical of
                  securitized loans
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Smaller loan sizes that do not efficiently fit CMBS execution
                </li>
                <li>Transitional, value-add, or heavily vacant properties</li>
                <li>
                  Situations that need flexible prepayment or short-term capital
                </li>
                <li>
                  Borrowers who prefer relationship-style bank portfolio loans
                  with more flexibility
                </li>
                <li>
                  Properties or markets that CMBS investors currently view
                  unfavorably
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, bank portfolio, life company, agency (for
            multifamily), or bridge financing is often more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Origination & Securitization — a CMBS lender originates the loan,
              which is then pooled with other loans (conduit) or executed as a
              single-asset securitization on larger deals
            </li>
            <li>
              Term & Amortization — terms commonly run 5, 7, or 10 years with 25
              to 30 year amortization
            </li>
            <li>
              Non-Recourse Structure — most CMBS loans are non-recourse with
              standard "bad boy" carve-outs
            </li>
            <li>
              Fixed-Rate Pricing — rates are fixed and priced off swaps or
              Treasuries plus a spread, typically with a lockout period or
              defeasance/yield-maintenance requirement for early payoff
            </li>
          </ul>
          <p>
            Because the loan is designed to be sold into the capital markets,
            documentation and underwriting follow relatively standardized CMBS
            guidelines.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for CMBS Loans</h2>
          <ul className="check">
            <li>Trailing 12-month (and multi-year) operating statements</li>
            <li>
              Current detailed rent roll with tenant and lease information
            </li>
            <li>Property condition and basic environmental information</li>
            <li>Borrower/sponsor experience and financial statements</li>
            <li>Existing debt schedule (for refinances)</li>
            <li>Market and comparable information</li>
            <li>Entity documents and organizational structure</li>
            <li>Clear picture of cash flow durability</li>
          </ul>
          <p>
            Because CMBS loans are headed for securitization, complete and
            well-organized information is especially important.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free CMBS Loan Guide</h2>
            <p>
              This guide explains how CMBS financing works, how it differs from
              bank and life company loans, and what you can do to position a
              stabilized commercial property for CMBS execution.
            </p>
            <ReportForm report="cmbs-loans" buttonLabel="Get the Free Guide" />
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
              team that already knows which CMBS lenders fit your property,
              visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/fannie-mae-freddie-mac">Fannie Mae / Freddie Mac</Link>{" "}
            <Link href="/commercial-bridge-loans">Bridge Loans</Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What does CMBS stand for?</h4>
            <p>
              Commercial Mortgage-Backed Securities. The loans are originated
              and then packaged into securities sold to investors.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are CMBS loans non-recourse?</h4>
            <p>
              Most are non-recourse to the borrower, subject to standard
              carve-outs for fraud, misrepresentation, environmental issues, and
              other "bad acts."
            </p>
          </div>
          <div className="faq-item">
            <h4>Why do CMBS loans have prepayment restrictions?</h4>
            <p>
              Because the loans are sold into the capital markets, investors
              expect a predictable stream of payments. Early payoff usually
              requires defeasance or yield maintenance to protect those
              investors.
            </p>
          </div>
          <div className="faq-item">
            <h4>How do CMBS loans compare to bank portfolio loans?</h4>
            <p>
              CMBS often offers non-recourse and competitive fixed-rate pricing
              on larger stabilized assets. Bank portfolio loans may provide more
              flexibility, easier prepayment, and better execution on smaller or
              more relationship-driven deals.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare clean trailing operating statements, a detailed rent roll,
              and strong property information, then approach CMBS lenders active
              in your property type and loan size. The free guide on this page
              and the K2 Lender-Ready System are designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
