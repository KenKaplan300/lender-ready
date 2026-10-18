import type { Metadata } from "next";

export const SITE_URL = "https://www.lender-ready.com";
const SITE_NAME = "Lender-Ready.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/*
 * Every page shares the same Open Graph / Twitter card shape,
 * so only the title, description and path vary.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
