import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // The English version of the site was removed (see ADAIDEV-175): /en/* used to be
  // indexable, so redirect it permanently to the Spanish equivalent instead of
  // returning 404 and losing the ranking signals.
  async redirects() {
    return [
      // statusCode 301 (not permanent: true, which is a 308) so the redirect is
      // read as a canonical move by search engines.
      { source: '/en', destination: '/', statusCode: 301 },
      { source: '/en/:path*', destination: '/:path*', statusCode: 301 },
    ];
  },
  // WebMCP origin trial token (https://developer.chrome.com/origintrials), see app/components/WebMcpTools.tsx.
  async headers() {
    const token = process.env.WEBMCP_ORIGIN_TRIAL_TOKEN;
    if (!token) return [];
    return [{ source: "/:path*", headers: [{ key: "Origin-Trial", value: token }] }];
  },
};

export default withNextIntl(nextConfig);
