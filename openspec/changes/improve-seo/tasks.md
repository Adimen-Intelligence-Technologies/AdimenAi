## 1. Metadata foundation

- [x] 1.1 Add `lib/seo.ts` exporting the canonical host constant (`https://www.adimenai.com`) and a `buildMetadata({ locale, path, title, description, ogImage? })` helper that returns a `Metadata` object with `metadataBase`, canonical, hreflang alternates (from `routing.locales`), and Open Graph/Twitter fields.
- [x] 1.2 Add a `seo` namespace to `messages/es.json`, `messages/en.json`, `messages/eu.json` with per-route `title`/`description` keys for: home, blog index, contact, hosteleria, privacidad, terminos.
- [x] 1.3 Set `app/layout.tsx`'s `<html lang={...}>` from `getLocale()` instead of leaving it unset; keep the existing static `metadata` export only as the ultimate fallback (title template / default OG image / `metadataBase`).
- [x] 1.4 Add `generateMetadata` to `app/[locale]/page.tsx` (home), `app/[locale]/contacto/page.tsx`, `app/[locale]/hosteleria/page.tsx`, `app/[locale]/privacidad/page.tsx`, `app/[locale]/terminos/page.tsx`, `app/[locale]/blog/page.tsx`, each calling the `lib/seo.ts` helper with its `seo.*` message keys.
- [x] 1.5 Add `generateMetadata` to `app/[locale]/blog/[slug]/page.tsx` deriving title/description/OG image from the fetched post's `title`/`excerpt`/`mainImage`.
- [x] 1.6 Verify in a local build: `/`, `/en`, `/eu` render different `<title>`/description text and correct `lang`; a blog post renders its own title.

## 2. Sitemap and robots

- [ ] 2.1 Diagnose why the current `next-sitemap` run produces an empty `sitemapindex` (check `.next` route manifest output for the `[locale]` App Router structure).
- [ ] 2.2 Update `next-sitemap.config.js` to reliably enumerate every public route × `routing.locales` (via `additionalPaths` if default discovery can't be made to work), including dynamically fetching published blog post slugs from Sanity, and to use the canonical `www` host from `lib/seo.ts` for `siteUrl` and `alternateRefs`.
- [ ] 2.3 Update `robotsTxtOptions` / the `Host:` line to match the canonical `www` host.
- [ ] 2.4 Run `next build` locally and confirm the regenerated `public/sitemap.xml` lists every route/locale combination with correct `hreflang`, and `public/robots.txt`'s `Sitemap:` line matches.
- [ ] 2.5 Deploy to preview and confirm `https://<preview-url>/sitemap.xml` is non-empty.

## 3. Structured data

- [ ] 3.1 Add a small server component `app/components/seo/JsonLd.tsx` that renders `<script type="application/ld+json">{JSON.stringify(data)}</script>`.
- [ ] 3.2 Render `Organization`/`LocalBusiness` JSON-LD once in `app/layout.tsx` (name, url, logo, contact point, Elgoibar address).
- [ ] 3.3 Add `BreadcrumbList` JSON-LD to every non-homepage page added in Task 1.4/1.5.
- [ ] 3.4 Add `Article`/`BlogPosting` JSON-LD to `app/[locale]/blog/[slug]/page.tsx` using the post's title/date/image.
- [ ] 3.5 Add `FAQPage` JSON-LD to the homepage, sourced from the same content passed to the visible `FaqSection`.
- [ ] 3.6 Validate all structured data with Google's Rich Results Test (or `schema-dts`/similar local validation) against a preview deploy.

## 4. Route consolidation

- [ ] 4.1 Confirm in a preview deploy that every root-level duplicate route (`/`, `/blog`, `/blog/[slug]`, `/contacto`, `/contactar`, `/hosteleria`, `/privacidad`, `/terminos`) already resolves via `app/[locale]/*` (i.e. the root-level files are unreachable) before deleting anything.
- [ ] 4.2 Add a locale-aware redirect in `next.config.ts` (`redirects()`) from `/contactar` (and `/en/contactar`, `/eu/contactar`) to the equivalent `/contacto` path, 308 permanent.
- [ ] 4.3 Update `app/components/ui/Footer.tsx` and `app/components/ui/FaqSection.tsx` to link to `/contactar` → `/contacto` directly (avoid the redirect hop on internal links).
- [ ] 4.4 Delete `app/page.tsx`, `app/blog/`, `app/contactar/`, `app/contacto/`, `app/hosteleria/`, `app/privacidad/`, `app/terminos/` (the root-level duplicates), keeping only `app/[locale]/*`, `app/layout.tsx`, `app/admin/`, `app/api/`, `app/seleccionar-cookies/`, `app/lib/`, `app/components/`.
- [ ] 4.5 Re-run `next build` and confirm the route list no longer includes the deleted duplicates and every page still resolves correctly.
- [ ] 4.6 Update `next-sitemap.config.js`'s `exclude`/`transform` if it referenced any of the removed paths directly.

## 5. Hero and media performance

- [ ] 5.1 Replace the raw `style={{ backgroundImage: "url('/background.avif')" }}` in `app/components/ui/Hero.tsx` with a `next/image` `fill` image using `priority` and appropriate `sizes`, preserving the current visual layout.
- [ ] 5.2 Apply the same `next/image` treatment to the other pages sharing `background.avif` as a raw CSS background (contact, hosteleria, privacidad, terminos hero sections), reusing one shared component if practical.
- [ ] 5.3 In `app/components/ui/InfoSection.tsx`'s `<video>`, remove eager `autoPlay`, add `preload="none"`, and gate playback start behind the existing `IntersectionObserver` entrance-animation pattern used elsewhere in the codebase.
- [ ] 5.4 Apply the same lazy-loading treatment wherever `automatization-animation.mp4` is used.
- [ ] 5.5 Verify visually (desktop + mobile viewport) that the hero and video sections look unchanged, and confirm via browser devtools network panel that the videos no longer download on initial page load.

## 6. Final verification

- [ ] 6.1 Run `npx tsc --noEmit` and `pnpm lint`.
- [ ] 6.2 Spot-check `/`, `/en`, `/eu`, a blog post, and `/contacto` in a preview deploy for: correct `<title>`, `lang`, canonical, hreflang, OG tags, and JSON-LD via view-source.
- [ ] 6.3 Re-confirm `https://<preview-url>/sitemap.xml` and `/robots.txt` are correct and consistent.
- [ ] 6.4 Once merged and deployed to production, submit the updated sitemap in Google Search Console and request re-indexing of the homepage.
