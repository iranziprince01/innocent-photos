"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { BUSINESS, LINKS } from "@/data/business";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: LINKS.phone,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: BUSINESS.address,
    href: LINKS.mapsLink,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: LINKS.email,
    external: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: BUSINESS.instagramHandle,
    href: LINKS.instagram,
    external: true,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <StaggerReveal fast className="grid gap-4 sm:grid-cols-2">
        {contactMethods.map((method) => (
          <StaggerItem key={method.label}>
            <motion.a
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              whileHover={{ y: -4, borderColor: "rgba(111, 68, 40, 0.35)" }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4 rounded-sm border border-border bg-ivory/40 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-gold shadow-sm">
                <method.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-gray">
                  {method.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-charcoal">
                  {method.value}
                </p>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <Reveal variant="scale" delay={0.1}>
        <div className="overflow-hidden rounded-sm border border-border">
          <div className="flex items-center gap-2 border-b border-border bg-ivory px-6 py-4">
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            <p className="text-sm font-medium text-charcoal">{BUSINESS.address}</p>
          </div>
          <iframe
            title="Innocent Photos location map"
            src={LINKS.maps}
            className="h-64 w-full grayscale sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
