import { getAllPosts } from "@/lib/blog";
import { toLocalePath } from "@/lib/locale-path";
import { routing, type AppLocale } from "@/i18n/routing";

// Static, build-time index of the blog used by the WebMCP tools (no runtime fs access).
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, ctx: RouteContext<"/api/blog/[locale]">) {
  const { locale } = await ctx.params;
  const language = locale as AppLocale;

  const posts = getAllPosts(language).map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    publishedAt: post.publishedAt,
    url: toLocalePath(language, `/blog/${post.slug}`),
  }));

  return Response.json({ posts });
}
