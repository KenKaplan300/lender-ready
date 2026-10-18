import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getPublishedContent, getPublishedTools } from "@/lib/resources";
import { ResourceTabs } from "@/components/resources/ResourceTabs";
import {
  VideoGrid,
  ArticleGrid,
  ToolGrid,
} from "@/components/resources/ResourceGrids";

export const metadata: Metadata = pageMetadata({
  title: "Resources: Videos, Articles & Third-Party Tools | Lender-Ready.com",
  description:
    "Free videos, articles, and curated third-party tools to help you understand commercial financing and get your deal lender-ready.",
  path: "/resources",
});

export default async function Page() {
  const [videos, articles, tools] = await Promise.all([
    getPublishedContent("video"),
    getPublishedContent("article"),
    getPublishedTools(),
  ]);

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
        <ResourceTabs active="all" />

        <section className="block">
          <h2>Videos</h2>
          <VideoGrid items={videos} />
        </section>

        <section className="block">
          <h2>Articles</h2>
          <ArticleGrid items={articles} />
        </section>

        <section className="block">
          <h2>Third-Party Tools</h2>
          <ToolGrid items={tools} />
        </section>

        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/about">About</Link>{" "}
            <Link href="/property-types">Property Types</Link>{" "}
            <Link href="/loan-programs">Loan Programs</Link>{" "}
            <Link href="/contact">Contact</Link>
          </div>
        </section>
      </main>
    </>
  );
}
