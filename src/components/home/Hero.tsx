"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { ease } from "@/lib/motion";
import { HeroHeadlineTypewriter } from "@/components/home/HeroHeadlineTypewriter";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
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
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/89 via-black/69 to-black/95" />

      <SectionBackground tone="charcoal" variant="aperture" orbs={false} />

      <div className="absolute inset-0 flex items-center pt-20">
        <div className="container-page w-full text-center">
          <HeroHeadlineTypewriter sectionRef={heroRef} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease }}
            className="mt-16 flex flex-wrap items-center justify-center gap-5 sm:mt-20 md:mt-24"
          >
            <Button
              asChild
              size="lg"
              className="h-14 min-w-[200px] rounded-full bg-gold px-10 text-base font-semibold text-white hover:bg-gold-light sm:h-16 sm:min-w-[220px] sm:px-12 sm:text-lg"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 min-w-[200px] rounded-full border-2 border-white/50 bg-transparent px-10 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:h-16 sm:min-w-[220px] sm:px-12 sm:text-lg"
            >
              <Link href="/book">Book Session</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
