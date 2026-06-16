"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FeaturedPhotoLinkProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export function FeaturedPhotoLink({
  href,
  src,
  alt,
  width = 800,
  height = 1000,
  className,
  priority = false,
}: FeaturedPhotoLinkProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        className={cn("group relative block overflow-hidden rounded-sm", className)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={priority ? undefined : "lazy"}
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </Link>
    </motion.div>
  );
}
