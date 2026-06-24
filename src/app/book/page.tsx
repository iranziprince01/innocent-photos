import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BookPageBody } from "@/components/booking/BookPageBody";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Book a Session",
  description:
    "Book wedding, portrait, or event photography with Innocent Photos. Serving clients across the USA — WhatsApp or inquiry form.",
  path: "/book",
  keywords: ["book photographer USA", "hire photographer USA"],
});

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book a Session"
        subtitle="Tell us about your date, location, and what you need."
        image={images.pages.book.src}
        imageAlt={images.pages.book.alt}
      />
      <BookPageBody />
    </>
  );
}
