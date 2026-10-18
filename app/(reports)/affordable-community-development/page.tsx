import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Affordable & Community Development Loans: Financing for Mission-Driven and Tax-Credit Projects | Lender-Ready",
  description:
    "Affordable housing and community development loans layer LIHTC, tax-exempt bonds, and CDFI capital into one stack. Read our free financing guide.",
  path: "/affordable-community-development",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Affordable & Community Development Loans: Financing for
            Mission-Driven and Tax-Credit Projects
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the deal
            serves a public purpose — affordable and community development
            financing rewards sponsors who can layer tax credits, bonds, and
            soft debt into a capital stack that actually closes.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Affordable and community development financing is designed for
            projects that serve a public or mission-driven purpose — most
            commonly affordable housing, but also certain community facilities
            and revitalization efforts. These loans often combine higher
            leverage, longer terms, and specialized capital sources that are not
            available to conventional market-rate commercial real estate.
          </p>
          <p>
            They are not interchangeable with standard permanent or bridge
            loans. The underwriting, compliance requirements, and capital stack
            are different.
          </p>
        </div>
        <section className="block">
          <h2>
            What Affordable & Community Development Financing Is Designed For
          </h2>
          <p>
            This category typically fits when the project includes
            income-restricted or affordable housing units, when the capital
            stack involves Low-Income Housing Tax Credits (LIHTC), tax-exempt
            bonds, or similar subsidies, and when the borrower is a nonprofit,
            mission-driven developer, or experienced affordable housing sponsor.
            It also fits when the project serves a community development purpose
            aligned with public or quasi-public funding sources, or when higher
            leverage or longer-term financing is needed to make the project
            viable. Common project types include affordable multifamily, senior
            affordable housing, and certain mixed-income or community facility
            developments.
          </p>
          <p>
            Because these deals combine debt with tax credit equity, bonds, and
            other subsidy sources, the analysis is both financial and
            compliance-driven — lenders and agencies are underwriting long-term
            operating viability under restricted rents as much as the deal's
            immediate feasibility.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Experience of the sponsor with affordable or tax-credit
                  projects
                </li>
                <li>
                  Strength and realism of the development or preservation budget
                </li>
                <li>
                  Compliance with income, rent, and occupancy restrictions
                </li>
                <li>Long-term operating viability under restricted rents</li>
                <li>Soft debt and subsidy commitments</li>
                <li>
                  Property condition and capital needs (especially on
                  preservation deals)
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Conventional market-rate multifamily or commercial projects
                  with no affordability component
                </li>
                <li>Purely private, non-restricted investment properties</li>
                <li>
                  Sponsors without affordable housing or tax-credit experience
                </li>
                <li>
                  Deals that need very fast, simple capital without compliance
                  overlays
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, standard permanent, bridge, or agency market-rate
            programs are more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              LIHTC Loans — debt paired with Low-Income Housing Tax Credit
              equity; one of the primary tools for affordable multifamily
              development and preservation
            </li>
            <li>
              Tax-Exempt Bond Financing — often used on larger affordable
              developments in conjunction with 4% tax credits
            </li>
            <li>
              CDFI Loans — financing from Community Development Financial
              Institutions that focus on underserved markets and mission-aligned
              projects
            </li>
            <li>
              USDA RD 538 — guaranteed loan program for affordable multifamily
              housing in eligible rural areas
            </li>
            <li>
              Other public and quasi-public sources — soft debt, subordinate
              financing, and grants that frequently appear in affordable capital
              stacks
            </li>
          </ul>
          <p>
            These sources are often layered together. The senior debt is only
            one piece of a more complex structure.
          </p>
        </section>
        <section className="block">
          <h2>
            What a Lender-Ready Package Looks Like for Affordable & Community
            Development Loans
          </h2>
          <ul className="check">
            <li>
              Detailed project budget and sources & uses (including all
              subsidies)
            </li>
            <li>
              Sponsor track record with affordable or tax-credit transactions
            </li>
            <li>
              Term sheets or commitments for tax credits, bonds, or soft debt
            </li>
            <li>
              Market study or demand analysis appropriate to the restricted
              rents
            </li>
            <li>Operating projections under income and rent restrictions</li>
            <li>
              Property condition and capital needs assessment (for existing
              assets)
            </li>
            <li>
              Organizational documents and nonprofit or mission-related status
              if applicable
            </li>
            <li>Compliance and regulatory background information</li>
          </ul>
          <p>
            Incomplete capital stacks or weak sponsor experience are among the
            most common reasons these files stall.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>
              Download the Free Affordable & Community Development Financing
              Guide
            </h2>
            <p>
              This guide explains how the major affordable housing and community
              development capital sources work, how they are typically layered,
              and what sponsors can do to position projects for approval.
            </p>
            <ReportForm
              report="affordable-community-development"
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
              team that already understands affordable and community development
              capital stacks, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/multifamily-financing">Multifamily Financing</Link>{" "}
            <Link href="/fannie-mae-freddie-mac">Fannie Mae / Freddie Mac</Link>{" "}
            <Link href="/hud-223f">HUD 223(f)</Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              What makes affordable housing financing different from market-rate
              multifamily lending?
            </h4>
            <p>
              Affordable projects usually involve income and rent restrictions,
              tax credits or other subsidies, and layered capital stacks.
              Underwriting focuses on long-term viability under those
              restrictions and on the sponsor's experience with compliance-heavy
              transactions.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do I need tax credits to use these programs?</h4>
            <p>
              Not always. Some CDFI and mission-based lenders will finance
              community development projects without tax credits. However, LIHTC
              and tax-exempt bonds are central to most larger affordable
              multifamily deals.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is this financing only for nonprofits?</h4>
            <p>
              No. Many for-profit developers actively participate in affordable
              housing, especially when paired with experienced nonprofit
              partners or strong tax-credit credentials. Experience and
              execution capability matter more than nonprofit status alone.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Can these loans be used for preservation of existing affordable
              housing?
            </h4>
            <p>
              Yes. Preservation and rehabilitation of older affordable
              properties is a major part of the market and often involves both
              debt and tax-credit equity.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Build a complete capital stack (including soft sources),
              demonstrate relevant sponsor experience, and present realistic
              projections under restricted rents. Then approach lenders and
              agencies active in affordable and community development finance.
              The free guide on this page and the K2 Lender-Ready System can
              help you organize the process.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
