import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/photography/us")!;

export const metadata = seoLandingMetadata(page);

export default function PhotographyUsPage() {
  return <SeoLandingPageView page={page} />;
}
