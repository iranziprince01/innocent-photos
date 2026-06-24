export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-wedding-photographer-usa",
    title: "How to Choose a Wedding Photographer in the USA",
    description:
      "A practical guide for US couples: style, budget, contracts, and questions to ask before booking your wedding photographer.",
    publishedAt: "2026-06-01",
    readTime: "6 min read",
    heroImage: "/wedding.jpg",
    heroImageAlt: "Wedding photographer capturing a US couple at golden hour",
    sections: [
      {
        heading: "Start with your wedding vision",
        paragraphs: [
          "Before comparing packages, define how you want your wedding day to feel in photographs. Editorial and moody? Bright and documentary? Your answer narrows the field faster than price alone.",
          "Browse full galleries — not just highlight reels — from photographers who shoot in your region or travel to your venue. Consistency across an entire wedding matters more than one stunning cover image.",
        ],
      },
      {
        heading: "Evaluate style and storytelling",
        paragraphs: [
          "A skilled wedding photographer in the USA blends posed portraits with candid moments. Look for emotional reactions, detail shots, and clean reception coverage in similar lighting to your venue.",
        ],
        bullets: [
          "Request a full wedding gallery from a date close to your season",
          "Check how they handle low light, rain, and fast timelines",
          "Confirm a second shooter for larger guest counts",
        ],
      },
      {
        heading: "Understand packages and deliverables",
        paragraphs: [
          "Affordable wedding photography in the USA should still include clear deliverables: hours of coverage, editing, online gallery, download rights, and turnaround time. Avoid vague “custom quote” language without a written breakdown.",
          "Innocent Photos offers transparent wedding packages starting at $1,200 with travel available nationwide and for destination celebrations.",
        ],
      },
      {
        heading: "Book early and confirm the contract",
        paragraphs: [
          "Popular US wedding dates book 9–12 months ahead. Once you choose your photographer, review cancellation terms, deposit schedule, and image delivery dates before signing.",
          "Ready to start? View our portfolio and book a consultation — we respond within 24 hours.",
        ],
      },
    ],
  },
  {
    slug: "best-portrait-photography-styles-canada",
    title: "Best Portrait Photography Styles in Canada",
    description:
      "From natural light outdoor sessions to studio headshots — portrait styles Canadian clients love and how to choose the right look.",
    publishedAt: "2026-06-05",
    readTime: "5 min read",
    heroImage: "/portraits.jpg",
    heroImageAlt: "Professional portrait photography session in natural light",
    sections: [
      {
        heading: "Natural light outdoor portraits",
        paragraphs: [
          "Canada’s seasons offer dramatic backdrops — golden summer evenings, snowy winters, and vibrant fall colour. Natural light portraits feel authentic and timeless, ideal for families, couples, and personal branding.",
        ],
      },
      {
        heading: "Studio and headshot portraits",
        paragraphs: [
          "Professional portrait photography in Canada often includes clean studio or office setups for business headshots. Consistent lighting, neutral backgrounds, and confident posing help teams look polished on LinkedIn and company sites.",
        ],
        bullets: [
          "Classic head-and-shoulders framing",
          "Environmental portraits in your workplace",
          "Lifestyle portraits with movement and personality",
        ],
      },
      {
        heading: "Editorial and creative sessions",
        paragraphs: [
          "Fashion-inspired and editorial portrait styles add mood through composition, wardrobe, and location. These sessions work well for models, creatives, and anyone building a distinctive personal brand.",
        ],
      },
      {
        heading: "Book a portrait session",
        paragraphs: [
          "Innocent Photos offers portrait sessions for Canadian clients with remote planning and travel coordination. Packages start at $250. Tell us your city and vision — we will recommend the best style for your goals.",
        ],
      },
    ],
  },
  {
    slug: "destination-wedding-photography-guide",
    title: "Destination Wedding Photography Guide",
    description:
      "Planning a destination wedding? How to hire an international photographer, coordinate travel, and capture your celebration across borders.",
    publishedAt: "2026-06-10",
    readTime: "7 min read",
    heroImage: "/Portfolio.jpg",
    heroImageAlt: "Destination wedding photography by international photographer",
    sections: [
      {
        heading: "Why hire a destination wedding photographer",
        paragraphs: [
          "Destination weddings bring unique logistics — unfamiliar venues, tight timelines, and guests arriving from multiple countries. An experienced destination photographer anticipates those challenges and keeps coverage calm and complete.",
          "Whether your celebration moves from Africa to the US, or you are hosting guests in Canada, a photographer who travels internationally understands cultural moments worth preserving.",
        ],
      },
      {
        heading: "Planning across time zones",
        paragraphs: [
          "Start with a video call or detailed inquiry form. Share your itinerary, ceremony time, guest count, and must-have family combinations. Confirm arrival dates so your photographer can scout light and backup locations.",
        ],
        bullets: [
          "Share venue photos and floor plans early",
          "Align on a shot list and family form timeline",
          "Confirm travel fees, lodging, and backup gear policies",
        ],
      },
      {
        heading: "Africa to US and worldwide coverage",
        paragraphs: [
          "Couples planning a destination wedding from Africa to the United States often need a photographer comfortable with cross-border travel and diverse celebrations. Innocent Photos is based in the US with international experience, offering bilingual-friendly communication and flexible travel schedules.",
        ],
      },
      {
        heading: "Secure your date",
        paragraphs: [
          "Destination dates book quickly. Submit your wedding date and location through our booking page. We will confirm availability, provide a tailored quote, and help you plan photography that matches your destination vision.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
