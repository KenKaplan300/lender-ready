import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getPublishedTools } from "@/lib/resources";
import { ResourceTabs } from "@/components/resources/ResourceTabs";
import { ToolGrid } from "@/components/resources/ResourceGrids";

export const metadata: Metadata = pageMetadata({
  title: "Third-Party Tools for Commercial Borrowers | Lender-Ready.com",
  description:
    "Curated third-party tools, calculators, and partner resources to help you prepare and submit a stronger commercial financing package.",
  path: "/resources/third-party-tools",
});

export default async function Page() {
  const tools = await getPublishedTools();

  return (
    <>
      <div className="hero">
        <div className="wrap">
          <h1>Resource Library</h1>
          <p className="tagline">
            Free videos, articles, and curated tools to help you navigate
            commercial financing with confidence.
          </p>
        </div>
      </div>
      <main className="wrap">
        <ResourceTabs active="tools" />

        <section className="block">
          <h2>Third-Party Tools</h2>
          <ToolGrid items={tools} />
        </section>

        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/resources/videos">Videos</Link>{" "}
            <Link href="/resources/articles">Articles</Link>{" "}
            <Link href="/contact">Contact</Link>
          </div>
        </section>
      </main>
    </>
  );
}
