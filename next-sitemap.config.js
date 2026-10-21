/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://adimenai.com",
  generateRobotsTxt: true,
  exclude: [
    "/admin/*",
    "/seleccionar-cookies",
    "/api/*",
    "/_not-found",
  ],
  alternateRefs: [
    { href: "https://adimenai.com", hreflang: "es" },
    { href: "https://adimenai.com/en", hreflang: "en" },
    { href: "https://adimenai.com/eu", hreflang: "eu" },
    { href: "https://adimenai.com", hreflang: "x-default" },
  ],
  transform: async (config, path) => {
    const excludedPaths = ["/admin", "/seleccionar-cookies", "/api"];
    if (excludedPaths.some((p) => path.startsWith(p))) {
      return null;
    }
    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const siteUrl = config.siteUrl;
    const locales = ["es", "en", "eu"];
    const posts = await getBlogSlugs();
    const paths = [];
    for (const locale of locales) {
      for (const slug of posts) {
        const prefix = locale === "es" ? "" : `/${locale}`;
        const pageRefs = [
          { href: `${siteUrl}/blog/${slug}`, hreflang: "es" },
          { href: `${siteUrl}/en/blog/${slug}`, hreflang: "en" },
          { href: `${siteUrl}/eu/blog/${slug}`, hreflang: "eu" },
          { href: `${siteUrl}/blog/${slug}`, hreflang: "x-default" },
        ];
        paths.push({
          loc: `${siteUrl}${prefix}/blog/${slug}`,
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: pageRefs,
        });
      }
    }
    return paths;
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/api"] },
    ],
  },
};

async function getBlogSlugs() {
  try {
    const { createClient } = require("@sanity/client");
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01",
      useCdn: true,
    });
    const slugs = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`
    );
    return [...new Set(slugs.map((s) => s.slug))];
  } catch {
    return [];
  }
}
