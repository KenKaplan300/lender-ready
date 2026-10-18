import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getPublishedContent } from "@/lib/resources";
import { ResourceTabs } from "@/components/resources/ResourceTabs";
import { VideoGrid } from "@/components/resources/ResourceGrids";

export const metadata: Metadata = pageMetadata({
  title: "Free Commercial Financing Videos | Lender-Ready.com",
  description:
    "Watch free videos on commercial real estate and business financing, loan programs, and how to get your deal lender-ready.",
  path: "/resources/videos",
});

export default async function Page() {
  const videos = await getPublishedContent("video");

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
        <ResourceTabs active="videos" />

        <section className="block">
          <h2>Videos</h2>
          <VideoGrid items={videos} />
        </section>

        <section className="block">
          <h2>Related</h2>
          <div className="related-list">
            <Link href="/resources/articles">Articles</Link>{" "}
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
