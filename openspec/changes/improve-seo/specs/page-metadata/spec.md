## Purpose

Ensures every page on the site exposes accurate, unique, per-locale HTML metadata (title, description, language, canonical, hreflang, social preview tags) instead of one shared generic Spanish default, so search engines and social platforms index and display each page correctly.

## ADDED Requirements

### Requirement: Unique per-route title and description
Every publicly routable page SHALL render a `<title>` and meta description that are specific to that page's content and current locale, distinct from the site-wide default used only as a fallback.

#### Scenario: Homepage title differs from a blog post title
- **WHEN** a crawler requests `/` and then requests a published blog post at `/blog/<slug>`
- **THEN** the two responses SHALL contain different `<title>` values, each describing the respective page's content

#### Scenario: Locale changes the rendered text
- **WHEN** a crawler requests the same logical page in `es`, `en`, and `eu` (e.g. `/`, `/en`, `/eu`)
- **THEN** the `<title>` and meta description text SHALL be in the requested locale's language, not a shared Spanish default

### Requirement: HTML declares the active locale
Every page response SHALL set the `lang` attribute on the root `<html>` element to the locale actually being served.

#### Scenario: English route sets English lang
- **WHEN** a crawler requests `/en`
- **THEN** the response HTML's `<html>` element SHALL have `lang="en"`

#### Scenario: Default locale sets Spanish lang
- **WHEN** a crawler requests `/` (default locale, no prefix)
- **THEN** the response HTML's `<html>` element SHALL have `lang="es"`

### Requirement: Canonical URL on every page
Every page SHALL emit a self-referencing (or intentionally cross-referencing, for merged duplicate routes) `<link rel="canonical">` pointing at the fully-qualified `https://www.adimenai.com` URL for that page.

#### Scenario: Canonical uses the production host
- **WHEN** a crawler requests any indexable page
- **THEN** the canonical URL SHALL use `https://www.adimenai.com` as the host, matching the host the site actually resolves to

### Requirement: Hreflang alternates link locale variants
Every localized page SHALL emit `<link rel="alternate" hreflang="...">` tags pointing to the `es`, `en`, `eu`, and `x-default` versions of that same logical page.

#### Scenario: Locale variants cross-reference each other
- **WHEN** a crawler requests the homepage in any of the three locales
- **THEN** the response SHALL include hreflang alternate links for all three locales plus `x-default`, each resolving to the equivalent page in that locale

### Requirement: Open Graph and Twitter Card metadata
Every page SHALL emit Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) and Twitter Card meta tags so links shared on social platforms and messaging apps render a rich preview.

#### Scenario: Shared link shows a rich preview
- **WHEN** any page URL is unfurled by a social platform or chat app
- **THEN** the platform SHALL find `og:title`, `og:description`, and an absolute `og:image` URL in the page's `<head>`

### Requirement: Blog posts derive metadata from their content
Each blog post page SHALL derive its title, description, and social image from that post's own `title`, `excerpt`, and `mainImage` fields rather than site-wide defaults.

#### Scenario: Blog post metadata reflects its content
- **WHEN** a crawler requests a published blog post
- **THEN** the `<title>` SHALL contain that post's title and the meta description SHALL contain (or be derived from) that post's excerpt
