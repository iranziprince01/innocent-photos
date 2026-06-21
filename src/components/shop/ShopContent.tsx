"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { shopItems } from "@/data/shop";
import { images } from "@/data/images";
import { IMAGE_SIZES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ShopContent() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <>
      <PageHero
        title="Shop"
        subtitle="Innocent Photos apparel, coming soon."
        image={images.pages.shop.src}
        imageAlt={images.pages.shop.alt}
      />

      <section className="relative section-padding section-bg-soft overflow-hidden">
        <SectionBackground tone="ivory" variant="lines" />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-xs uppercase tracking-wider"
            >
              Coming Soon
            </Badge>
            <h2 className="mt-6 font-display text-3xl text-charcoal sm:text-4xl">
              Innocent Photos Apparel
            </h2>
            <p className="mt-4 text-sm text-warm-gray">
              Premium merchandise for clients and supporters. Launching soon.
            </p>
          </Reveal>

          <StaggerReveal className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shopItems.map((item, index) => (
              <StaggerItem key={item.id}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group text-center"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ivory">
                    <Image
                      src={item.image}
                      alt={`${item.name} merchandise preview`}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={IMAGE_SIZES.shopCard}
                    />
                  </div>
                  <p className="mt-4 font-display text-lg text-charcoal">{item.name}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal className="mx-auto mt-20 max-w-md text-center" delay={0.1}>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm text-gold"
              >
                You&apos;re on the list. We&apos;ll notify you at launch.
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="rounded-full bg-charcoal hover:bg-charcoal/90">
                  Notify Me
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
