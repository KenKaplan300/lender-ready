import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Triple Net / Single Tenant (NNN) Financing: Permanent Capital for Net-Lease Properties | Lender-Ready",
  description:
    "Triple net and single-tenant financing is priced on tenant credit and remaining lease term, often with non-recourse terms. Free Lender-Ready.com guide.",
  path: "/triple-net-financing",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Triple Net & Single Tenant Financing: Permanent Capital for
            Net-Lease Properties
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially in net-lease
            investing — the credit behind the rent check matters more than
            almost anything else about the property.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Triple net (NNN) and single-tenant financing is designed for
            investment properties leased to one tenant on a net-lease basis,
            where the tenant is responsible for most or all operating expenses,
            taxes, and insurance. These loans are underwritten primarily on the
            credit of the tenant and the remaining lease term rather than on
            multi-tenant cash-flow complexity.
          </p>
          <p>
            This is a specialized permanent financing category, not a general
            commercial mortgage product. The strongest executions occur when the
            tenant is creditworthy and the lease has substantial remaining term.
          </p>
        </div>
        <section className="block">
          <h2>What Triple Net / Single Tenant Financing Is Designed For</h2>
          <p>
            Triple net and single-tenant financing typically fits when a
            property is leased to a single tenant on a triple net, absolute net,
            or bondable lease, the tenant carries solid credit or a strong
            operating history, and there is meaningful remaining lease term.
            Borrowers use this financing to acquire or refinance net-lease
            investment properties and generally want long-term permanent debt,
            often non-recourse. Common property types include single-tenant
            retail, industrial, office, medical, and certain special-purpose
            net-lease assets occupied by national or regional credit tenants as
            well as strong local operators.
          </p>
          <p>
            Lenders underwrite the tenant's credit and lease structure as the
            primary repayment source rather than a diversified multi-tenant
            income stream, and remaining lease term is a critical driver of both
            pricing and leverage. Loans are often fixed-rate and longer-term,
            with many executions structured non-recourse subject to standard
            carve-outs. The product sits within the broader permanent loan
            category but has its own underwriting focus and dedicated lender set
            — banks, life companies, CMBS, specialized net-lease lenders, and
            certain private capital sources.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Tenant credit quality (investment-grade, national, regional,
                  or strong local)
                </li>
                <li>Remaining primary lease term</li>
                <li>Lease structure (true triple net vs. modified net)</li>
                <li>Rent level relative to market</li>
                <li>
                  Location and alternative-use potential of the real estate
                </li>
                <li>Borrower/sponsor experience and structure</li>
                <li>
                  Loan-to-value and debt yield based on the in-place net rent
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>Multi-tenant properties with diversified occupancy</li>
                <li>Short remaining lease terms or near-term rollover risk</li>
                <li>Tenants with weak or unproven credit</li>
                <li>
                  Properties that require active management or significant
                  landlord responsibilities
                </li>
                <li>Situations that need short-term or transitional capital</li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, conventional multi-tenant permanent, bridge, or
            other program categories are more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Tenant-Credit Underwriting — the tenant's credit quality and the
              lease structure serve as the primary repayment source, rather than
              a diversified multi-tenant income stream
            </li>
            <li>
              Lease Term as a Pricing Driver — remaining primary lease term is
              one of the most important drivers of available leverage and
              pricing, with loan terms typically matching the remaining lease
              term
            </li>
            <li>
              Fixed-Rate, Longer-Term Structures — loans are commonly fixed-rate
              with longer terms suited to the duration of the underlying lease
            </li>
            <li>
              Non-Recourse Execution — many single-tenant and NNN permanent
              loans are non-recourse with standard carve-outs
            </li>
            <li>
              Capital Sources — banks, life companies, CMBS, specialized
              net-lease lenders, and select private capital are the primary
              lenders active in this space
            </li>
          </ul>
          <p>
            Pricing and leverage typically improve with stronger tenant credit
            and longer remaining lease term — the two variables that matter most
            to net-lease lenders.
          </p>
        </section>
        <section className="block">
          <h2>
            What a Lender-Ready Package Looks Like for NNN / Single Tenant Loans
          </h2>
          <ul className="check">
            <li>
              Current lease (and any amendments) with clear rent, term, and
              expense responsibilities
            </li>
            <li>
              Tenant credit information or public credit ratings where available
            </li>
            <li>Rent commencement and remaining term details</li>
            <li>Property information and site details</li>
            <li>
              Trailing operating history (often simple because of the net
              structure)
            </li>
            <li>Borrower/sponsor experience and financial statements</li>
            <li>Existing debt schedule (for refinances)</li>
            <li>Entity documents and organizational structure</li>
            <li>Basic valuation and market context</li>
          </ul>
          <p>
            Clear lease documentation and tenant credit support are
            foundational.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>
              Download the Free Triple Net / Single Tenant Financing Guide
            </h2>
            <p>
              This guide explains how NNN and single-tenant financing works, how
              lenders evaluate tenant credit and lease term, and what you can do
              to position a net-lease property for the best possible execution.
            </p>
            <ReportForm
              report="triple-net-financing"
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
              team that already knows which net-lease and single-tenant lenders
              fit your property, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/cmbs-loans">CMBS Loans</Link>{" "}
            <Link href="/retail-financing">Retail Financing</Link>{" "}
            <Link href="/office-building-financing">
              Office Building Financing
            </Link>{" "}
            <Link href="/light-industrial-warehouse">
              Light Industrial / Warehouse Financing
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>What does triple net (NNN) mean?</h4>
            <p>
              In a triple net lease, the tenant is typically responsible for
              property taxes, insurance, and maintenance/operating expenses in
              addition to base rent. This shifts most operating risk to the
              tenant and simplifies the landlord's cash flow.
            </p>
          </div>
          <div className="faq-item">
            <h4>Why does tenant credit matter so much?</h4>
            <p>
              Because the loan is underwritten primarily to the tenant's ability
              to pay rent for the remaining lease term. Stronger credit usually
              means better leverage, pricing, and more lender options.
            </p>
          </div>
          <div className="faq-item">
            <h4>How important is remaining lease term?</h4>
            <p>
              Very important. Longer remaining primary term generally supports
              higher leverage and more competitive terms. Short remaining term
              increases refinance and rollover risk.
            </p>
          </div>
          <div className="faq-item">
            <h4>Are these loans usually non-recourse?</h4>
            <p>
              Many single-tenant and NNN permanent loans are non-recourse with
              standard carve-outs, especially from life companies, CMBS, and
              specialized net-lease lenders. Bank portfolio loans may include
              more recourse.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Provide a clear lease, strong tenant credit information, and
              remaining term details, then approach lenders who actively finance
              net-lease and single-tenant properties. The free guide on this
              page and the K2 Lender-Ready System are designed to help you do
              both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
