/**
 * Cut text to at most `maxLength` characters, breaking on the last whole
 * word so cards built from it stay a predictable size regardless of how
 * long the source title/description is.
 */
export function truncate(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

/**
 * Convert any YouTube URL (watch, short, embed, etc.) into a proper embed URL
 * with minimal branding parameters. Returns the original URL unchanged if it
 * is not a recognised YouTube link.
 */
export function toYouTubeEmbedUrl(url: string): string {
  if (!url) return url;

  let videoId: string | null = null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1]?.split(/[?/]/)[0] ?? null;
      } else if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1]?.split(/[?/]/)[0] ?? null;
      } else if (parsed.pathname.startsWith("/v/")) {
        videoId = parsed.pathname.split("/v/")[1]?.split(/[?/]/)[0] ?? null;
      }
    } else if (host === "youtu.be") {
      videoId = parsed.pathname.slice(1).split(/[?/]/)[0] ?? null;
    }
  } catch {
    return url;
  }

  if (!videoId) return url;

  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
}
