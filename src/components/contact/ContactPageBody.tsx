"use client";

import { SectionBackground } from "@/components/motion/SectionBackground";
import { WhatsAppQuickBooking } from "@/components/booking/WhatsAppQuickBooking";
import { ContactInfo } from "@/components/contact/ContactInfo";

export function ContactPageBody() {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
      <SectionBackground tone="ivory" variant="grid" />
      <div className="container-page relative max-w-4xl space-y-10">
        <WhatsAppQuickBooking />
        <ContactInfo />
      </div>
    </section>
  );
}
