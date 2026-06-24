# Innocent Photos

Professional photography portfolio and booking website for **Innocent Photos**, serving clients across the USA.

Live-quality marketing site with portfolio showcase, service pages, pricing, contact options, and a booking form that delivers inquiries by email.

## Features

- **Home** — cinematic hero, featured work, services, testimonials, and calls to action
- **Portfolio** — masonry gallery, category filters, fullscreen lightbox
- **About** — photographer introduction, story, and philosophy
- **Pricing** — clear package cards with starting rates
- **Book** — validated inquiry form with Gmail delivery
- **Contact** — phone, WhatsApp, email, Instagram, and map
- **Shop** — apparel preview with coming-soon signup
- **SEO** — metadata, Open Graph, sitemap, robots.txt, JSON-LD
- **Motion** — scroll reveals, page transitions, and subtle section graphics

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui, Lucide icons |
| Forms | React Hook Form, Zod |
| Email | Nodemailer (Gmail SMTP) |
| Animation | Framer Motion |

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install and run

```bash
git clone https://github.com/iranziprince01/innocent-photos.git
cd innocent-photos
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` from `.env.example`:

```env
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
BOOKING_INBOX=your@gmail.com
```

Use a [Gmail App Password](https://myaccount.google.com/apppasswords) (requires 2-Step Verification). Never commit `.env.local`.

For production, add the same variables in your hosting dashboard (e.g. Vercel → Settings → Environment Variables).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/              # Routes and API (booking email)
├── components/       # UI, layout, home, portfolio, booking
├── data/             # Business copy, services, pricing, images
├── lib/              # SEO, motion, email, utilities
└── types/            # Shared TypeScript types

public/               # Logos, favicons, service photography
```

## Deployment

Optimized for [Vercel](https://vercel.com):

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `BOOKING_INBOX`
4. Deploy

```bash
npm run build
```

## Brand

| | |
| --- | --- |
| **Business** | Innocent Photos |
| **Photographer** | Bahati Innocent |
| **Location** | Tallahassee, Florida, USA |
| **Phone** | +1 (850) 300-1264 |
| **Email** | innocentphotos10@gmail.com |
| **Instagram** | [@innocent_photographer01](https://www.instagram.com/innocent_photographer01) |

## License

Private project. All rights reserved.
