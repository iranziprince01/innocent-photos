import type { Testimonial } from "@/types";
import { PUBLIC_IMAGES } from "@/lib/placeholders";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah & Michael",
    service: "Wedding",
    image: PUBLIC_IMAGES.testimonialWedding,
    quote:
      "We hired Innocent Photos for our wedding, and we're so glad we did. The photos look exactly like us, not stiff or overly posed. We still open the gallery on quiet nights and feel like we're right back in that moment.",
  },
  {
    id: "t2",
    name: "James R.",
    service: "Graduation",
    image: PUBLIC_IMAGES.testimonialGraduation,
    quote:
      "I booked a graduation session with Innocent Photos, and I felt comfortable within the first few minutes. The photos captured how proud I felt that day: clear, natural, and true to me.",
  },
  {
    id: "t3",
    name: "The Williams Family",
    service: "Family",
    image: PUBLIC_IMAGES.testimonialFamily,
    quote:
      "We booked a family session with Innocent Photos, and it felt easy from start to finish. The photos are warm, real, and full of life, just like our family.",
  },
  {
    id: "t4",
    name: "Lakeview Realty",
    service: "Real Estate",
    image: PUBLIC_IMAGES.testimonialRealEstate,
    quote:
      "We use Innocent Photos for our real estate listings, and the difference is obvious. The photos are bright, clean, and inviting. Buyers engage with our properties much faster now.",
  },
];
