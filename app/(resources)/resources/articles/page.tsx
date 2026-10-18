import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getPublishedContent } from "@/lib/resources";
import { ResourceTabs } from "@/components/resources/ResourceTabs";
import { ArticleGrid } from "@/components/resources/ResourceGrids";

export const metadata: Metadata = pageMetadata({
  title: "Free Commercial Financing Articles | Lender-Ready.com",
  description:
    "Read free articles on commercial real estate and business financing, loan programs, and how to get your deal lender-ready.",
  path: "/resources/articles",
});

export default async function Page() {
  const articles = await getPublishedContent("article");

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
        <ResourceTabs active="articles" />

        <section className="block">
          <h2>Articles</h2>
          <ArticleGrid items={articles} />
        </section>

        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/resources/videos">Videos</Link>{" "}
            <Link href="/resources/third-party-tools">
              Third-Party Tools
            </Link>{" "}
            <Link href="/contact">Contact</Link>
          </div>
        </section>
      </main>
    </>
  );
}
