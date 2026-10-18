import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteLayout from "@/components/SiteLayout";
import { rootMetadata } from "@/lib/metadata";
import "./home.css";

export const metadata: Metadata = rootMetadata;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
