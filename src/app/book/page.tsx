import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BookPageBody } from "@/components/booking/BookPageBody";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Book a Session",
  description:
    "Book wedding, portrait, family, or event photography with Innocent Photos in Tallahassee, Florida. WhatsApp for quick booking or use the inquiry form.",
  path: "/book",
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
