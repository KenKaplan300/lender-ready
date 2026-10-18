import Link from "next/link";

export type ResourceTab = "all" | "videos" | "articles" | "tools";

const TABS: { key: ResourceTab; label: string; href: string }[] = [
  { key: "all", label: "All Resources", href: "/resources" },
  { key: "videos", label: "Videos", href: "/resources/videos" },
  { key: "articles", label: "Articles", href: "/resources/articles" },
  {
    key: "tools",
    label: "Third-Party Tools",
    href: "/resources/third-party-tools",
  },
];

export function ResourceTabs({ active }: { active: ResourceTab }) {
  return (
    <nav className="resource-tabs">
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          className={t.key === active ? "active" : undefined}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
