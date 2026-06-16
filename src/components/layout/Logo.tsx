import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { BRAND_ASSETS } from "@/data/brand";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
  priority = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
}) {
  const src =
    variant === "light" ? BRAND_ASSETS.logoWhite : BRAND_ASSETS.logoColor;

  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center", className)}
      aria-label={`${BUSINESS.name}, home`}
    >
      <Image
        src={src}
        alt={BUSINESS.name}
        width={280}
        height={112}
        priority={priority}
        className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-85 sm:h-14 md:h-16"
      />
    </Link>
  );
}
