import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found. Return to Innocent Photos.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page mx-auto max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">404</p>
        <h1 className="page-title mt-4 text-charcoal">Page not found</h1>
        <p className="body-text mt-5 text-warm-gray">
          The page you requested may have moved or no longer exists. Head back to the homepage or
          explore the portfolio.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="rounded-full bg-gold px-8 text-white hover:bg-gold-light">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
