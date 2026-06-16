import type { PricingPackage } from "@/types";

export const pricingPackages: PricingPackage[] = [
  {
    id: "portrait",
    title: "Portrait Session",
    startingAt: "Starting at $250",
    description: "Headshots, personal branding, and creative portraits.",
    features: ["1–2 hour session", "1 location", "30+ edited images", "Online gallery", "Wardrobe guidance"],
  },
  {
    id: "family",
    title: "Family Session",
    startingAt: "Starting at $275",
    description: "Relaxed sessions built around how your family shows up.",
    features: ["1–2 hour session", "Outdoor or home", "40+ edited images", "Online gallery", "Print release"],
  },
  {
    id: "events",
    title: "Event Coverage",
    startingAt: "Starting at $300",
    description: "Birthdays, graduations, corporate gatherings, and more.",
    features: ["2–4 hours coverage", "Candid & posed shots", "100+ edited images", "Quick turnaround option", "Online gallery"],
  },
  {
    id: "wedding",
    title: "Wedding Package",
    startingAt: "Starting at $1,200",
    description: "Full-day coverage of your most important celebration.",
    features: ["6–8 hours coverage", "400+ edited images", "Second shooter available", "Engagement session", "Online gallery & print release"],
    highlighted: true,
  },
];
