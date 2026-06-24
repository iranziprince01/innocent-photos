import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ALL_FAQ } from "@/data/faq";
import { breadcrumbJsonLd, createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about booking Innocent Photos for weddings, portraits, and events in the USA, Canada, and worldwide.",
  path: "/faq",
  keywords: [
    "wedding photographer FAQ",
    "book photographer USA",
    "photography Canada booking",
    "destination wedding photographer",
  ],
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]),
            faqJsonLd(ALL_FAQ),
          ]),
        }}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Booking, travel, pricing, and what to expect when working with Innocent Photos."
      />
      <section className="section-padding section-bg-light">
        <div className="container-page mx-auto max-w-3xl">
          <p className="body-text text-warm-gray">
            Planning photography from the United States, Canada, or abroad? These answers cover
            how we work with international and destination clients. Still have questions?{" "}
            <Link href="/contact" className="font-medium text-gold hover:underline">
              Contact us
            </Link>{" "}
            or{" "}
            <Link href="/book" className="font-medium text-gold hover:underline">
              book a session
            </Link>
            .
          </p>
          <dl className="mt-12 space-y-8">
            {ALL_FAQ.map((faq) => (
              <div key={faq.question} className="border-b border-border/50 pb-8 last:border-0">
                <dt className="font-display text-xl font-semibold text-charcoal">
                  {faq.question}
                </dt>
                <dd className="body-text mt-3 text-warm-gray">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
