"use client";

import { usePathname } from "next/navigation";
import { PageCta } from "@/components/layout/PageCta";
import { cn } from "@/lib/utils";

/** CTA background contrasts with the last section on each page */
const CTA_BACKGROUND: Record<string, string> = {
  "/": "section-bg-soft",
  "/about": "section-bg-light",
  "/portfolio": "section-bg-soft",
  "/book": "section-bg-soft",
  "/shop": "section-bg-light",
};

export function SiteCta() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return <PageCta className={cn(CTA_BACKGROUND[pathname] ?? "section-bg-soft")} />;
}
