import { getPostBySlug } from "@/lib/blog";
import { Wrapper } from "../Wrapper";
import { MarkdownPostBody } from "./MarkdownPostBody";
import { JsonLd } from "../seo/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toLocalePath } from "@/lib/locale-path";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

export async function BlogPostPage({ params }: Props) {
  const { slug, locale } = params;
  const language = (locale ?? "es") as AppLocale;
  const post = getPostBySlug(slug, language);

  if (!post) {
    notFound();
  }

  const backToBlogHref = toLocalePath(language, "/blog");
  const postUrl = `${SITE_URL}${toLocalePath(language, `/blog/${slug}`)}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt || undefined,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: postUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}${backToBlogHref}` },
      { "@type": "ListItem", position: 2, name: post.title, item: postUrl },
    ],
  };

  return (
    <Wrapper className="px-4 py-16 sm:px-6 lg:px-10 max-w-3xl mx-auto">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <Link
        href={backToBlogHref}
        className="inline-flex items-center text-sm text-zinc-500 hover:text-[#6C47FF] transition-colors mb-8"
      >
        ← Volver al blog
      </Link>

      <article>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF] mb-4">
            {post.tags?.[0] ?? "Blog"}
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          {post.publishedAt && (
            <p className="mt-3 text-sm text-zinc-400">
              {new Date(post.publishedAt).toLocaleDateString(locale === "en" ? "en-GB" : locale === "eu" ? "eu-ES" : "es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>

        <MarkdownPostBody content={post.content} />
      </article>
    </Wrapper>
  );
}
