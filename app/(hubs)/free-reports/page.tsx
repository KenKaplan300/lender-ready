import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Free Financing Reports & Guides | Lender-Ready.com",
  description:
    "Browse all 57 free financing reports and guides on Lender-Ready.com, organized by property type and loan program, each built to show lenders you're prepared.",
  path: "/free-reports",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>Free Financing Reports & Guides</h1>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Every property type and loan program page on this site offers its
            own free downloadable report — not generic advice, but a focused
            breakdown of the market outlook, the metrics lenders actually check,
            and the practical framework for getting that specific type of deal
            approved.
          </p>
          <p>
            This page indexes all 57 of them in one place. Find your property
            type or loan program below, and you'll land on its page, where the
            free report is waiting — no cost, no obligation.
          </p>
        </div>
        <section className="block">
          <h2>Why Start With a Report</h2>
          <p>
            Generic financing advice treats every deal the same way, but lenders
            don't. A funeral home, a data center, and a 4-unit fix-and-flip are
            underwritten by completely different criteria, against completely
            different benchmarks, by completely different lenders.
          </p>
          <p>
            Each report on this site is written for one specific property type
            or loan program — so instead of general encouragement to "get your
            documents in order," you get the actual metrics, red flags, and
            preparation steps that matter for your deal.
          </p>
        </section>
        <section className="block">
          <h2>What's Inside Every Report</h2>
          <p>Every report on this site follows the same practical structure:</p>
          <ul className="dot">
            <li>
              The current market outlook for that specific property type or loan
              program
            </li>
            <li>
              The key metrics and documentation lenders actually check before
              saying yes
            </li>
            <li>
              A practical framework for presenting your deal the way lenders
              want to see it
            </li>
            <li>
              A closing reference to the tools and lender relationships that can
              move your deal faster
            </li>
          </ul>
          <p>
            No cost, no obligation — just the information you need to move
            forward with clear eyes.
          </p>
        </section>
        <section className="block">
          <h2>Browse All 57 Free Reports & Guides</h2>
          <h3 className="group-heading">
            Property Type Reports — Residential & Housing
          </h3>
          <div className="browse-list">
            <Link href="/1-4-unit-fix-and-flip">
              1-4 Unit Fix and Flip Financing Report
            </Link>{" "}
            <Link href="/1-4-unit-ground-up-construction">
              1-4 Unit Ground-Up Construction Financing Report
            </Link>{" "}
            <Link href="/1-4-unit-bridge-loans">
              1-4 Unit Residential Bridge Loan Report
            </Link>{" "}
            <Link href="/1-4-unit-investment-property">
              1-4 Unit Residential Investment Property Financing Report
            </Link>{" "}
            <Link href="/residential-portfolio">
              Residential Portfolio Financing Report
            </Link>{" "}
            <Link href="/5-plus-unit-residential">
              5+ Unit Residential Financing Report
            </Link>{" "}
            <Link href="/multifamily-financing">
              Multifamily Financing Report
            </Link>{" "}
            <Link href="/condominium-financing">
              Condominium Financing Report
            </Link>{" "}
            <Link href="/student-housing-financing">
              Student Housing Financing Report
            </Link>{" "}
            <Link href="/mobile-home-park-financing">
              Mobile Home Park Financing Report
            </Link>{" "}
            <Link href="/assisted-living-financing">
              Assisted Living & Senior Housing Financing Report
            </Link>
          </div>
          <h3 className="group-heading">
            Property Type Reports — Commercial & Specialized
          </h3>
          <div className="browse-list">
            <Link href="/agricultural-financing">
              Agricultural Property Financing Report
            </Link>{" "}
            <Link href="/auto-dealership-financing">
              Auto Dealership Financing Report
            </Link>{" "}
            <Link href="/auto-repair-financing">
              Auto Repair Shop Financing Report
            </Link>{" "}
            <Link href="/cannabis-financing">
              Cannabis Property Financing Report
            </Link>{" "}
            <Link href="/car-wash-financing">Car Wash Financing Report</Link>{" "}
            <Link href="/data-center-financing">
              Data Center Financing Report
            </Link>{" "}
            <Link href="/daycare-financing">
              Day Care & Child Care Financing Report
            </Link>{" "}
            <Link href="/dental-office-financing">
              Dental Office Financing Report
            </Link>{" "}
            <Link href="/event-venue-financing">
              Event Venue Financing Report
            </Link>{" "}
            <Link href="/funeral-home-financing">
              Funeral Home Financing Report
            </Link>{" "}
            <Link href="/gas-station-financing">
              Gas Station Financing Report
            </Link>{" "}
            <Link href="/golf-course-financing">
              Golf Course Financing Report
            </Link>{" "}
            <Link href="/hotel-financing">
              Hotel & Hospitality Financing Report
            </Link>{" "}
            <Link href="/land-financing">Land Financing Report</Link>{" "}
            <Link href="/laundromat-financing">
              Laundromat Financing Report
            </Link>{" "}
            <Link href="/light-industrial-warehouse">
              Light Industrial & Warehouse Financing Report
            </Link>{" "}
            <Link href="/manufacturing-financing">
              Manufacturing Financing Report
            </Link>{" "}
            <Link href="/marina-financing">Marina Financing Report</Link>{" "}
            <Link href="/medical-office-financing">
              Medical Office & Healthcare Financing Report
            </Link>{" "}
            <Link href="/mixed-use-financing">
              Mixed-Use Property Financing Report
            </Link>{" "}
            <Link href="/office-building-financing">
              Office Building Financing Report
            </Link>{" "}
            <Link href="/religious-church-financing">
              Religious & Church Property Financing Report
            </Link>{" "}
            <Link href="/restaurant-financing">
              Restaurant Financing Report
            </Link>{" "}
            <Link href="/retail-financing">Retail Financing Report</Link>{" "}
            <Link href="/rv-park-financing">RV Park Financing Report</Link>{" "}
            <Link href="/self-storage-financing">
              Self-Storage Financing Report
            </Link>{" "}
            <Link href="/special-purpose-financing">
              Special Purpose Property Financing Report
            </Link>{" "}
            <Link href="/veterinary-clinic-financing">
              Veterinary Financing Report
            </Link>{" "}
            <Link href="/vineyard-financing">Vineyard Financing Report</Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Long-Term / Permanent Financing
          </h3>
          <div className="browse-list">
            <Link href="/long-term-commercial-mortgages">
              Long-Term Commercial Mortgage Guide
            </Link>{" "}
            <Link href="/fannie-mae-freddie-mac">
              Fannie Mae & Freddie Mac Multifamily Loan Guide
            </Link>{" "}
            <Link href="/cmbs-loans">CMBS Loan Guide</Link>{" "}
            <Link href="/hud-223f">HUD 223(f) Loan Guide</Link>{" "}
            <Link href="/triple-net-financing">
              Triple Net / Single Tenant Financing Guide
            </Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Transitional & Value-Add
          </h3>
          <div className="browse-list">
            <Link href="/bridge-value-add-loans">
              Bridge & Value-Add Loan Guide
            </Link>{" "}
            <Link href="/commercial-bridge-loans">
              Commercial Bridge Loan Guide
            </Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Construction & Development
          </h3>
          <div className="browse-list">
            <Link href="/construction-loans">Construction Loan Guide</Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Owner-User & Small Business
          </h3>
          <div className="browse-list">
            <Link href="/owner-user-sba-loans">
              Owner-User & SBA Loan Guide
            </Link>{" "}
            <Link href="/sba-504-loans">SBA 504 Loan Guide</Link>{" "}
            <Link href="/sba-7a-loans">SBA 7(a) Loan Guide</Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Investment Property Focused
          </h3>
          <div className="browse-list">
            <Link href="/rental-investor-loans">
              Rental Property Investor Loan Guide
            </Link>{" "}
            <Link href="/dscr-loans">DSCR Loan Guide</Link>
          </div>
          <h3 className="group-heading">
            Loan Program Guides — Specialized Capital
          </h3>
          <div className="browse-list">
            <Link href="/affordable-community-development">
              Affordable & Community Development Financing Guide
            </Link>{" "}
            <Link href="/green-energy-financing">
              Green & Energy Financing Guide
            </Link>{" "}
            <Link href="/distressed-special-situation-loans">
              Distressed & Special Situation Financing Guide
            </Link>{" "}
            <Link href="/business-lines-of-credit">
              Business Line of Credit Guide
            </Link>
          </div>
        </section>
        <section className="block">
          <h2>The Cost of Skipping This Step</h2>
          <p>
            Borrowers who show up unprepared don't usually get told no outright
            — they get told "maybe," then watch their deal sit at the bottom of
            the pile while a better-prepared borrower's deal moves first.
            Skipping the research stage costs you in ways that are easy to miss:
          </p>
          <ul className="dot">
            <li>
              Approaching the wrong type of lender for your property type or
              loan program, and losing weeks waiting on a decision that was
              never coming
            </li>
            <li>
              Submitting a package missing the specific documentation your deal
              type requires, forcing a slower second pass
            </li>
            <li>
              Misjudging leverage, rate, or timeline expectations because you
              benchmarked against the wrong type of deal
            </li>
            <li>
              Losing negotiating leverage because you can't speak to how your
              deal compares to what that lender actually funds
            </li>
          </ul>
          <p>
            A free, targeted report takes a few minutes to read and heads off
            all four.
          </p>
        </section>
        <section className="block">
          <div className="k2-box">
            <div className="k2-head">
              <img src="/images/k2-logo.jpg" alt="K2 Commercial Finance" />
              <h2>How the K2 Lender-Ready System Helps</h2>
            </div>
            <p>
              If you're serious about securing financing for commercial
              property, investment property, or your business, you owe it to
              yourself to use a system that's been developed over 26 years of
              commercial mortgage brokering.
            </p>
            <p>
              This is the exact system K2 Commercial Finance has used to help
              clients secure more than $100 million in financing. It is designed
              to save you time, energy, and effort — and to put you immediately
              in front of the lenders most likely to fund your specific property
              type and loan request.
            </p>
            <div className="price">
              For $49.99, you get six months of full access to the complete K2
              Lender-Ready System — including:
            </div>
            <div className="feature-grid">
              <div className="feature">
                <b>Preferred Lender Directory</b>
                <span>
                  Curated lenders who have shown appetite for commercial real
                  estate and business loans, matched to your property type and
                  loan program.
                </span>
              </div>
              <div className="feature">
                <b>AI Prep Coach</b>
                <span>
                  Dozens of targeted prompts that help you present your
                  transaction more clearly, position yourself as a stronger
                  borrower, analyze lender offers, and negotiate with
                  confidence.
                </span>
              </div>
              <div className="feature">
                <b>Password-Protected Deal Room</b>
                <span>
                  Securely store and share documents in one private workspace.
                </span>
              </div>
              <div className="feature">
                <b>Document Library</b>
                <span>
                  A complete collection of the documents, forms, checklists, and
                  templates lenders commonly request.
                </span>
              </div>
              <div className="feature">
                <b>Submission Tracker</b>
                <span>
                  Know exactly where each file stands so nothing falls through
                  the cracks.
                </span>
              </div>
            </div>
            <p className="value-line">
              This is everything you need to package and track deals so they get
              funded faster.
            </p>
            <div className="btn-row">
              <a
                className="btn-primary"
                href="https://www.k2commercialfinance.com"
              >
                Learn More About the K2 Lender-Ready System →
              </a>{" "}
              <span className="guarantee">
                Seven-Day Ready or Refund Guarantee
              </span>
            </div>
          </div>
        </section>
        <section className="block">
          <div className="brokerage">
            <h2 style={{ border: "none", padding: "0", fontSize: "19px" }}>
              Prefer Full Brokerage Support?
            </h2>
            <p style={{ margin: "0" }}>
              If you'd rather skip the research and work directly with an
              experienced commercial mortgage team, visit
              K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/property-types">Property Types</Link>{" "}
            <Link href="/loan-programs">Loan Programs</Link>{" "}
            <Link href="/about">About</Link>{" "}
            <Link href="/contact">Contact</Link>
          </div>
        </section>
      </main>
    </>
  );
}
