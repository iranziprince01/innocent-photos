import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { BLOG_POSTS } from "@/data/blog-posts";
import { createMetadata } from "@/lib/seo";
import { IMAGE_SIZES } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Photography Blog",
  description:
    "Tips on choosing a wedding photographer in the USA, portrait styles in Canada, and destination wedding planning from Innocent Photos.",
  path: "/blog",
  keywords: [
    "wedding photography tips",
    "portrait photography Canada",
    "destination wedding guide",
  ],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        title="Photography Blog"
        subtitle="Guides for couples and clients in the United States, Canada, and beyond."
      />
      <section className="section-padding section-bg-light">
        <div className="container-page">
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <article className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={post.heroImageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={IMAGE_SIZES.card}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                        {post.readTime}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-semibold text-charcoal group-hover:text-gold">
                        {post.title}
                      </h2>
                      <p className="body-text mt-3 line-clamp-3 text-warm-gray">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
