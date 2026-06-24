import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { BUSINESS, LINKS } from "@/data/business";
import { footerQuickLinks } from "@/data/navigation";
import { SEO_FOOTER_LINKS } from "@/data/seo-routes";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { Separator } from "@/components/ui/separator";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: LINKS.email,
    external: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: BUSINESS.instagramHandle,
    href: LINKS.instagram,
    external: true,
  },
] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "text-sm text-white/85 transition-colors hover:text-gold-bright";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold-light/25 bg-gold text-white">
      <div className="container-page py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo variant="light" />
            <div className="mt-5 max-w-sm border-t border-white/20 pt-5">
              <p className="text-sm leading-relaxed text-white/85">
                Wedding, portrait, family, and event photography crafted with care.
                Serving clients in the United States, Canada, and worldwide.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                <Link
                  href="/book"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-[3px] transition-colors hover:text-gold-bright hover:decoration-gold-bright"
                >
                  Book your session
                </Link>{" "}
                and start planning images you&apos;ll keep for a lifetime.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <FooterLink href="/book">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>US & Canada</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {SEO_FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINKS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-3 text-sm text-white/85 transition-colors hover:text-gold-bright"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
                  <span>{BUSINESS.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.phone}
                  className="group inline-flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-gold-bright"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-bright" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-gold-bright"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-gold-bright" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/20" />

        <p className="text-center text-xs text-white/75">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
