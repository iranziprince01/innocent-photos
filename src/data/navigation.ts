/** Primary site pages — shared by header and footer */
export const sitePages = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop" },
] as const;

/** Footer-only links (booking is a primary action, not in header nav) */
export const footerPages = [
  ...sitePages.slice(0, 3),
  { href: "/book", label: "Book a Session" },
  ...sitePages.slice(3),
] as const;
