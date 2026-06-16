"use client";

import { usePathname } from "next/navigation";
import { PageCta } from "@/components/layout/PageCta";

export function SiteCta() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  const backgroundClass = pathname === "/portfolio" ? "bg-ivory" : undefined;

  return <PageCta className={backgroundClass} />;
}
