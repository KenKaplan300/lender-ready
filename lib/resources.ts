import { createServiceRoleClient } from "@/lib/supabase-server";

/*
 * Data access for the Resources page (Videos, Articles, Third-Party
 * Tools). Reads the same `content` and `resources` tables as
 * k2commercialfinance's Supabase project — this site only ever reads
 * published, public rows; authoring stays in k2's admin panel.
 */

export type ContentItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: "video" | "article";
  video_url: string | null;
  article_content: string | null;
  thumbnail_url: string | null;
  category: string;
  view_count: number;
  created_at: string;
};

export type ToolResource = {
  id: string;
  title: string;
  description: string;
  type: "video" | "pdf" | "link" | "image";
  url: string | null;
  file_url: string | null;
  sort_order: number;
};

export async function getPublishedContent(
  type?: "video" | "article",
): Promise<ContentItem[]> {
  try {
    const supabase = createServiceRoleClient();
    let query = supabase
      .from("content")
      .select(
        "id, title, slug, description, type, video_url, article_content, thumbnail_url, category, view_count, created_at",
      )
      .eq("is_published", true)
      .eq("access_level", "public")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (type) {
      query = query.eq("type", type);
    }

    const { data, error } = await query;
    if (error) throw error;
    return (data ?? []) as ContentItem[];
  } catch (error) {
    console.error("getPublishedContent error:", error);
    return [];
  }
}

export async function getContentBySlug(
  slug: string,
): Promise<ContentItem | null> {
  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("content")
      .select(
        "id, title, slug, description, type, video_url, article_content, thumbnail_url, category, view_count, created_at",
      )
      .eq("slug", slug)
      .eq("is_published", true)
      .eq("access_level", "public")
      .maybeSingle();

    if (error) throw error;
    return (data as ContentItem) ?? null;
  } catch (error) {
    console.error("getContentBySlug error:", error);
    return null;
  }
}

export async function getPublishedTools(): Promise<ToolResource[]> {
  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("resources")
      .select("id, title, description, type, url, file_url, sort_order")
      .eq("is_published", true)
      .eq("access_level", "public")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) throw error;
    return (data ?? []) as ToolResource[];
  } catch (error) {
    console.error("getPublishedTools error:", error);
    return [];
  }
}
