## Purpose

Adds machine-readable JSON-LD structured data so search engines can understand the business identity, page hierarchy, article authorship, and FAQ content well enough to render rich results (sitelinks, FAQ snippets, article cards).

## ADDED Requirements

### Requirement: Site-wide Organization/LocalBusiness data
Every page SHALL include a JSON-LD `Organization` (or `LocalBusiness`, given the physical office in Elgoibar) block identifying the business name, URL, logo, and contact point, emitted once per page.

#### Scenario: Organization data present on any page
- **WHEN** a crawler requests any page
- **THEN** the page's HTML SHALL contain a `<script type="application/ld+json">` block whose `@type` is `Organization` or `LocalBusiness`, with `name`, `url`, and `logo` populated

### Requirement: Breadcrumb data on inner pages
Every page other than the homepage SHALL include a JSON-LD `BreadcrumbList` reflecting its position in the site hierarchy.

#### Scenario: Breadcrumb reflects page depth
- **WHEN** a crawler requests a non-homepage page such as a blog post
- **THEN** the page SHALL contain a `BreadcrumbList` whose `itemListElement` traces from the homepage to that page

### Requirement: Article data on blog posts
Every blog post page SHALL include a JSON-LD `Article` (or `BlogPosting`) block with `headline`, `datePublished`, and `image` sourced from that post's own data.

#### Scenario: Blog post exposes Article structured data
- **WHEN** a crawler requests a published blog post
- **THEN** the page SHALL contain an `Article`/`BlogPosting` JSON-LD block whose `headline` matches the post title and `datePublished` matches the post's published date

### Requirement: FAQ data on the homepage FAQ section
The homepage SHALL include a JSON-LD `FAQPage` block whose questions and answers match the visible FAQ section content.

#### Scenario: FAQ structured data matches visible content
- **WHEN** a crawler requests the homepage
- **THEN** the page SHALL contain a `FAQPage` JSON-LD block whose `mainEntity` question/answer pairs match what is rendered in the visible FAQ section
