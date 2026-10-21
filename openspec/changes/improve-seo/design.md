## Context

See `proposal.md` - Why. Key constraints from the existing codebase (per `AGENTS.md`):
- Routing is `next-intl` with `localePrefix: 'as-needed'` (Spanish has no `/es` prefix), `proxy.ts` middleware, locales `es`/`en`/`eu`, default `es`.
- `app/[locale]/layout.tsx` currently has no `generateMetadata` at all; `app/layout.tsx` sets one static, Spanish-only `metadata` object that every route inherits verbatim.
- Root domain `adimenai.com` 308-redirects to `www.adimenai.com` (Vercel), but `next-sitemap.config.js`, hreflang alternates, and `robots.txt`'s `Host:` line all reference the bare apex domain.
- `public/sitemap.xml` is committed and is currently a genuinely empty `<sitemapindex>` in production - confirmed live via `curl https://www.adimenai.com/sitemap.xml`.
- A full duplicate, non-locale-prefixed route tree exists at the app root (`app/page.tsx`, `app/blog/*`, `app/contactar/*`, `app/contacto/*`, `app/hosteleria/*`, `app/privacidad/*`, `app/terminos/*`), byte-for-byte near-identical to `app/[locale]/*`. `proxy.ts`'s matcher (`'/((?!api|admin|seleccionar-cookies|_next|_vercel|.*\\..*).*)'`) covers all of these paths, so middleware rewrites them to `/[locale]/...` before Next's router picks a page - the root-level copies are normally unreachable, but they still get built, still get maintained by hand (as today's cookie-consent-email fix demonstrated - it had to be applied in both `app/privacidad/page.tsx` and `app/[locale]/privacidad/page.tsx`), and would silently start serving un-localized, metadata-less content if the middleware matcher or config ever changed.
- `/contacto` (added 2026-05-20) and `/contactar` (added 2026-06-05) are two separate, near-identical contact pages. `/contacto` is linked from `Header.tsx` (desktop + mobile nav CTA, present on every page); `/contactar` is linked from `Footer.tsx` and `FaqSection.tsx`.
- Sanity's `post` schema already has `title`, `excerpt`, `mainImage.alt`, `publishedAt` - enough for blog metadata without a schema change.

## Goals / Non-Goals

**Goals:**
- Every route in every locale gets correct, unique `<head>` metadata, hreflang, canonical, OG/Twitter, and JSON-LD.
- `sitemap.xml`/`robots.txt` are correct and internally consistent on the `www` host.
- Exactly one implementation per route; no duplicate contact page.
- Hero media stops competing with LCP.

**Non-Goals:**
- No visual/design changes to any page beyond the hero background delivery mechanism.
- No Sanity schema changes (existing `post` fields are sufficient).
- No changes to analytics/GA wiring.
- No new i18n locales.

## Decisions

**1. Centralize metadata generation in a small helper, called from each page's `generateMetadata`.**
Add `lib/seo.ts` exporting a `buildMetadata({ locale, path, title, description, ogImage? })` helper that fills in `metadataBase`, canonical, hreflang alternates (via `routing.locales` from `i18n/routing.ts`), and OG/Twitter fields consistently, so every page's `generateMetadata` is a short call instead of repeating boilerplate. Alternative considered: per-page ad hoc metadata objects - rejected, guarantees drift (the current bug is exactly this kind of drift).

**2. Metadata copy lives in `messages/{es,en,eu}.json` under a new `seo` namespace, one key per route.**
Keeps translation in the same place as all other UI copy (per `AGENTS.md`'s i18n rules: new namespaces must land in all three files together), and keeps it editable by non-engineers via the existing translation workflow. Alternative considered: hardcoding per-locale strings inside each `generateMetadata` - rejected, violates the project's existing i18n convention.

**3. `lang` is set from the resolved `locale` in `app/[locale]/layout.tsx` (or `app/layout.tsx` via `getLocale()`), not hardcoded.**
`app/layout.tsx` already calls `getLocale()` for the `NextIntlClientProvider` - reuse that value on `<html lang={locale}>`.

**4. Canonical host is a single exported constant (`https://www.adimenai.com`) used by the metadata helper, `next-sitemap.config.js`, and `robots.txt` generation.**
Eliminates the apex-vs-www mismatch at its root instead of fixing each file independently.

**5. Fix `next-sitemap` by driving it off `app/[locale]` route discovery instead of relying on default auto-discovery.**
Investigate why the current run emits an empty index (likely App Router + `[locale]` dynamic segment isn't resolving via next-sitemap's default file-based discovery). If default discovery can't be made to work reliably, use `next-sitemap`'s `additionalPaths` in `next-sitemap.config.js` to explicitly enumerate `routing.locales × known static routes` plus Sanity-fetched blog slugs, guaranteeing correctness regardless of internal discovery behavior. This is the same list needed for JSON-LD breadcrumbs and is worth extracting into one shared route manifest.

**6. JSON-LD is rendered via a small `<JsonLd data={...} />` server component** (a `<script type="application/ld+json">` with `JSON.stringify`), composed per-page: `Organization` in the root layout (renders once, everywhere), `BreadcrumbList`/`Article`/`FAQPage` added by the specific pages that need them.

**7. Route consolidation: delete the root-level duplicate tree; keep `/contacto` as canonical, redirect `/contactar` to it.**
`/contacto` is chosen because it's linked from `Header.tsx`, which appears on every page (desktop + mobile) - the highest-visibility internal link. Implement the redirect via `next.config.ts`'s `redirects()` (locale-aware, so `/contactar`, `/en/contactar`, `/eu/contactar` all 308 to their `/contacto` equivalents), then update `Footer.tsx` and `FaqSection.tsx` to link directly to `/contacto` (avoid redirect hops on internal links). Alternative considered: keeping `/contactar` as canonical instead - rejected only because it has fewer, lower-visibility internal links today; functionally either choice satisfies the spec.

**8. Hero background: swap the raw `style={{ backgroundImage: ... }}` div for a `next/image` `fill` image with `priority`, `sizes` set to the viewport, behind the existing content via `z-index`/stacking, keeping the current visual result.**

**9. Homepage videos: add `preload="none"` and gate `autoPlay` behind an `IntersectionObserver` (the same pattern already used elsewhere in the codebase per `AGENTS.md`'s entrance-animation convention) so the browser doesn't fetch the video until the section is in view.**

## Risks / Trade-offs

- [Risk] Removing the root-level duplicate route tree could break something if middleware is bypassed in some deploy configuration we haven't observed → Mitigation: verify in a preview deploy that `/`, `/blog`, `/contacto`, `/privacidad`, etc. all still resolve correctly (200, correct locale content) before removing, and check Vercel's routing/`vercel.json` for anything that special-cases these paths.
- [Risk] Changing `next-sitemap` discovery strategy (or hand-listing routes) can drift out of sync as new pages are added → Mitigation: build the additional-paths list from the same locale/route source used by the app (`routing.locales`, plus a single route manifest) rather than a hand-maintained duplicate list.
- [Risk] Redirecting `/contactar` → `/contacto` changes existing indexed URLs (if `/contactar` was ever indexed) → Mitigation: use a permanent (308) redirect so link equity transfers, per standard SEO practice.
- [Risk] Hero image swap to `next/image fill` could shift layout/CLS if sizing isn't matched carefully → Mitigation: verify visually in the browser at mobile and desktop widths before/after.

## Migration Plan

1. Land metadata helper + `seo` messages + per-page `generateMetadata` + `lang` fix (independently deployable, no route changes).
2. Land sitemap/robots fix and verify `https://www.adimenai.com/sitemap.xml` is non-empty in a preview deploy.
3. Land JSON-LD.
4. Land route consolidation (redirect + deletions) as its own deploy, verified in preview first given it's the only step with user-facing routing risk.
5. Land hero/video performance changes last, verified visually.

Rollback is standard `git revert` per step since each step is an independent, small deploy.
