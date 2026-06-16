export const BUSINESS = {
  name: "Innocent Photos",
  tagline: "Photography & Portraits",
  photographer: "Bahati Innocent",
  location: "USA",
  address: "2301 Old Bainbridge Rd, Tallahassee, Florida 32303",
  city: "USA",
  state: "USA",
  phone: "+1 (850) 300-1264",
  phoneRaw: "18503001264",
  email: "bahaticent@gmail.com",
  instagram: "https://www.instagram.com/innocent_photographer01",
  instagramHandle: "@innocent_photographer01",
  siteUrl: "https://innocentphotos.com",
  heroHeadline: "Capturing Real Moments. Creating Timeless Memories.",
  heroHeadlineLines: [
    { lead: "Capturing Real ", accent: "Moments.", direction: "rtl" as const },
    { lead: "Creating Timeless ", accent: "Memories.", direction: "ltr" as const },
  ] as const,
  heroSubheadline:
    "Photography for weddings, families, graduates, events, and the moments that matter.",
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
