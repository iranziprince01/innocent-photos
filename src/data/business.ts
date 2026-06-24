export const BUSINESS = {
  name: "Innocent Photos",
  tagline: "Photography & Portraits",
  photographer: "Bahati Innocent",
  location: "Tallahassee, Florida",
  streetAddress: "2301 Old Bainbridge Rd",
  city: "Tallahassee",
  state: "FL",
  postalCode: "32303",
  country: "US",
  address: "2301 Old Bainbridge Rd, Tallahassee, Florida 32303",
  phone: "+1 (850) 300-1264",
  phoneRaw: "18503001264",
  email: "innocentphotos10@gmail.com",
  instagram: "https://www.instagram.com/innoc_photos",
  instagramHandle: "@innoc_photos",
  siteUrl: "https://innocentphotos.com",
  heroHeadline: "Capturing Real Moments. Creating Timeless Memories.",
  heroHeadlineLines: [
    { lead: "Capturing Real ", accent: "Moments.", direction: "rtl" as const },
    { lead: "Creating Timeless ", accent: "Memories.", direction: "ltr" as const },
  ] as const,
  heroSubheadline:
    "Professional wedding, portrait, and event photography for clients in the United States, Canada, and worldwide — with travel shoots from Kigali to North America.",
  internationalTagline:
    "Professional photographer serving US and Canada clients remotely, with on-location travel shoots worldwide.",
  serviceAreas: [
    { type: "city" as const, name: "Kigali", country: "Rwanda" },
    { type: "country" as const, name: "United States" },
    { type: "country" as const, name: "Canada" },
  ],
} as const;

const whatsappBookingMessage = `Hi ${BUSINESS.name}! I'd like to book a photography session. Could you share your availability?`;

export const LINKS = {
  phone: `tel:+1${BUSINESS.phoneRaw}`,
  whatsapp: `https://wa.me/${BUSINESS.phoneRaw}`,
  whatsappBook: `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(whatsappBookingMessage)}`,
  email: `mailto:${BUSINESS.email}`,
  instagram: BUSINESS.instagram,
  maps: "https://maps.google.com/maps?q=2301+Old+Bainbridge+Rd,+Tallahassee,+Florida+32303&output=embed",
  mapsLink:
    "https://maps.google.com/?q=2301+Old+Bainbridge+Rd,+Tallahassee,+Florida+32303",
} as const;
