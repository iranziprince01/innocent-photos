"use client";

import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { images } from "@/data/images";
import { IMAGE_SIZES } from "@/lib/images";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { SeoContextLinks } from "@/components/seo/SeoContextLinks";
import { SEO_CONTEXT } from "@/data/seo-routes";

export function AboutIntro() {
  return (
    <section className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="ivory" variant="aperture" />
      <div className="container-page relative grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal variant="left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={images.about.portrait}
              alt={`Portrait of ${BUSINESS.photographer}, photographer at Innocent Photos`}
              fill
              priority
              decoding="async"
              className="object-cover object-top"
              sizes={IMAGE_SIZES.portrait}
            />
          </div>
        </Reveal>

        <StaggerReveal className="space-y-0">
          <StaggerItem>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Introduction
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="section-title mt-4 text-charcoal">
              Hi, I&apos;m Innocent
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="body-text mt-6 space-y-5 text-warm-gray">
              <p>
                Bahati Innocent is the photographer behind Innocent Photos. What started as a love
                for capturing everyday moments turned into a career helping people hold onto the
                days they never want to forget.
              </p>
              <p>
                He photographs weddings, families, graduations, portraits, events, and more, always
                with the same goal: images that look and feel like you, not a stiff version of you.
              </p>
              <p>
                Most people tell him they are nervous in front of a camera. That is normal. His job
                is to guide you gently, keep things relaxed, and catch the real smiles, glances,
                and little details that make your story yours.
              </p>
              <p>
                He works with clients across the United States, Canada, and worldwide, and is happy
                to talk through your session by phone, email, or WhatsApp before you ever meet.
              </p>
              <p>
                If you have a date in mind, or you are just starting to plan, he would love to hear
                what you are looking for.
              </p>
              <SeoContextLinks
                links={SEO_CONTEXT.about}
                prefix="Learn more:"
                className="pt-2"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
