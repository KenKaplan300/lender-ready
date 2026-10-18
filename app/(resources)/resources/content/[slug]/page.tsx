import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { getContentBySlug } from "@/lib/resources";
import { toYouTubeEmbedUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentBySlug(slug);

  if (!item) {
    return pageMetadata({
      title: "Resource Not Found | Lender-Ready.com",
      description: "This resource could not be found.",
      path: `/resources/content/${slug}`,
    });
  }

  return pageMetadata({
    title: `${item.title} | Lender-Ready.com Resources`,
    description: item.description,
    path: `/resources/content/${item.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = await getContentBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="wrap">
      <div style={{ paddingTop: "40px" }}>
        <Link href="/resources">← Back to Resources</Link>
      </div>
      <div className="resource-detail-head">
        <span className="resource-category">{item.category}</span>
        <h1>{item.title}</h1>
        <p className="description">{item.description}</p>
      </div>

      {item.type === "video" && item.video_url ? (
        <div className="video-frame">
          <iframe
            src={toYouTubeEmbedUrl(item.video_url)}
            allowFullScreen
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      ) : item.type === "article" && item.article_content ? (
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: item.article_content }}
        />
      ) : (
        <p className="empty-state">This resource will be available soon.</p>
      )}

      <section className="block">
        <h2>Related</h2>
        <div className="related-list">
          <Link href="/resources">More Resources</Link>{" "}
          <Link href="/about">About</Link>{" "}
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </main>
  );
}
