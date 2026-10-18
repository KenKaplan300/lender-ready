import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Auto Dealership Financing: What Lenders Actually Look For | Lender-Ready",
  description:
    "Auto dealership financing weighs franchise agreements, sales performance, and operator experience alongside the real estate. Our free report has the details.",
  path: "/auto-dealership-financing",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Report Inside</span>
          <h1>Auto Dealership Financing: What Lenders Actually Look For</h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the
            collateral is a specialized commercial property tied to vehicle
            sales, service operations, and manufacturer relationships.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Getting financing for an auto dealership isn't only about finding a
            lender. It's about finding the right lender and showing up with a
            package that matches exactly what that lender wants to see. Good
            deals don't speak for themselves — especially when the collateral is
            a specialized commercial property tied to vehicle sales, service
            operations, and manufacturer relationships.
          </p>
          <p>
            You do not have to depend on expensive commercial mortgage brokers
            to figure this out. The free report on this page is designed to give
            you clear, practical knowledge so you can navigate auto dealership
            financing on your own.
          </p>
        </div>
        <section className="block">
          <h2>Why Auto Dealership Financing Is Different</h2>
          <p>
            Auto dealerships are special-purpose commercial properties. Lenders
            underwrite both the real estate and the strength of the underlying
            dealership business, including sales volume, service department
            performance, manufacturer (OEM) relationships, franchise agreements,
            and the operator's experience.
          </p>
          <p>
            The real estate is often highly specific to automotive use —
            showrooms, service bays, inventory storage, and customer parking —
            which can limit alternative-use value. As a result, many general
            commercial real estate lenders are selective or inactive in this
            niche, while specialized automotive lenders, certain banks with
            dealer expertise, captive finance relationships, and selected
            private capital sources are more active.
          </p>
          <p>
            Floor-plan financing for inventory is typically separate from the
            real estate loan, but the overall financial health of the dealership
            influences both.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>Experienced dealer operators with a proven track record</li>
                <li>Stable or growing sales and service performance</li>
                <li>Strong manufacturer/franchise relationships</li>
                <li>Properties in viable automotive retail locations</li>
                <li>
                  Conservative leverage relative to both real estate value and
                  dealership cash flow
                </li>
                <li>Clean financial reporting and transparent operations</li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Inexperienced or first-time dealers without relevant operating
                  history
                </li>
                <li>
                  Dealerships with weak sales trends, franchise issues, or
                  manufacturer concerns
                </li>
                <li>
                  Properties with significant functional obsolescence or limited
                  alternative-use potential
                </li>
                <li>Thin cash flow or high existing leverage</li>
                <li>Incomplete financial or franchise documentation</li>
              </ul>
            </div>
          </div>
          <p>
            Specialized automotive real estate lenders, banks with dealer
            floor-plan and real estate experience, and certain private capital
            sources are the primary active lenders. Generic commercial permanent
            or CMBS lenders often have limited appetite for pure dealership
            assets.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>Specialized auto dealership real estate loans</li>
            <li>Bank portfolio loans for established dealers</li>
            <li>
              Refinance and acquisition financing tailored to dealership
              properties
            </li>
            <li>Construction or renovation loans for dealership facilities</li>
            <li>SBA 504 or 7(a) loans (in certain owner-user situations)</li>
            <li>
              Private capital and debt-fund solutions for transitional or
              specialized needs
            </li>
          </ul>
          <p>
            Standard multifamily, office, or generic retail permanent loans are
            generally not the best fit for operating auto dealership real
            estate.
          </p>
        </section>
        <section className="block">
          <h2>What “Lender-Ready” Looks Like for Auto Dealerships</h2>
          <ul className="check">
            <li>
              Dealership financial statements and tax returns (business and,
              where relevant, personal)
            </li>
            <li>
              Sales volume, service department, and operating performance
              history
            </li>
            <li>Franchise / manufacturer agreement information</li>
            <li>
              Property details (showroom, service capacity, site layout,
              improvements)
            </li>
            <li>
              Appraisal or valuation support appropriate for dealership real
              estate
            </li>
            <li>Borrower/operator experience in automotive retail</li>
            <li>Existing debt schedule and floor-plan relationships</li>
            <li>Entity documents and organizational structure</li>
            <li>Liquidity and guarantor information</li>
            <li>
              Access to direct lenders currently active in funding auto
              dealership real estate
            </li>
          </ul>
          <p>
            Missing operating history, weak franchise documentation, or
            submitting to lenders unfamiliar with dealership assets are among
            the most common reasons these files stall or get declined.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free Auto Dealership Financing Report</h2>
            <p>
              This report gives you a clear overview of how lenders evaluate
              dealership real estate, the key operating and property metrics
              that matter, and the practical steps that help these loans get
              approved. It is written to help you move forward independently.
            </p>
            <ReportForm
              report="auto-dealership-financing"
              buttonLabel="Get the Free Report"
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
              team that already knows which lenders are active in auto
              dealership financing, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/auto-repair-financing">Auto Repair Financing</Link>{" "}
            <Link href="/special-purpose-financing">
              Special Purpose Financing
            </Link>{" "}
            <Link href="/sba-504-loans">SBA 504 Loans</Link>{" "}
            <Link href="/sba-7a-loans">SBA 7(a) Loans</Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/light-industrial-warehouse">
              Light Industrial / Warehouse
            </Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              How is auto dealership real estate financing different from
              standard commercial financing?
            </h4>
            <p>
              Dealership properties are special-purpose assets. Lenders evaluate
              the operating dealership's performance, franchise relationships,
              and operator experience in addition to the real estate.
              Alternative-use value is often limited, which affects lender
              appetite and leverage.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Do I need an existing dealership operation to finance the real
              estate?
            </h4>
            <p>
              Most lenders prefer experienced dealer-operators. Financing pure
              real estate without a strong operating story or franchise
              relationship is significantly more difficult.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is floor-plan financing part of the real estate loan?</h4>
            <p>
              No. Floor-plan (inventory) financing is typically a separate
              credit facility. However, the overall health of the dealership and
              its floor-plan relationships influence the real estate lender's
              comfort.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              What is the biggest reason dealership real estate loans get
              delayed?
            </h4>
            <p>
              Incomplete operating or franchise documentation, or submitting to
              general commercial lenders that do not regularly fund automotive
              dealership properties.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare a complete package that includes dealership financials,
              sales/service performance, franchise information, and property
              details, and approach lenders who actively fund auto dealership
              real estate. The free report on this page and the K2 Lender-Ready
              System are designed to help you do both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
