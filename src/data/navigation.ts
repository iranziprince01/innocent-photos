/** Primary site pages — shared by header and footer */
export const sitePages = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
] as const;

/** Footer quick links — core actions only */
export const footerQuickLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book", label: "Book a Session" },
  { href: "/contact", label: "Contact" },
] as const;
