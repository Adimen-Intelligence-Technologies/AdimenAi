## Purpose

Keeps the homepage's large media assets (hero background image, marketing videos) from delaying Largest Contentful Paint and consuming unnecessary bandwidth, since Core Web Vitals are a ranking signal and the current implementation loads a ~1MB unoptimized background and two multi-megabyte autoplaying videos eagerly.

## ADDED Requirements

### Requirement: Hero background is optimized and prioritized
The homepage hero's background image SHALL be served through the site's image optimization pipeline (responsive sizes, modern format, compression) and SHALL be marked as a priority/preload candidate since it is the page's largest above-the-fold element.

#### Scenario: Hero image is optimized, not a raw static file
- **WHEN** the homepage is requested
- **THEN** the hero background SHALL be delivered as an optimized, appropriately-sized image for the requesting viewport rather than the full unoptimized source file

### Requirement: Large videos do not block or inflate initial page load
Marketing videos embedded on the homepage SHALL NOT eagerly download their full source on initial page load unless they are visible in the viewport, and SHALL NOT autoplay a large file without user interaction or in-view detection.

#### Scenario: Below-the-fold video does not download until needed
- **WHEN** the homepage is requested and the video section is below the fold
- **THEN** the video's full source SHALL NOT be fetched until the section scrolls into view (or the user interacts with it)
