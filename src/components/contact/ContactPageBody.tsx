"use client";

import { SectionBackground } from "@/components/motion/SectionBackground";
import { WhatsAppQuickBooking } from "@/components/booking/WhatsAppQuickBooking";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SeoContextLinks } from "@/components/seo/SeoContextLinks";
import { SEO_CONTEXT } from "@/data/seo-routes";

export function ContactPageBody() {
  return (
    <section className="relative section-padding section-bg-soft overflow-hidden">
      <SectionBackground tone="ivory" variant="grid" />
      <div className="container-page relative max-w-4xl space-y-10">
        <WhatsAppQuickBooking />
        <ContactInfo />
        <SeoContextLinks links={SEO_CONTEXT.contact} prefix="Helpful links:" />
      </div>
    </section>
  );
}
