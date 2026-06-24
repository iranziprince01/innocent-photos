/** Primary site pages — shared by header and footer */
export const sitePages = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
] as const;

/** Footer quick links — core actions only */
export const footerQuickLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/book", label: "Book a Session" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;
