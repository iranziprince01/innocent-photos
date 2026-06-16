"use client";

import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { images } from "@/data/images";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { SectionBackground } from "@/components/motion/SectionBackground";

export function AboutIntro() {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
      <SectionBackground tone="ivory" variant="aperture" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={images.about.portrait}
              alt={`${BUSINESS.photographer}, photographer`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
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
            <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
              Hi, I&apos;m Innocent
            </h2>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-6 space-y-4 text-justify text-base leading-relaxed text-warm-gray">
              <p>
                Bahati Innocent is the photographer behind Innocent Photos. What started as a love
                for capturing everyday moments turned into a career helping people hold onto the
                days they never want to forget.
              </p>
              <p>
                He photographs weddings, families, graduations, portraits, events, and more, always
                with the same goal: images that look and feel like you, not a stiff version of you.
                Most people tell him they are nervous in front of a camera. That is normal. His job
                is to guide you gently, keep things relaxed, and catch the real smiles, glances, and
                little details that make your story yours.
              </p>
              <p>
                He works with clients across the USA and is happy to talk through your session by
                phone, email, or WhatsApp before you ever meet. If you have a date in mind, or you
                are just starting to plan, he would love to hear what you are looking for.
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
