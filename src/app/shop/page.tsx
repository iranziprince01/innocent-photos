import type { Metadata } from "next";
import { ShopContent } from "@/components/shop/ShopContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Shop",
  description: "Innocent Photos apparel and merchandise, coming soon.",
  path: "/shop",
});

export default function ShopPage() {
  return <ShopContent />;
}
