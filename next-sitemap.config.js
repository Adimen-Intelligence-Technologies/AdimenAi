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
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/api"] },
    ],
  },
};
