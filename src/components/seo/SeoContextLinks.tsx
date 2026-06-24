import Link from "next/link";
import { cn } from "@/lib/utils";

type ContextLink = { href: string; label: string };

export function SeoContextLinks({
  links,
  prefix,
  className,
  align = "left",
}: {
  links: readonly ContextLink[];
  prefix?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-warm-gray",
        align === "center" && "text-center",
        className
      )}
    >
      {prefix}
      {prefix ? " " : null}
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 && <span className="mx-1.5 text-border">·</span>}
          <Link
            href={link.href}
            className="font-medium text-charcoal underline decoration-gold/45 underline-offset-[3px] transition-colors hover:text-gold hover:decoration-gold"
          >
            {link.label}
          </Link>
        </span>
      ))}
    </p>
  );
}
