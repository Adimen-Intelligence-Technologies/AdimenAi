## Purpose

Removes duplicate page implementations that split link equity, double the maintenance burden, and risk serving unlocalized content, leaving exactly one implementation per public route.

## ADDED Requirements

### Requirement: One implementation per route
Each publicly reachable path SHALL be implemented by exactly one page under `app/[locale]/`. No duplicate, non-locale-prefixed copy of a route SHALL exist alongside it.

#### Scenario: No orphaned root-level duplicate
- **WHEN** the codebase is inspected for page files
- **THEN** there SHALL NOT be both `app/<segment>/page.tsx` and `app/[locale]/<segment>/page.tsx` implementing the same content for the same route

### Requirement: Single canonical contact path
The site SHALL expose exactly one canonical contact URL. The non-canonical of `/contacto` and `/contactar` SHALL redirect (HTTP 301/308) to the canonical one instead of serving duplicate content.

#### Scenario: Non-canonical contact path redirects
- **WHEN** a crawler or user requests the non-canonical contact path
- **THEN** the server SHALL respond with a permanent redirect to the canonical contact path, not a 200 with duplicate content

#### Scenario: Internal links point at the canonical path only
- **WHEN** the rendered site is inspected for internal links to the contact page
- **THEN** every internal link (header, footer, FAQ CTA, etc.) SHALL point at the canonical contact path
