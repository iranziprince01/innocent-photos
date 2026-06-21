import type { Metadata } from "next";
import { ShopContent } from "@/components/shop/ShopContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Shop",
  description: "Innocent Photos merchandise and apparel. Coming soon.",
  path: "/shop",
  noIndex: true,
});

export default function ShopPage() {
  return <ShopContent />;
}
