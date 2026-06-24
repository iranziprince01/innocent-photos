# SEO & Google Search Console — innocentphotos.com

Canonical domain: **https://innocentphotos.com** (non-www)

This site ships sitemap, robots.txt, canonical tags, structured data, and a **www → apex 301** redirect via `next.config.ts` on Vercel. Do **not** add a duplicate www redirect in Cloudflare.

---

## 1. Vercel domains

In [Vercel → Project → Settings → Domains](https://vercel.com/dashboard):

1. Add `innocentphotos.com` (primary).
2. Add `www.innocentphotos.com` (redirects to apex via Next.js config).
3. Ensure SSL is active for both.

---

## 2. Cloudflare DNS

Point records to Vercel (values from Vercel domain settings):

| Type | Name | Content |
|------|------|---------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Proxy status: **DNS only** (grey cloud) is recommended for Vercel unless you use Cloudflare-specific features.

**Do not** create a Cloudflare Redirect Rule for www if the Vercel redirect is already deployed.

---

## 3. Google Search Console — Domain property

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **Domain** → enter `innocentphotos.com`.
3. Copy the **TXT verification** record (e.g. `google-site-verification=...`).
4. In **Cloudflare → DNS → Add record**:
   - Type: `TXT`
   - Name: `@`
   - Content: paste the full verification string
   - TTL: Auto
5. Click **Verify** in Search Console (may take a few minutes).

A **Domain** property automatically covers:

- `https://innocentphotos.com`
- `https://www.innocentphotos.com`
- `http://` variants

No separate www property is needed.

### Optional: HTML tag verification

If you prefer a URL-prefix property instead, set in Vercel environment variables:

```
GOOGLE_SITE_VERIFICATION=your_verification_code
```

Redeploy after adding. Domain + DNS TXT is preferred for this setup.

---

## 4. Submit sitemap

After deploy, confirm:

- https://innocentphotos.com/sitemap.xml
- https://innocentphotos.com/robots.txt

In Search Console → **Sitemaps** → submit:

```
https://innocentphotos.com/sitemap.xml
```

Indexed routes (no blog, shop excluded):

| URL | Priority |
|-----|----------|
| `/` | 1.0 |
| `/portfolio` | 0.9 |
| `/book` | 0.9 |
| `/about` | 0.8 |
| `/contact` | 0.7 |

`/shop` is `noindex` and disallowed in robots.txt.

---

## 5. Request indexing

In Search Console → **URL Inspection**, inspect and **Request indexing** for:

1. `https://innocentphotos.com/`
2. `https://innocentphotos.com/portfolio`
3. `https://innocentphotos.com/book`
4. `https://innocentphotos.com/about`
5. `https://innocentphotos.com/contact`

---

## 6. Final verification checklist

Run these checks after deploy:

```bash
# www should 301 to apex
curl -sI https://www.innocentphotos.com | grep -i location

# Sitemap and robots
curl -sI https://innocentphotos.com/sitemap.xml | head -1
curl -sI https://innocentphotos.com/robots.txt | head -1

# Canonical on homepage (non-www)
curl -s https://innocentphotos.com | grep -i 'rel="canonical"'
```

Expected:

- `www` → `https://innocentphotos.com/` (301)
- Sitemap and robots return `200`
- Canonical: `https://innocentphotos.com`
- All public pages return `200` (except intentional redirects)

---

## 7. What’s implemented in code

| Item | Location |
|------|----------|
| Metadata (title, description, OG, Twitter) | `src/lib/seo.ts` |
| Canonical non-www URLs | `createMetadata()` + `BUSINESS.siteUrl` |
| www → apex 301 | `next.config.ts` `redirects` |
| `/pricing` → `/book` 301 | `next.config.ts` |
| HSTS + security headers | `next.config.ts` `headers` |
| `sitemap.xml` | `src/app/sitemap.ts` |
| `robots.txt` | `src/app/robots.ts` |
| WebSite + LocalBusiness + Photographer JSON-LD | `siteJsonLd()` in root layout |
| Portfolio ImageGallery + ImageObject JSON-LD | `portfolioGalleryJsonLd()` on `/portfolio` |
| Dynamic OG image | `src/app/opengraph-image.tsx` |
| Image WebP/AVIF + lazy load | `next.config.ts` + components |

---

## 8. Search Console API (optional)

Automated sitemap submission requires a Google Cloud service account with Search Console API access. For a single site, manual sitemap submission (step 4) is sufficient.

If you later enable the API, grant the service account **Owner** on the Search Console property and use the [Search Console API sitemaps.submit](https://developers.google.com/webmaster-tools/v1/sitemaps/submit) endpoint.
