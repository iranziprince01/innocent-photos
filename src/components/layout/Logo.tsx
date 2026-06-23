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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={BUSINESS.name}
        width={176}
        height={70}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-9 w-auto max-w-[min(100%,176px)] object-contain object-left transition-opacity duration-300 group-hover:opacity-85 sm:h-10 md:h-11"
      />
    </Link>
  );
}
