import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BookPageBody } from "@/components/booking/BookPageBody";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Book a Session",
  description:
    "Book your photography session with Innocent Photos. WhatsApp for quick booking, or submit the inquiry form. USA.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book a Session"
        subtitle="Tell us about your date, location, and what you need."
        image={images.pages.book.src}
      />
      <BookPageBody />
    </>
  );
}
