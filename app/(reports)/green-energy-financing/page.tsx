import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import K2SystemBox from "@/components/K2SystemBox";
import Link from "next/link";
import ReportForm from "@/components/ReportForm";

export const metadata: Metadata = pageMetadata({
  title:
    "Green & Energy Financing: Capital for Efficiency, Sustainability, and Clean Energy Upgrades | Lender-Ready",
  description:
    "C-PACE and green agency loans fund efficiency retrofits and solar upgrades, often repaid through the projected energy savings. Get the free financing guide.",
  path: "/green-energy-financing",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Free Financing Guide Inside</span>
          <h1>
            Green & Energy Financing: Capital for Efficiency, Sustainability,
            and Clean Energy Upgrades
          </h1>
          <p className="tagline">
            Good deals don't speak for themselves. Especially when the repayment
            story includes energy savings — green and energy financing is
            purpose-built to treat efficiency and clean-energy generation as
            real, underwritable value.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Green and energy financing is designed for commercial properties
            that are making energy-efficiency improvements, installing clean
            energy systems, or pursuing sustainability upgrades that reduce
            operating costs and environmental impact. These programs often offer
            longer repayment terms, specialized underwriting, or unique
            structures that are not available through conventional commercial
            mortgages.
          </p>
          <p>
            They are not simply "regular loans for green buildings." Many are
            purpose-built tools that treat energy savings or renewable
            generation as part of the repayment story.
          </p>
        </div>
        <section className="block">
          <h2>What Green & Energy Financing Is Designed For</h2>
          <p>
            This category typically fits when the project involves
            energy-efficiency retrofits (HVAC, lighting, building envelope,
            controls, and similar), when solar or other renewable energy systems
            are being added to a commercial or multifamily property, or when the
            owner wants to finance improvements based in part on projected
            energy savings. It also fits properties pursuing green
            certifications or meeting investor/lender sustainability
            requirements, or where a specialized structure such as C-PACE suits
            the scope of work. Common property types include office,
            multifamily, industrial, retail, hospitality, and institutional
            buildings.
          </p>
          <p>
            Because the analysis blends traditional credit review with technical
            energy performance, the credibility of the scope of work and the
            strength of the projected savings or generation matter as much as
            the sponsor's financial profile.
          </p>
        </section>
        <section className="block">
          <h2>What Lenders Typically Like (or Avoid)</h2>
          <div className="two-col">
            <div className="card like">
              <h3>Lenders Like</h3>
              <ul>
                <li>
                  Scope and credibility of the energy-improvement or solar scope
                  of work
                </li>
                <li>
                  Projected energy savings or generation (often supported by an
                  energy audit or engineering report)
                </li>
                <li>
                  Property value and existing debt structure (especially
                  important for C-PACE)
                </li>
                <li>Sponsor experience and financial strength</li>
                <li>Contractor and equipment quality</li>
                <li>
                  How the green financing interacts with existing mortgages
                  (lender consent is often required for C-PACE)
                </li>
              </ul>
            </div>
            <div className="card avoid">
              <h3>Lenders Avoid / Scrutinize</h3>
              <ul>
                <li>
                  Projects with no meaningful energy or sustainability component
                </li>
                <li>
                  Situations where a simple conventional loan is faster and
                  sufficient
                </li>
                <li>
                  Properties where existing lenders will not consent to a C-PACE
                  assessment
                </li>
                <li>
                  Very small scopes of work that do not justify specialized
                  program costs
                </li>
              </ul>
            </div>
          </div>
          <p>
            In those cases, standard permanent, bridge, or equipment financing
            may be more practical.
          </p>
        </section>
        <section className="block">
          <h2>Common Loan Programs That Fit</h2>
          <ul className="plain">
            <li>
              C-PACE Financing — Commercial Property Assessed Clean Energy; a
              long-term financing tool that funds energy efficiency, renewable
              energy, and certain resilience improvements, repaid as a special
              assessment on the property tax bill
            </li>
            <li>
              Green Agency Loans — Fannie Mae, Freddie Mac, and other agency
              offerings that provide preferential pricing or enhanced terms for
              energy-efficient and green multifamily properties
            </li>
            <li>
              Solar + CRE Financing — structures that integrate solar
              installation costs into property-level or specialized clean-energy
              financing
            </li>
            <li>
              Other green and efficiency programs — utility-backed, state, or
              lender-specific products that support efficiency upgrades and
              sustainability improvements
            </li>
          </ul>
          <p>
            These tools can sometimes be combined with conventional permanent or
            bridge debt.
          </p>
        </section>
        <section className="block">
          <h2>
            What a Lender-Ready Package Looks Like for Green & Energy Financing
          </h2>
          <ul className="check">
            <li>
              Detailed scope of work and cost estimate for the energy or solar
              improvements
            </li>
            <li>
              Energy audit, feasibility study, or production estimates (as
              applicable)
            </li>
            <li>Information on existing property debt and lender(s)</li>
            <li>Property financials and basic valuation support</li>
            <li>Sponsor financial strength and experience</li>
            <li>Contractor and equipment information</li>
            <li>
              Clear explanation of how the green financing fits into the overall
              capital structure
            </li>
          </ul>
          <p>
            For C-PACE, existing lender consent and confirmation that the
            assessment can be placed are critical path items.
          </p>
        </section>
        <section className="block">
          <div className="cta-box">
            <h2>Download the Free Green & Energy Financing Guide</h2>
            <p>
              This guide explains how C-PACE, green agency loans, and
              solar-related commercial financing work, and what property owners
              can do to position efficiency and clean-energy projects for
              approval.
            </p>
            <ReportForm
              report="green-energy-financing"
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
              team that already understands green and energy financing options,
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
            <Link href="/multifamily-financing">Multifamily Financing</Link>{" "}
            <Link href="/office-building-financing">
              Office Building Financing
            </Link>{" "}
            <Link href="/loan-programs">Loan Programs Hub</Link>
          </div>
        </section>
        <section className="block">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>
              What is C-PACE and how is it different from a regular commercial
              loan?
            </h4>
            <p>
              C-PACE (Commercial Property Assessed Clean Energy) is a financing
              structure in which the cost of eligible energy and related
              improvements is repaid as a special assessment on the property tax
              bill. It is typically long-term, stays with the property upon
              sale, and often requires consent from existing mortgage lenders.
            </p>
          </div>
          <div className="faq-item">
            <h4>Do green loans always offer better rates?</h4>
            <p>
              Not always, but many green agency and specialized programs offer
              preferential pricing, higher leverage, or other benefits for
              properties that meet energy or sustainability criteria.
            </p>
          </div>
          <div className="faq-item">
            <h4>
              Can I combine green financing with a conventional permanent loan?
            </h4>
            <p>
              Yes. C-PACE and certain other green tools are frequently used
              alongside senior mortgage debt, provided the existing lender
              consents where required.
            </p>
          </div>
          <div className="faq-item">
            <h4>Is an energy audit required?</h4>
            <p>
              For many C-PACE and efficiency-focused programs, some form of
              energy analysis or audit is required or strongly preferred to
              support the projected savings.
            </p>
          </div>
          <div className="faq-item">
            <h4>How can I improve my chances of getting approved?</h4>
            <p>
              Prepare a clear scope of work, credible energy or production
              estimates, and a clean picture of existing property debt, then
              approach lenders and program administrators who actively handle
              green and energy financing. The free guide on this page and the K2
              Lender-Ready System are designed to help you organize the process.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
