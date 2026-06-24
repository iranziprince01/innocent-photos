import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/portrait-photographer-us")!;

export const metadata = seoLandingMetadata(page);

export default function PortraitPhotographerUsPage() {
  return <SeoLandingPageView page={page} />;
}
