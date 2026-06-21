import type { ShopItem } from "@/types";
import { PHOTOS, PUBLIC_IMAGES, unsplashPhoto } from "@/lib/placeholders";

export const shopItems: ShopItem[] = [
  { id: "hoodie", name: "Hoodie", image: unsplashPhoto(PHOTOS.hoodie, 600, 750) },
  { id: "tee", name: "T-Shirt", image: unsplashPhoto(PHOTOS.tee, 600, 700) },
  { id: "cap", name: "Cap", image: unsplashPhoto(PHOTOS.cap, 600, 600) },
  { id: "sweatshirt", name: "Sweatshirt", image: PUBLIC_IMAGES.shopSweatshirt },
  { id: "tote", name: "Tote Bag", image: PUBLIC_IMAGES.shopTote },
  {
    id: "long-sleeve-shirt",
    name: "Long Sleeve Shirt",
    image: PUBLIC_IMAGES.shopLongSleeveShirt,
  },
];
