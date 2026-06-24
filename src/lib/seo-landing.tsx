import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import type { SeoLandingPageData } from "@/data/seo-pages";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  servicePageJsonLd,
} from "@/lib/seo";
import { Button } from "@/components/ui/button";

export function seoLandingMetadata(page: SeoLandingPageData): Metadata {
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    image: page.heroImage,
    keywords: page.keywords,
  });
}

export function SeoLandingPageView({ page }: { page: SeoLandingPageData }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: page.metaTitle, path: page.path },
  ];
  const faqs = page.faq ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(breadcrumbs),
            servicePageJsonLd({
              name: page.heroTitle,
              description: page.metaDescription,
              path: page.path,
            }),
            ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
          ]),
        }}
      />
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
      />
      <section className="section-padding section-bg-soft">
        <div className="container-page mx-auto max-w-3xl">
          <p className="body-text text-lg text-charcoal">{page.intro}</p>
          <div className="mt-8">
            <Button
              asChild
              className="rounded-full bg-gold px-8 text-white hover:bg-gold-light"
            >
              <Link href="/book">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section
          key={section.heading}
          className="section-padding border-t border-border/50 section-bg-light"
        >
          <div className="container-page mx-auto max-w-3xl">
            <h2 className="section-title text-charcoal">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="body-text mt-5 text-warm-gray">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="body-text mt-5 list-disc space-y-2 pl-5 text-warm-gray">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="section-padding border-t border-border/50 section-bg-soft">
        <div className="container-page">
          <h2 className="section-title text-center text-charcoal">Services we offer</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {page.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="body-text mt-3 text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-gold px-8 text-white hover:bg-gold-light"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="section-padding border-t border-border/50 section-bg-light">
          <div className="container-page mx-auto max-w-3xl">
            <h2 className="section-title text-charcoal">Common questions</h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-charcoal">{faq.question}</dt>
                  <dd className="body-text mt-2 text-warm-gray">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <PageCta />
    </>
  );
}
