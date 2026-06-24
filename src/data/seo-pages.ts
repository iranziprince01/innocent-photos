import type { FaqItem } from "@/data/faq";
import { SERVICE_IMAGES } from "@/data/services";
import { PUBLIC_IMAGES } from "@/lib/placeholders";

export type SeoLandingPageData = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  services: { title: string; description: string }[];
  faq?: FaqItem[];
};

export const SEO_LANDING_PAGES: SeoLandingPageData[] = [
  {
    path: "/photography/us",
    metaTitle: "Photography USA",
    metaDescription:
      "Wedding, portrait, and event photography for US clients. Tallahassee-based photographer available nationwide. Book Innocent Photos today.",
    keywords: [
      "photographer USA",
      "wedding photographer USA",
      "portrait photographer USA",
      "event photographer USA",
      "affordable wedding photographer USA",
      "international photographer",
    ],
    heroTitle: "Photography Services in the United States",
    heroSubtitle:
      "Wedding, portrait, family, and event photography for clients across the USA — with travel available nationwide.",
    heroImage: SERVICE_IMAGES.weddings,
    heroImageAlt: "Wedding photographer USA — Innocent Photos",
    intro:
      "Innocent Photos delivers professional photography for couples, families, and businesses throughout the United States. Based in Tallahassee, Florida, we combine documentary storytelling with polished portraits — and travel nationwide for weddings and events.",
    sections: [
      {
        heading: "Wedding photography across the USA",
        paragraphs: [
          "From intimate courthouse ceremonies to multi-day destination celebrations, we document your wedding with calm direction and honest emotion. Our affordable wedding photography packages start at $1,200 with clear deliverables and a private online gallery.",
        ],
        bullets: [
          "Full-day and partial wedding coverage",
          "Engagement and rehearsal dinner sessions",
          "Second shooter available for larger weddings",
        ],
      },
      {
        heading: "Portrait and headshot sessions",
        paragraphs: [
          "Book a portrait photographer in the USA for individuals, families, graduates, and corporate teams. We offer natural light outdoor sessions and professional business headshots with consistent, polished results.",
        ],
      },
      {
        heading: "International experience, US-based service",
        paragraphs: [
          "With roots in Kigali, Rwanda and a studio base in Florida, we understand cross-cultural celebrations and destination timelines. Hire a photographer for US events who brings international perspective and reliable communication.",
        ],
      },
    ],
    services: [
      { title: "Weddings", description: "Nationwide coverage from ceremony to reception." },
      { title: "Portraits", description: "Individuals, couples, families, and headshots." },
      { title: "Events", description: "Corporate, graduation, and private celebrations." },
    ],
  },
  {
    path: "/wedding-photographer-us",
    metaTitle: "Wedding Photographer USA",
    metaDescription:
      "Hire a wedding photographer in the USA. Destination weddings, affordable packages, and full-day coverage. Innocent Photos — book your date.",
    keywords: [
      "wedding photographer USA",
      "affordable wedding photographer USA",
      "destination wedding photographer Africa to US",
      "wedding photography",
      "destination photographer Africa",
    ],
    heroTitle: "Wedding Photographer in the USA",
    heroSubtitle:
      "Full-day wedding coverage, engagement sessions, and destination weddings — from Florida to nationwide travel.",
    heroImage: SERVICE_IMAGES.weddings,
    heroImageAlt: "Wedding photographer USA — ceremony and reception coverage",
    intro:
      "Your wedding day deserves a photographer who stays calm under pressure and captures real emotion. Innocent Photos is a US-based wedding photographer offering transparent packages, travel availability, and galleries you will revisit for decades.",
    sections: [
      {
        heading: "Affordable wedding photography without compromise",
        paragraphs: [
          "We believe professional wedding photography in the USA should be accessible. Packages start at $1,200 with edited images, online delivery, and personal communication from inquiry to final gallery.",
        ],
      },
      {
        heading: "Destination weddings: Africa to the United States",
        paragraphs: [
          "Planning a celebration that bridges continents? We specialize in destination wedding photography for couples moving from Africa to the US — coordinating timelines, cultural moments, and family portraits across venues and time zones.",
        ],
        bullets: [
          "Multi-day and single-day destination coverage",
          "Engagement sessions before the wedding",
          "Scouting and backup weather plans",
        ],
      },
      {
        heading: "What is included",
        paragraphs: [
          "Every wedding inquiry receives a custom timeline, shot list guidance, and clear contract terms. View our portfolio for recent ceremonies and receptions, then book your date while availability lasts.",
        ],
      },
    ],
    services: [
      { title: "Ceremony & reception", description: "Complete storytelling from prep to last dance." },
      { title: "Engagements", description: "Sessions to build comfort before the big day." },
      { title: "Destination travel", description: "Worldwide availability with planned logistics." },
    ],
  },
  {
    path: "/portrait-photographer-us",
    metaTitle: "Portrait Photographer USA",
    metaDescription:
      "Professional portrait photographer in the USA. Headshots, family, and personal branding sessions. Book Innocent Photos.",
    keywords: [
      "portrait photographer USA",
      "professional portrait photography USA",
      "business headshots photographer USA",
      "portrait photography",
      "photographer for hire USA",
    ],
    heroTitle: "Portrait Photographer in the USA",
    heroSubtitle:
      "Natural light portraits, business headshots, and family sessions for clients across the United States.",
    heroImage: PUBLIC_IMAGES.portrait2,
    heroImageAlt: "Professional portrait photography USA — studio and outdoor",
    intro:
      "Whether you need updated headshots for your team in New York or a family session in Atlanta, Innocent Photos delivers polished portrait photography with a relaxed, guided experience and fast turnaround.",
    sections: [
      {
        heading: "Business headshots and personal branding",
        paragraphs: [
          "US professionals trust us for consistent headshots that work across LinkedIn, company websites, and press kits. We direct posing naturally so you look confident, not stiff.",
        ],
      },
      {
        heading: "Family and lifestyle portraits",
        paragraphs: [
          "Portrait photography across the USA shines in every season. We plan sessions around golden hour, weather backups, and locations that reflect your personality — parks, urban streets, or meaningful private spots.",
        ],
        bullets: [
          "Individuals and couples",
          "Families with children",
          "Graduation and milestone portraits",
        ],
      },
      {
        heading: "Book from anywhere in the USA",
        paragraphs: [
          "Remote planning makes booking simple. Share your city, preferred dates, and how you will use the images. We confirm travel, deliver a quote, and send your gallery digitally when editing is complete.",
        ],
      },
    ],
    services: [
      { title: "Headshots", description: "Corporate teams and solo professionals." },
      { title: "Family portraits", description: "Relaxed sessions with natural interaction." },
      { title: "Creative portraits", description: "Editorial and lifestyle looks." },
    ],
  },
  {
    path: "/event-photographer-us",
    metaTitle: "Event Photographer USA",
    metaDescription:
      "Corporate event, conference, and private celebration photography across the USA. Innocent Photos — book event coverage.",
    keywords: [
      "event photographer USA",
      "corporate event photography USA",
      "conference photographer USA",
      "event photography",
      "travel photographer available worldwide",
      "international photographer",
    ],
    heroTitle: "Event Photographer in the USA",
    heroSubtitle:
      "Corporate conferences, galas, graduations, and private celebrations photographed with discretion and speed.",
    heroImage: PUBLIC_IMAGES.event1,
    heroImageAlt: "Event photographer USA — corporate and private events",
    intro:
      "Events move fast. Innocent Photos provides reliable event photography across the United States — capturing keynote speakers, candid networking, and milestone moments your team can use for marketing and memories.",
    sections: [
      {
        heading: "Corporate event photography",
        paragraphs: [
          "From tech conferences to product launches, we deliver edited images suitable for social media, annual reports, and internal communications. Discrete coverage keeps your event flowing naturally.",
        ],
      },
      {
        heading: "Conference and gala coverage",
        paragraphs: [
          "Clients across the USA hire us for multi-room conferences, award ceremonies, and brand activations. We coordinate shot lists with your team and deliver galleries on an agreed timeline.",
        ],
        bullets: [
          "Keynote and panel documentation",
          "VIP and sponsor photography",
          "Reception and networking candids",
        ],
      },
      {
        heading: "Travel photographer available worldwide",
        paragraphs: [
          "Need coverage beyond the United States? We travel for international events and destination celebrations. Share your venue, schedule, and deliverable needs — we build a coverage plan that fits.",
        ],
      },
    ],
    services: [
      { title: "Conferences", description: "Multi-track and single-venue documentation." },
      { title: "Corporate galas", description: "Awards, speeches, and reception coverage." },
      { title: "Private events", description: "Graduations, anniversaries, and celebrations." },
    ],
  },
];

export function getSeoLandingPage(path: string): SeoLandingPageData | undefined {
  return SEO_LANDING_PAGES.find((page) => page.path === path);
}
