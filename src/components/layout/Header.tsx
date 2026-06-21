"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { sitePages } from "@/data/navigation";

const navLinks = [{ href: "/", label: "Home" }, ...sitePages];

function isActiveNav(pathname: string, href: string) {
  return pathname === href;
}

function NavItem({
  link,
  pathname,
  transparent,
  onNavigate,
  mobile = false,
}: {
  link: { href: string; label: string };
  pathname: string;
  transparent: boolean;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const active = isActiveNav(pathname, link.href);

  if (mobile) {
    return (
      <Link
        href={link.href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(
          "border-l-2 py-1 pl-4 font-display text-2xl font-bold transition-colors",
          active ? "border-gold text-gold" : "border-transparent text-charcoal hover:text-gold"
        )}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center text-sm font-bold tracking-wide transition-colors sm:text-[15px]",
        transparent
          ? "text-white/85 hover:text-white"
          : "text-charcoal hover:text-gold",
        active && (transparent ? "text-white" : "text-gold")
      )}
    >
      {link.label}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1.5 left-1/2 block -translate-x-1/2 transition-all duration-300",
          active
            ? "h-[2px] w-5 rounded-full bg-gold"
            : "h-[2px] w-0 rounded-full bg-gold/0 group-hover:w-3 group-hover:bg-gold/40"
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "border-b border-border/60 bg-white/95 backdrop-blur-md"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo variant={transparent ? "light" : "dark"} priority />

        <nav className="hidden h-full items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              pathname={pathname}
              transparent={transparent}
            />
          ))}
        </nav>

        <div className="flex h-full items-center gap-2 sm:gap-3">
          <Button
            asChild
            className={cn(
              "hidden h-9 rounded-full px-5 text-sm font-bold sm:inline-flex",
              transparent
                ? "bg-white text-charcoal hover:bg-white/90"
                : "bg-gold text-white hover:bg-gold-light",
              pathname === "/book" &&
                (transparent
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-transparent"
                  : "ring-2 ring-charcoal/15 ring-offset-2 ring-offset-white")
            )}
          >
            <Link href="/book">Book Session</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "size-9 lg:hidden",
                  transparent ? "text-white hover:bg-white/10" : "text-charcoal"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavItem
                    key={link.href}
                    link={link}
                    pathname={pathname}
                    transparent={false}
                    mobile
                    onNavigate={() => setOpen(false)}
                  />
                ))}
                <Button
                  asChild
                  className={cn(
                    "mt-4 rounded-full",
                    pathname === "/book" && "ring-2 ring-gold ring-offset-2"
                  )}
                  size="lg"
                >
                  <Link href="/book" onClick={() => setOpen(false)}>
                    Book Session
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
