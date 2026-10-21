const fs = require("fs");
const path = require("path");

const SITE_URL = process.env.SITE_URL || "https://www.adimenai.com";
const LOCALES = ["es", "en", "eu"];
const DEFAULT_LOCALE = "es";

// Every static, publicly indexable route under app/[locale]/.
const STATIC_ROUTES = ["/", "/blog", "/contacto", "/hosteleria", "/privacidad", "/terminos"];

function localePath(locale, route) {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (route === "/") {
    return prefix || "/";
  }
  return `${prefix}${route}`;
}

// Mirrors lib/blog.ts#getAllPostSlugs: a slug counts if it has at least one
// locale markdown file (missing locales fall back to Spanish content, but
// the URL itself still resolves and should be listed).
function getBlogSlugs() {
  const blogsDir = path.join(__dirname, "blogs");
  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  return fs
    .readdirSync(blogsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => LOCALES.some((locale) => fs.existsSync(path.join(blogsDir, slug, `${locale}.md`))));
}

function absoluteHref(locale, route) {
  const localizedPath = localePath(locale, route);
  return localizedPath === "/" ? SITE_URL : `${SITE_URL}${localizedPath}`;
}

function alternateRefsFor(route) {
  // next-sitemap resolves alternateRefs[].href as relative to the entry's own
  // loc unless hrefIsAbsolute is set - without it, every href gets mangled.
  const refs = LOCALES.map((locale) => ({
    href: absoluteHref(locale, route),
    hreflang: locale,
    hrefIsAbsolute: true,
  }));
  refs.push({ href: absoluteHref(DEFAULT_LOCALE, route), hreflang: "x-default", hrefIsAbsolute: true });
  return refs;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/api/*", "/seleccionar-cookies", "/_not-found"],
  additionalPaths: async () => {
    const allRoutes = [...STATIC_ROUTES, ...getBlogSlugs().map((slug) => `/blog/${slug}`)];

    return allRoutes.flatMap((route) =>
      LOCALES.map((locale) => ({
        loc: localePath(locale, route),
        changefreq: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1.0 : 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: alternateRefsFor(route),
      }))
    );
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api"] },
    ],
  },
};
