## Why

A live audit of adimenai.com found that the site has almost no working SEO surface: every route (home, blog, blog posts, contact, hosteleria, privacy, terms) in all three locales (es/en/eu) serves the exact same generic `<title>AdimenAI</title>` and Spanish-only meta description, `<html>` has no `lang` attribute, there is no canonical or hreflang markup, no Open Graph/Twitter card data, and no structured data anywhere. Worse, the sitemap that's live in production right now (`https://www.adimenai.com/sitemap.xml`) is an **empty** `<sitemapindex>` with zero URLs, so Google effectively has no crawl map for the site. There's also duplicate content (`/contacto` and `/contactar` are byte-identical pages, both internally linked) and a dead second copy of every route living outside `app/[locale]/`. None of this requires new features — it's fixing what should already be there, and it's actively suppressing organic visibility today.

## What Changes

- Add per-route `generateMetadata` (title, description, canonical, hreflang alternates, Open Graph, Twitter card) to every page under `app/[locale]/`, sourced from `next-intl` messages so each locale gets translated metadata instead of the shared Spanish default.
- Set `lang` on `<html>` per request locale instead of leaving it unset.
- Add a `metadataBase` and site-wide default metadata in `app/layout.tsx` so relative OG/Twitter image URLs resolve correctly.
- Fix `next-sitemap` generation so `public/sitemap.xml` actually lists every public route × locale with correct `hreflang` alternates, and make the committed sitemap/robots consistent with the canonical `www.adimenai.com` host (the apex domain 308-redirects to `www`).
- Add JSON-LD structured data: `Organization`/`LocalBusiness` site-wide, `BreadcrumbList` on inner pages, `Article` on blog posts, `FAQPage` on the homepage FAQ section.
- Add `generateMetadata` to blog post pages using Sanity's existing `title`/`excerpt`/`mainImage` fields (no schema change needed).
- **BREAKING**: Remove the duplicate, non-locale-prefixed route tree (`app/page.tsx`, `app/blog/*`, `app/contactar/*`, `app/contacto/*`, `app/hosteleria/*`, `app/privacidad/*`, `app/terminos/*`) that duplicates `app/[locale]/*` and is normally shadowed by `proxy.ts` middleware, plus collapse `/contacto` and `/contactar` into one canonical contact route with a redirect from the other.
- Convert the Hero section's raw CSS `background-image` to `next/image` with `priority`, and stop autoplaying/eagerly loading the two large marketing videos (19.4MB, 5.9MB) so they don't compete with LCP.

## Capabilities

### New Capabilities
- `page-metadata`: Per-route, per-locale `<title>`, meta description, canonical URL, hreflang alternates, and Open Graph/Twitter card output, including for dynamic blog post routes.
- `sitemap-and-robots`: A generated `sitemap.xml` that enumerates every public route for every locale with correct `hreflang` and the canonical `www` host, and a `robots.txt` consistent with it.
- `structured-data`: JSON-LD emission (Organization/LocalBusiness, BreadcrumbList, Article, FAQPage) on the relevant pages.
- `route-consolidation`: Single source of truth for each route under `app/[locale]/`, with the duplicate non-locale route tree removed and `/contacto`/`/contactar` merged behind one canonical path plus redirect.
- `hero-media-performance`: LCP-optimized hero image via `next/image`, and non-blocking loading for the large homepage video assets.

### Modified Capabilities
(none — this is a greenfield spec-driven project with no existing specs)

## Impact

- **Code**: `app/layout.tsx`, every page under `app/[locale]/**`, `app/components/ui/Hero.tsx`, `app/components/ui/InfoSection.tsx`, `next-sitemap.config.js`, `messages/{es,en,eu}.json` (new `seo.*` / `metadata.*` keys), removal of `app/page.tsx`, `app/blog/*`, `app/contactar/*`, `app/contacto/*`, `app/hosteleria/*`, `app/privacidad/*`, `app/terminos/*`, and any internal links pointing at the removed root-level paths.
- **Build**: `postbuild` (`next-sitemap`) output changes; `public/sitemap.xml` and `public/robots.txt` will differ from what's currently committed.
- **Sanity**: no schema changes required; blog metadata reuses existing `post` fields.
- **No backend/API or dependency changes.**
