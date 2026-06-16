import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteCta } from "@/components/layout/SiteCta";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";
import { BUSINESS } from "@/data/business";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: BUSINESS.name,
  description: BUSINESS.heroSubheadline,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`} data-scroll-behavior="smooth">
      <head>
        <link
          rel="icon"
          href="/favicon2.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <SiteCta />
        <Footer />
      </body>
    </html>
  );
}
