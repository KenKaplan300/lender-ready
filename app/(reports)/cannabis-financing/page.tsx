import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Cannabis Property Financing: What Lenders Actually Look For | Lender-Ready",
  description:
    "Cannabis property financing relies on specialty private lenders due to federal banking limits, with licensing status central to approval. Read the free report.",
  path: "/cannabis-financing",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Report Inside</span>
          <h1>Cannabis Property Financing: What Lenders Actually Look For</h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially in a sector where
            regulatory status, banking access, and lender appetite remain highly
            specialized and restricted.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Getting financing for cannabis-related real estate isn't only about
            finding a lender. It's about finding the right lender and showing up
            with a package that matches exactly what that lender wants to see.
            Good deals don't speak for themselves — especially in a sector where
            regulatory status, banking access, and lender appetite remain highly
            specialized and restricted.
          </p>
          <p>
            You do not have to depend on expensive commercial mortgage brokers
            to figure this out. The free report on this page is designed to give
            you clear, practical knowledge so you can navigate cannabis property
            financing on your own.
          </p>
        </div>
        <section className="block">
          <h2>Why Cannabis Property Financing Is Different</h2>
          <p>
            Cannabis real estate (cultivation, processing, dispensary, and
            related facilities) sits at the intersection of commercial real
            estate and a heavily regulated, still-evolving industry. Despite
            state-level legalization in many jurisdictions, federal status and
            banking regulations continue to limit the number of lenders willing
            to finance these assets.
          </p>
          <p>
            Lenders that do participate underwrite both the real estate and the
            licensed cannabis operation. They focus on licensing status,
            compliance history, local and state regulatory environment, operator
            experience, security and facility requirements, and the overall
            viability of the business. Many traditional banks, agency lenders,
            and conventional commercial mortgage sources remain inactive or
            prohibited from lending to cannabis-related businesses.
          </p>
          <p>
            As a result, the active capital sources are typically specialty
            private lenders, certain credit unions or state-chartered
            institutions in friendly jurisdictions, and a limited number of
            cannabis-focused debt funds.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Fully licensed operators in good standing with state and local
                  regulators
                </li>
                <li>
                  Experienced management teams with a track record in cannabis
                  or highly regulated industries
                </li>
                <li>
                  Properties that meet security, zoning, and operational
                  requirements for the licensed use
                </li>
                <li>
                  Clear, transparent financial reporting and compliance
                  documentation
                </li>
                <li>Conservative leverage and strong cash-flow coverage</li>
                <li>
                  Locations in established, stable regulatory environments
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Applicants without active, transferable licenses or with
                  compliance issues
                </li>
                <li>
                  Inexperienced operators or pure real-estate plays without a
                  strong operating partner
                </li>
                <li>
                  Properties that do not meet current security or regulatory
                  facility standards
                </li>
                <li>Thin cash flow or aggressive growth assumptions</li>
                <li>
                  Jurisdictions with uncertain or rapidly changing regulatory
                  frameworks
                </li>
              </ul>
            </div>
          </div>
          <p>
            Specialty private lenders, cannabis-focused debt funds, and a
            limited number of mission-oriented or state-level institutions are
            the primary active sources. Most conventional commercial banks,
            CMBS, agency, and life company lenders do not participate.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              Specialty private / hard-money style loans for cannabis real
              estate
            </li>
            <li>Cannabis-focused debt funds and private credit</li>
            <li>
              Select credit union or state-chartered institution programs
              (jurisdiction-dependent)
            </li>
            <li>
              Short-term bridge or acquisition financing from specialty lenders
            </li>
            <li>
              In limited cases, certain equipment or tenant-improvement
              structures
            </li>
          </ul>
          <p>
            SBA, conventional bank permanent loans, CMBS, Fannie Mae/Freddie
            Mac, and most traditional commercial mortgage programs are generally
            unavailable for cannabis-related assets.
          </p>
        </section>
        <section className="block">
          <h2>What “Lender-Ready” Looks Like for Cannabis Properties</h2>
          <ul className="check">
            <li>
              Active state and local cannabis licenses and compliance history
            </li>
            <li>Detailed business financials and operating history</li>
            <li>
              Security plans, facility descriptions, and evidence the property
              meets regulatory requirements
            </li>
            <li>Zoning and land-use confirmation for cannabis use</li>
            <li>Operator experience and management team background</li>
            <li>Market and competitive context for the licensed operation</li>
            <li>Entity documents and ownership structure</li>
            <li>Liquidity, reserves, and guarantor information</li>
            <li>Clear use of proceeds and exit or refinance plan</li>
            <li>
              Access to direct lenders currently active in funding
              cannabis-related real estate
            </li>
          </ul>
          <p>
            Missing or incomplete licensing documentation, weak compliance
            history, or submitting to conventional lenders that cannot finance
            cannabis assets are among the most common reasons these requests
            fail to progress.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free Cannabis Property Financing Report</h2>
            <p>
              This report gives you a clear overview of the specialized lending
              landscape for cannabis real estate, what active lenders actually
              evaluate, and the practical steps that improve the odds of
              securing financing in this restricted sector. It is written to
              help you move forward independently.
            </p>
            <ReportForm
              report="cannabis-financing"
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
              team that already knows which specialized lenders are active in
              cannabis property financing, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related Pages</h2>
          <div className="related-list">
            <Link href="/special-purpose-financing">
              Special Purpose Financing
            </Link>{" "}
            <Link href="/light-industrial-warehouse">
              Light Industrial / Warehouse
            </Link>{" "}
            <Link href="/retail-financing">Retail Financing</Link>{" "}
            <Link href="/medical-office-financing">
              Medical Office / Healthcare Financing
            </Link>{" "}
            <Link href="/bridge-value-add-loans">Bridge & Value-Add Loans</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>Why is cannabis real estate financing so limited?</h4>
            <p>
              Despite state-level legalization in many places, federal
              regulations and banking rules continue to restrict most
              traditional lenders from financing cannabis-related businesses and
              properties. Only a relatively small group of specialty lenders
              actively participates.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Can I use an SBA loan or conventional bank loan for a cannabis
              property?
            </h4>
            <p>
              In almost all cases, no. SBA programs and the vast majority of
              conventional banks do not finance cannabis-related businesses or
              real estate.
            </p>
          </div>
          <div className="faq-item">
            <h4>What do specialty cannabis lenders care about most?</h4>
            <p>
              Active, compliant licensing, operator experience, facility
              security and regulatory suitability, transparent financials, and
              conservative leverage. Licensing and compliance status are
              foundational.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is the real estate or the cannabis license more important?</h4>
            <p>
              Both are critical. Lenders need confidence in the licensed
              operation and in the property's ability to support that licensed
              use. A strong property with weak or non-compliant licensing (or
              vice versa) is unlikely to be financeable.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Ensure all licenses are active and in good standing, prepare
              complete operating and compliance documentation, and approach only
              lenders that explicitly finance cannabis-related real estate. The
              free report on this page and the K2 Lender-Ready System are
              designed to help you identify and prepare for those specialized
              sources.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
