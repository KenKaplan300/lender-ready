import type { ReactNode } from "react";
import Script from "next/script";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import "./site-shared.css";

/*
 * Each route group is its own root layout so it can load the exact
 * page-specific stylesheet its pages were designed with; the header,
 * nav and footer styles they all share live in site-shared.css instead
 * of being duplicated into every one of those stylesheets.
 * There must be no app/layout.tsx: it would nest a second <html> inside this one.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H3T2ER9NLH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-H3T2ER9NLH');
          `}
        </Script>
      </body>
    </html>
  );
}
