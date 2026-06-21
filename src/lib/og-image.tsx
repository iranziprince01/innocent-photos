import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BUSINESS } from "@/data/business";

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export const ogImageContentType = "image/png";

async function loadFonts() {
  const [playfair, interRegular, interSemibold] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiukDQ.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf",
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    { name: "Playfair", data: playfair, style: "normal" as const, weight: 700 as const },
    { name: "Inter", data: interRegular, style: "normal" as const, weight: 400 as const },
    { name: "Inter", data: interSemibold, style: "normal" as const, weight: 600 as const },
  ];
}

async function loadBackground() {
  const wedding = await readFile(join(process.cwd(), "public/wedding.jpg"));
  return `data:image/jpeg;base64,${wedding.toString("base64")}`;
}

export async function generateOgImage() {
  const [fonts, background] = await Promise.all([loadFonts(), loadBackground()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#1a1814",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
          }}
        >
          <img
            src={background}
            alt=""
            width={1200}
            height={630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "linear-gradient(108deg, rgba(26,24,20,0.94) 0%, rgba(26,24,20,0.78) 42%, rgba(26,24,20,0.28) 72%, rgba(26,24,20,0.55) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 82% 18%, rgba(237,217,184,0.22) 0%, transparent 42%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
            width: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 52,
                height: 2,
                background: "#a67b52",
                marginRight: 16,
              }}
            />
            <span
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 14,
                letterSpacing: "0.32em",
                color: "#edd9b8",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {BUSINESS.tagline}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Playfair",
              fontSize: 84,
              lineHeight: 0.98,
              color: "#faf8f5",
              letterSpacing: "-0.02em",
              marginBottom: 18,
            }}
          >
            {BUSINESS.name}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Inter",
              fontSize: 28,
              lineHeight: 1.35,
              color: "#edd9b8",
            }}
          >
            <span style={{ display: "flex" }}>Capturing real moments.</span>
            <span style={{ display: "flex" }}>Creating timeless memories.</span>
          </div>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              alignItems: "center",
              fontFamily: "Inter",
              fontSize: 15,
              letterSpacing: "0.14em",
              color: "rgba(250,248,245,0.78)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span style={{ display: "flex", marginRight: 14 }}>{BUSINESS.location}</span>
            <span style={{ display: "flex", color: "#a67b52", marginRight: 14 }}>·</span>
            <span style={{ display: "flex" }}>{BUSINESS.photographer}</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 56,
            bottom: 56,
            display: "flex",
            width: 132,
            height: 132,
            borderRight: "2px solid rgba(166,123,82,0.75)",
            borderBottom: "2px solid rgba(166,123,82,0.75)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 72,
            top: 48,
            display: "flex",
            width: 72,
            height: 72,
            borderLeft: "2px solid rgba(166,123,82,0.45)",
            borderTop: "2px solid rgba(166,123,82,0.45)",
          }}
        />
      </div>
    ),
    {
      ...ogImageSize,
      fonts,
    },
  );
}
