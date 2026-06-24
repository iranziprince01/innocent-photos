export type FaqItem = {
  question: string;
  answer: string;
};

export const GENERAL_FAQ: FaqItem[] = [
  {
    question: "Do you travel for photography sessions?",
    answer:
      "Yes. Innocent Photos travels across the United States, Canada, and internationally for weddings, portraits, and events. Based in Tallahassee, Florida, with roots in Kigali, Rwanda, we plan travel shoots worldwide.",
  },
  {
    question: "How do I book a session from the US or Canada?",
    answer:
      "Use the booking form or WhatsApp on our website. Share your date, city, session type, and vision. We confirm availability, deliver a clear quote, and guide you through planning — whether you are local or booking from abroad.",
  },
  {
    question: "What types of photography do you offer?",
    answer:
      "Wedding, portrait, family, graduation, corporate event, real estate, sports, and wildlife photography. Each session is tailored to your story, location, and how you plan to use the images.",
  },
  {
    question: "How far in advance should I book a wedding photographer?",
    answer:
      "For US and Canada weddings, book 9–12 months ahead when possible. Peak seasons fill quickly. Last-minute availability may exist — contact us with your date and we will respond within 24 hours.",
  },
  {
    question: "Do you offer destination wedding photography from Africa to the US?",
    answer:
      "Yes. We specialize in destination weddings for couples planning celebrations in the United States, Canada, or abroad. We coordinate travel, timelines, and shot lists so your day runs smoothly across time zones.",
  },
  {
    question: "Are you an affordable wedding photographer in the USA?",
    answer:
      "We offer transparent packages starting at $1,200 for weddings and $250 for portraits. You receive professional editing, a private gallery, and personal attention — strong value without sacrificing quality.",
  },
];

export const US_FAQ: FaqItem[] = [
  {
    question: "Which US cities do you serve?",
    answer:
      "We photograph across the United States — Florida, Georgia, New York, California, Texas, and nationwide for weddings and events. Travel fees apply outside Tallahassee based on location and duration.",
  },
  {
    question: "Can you shoot business headshots for US companies?",
    answer:
      "Yes. We provide professional headshots and team portraits for businesses across the USA — on location at your office or at a chosen studio-style setting with consistent, polished results.",
  },
];

export const CANADA_FAQ: FaqItem[] = [
  {
    question: "Do you photograph weddings and portraits in Canada?",
    answer:
      "Yes. We serve clients in Toronto, Vancouver, Montreal, Calgary, Ottawa, and across Canada for weddings, portraits, and corporate events. Remote planning and travel coordination are included.",
  },
  {
    question: "How does booking work for Canadian clients?",
    answer:
      "Canadian clients book the same way as US clients — online inquiry or WhatsApp. We confirm dates in your time zone, provide USD-based quotes, and deliver galleries digitally with full usage rights as agreed.",
  },
];

export const ALL_FAQ: FaqItem[] = [...GENERAL_FAQ, ...US_FAQ, ...CANADA_FAQ];
