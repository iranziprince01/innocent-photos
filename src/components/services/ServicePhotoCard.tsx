"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGE_SIZES } from "@/lib/images";

type ServicePhotoCardProps = {
  title: string;
  image: string;
  href?: string;
  showTitle?: boolean;
};

export function ServicePhotoCard({
  title,
  image,
  href = "/book",
  showTitle = true,
}: ServicePhotoCardProps) {
  const label = `${title} photography by Innocent Photos`;

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        aria-label={`Book ${title.toLowerCase()} photography`}
        className="group block overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={showTitle ? "" : label}
            fill
            loading="lazy"
            decoding="async"
            aria-hidden={showTitle}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={IMAGE_SIZES.serviceCard}
          />
          {showTitle ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl text-white">{title}</h3>
              </div>
            </>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
