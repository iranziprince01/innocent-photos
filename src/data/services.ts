import type { Service } from "@/types";
import { PUBLIC_IMAGES } from "@/lib/placeholders";

/** Local service images from /public — replace files in place without code changes */
export const SERVICE_IMAGES = {
  weddings: "/wedding.jpg",
  portraits: PUBLIC_IMAGES.portraits,
  family: "/family.jpg",
  events: "/event.jpg",
  graduation: "/graduation.jpg",
  realestate: "/real-estate.jpg",
  sports: "/sports.jpg",
  wildlife: "/wildlife.jpg",
} as const;

export const services: Service[] = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Every glance, every tear, every celebration.",
    startingAt: "Starting at $1,200",
    image: SERVICE_IMAGES.weddings,
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Natural light portraits with honest expression.",
    startingAt: "Starting at $250",
    image: SERVICE_IMAGES.portraits,
  },
  {
    id: "family",
    title: "Family",
    description: "Sessions built around how your family actually shows up.",
    startingAt: "Starting at $275",
    image: SERVICE_IMAGES.family,
  },
  {
    id: "events",
    title: "Events",
    description: "Milestones, gatherings, and moments worth keeping.",
    startingAt: "Starting at $300",
    image: SERVICE_IMAGES.events,
  },
  {
    id: "graduation",
    title: "Graduation",
    description: "Celebrate achievement with images that last.",
    startingAt: "Starting at $200",
    image: SERVICE_IMAGES.graduation,
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Listings that invite buyers in before they arrive.",
    startingAt: "Starting at $150",
    image: SERVICE_IMAGES.realestate,
  },
  {
    id: "sports",
    title: "Sports",
    description: "Action, emotion, and the moments that define the game.",
    startingAt: "Starting at $225",
    image: SERVICE_IMAGES.sports,
  },
  {
    id: "wildlife",
    title: "Wildlife",
    description: "Patience and artistry in the natural world.",
    startingAt: "Starting at $200",
    image: SERVICE_IMAGES.wildlife,
  },
];
