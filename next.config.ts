import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.innocentphotos.com" }],
        destination: "https://innocentphotos.com/:path*",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/pricing/:path*",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/photography/canada",
        destination: "/photography/us",
        permanent: true,
      },
      {
        source: "/portrait-photographer-canada",
        destination: "/portrait-photographer-us",
        permanent: true,
      },
      {
        source: "/event-photographer-us-canada",
        destination: "/event-photographer-us",
        permanent: true,
      },
      {
        source: "/blog/best-portrait-photography-styles-canada",
        destination: "/blog/best-portrait-photography-styles-usa",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
