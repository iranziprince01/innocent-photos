"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGE_SIZES, clampDimension } from "@/lib/images";
import { cn } from "@/lib/utils";

type FeaturedPhotoLinkProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function FeaturedPhotoLink({
  href,
  src,
  alt,
  width = 800,
  height = 1000,
  className,
  priority = false,
  sizes = IMAGE_SIZES.masonry,
}: FeaturedPhotoLinkProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        aria-label={`View ${alt}`}
        className={cn("group relative block overflow-hidden rounded-sm", className)}
      >
        <Image
          src={src}
          alt={alt}
          width={clampDimension(width)}
          height={clampDimension(height, 1600)}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </Link>
    </motion.div>
  );
}
