import Link from "next/link";
import type { ContentItem, ToolResource } from "@/lib/resources";
import { truncate } from "@/lib/utils";

const TITLE_MAX = 64;
const DESCRIPTION_MAX = 110;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function VideoGrid({ items }: { items: ContentItem[] }) {
  if (items.length === 0) {
    return <p className="empty-state">No videos available yet.</p>;
  }

  return (
    <div className="resource-grid">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/resources/content/${item.slug}`}
          className="resource-card"
        >
          <div className="resource-thumb">
            {item.thumbnail_url ? (
              <img src={item.thumbnail_url} alt={item.title} />
            ) : (
              "▶ Video"
            )}
            <span className="resource-type-badge">Video</span>
          </div>
          <div className="resource-card-body">
            <span className="resource-category">{item.category}</span>
            <h3>{truncate(item.title, TITLE_MAX)}</h3>
            <p>{truncate(item.description, DESCRIPTION_MAX)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ArticleGrid({ items }: { items: ContentItem[] }) {
  if (items.length === 0) {
    return <p className="empty-state">No articles available yet.</p>;
  }

  return (
    <div className="resource-grid">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/resources/content/${item.slug}`}
          className="resource-card"
        >
          <div className="resource-thumb">
            {item.thumbnail_url ? (
              <img src={item.thumbnail_url} alt={item.title} />
            ) : (
              "📄 Article"
            )}
            <span className="resource-type-badge">Article</span>
          </div>
          <div className="resource-card-body">
            <span className="resource-category">{item.category}</span>
            <h3>{truncate(item.title, TITLE_MAX)}</h3>
            <p>{truncate(item.description, DESCRIPTION_MAX)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ToolGrid({ items }: { items: ToolResource[] }) {
  if (items.length === 0) {
    return <p className="empty-state">No tools available yet.</p>;
  }

  return (
    <div className="resource-grid">
      {items.map((tool) => {
        const href = tool.file_url || tool.url || "#";
        const external = isExternal(href);
        return (
          <a
            key={tool.id}
            href={href}
            className="resource-card"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <div className="resource-thumb">
              🔗 {tool.type}
              <span className="resource-type-badge">{tool.type}</span>
            </div>
            <div className="resource-card-body">
              <h3>{truncate(tool.title, TITLE_MAX)}</h3>
              <p>{truncate(tool.description, DESCRIPTION_MAX)}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
