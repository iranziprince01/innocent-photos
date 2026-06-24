import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageCta } from "@/components/layout/PageCta";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { IMAGE_SIZES } from "@/lib/images";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
    keywords: [
      "photography blog",
      "wedding photography",
      "portrait photography",
      "destination wedding",
    ],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path },
            ]),
            articleJsonLd({
              title: post.title,
              description: post.description,
              path,
              publishedAt: post.publishedAt,
              image: post.heroImage,
            }),
          ]),
        }}
      />
      <article>
        <header className="section-padding section-bg-soft pt-32">
          <div className="container-page mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readTime}
            </p>
            <h1 className="page-title mt-4 text-charcoal">{post.title}</h1>
            <p className="body-text mt-5 text-warm-gray">{post.description}</p>
          </div>
          <div className="container-page mt-10">
            <div className="relative mx-auto aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                className="object-cover"
                sizes={IMAGE_SIZES.pageHero}
              />
            </div>
          </div>
        </header>

        {post.sections.map((section) => (
          <section
            key={section.heading}
            className="section-padding border-t border-border/40 section-bg-light"
          >
            <div className="container-page mx-auto max-w-3xl">
              <h2 className="section-title text-charcoal">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="body-text mt-5 text-warm-gray">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="body-text mt-5 list-disc space-y-2 pl-5 text-warm-gray">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="section-padding border-t border-border/40 section-bg-soft">
          <div className="container-page mx-auto max-w-3xl text-center">
            <h2 className="section-title text-charcoal">Ready to book your session?</h2>
            <p className="body-text mt-4 text-warm-gray">
              View our portfolio or send an inquiry — we respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-gold px-8 text-white hover:bg-gold-light"
              >
                <Link href="/book">Book a Session</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
      <PageCta />
    </>
  );
}
