import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Construction Loans: Financing New Builds and Major Redevelopments | Lender-Ready",
  description:
    "Ground-up builds and major renovations draw funds in stages, then convert to permanent debt at completion. See how construction loans work in the free guide.",
  path: "/construction-loans",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Construction Loans: Financing New Builds and Major Redevelopments
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the project
            doesn't exist yet — construction financing is built around funding
            what you're building, draw by draw, not what you already own.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Construction loans are designed for projects that do not yet exist
            in finished form — ground-up development or heavy renovation that
            requires drawing funds over time as work is completed. These are
            short-term, interest-only facilities that convert to (or are taken
            out by) permanent financing once the project is finished and
            stabilized.
          </p>
          <p>
            They are fundamentally different from permanent loans on existing
            properties and from most bridge loans on assets that already
            generate some income.
          </p>
        </div>
        <section className="block">
          <h2>What Construction Loans Are Designed For</h2>
          <p>
            Construction financing typically fits when you are building a new
            commercial or multifamily project from the ground up, or undertaking
            a major renovation or adaptive reuse that requires significant
            capital draws. Funds are advanced in stages based on inspection and
            completion of work, and the project is expected to be refinanced
            into permanent debt or sold after completion and stabilization.
            Common project types include multifamily, industrial, medical
            office, self-storage, retail, hospitality, and certain
            special-purpose developments.
          </p>
          <p>
            Because the lender is financing something that doesn't exist yet,
            the construction loan is underwritten as much to the execution risk
            of the project — the sponsor, the budget, the contractor, and the
            plan — as to the value of the finished asset.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Sponsor experience with similar construction or development
                  projects
                </li>
                <li>Quality and completeness of plans, budget, and timeline</li>
                <li>
                  Guaranteed maximum price (GMP) contract or strong cost
                  controls
                </li>
                <li>
                  Feasibility of the project and projected stabilized value or
                  income
                </li>
                <li>
                  Equity contribution and liquidity to cover cost overruns
                </li>
                <li>
                  Take-out strategy (permanent loan commitment or sale) and
                  contractor strength and experience
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Light renovations or cosmetic work that do not require staged
                  draws
                </li>
                <li>
                  Stabilized properties with no material construction component
                </li>
                <li>
                  Situations where the borrower needs long-term permanent debt
                  from day one
                </li>
                <li>
                  Projects with incomplete plans, weak budgets, or inexperienced
                  teams
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, bridge, permanent, or conventional commercial
            financing is usually more appropriate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Standalone Construction Loans — fund construction only; draws are
              advanced in stages as work is completed and inspected, and the
              loan is repaid at completion by a separate permanent take-out loan
              or a sale
            </li>
            <li>
              Construction-to-Permanent Loans — the same lender (or a related
              execution) provides both the construction financing and the
              long-term permanent debt after completion, streamlining the
              transition to stabilized ownership
            </li>
            <li>
              Draw-Based, Interest-Only Structure — funds are advanced against a
              maximum approved loan amount as construction progresses, with
              interest charged only on the amount actually drawn
            </li>
          </ul>
          <p>
            Guarantees, equity requirements, and contingency reserves are
            typically higher on construction loans than on permanent financing,
            and vary by sponsor, project type, and lender.
          </p>
        </section>
        <section className="block">
          <h2>What a Lender-Ready Package Looks Like for Construction Loans</h2>
          <ul className="check">
            <li>Detailed project budget and sources & uses</li>
            <li>Plans, specifications, and timeline</li>
            <li>Contractor information and construction contract structure</li>
            <li>Projected stabilized income and value (or sellout analysis)</li>
            <li>Sponsor development experience and financial strength</li>
            <li>Equity and liquidity documentation</li>
            <li>Market and feasibility support</li>
            <li>Take-out strategy or permanent loan interest</li>
            <li>Site control, zoning, and entitlement documentation</li>
          </ul>
          <p>
            Incomplete budgets, weak sponsor experience, or an unclear path to
            repayment are among the most common reasons construction files
            stall.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free Construction Loan Guide</h2>
            <p>
              This guide explains how construction financing works, what lenders
              scrutinize most closely, and how to position a development or
              major renovation project for approval.
            </p>
            <ReportForm
              report="construction-loans"
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
              team that already knows which construction lenders fit your
              project, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/bridge-value-add-loans">Bridge & Value-Add Loans</Link>{" "}
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Loans
            </Link>{" "}
            <Link href="/1-4-unit-ground-up-construction">
              1-4 Unit Ground-Up Construction
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              What is the difference between a construction loan and a bridge
              loan?
            </h4>
            <p>
              Construction loans are specifically structured for projects that
              require staged funding as work is completed. Bridge loans are more
              often used on existing properties that need short-term capital for
              lease-up, light renovation, or a fast close. Some facilities blend
              both characteristics.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Do construction loans convert automatically to permanent
              financing?
            </h4>
            <p>
              Sometimes. Construction-to-permanent structures exist, but many
              construction loans are pure construction facilities that require a
              separate permanent take-out or sale once the project is complete
              and stabilized.
            </p>
          </div>
          <div className="faq-item">
            <h4>How much equity do construction lenders typically require?</h4>
            <p>
              Equity requirements are usually higher than on permanent loans on
              stabilized assets. The exact amount depends on the sponsor,
              project type, market, and lender, but substantial borrower equity
              is the norm.
            </p>
          </div>
          <div className="faq-item">
            <h4>Why is the construction budget so important?</h4>
            <p>
              Lenders advance funds based on work in place. An incomplete,
              unrealistic, or poorly controlled budget increases the risk of
              cost overruns and project delays — two of the biggest concerns in
              construction lending.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Present a detailed, realistic budget and timeline, strong sponsor
              development experience, solid contractor information, and a clear
              take-out strategy. Then approach lenders who actively make
              construction loans for your property type. The free guide on this
              page and the K2 Lender-Ready System are designed to help you do
              both.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
