import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Contact K2 Commercial Finance | Lender-Ready.com",
  description:
    "Have a commercial real estate or business financing project in mind? Reach out to K2 Commercial Finance and get matched with lenders suited to your deal.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>Maximize Your Financing Success</h1>
        </div>
      </div>
      <main className="wrap">
        <div className="intro">
          <p>
            Partner with a team that delivers more than just capital — we drive
            results. From borrower education and preparation to competitive
            terms and ongoing support, we deliver outcomes that create lasting
            value.
          </p>
          <p>
            Share your information today and discover how K2 Commercial Finance
            can support your business financing goals.
          </p>
        </div>
        <section className="block">
          <h2>Get In Touch</h2>
          <div className="contact-card">
            <ContactForm />
          </div>
        </section>
        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/property-types">Property Types</Link>{" "}
            <Link href="/loan-programs">Loan Programs</Link>{" "}
            <Link href="/about">About</Link> <Link href="/">Homepage</Link>
          </div>
        </section>
      </main>
    </>
  );
}
