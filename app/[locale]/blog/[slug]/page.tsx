import { BlogPostPage } from "@/app/components/blog/BlogPostPage";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { routing, type AppLocale } from "@/i18n/routing";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as AppLocale);

  if (!post) {
    return buildMetadata({
      locale: locale as AppLocale,
      path: `/blog/${slug}`,
      title: "AdimenAI",
      description: "",
    });
  }

  return buildMetadata({
    locale: locale as AppLocale,
    path: `/blog/${slug}`,
    title: `${post.title} | AdimenAI`,
    description: post.metaDescription,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function LocaleBlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!getPostBySlug(slug, locale as AppLocale)) {
    notFound();
  }

  return <BlogPostPage params={{ slug, locale }} />;
}
