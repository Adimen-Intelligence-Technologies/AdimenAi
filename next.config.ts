import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // WebMCP origin trial token (https://developer.chrome.com/origintrials), see app/components/WebMcpTools.tsx.
  async headers() {
    const token = process.env.WEBMCP_ORIGIN_TRIAL_TOKEN;
    if (!token) return [];
    return [{ source: "/:path*", headers: [{ key: "Origin-Trial", value: token }] }];
  },
};

export default withNextIntl(nextConfig);
