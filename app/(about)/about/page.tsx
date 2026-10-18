import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "About Lender-Ready.com | K2 Commercial Finance",
  description:
    "K2 Commercial Finance built Lender-Ready.com to teach borrowers how lenders think, drawing on 26 years and over $100 million in closed financing.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>About Lender-Ready.com</h1>
          <p className="tagline">
            The mission, the method, and the people behind this site.
          </p>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p className="section-lede">
            If you're looking to purchase or refinance commercial real estate,
            or find financing for your business, you're probably discovering
            it's not as straightforward as it should be. Most people in this
            position aren't short on ambition — they're short on knowing how the
            process actually works: what lenders look for, which loan programs
            fit their situation, and how to put together a package that gets
            taken seriously. Lender-Ready.com exists to teach you that, property
            type by property type and loan program by loan program, at no cost
            and no obligation.
          </p>
          <p className="section-lede">
            We built this site because K2 Commercial Finance has always been an
            education-forward brokerage. Teaching borrowers how to navigate
            commercial finance isn't a side project for us — it's entirely
            consistent with our mission and our history. We want you to succeed,
            whether that means using what you learn here on your own or
            eventually working with us directly.
          </p>
        </div>
        <section className="block">
          <h2>Why We Built This</h2>
          <p>
            Too many good deals stall or fail not because the opportunity is
            weak, but because the submission package is incomplete,
            disorganized, or sent to the wrong lenders at the wrong time.
            Lenders are busy. A professional, Lender-Ready package stands out
            and moves faster — and getting there starts with understanding your
            property type or loan program the way a lender does, not the way a
            generic calculator does.
          </p>
        </section>
        <section className="block">
          <h2>Who's Behind Lender-Ready.com</h2>
          <p>
            Lender-Ready.com is built and maintained by K2 Commercial Finance, a
            commercial mortgage brokerage that has helped clients close deals
            since 2001.
          </p>
          <p>In the founder's own words:</p>
          <blockquote className="founder-quote">
            <p>
              “With over 26 years as a commercial mortgage specialist, I've seen
              firsthand what works — and what wastes time. I built K2 Commercial
              Finance to give borrowers a better way forward: one grounded in
              real preparation, sound strategy, lender insight, and practical
              execution. Our goal is simple — help you present professionally,
              align with the right capital sources, and close with confidence.”
            </p>
            <cite>— Ken Kaplan, Founder, K2 Commercial Finance</cite>
          </blockquote>
          <p>
            Ken has spent over 26 years navigating commercial loans across
            virtually every asset class — from RV and mobile home parks to
            investment properties to owner-occupied businesses — and has used
            that experience to help clients secure more than $100 million in
            financing. Lender-Ready.com and the K2 Lender-Ready System are built
            directly from what he's learned about what actually gets deals
            funded.
          </p>
        </section>
        <section className="block">
          <h2>What Makes This Different</h2>
          <p>
            What sets K2 apart is the depth of the relationships it's built —
            both with lending partners and with the borrowers it serves. In an
            era of impersonal online matching platforms, genuine
            person-to-person connections matter more than ever. Lenders trust K2
            because the deals it brings them are professionally prepared and
            well-matched. Borrowers trust K2 because their financing goals are
            treated with the respect and attention they deserve.
          </p>
          <p>A few things you can count on:</p>
          <ol className="numbered">
            <li>
              <b>Preparation-First Philosophy.</b> Getting truly Lender-Ready
              before outreach ever begins.
            </li>
            <li>
              <b>Practical Expertise.</b> 26 years navigating commercial loans
              across virtually every asset class.
            </li>
            <li>
              <b>Relationship-Driven.</b> Established lender connections that
              create real advantages for qualified borrowers.
            </li>
            <li>
              <b>No Hype, Just Results.</b> Straightforward guidance, clear
              expectations, and tools built for real-world execution.
            </li>
          </ol>
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
              If you'd rather work directly with K2's team on your specific
              transaction, visit K2CommercialFinance.com.
            </p>
          </div>
        </section>
        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/property-types">Property Types</Link>{" "}
            <Link href="/loan-programs">Loan Programs</Link>{" "}
            <Link href="/">Homepage</Link>
          </div>
        </section>
      </main>
    </>
  );
}
