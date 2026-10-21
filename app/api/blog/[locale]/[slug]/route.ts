import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { toLocalePath } from "@/lib/locale-path";
import { routing, type AppLocale } from "@/i18n/routing";

// Static, build-time post content used by the WebMCP tools (no runtime fs access).
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function GET(_request: Request, ctx: RouteContext<"/api/blog/[locale]/[slug]">) {
  const { locale, slug } = await ctx.params;
  const language = locale as AppLocale;
  const post = getPostBySlug(slug, language);

  if (!post) {
    return Response.json({ error: "not_found" }, { status: 404 });
  }

  return Response.json({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    publishedAt: post.publishedAt,
    url: toLocalePath(language, `/blog/${post.slug}`),
    content: post.content,
  });
}
