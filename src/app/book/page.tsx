import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BookPageBody } from "@/components/booking/BookPageBody";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Book a Session",
  description:
    "Book wedding, portrait, or event photography with Innocent Photos. Serving US, Canada, and international clients — WhatsApp or inquiry form.",
  path: "/book",
  keywords: ["book photographer USA", "book photographer Canada", "hire photographer"],
});

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book a Session"
        subtitle="Tell us about your date, location, and what you need — US, Canada, and international clients welcome."
        image={images.pages.book.src}
        imageAlt={images.pages.book.alt}
      />
      <BookPageBody />
    </>
  );
}
