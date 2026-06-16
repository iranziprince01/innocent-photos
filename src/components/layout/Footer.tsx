import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { BUSINESS, LINKS } from "@/data/business";
import { footerPages } from "@/data/navigation";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { Separator } from "@/components/ui/separator";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: LINKS.whatsappBook,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: LINKS.phone,
    external: false,
  },
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
    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
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
    "text-sm text-white/70 transition-colors hover:text-white";

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
    <footer className="bg-gold text-white">
      <div className="container-page py-14 md:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 font-display text-lg text-white">
              {BUSINESS.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
              {BUSINESS.heroSubheadline} Serving clients across the USA.
            </p>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Pages</FooterHeading>
            <ul className="mt-4 space-y-2.5">
              {footerPages.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <FooterLink href="/book">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-4 space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-white/90" />
                    <span>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/50 group-hover:text-white/70">
                        {item.label}
                      </span>
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/15" />

        <p className="text-center text-xs text-white/60">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
