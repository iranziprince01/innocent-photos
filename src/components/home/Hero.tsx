"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { IMAGE_SIZES } from "@/lib/images";
import { ease } from "@/lib/motion";
import { HeroHeadlineTypewriter } from "@/components/home/HeroHeadlineTypewriter";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden md:min-h-[640px] md:h-screen"
    >
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          fetchPriority="high"
          decoding="async"
          className="object-cover object-center"
          sizes={IMAGE_SIZES.hero}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/71 via-black/55 to-black/76" />

      <SectionBackground tone="charcoal" variant="aperture" orbs={false} />

      <div className="absolute inset-0 flex items-center pt-16 pb-24 sm:pb-28">
        <div className="container-page relative w-full text-center">
          <HeroHeadlineTypewriter sectionRef={heroRef} />

          {/* Invisible spacer matches old button block so vertical centering keeps headline fixed */}
          <div
            className="pointer-events-none invisible mt-8 h-11 sm:mt-10 sm:h-12 md:mt-14 md:h-14"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease }}
            className="absolute inset-x-0 top-full mt-[clamp(2.75rem,7vh,5rem)] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-11 min-w-[168px] rounded-full border-2 border-white bg-gold px-7 text-sm font-semibold text-white hover:bg-gold-light sm:h-12 sm:min-w-[190px] sm:px-9 sm:text-base md:h-14 md:min-w-[200px] md:px-10 md:text-lg"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 min-w-[168px] rounded-full border-2 border-white/50 bg-transparent px-7 text-sm font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-12 sm:min-w-[190px] sm:px-9 sm:text-base md:h-14 md:min-w-[200px] md:px-10 md:text-lg"
            >
              <Link href="/book">Book Session</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
