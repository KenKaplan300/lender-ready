import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Lender-Ready.com | Stop Chasing the Wrong Lenders",
  description:
    "Lender-Ready.com pairs your property type and loan program with active lenders, offering free targeted reports and the K2 Lender-Ready System to help you close.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>Stop Chasing the Wrong Lenders</h1>
          <p className="tagline">
            Get Lender-Ready. Good deals don't speak for themselves.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p className="section-lede">
            You've arrived at a site built to help you get the best possible
            financing for whatever commercial real estate or business financing
            challenge you're facing.
          </p>
          <p className="section-lede">
            The information here is designed to help you present yourself as the
            kind of borrower lenders want to work with — someone who fully
            understands the property type they're financing and the loan
            programs that actually fit their situation.
          </p>
          <p className="section-lede">
            Our goal is to arm you with everything you need to attract financing
            on your own, without paying the high cost of a loan broker. That
            includes showing you how to get directly in touch with the lenders
            actually looking to fund deals like yours — not a blind internet
            search that dumps you into a generic lender directory, mismatched
            and misguided from the start.
          </p>
          <p className="section-lede">
            Becoming Lender-Ready is the most direct route between where you are
            now and the financing you're looking for.
          </p>
        </div>
        <section className="block">
          <h2>Find Your Starting Point</h2>
          <p>
            Start by identifying your property type. Then look at the loan
            programs that may be appropriate for your specific situation.
          </p>
          <div className="start-grid">
            <Link className="start-card" href="/property-types">
              <h3>Browse by Property Type</h3>
              <p>
                From 1-4 unit residential to self-storage, medical office,
                hotels, and dozens of specialized asset classes.
              </p>
              <span className="arrow">Browse pages →</span>{" "}
            </Link>{" "}
            <Link className="start-card" href="/loan-programs">
              <h3>Browse by Loan Program</h3>
              <p>
                SBA 504 and 7(a), bridge loans, CMBS, DSCR, construction, and
                more.
              </p>
              <span className="arrow">Browse pages →</span>{" "}
            </Link>
          </div>
          <p>
            Every page is short, specific, and tells you exactly what lenders
            look for in that niche.
          </p>
        </section>
        <section className="block">
          <h2>What "Lender-Ready" Actually Means</h2>
          <p>
            Being Lender-Ready isn't about having good credit or a good deal,
            though both help. It comes down to three things:
          </p>
          <ol className="numbered">
            <li>
              <b>
                Understanding your property type — and how lenders underwrite
                it.
              </b>{" "}
              Every property type gets evaluated differently. Know what lenders
              will focus on and what documentation they're likely to require
              before you ever submit.
            </li>
            <li>
              <b>
                Identifying the right loan program for your specific situation.
              </b>{" "}
              The best fit depends on transaction size, prior experience,
              borrower strength, speed requirements, location, and other
              specific factors — not just the type of property.
            </li>
            <li>
              <b>
                Targeting the right lenders with a properly prepared loan
                submission package.
              </b>{" "}
              Active in your niche, presented with exactly what they need to say
              yes quickly.
            </li>
          </ol>
          <p>
            Get all three right, and financing moves fast. Get any one wrong,
            and even a strong deal stalls.
          </p>
        </section>
        <section className="block">
          <h2>Your Deal Is Competing With Every Other Deal</h2>
          <p>
            Your transaction isn't reviewed in isolation. It's competing with
            every other deal a lender is looking at that week.
          </p>
          <p>
            When you submit a Lender-Ready transaction, you grab that lender's
            attention right away. You show that you're knowledgeable and that
            you'll be easy to work with. You're giving them the information they
            need to quickly understand your transaction — and that keeps your
            deal moving fast and near the top of the stack.
          </p>
          <p>
            That edge starts with knowing exactly who to approach. If you don't
            already know three specific lenders who'd be genuinely interested in
            funding your project — given its property type, loan size, location,
            and every other specific parameter — you're leaving that edge on the
            table.
          </p>
          <p>
            The free reports on this site are built to close that gap. Each one
            educates you on both your property type and the loan programs that
            fit it, and on how lenders are actually going to evaluate your
            transaction — so you're not guessing who to approach or what they're
            looking for.
          </p>
        </section>
        <section className="block">
          <h2>Free, Targeted Financing Reports</h2>
          <p>
            Every property type and loan program page on this site offers its
            own free downloadable report — not generic advice, but a focused
            breakdown of the market outlook, the metrics lenders actually check,
            and the practical framework for getting that specific type of deal
            approved.
          </p>
          <p>
            No cost. No obligation. Just the information you need to move
            forward with clear eyes.
          </p>
        </section>
        <section className="block">
          <div className="k2-box">
            <div className="k2-head">
              <img src="/images/k2-logo.jpg" alt="K2 Commercial Finance" />
              <h2>How the K2 Lender-Ready System Helps</h2>
            </div>
            <p>
              High-level knowledge is valuable — but it isn't the whole job.
              Even well-informed borrowers still need access to lenders who are
              actively funding their specific deal, and a package prepared the
              way those lenders expect to see it.
            </p>
            <p>
              The K2 Lender-Ready System was built over 26 years of commercial
              mortgage brokering and has been used to help clients secure more
              than $100 million in financing.
            </p>
            <div className="price">
              For $49.99, you get six months of full access — including:
            </div>
            <div className="feature-grid">
              <div className="feature">
                <b>Preferred Lender Directory</b>
                <span>
                  Curated lenders matched to your property type and loan
                  program.
                </span>
              </div>
              <div className="feature">
                <b>AI Prep Coach</b>
                <span>
                  Targeted prompts to help you present your deal, position
                  yourself as a stronger borrower, and negotiate with
                  confidence.
                </span>
              </div>
              <div className="feature">
                <b>Password-Protected Deal Room</b>
                <span>A private workspace to store and share documents.</span>
              </div>
              <div className="feature">
                <b>Document Library</b>
                <span>
                  The forms, checklists, and templates lenders commonly request.
                </span>
              </div>
              <div className="feature">
                <b>Submission Tracker</b>
                <span>Know exactly where each file stands.</span>
              </div>
            </div>
            <p className="value-line">
              For less than the cost of a dinner out, you get access to
              resources that can save you months of time, increase your chances
              of a successful close, and potentially save you tens of thousands
              of dollars over the life of your loan.
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
              If you'd rather work directly with an experienced commercial
              mortgage team, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/property-types">Property Types</Link>{" "}
            <Link href="/loan-programs">Loan Programs</Link>{" "}
            <Link href="/free-reports">Free Reports Index</Link>
          </div>
        </section>
      </main>
    </>
  );
}
