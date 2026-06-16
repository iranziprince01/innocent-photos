import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Innocent Photos by phone, email, WhatsApp, or Instagram.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We'd love to hear from you."
        image={images.pages.contact.src}
      />
      <ContactPageBody />
      <PageCta className="bg-ivory" />
    </>
  );
}
