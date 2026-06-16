import type { ShopItem } from "@/types";
import { PHOTOS, unsplashPhoto } from "@/lib/placeholders";

const u = (id: string, w: number, h: number) => unsplashPhoto(id, w, h);

export const shopItems: ShopItem[] = [
  { id: "hoodie", name: "Hoodie", image: u(PHOTOS.hoodie, 600, 750) },
  { id: "tee", name: "T-Shirt", image: u(PHOTOS.tee, 600, 700) },
  { id: "cap", name: "Cap", image: u(PHOTOS.cap, 600, 600) },
];
