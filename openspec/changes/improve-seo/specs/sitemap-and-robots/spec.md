## Purpose

Gives search engines a complete, accurate crawl map of the site: a sitemap that actually lists every public URL in every locale, and a robots.txt that agrees with it on the canonical host, replacing the currently-empty sitemap.xml in production.

## ADDED Requirements

### Requirement: Sitemap enumerates every public route
The generated `sitemap.xml` SHALL list every publicly indexable route (home, blog index, each published blog post, contact, hosteleria, privacy, terms) for every supported locale, and SHALL NOT be empty.

#### Scenario: Sitemap is non-empty and includes known routes
- **WHEN** the sitemap is generated as part of the production build
- **THEN** `https://www.adimenai.com/sitemap.xml` SHALL contain at least one `<url>` entry per public route per locale, including the homepage

#### Scenario: Excluded routes stay out of the sitemap
- **WHEN** the sitemap is generated
- **THEN** it SHALL NOT list `/admin`, `/api/*`, or `/seleccionar-cookies`

### Requirement: Sitemap entries use the canonical host
Every URL listed in the sitemap SHALL use `https://www.adimenai.com` (the host the site actually serves from after the apex redirect), and each entry SHALL declare `hreflang` alternates for its locale siblings.

#### Scenario: Sitemap host matches the resolved production host
- **WHEN** the sitemap is generated
- **THEN** every `<loc>` value SHALL start with `https://www.adimenai.com`

### Requirement: robots.txt agrees with the sitemap
`robots.txt` SHALL reference the same sitemap URL and host as the generated sitemap, and SHALL disallow the same non-public paths the sitemap excludes.

#### Scenario: robots.txt points at the live sitemap
- **WHEN** a crawler requests `/robots.txt`
- **THEN** its `Sitemap:` directive SHALL point at `https://www.adimenai.com/sitemap.xml`, and that URL SHALL return the non-empty sitemap described above
