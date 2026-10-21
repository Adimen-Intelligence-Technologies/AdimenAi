import { getPostBySlug, getPostImage, getReadingTime, getRelatedPosts } from "@/lib/blog";
import { Wrapper } from "../Wrapper";
import { MarkdownPostBody } from "./MarkdownPostBody";
import { PostContactEmbed } from "./PostContactEmbed";
import { BlogCard } from "../ui/BlogCard";
import { JsonLd } from "../seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { toLocalePath } from "@/lib/locale-path";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

// Writers can place the form with `{{contacto}}` or `<!-- contacto -->` on its own line.
const CONTACT_MARKER = /^[ \t]*(?:\{\{\s*contact[oa]?\s*\}\}|<!--\s*contact[oa]?\s*-->)[ \t]*$/gim;

// The title is already rendered in the page header, so drop a leading `# Title`.
function stripLeadingTitle(content: string): string {
  return content.replace(/^\s*#\s+[^\n]*\n/, "");
}

// Splits the markdown where the contact form goes: at the marker if present,
// otherwise before the middle `##` section, otherwise at the end.
function splitForContact(content: string): [string, string] {
  const markerParts = content.split(CONTACT_MARKER);
  if (markerParts.length > 1) {
    return [markerParts[0], markerParts.slice(1).join("\n")];
  }

  const lines = content.split("\n");
  const headingLines: number[] = [];
  let inFence = false;
  lines.forEach((line, i) => {
    if (line.trimStart().startsWith("```")) inFence = !inFence;
    if (!inFence && /^##\s/.test(line)) headingLines.push(i);
  });

  if (headingLines.length < 2) {
    return [content, ""];
  }

  const splitAt = headingLines[Math.ceil(headingLines.length / 2)] ?? headingLines[headingLines.length - 1];
  return [lines.slice(0, splitAt).join("\n"), lines.slice(splitAt).join("\n")];
}

function dateLocale(locale: string): string {
  return locale === "en" ? "en-GB" : locale === "eu" ? "eu-ES" : "es-ES";
}

export async function BlogPostPage({ params }: Props) {
  const { slug, locale } = params;
  const language = (locale ?? "es") as AppLocale;
  const post = getPostBySlug(slug, language);

  if (!post) {
    notFound();
  }

  const t = await getTranslations("blogPost");
  const backToBlogHref = toLocalePath(language, "/blog");
  const postUrl = `${SITE_URL}${toLocalePath(language, `/blog/${slug}`)}`;
  const coverImage = getPostImage(post);
  const readingTime = getReadingTime(post.content);
  const relatedPosts = getRelatedPosts(slug, language, 4);
  const [beforeContact, afterContact] = splitForContact(stripLeadingTitle(post.content));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${coverImage}`,
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
    <div className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <JsonLd data={articleJsonLd} />
        <JsonLd data={breadcrumbJsonLd} />

        <Link
          href={backToBlogHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-[#6C47FF]"
        >
          <span aria-hidden="true">←</span> {t("back")}
        </Link>

        <header className="mt-8">
          <div className="max-w-4xl">
            {post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#6C47FF]/20 bg-[#6C47FF]/5 px-3 py-1 text-xs font-semibold text-[#6C47FF]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-950 text-balance sm:text-5xl lg:text-6xl animate-hero-fade">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-2xl">
                {post.excerpt}
              </p>
            )}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
              <span className="font-semibold text-zinc-900">{SITE_NAME}</span>
              {post.publishedAt && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(dateLocale(language), {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{t("readingTime", { minutes: readingTime })}</span>
            </p>
          </div>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[28px] border border-white/20 shadow-2xl shadow-black/5 sm:aspect-[21/9]">
            <Image
              src={coverImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1135]/30 to-transparent" />
          </div>
        </header>

        <div className="mt-14 grid gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 xl:gap-20">
          <article className="mx-auto w-full max-w-[680px] lg:mx-0 lg:justify-self-end">
            <MarkdownPostBody content={beforeContact} />
            <PostContactEmbed />
            {afterContact && <MarkdownPostBody content={afterContact} />}
          </article>

          {relatedPosts.length > 0 && (
            <aside aria-labelledby="related-posts-title" className="lg:sticky lg:top-8 lg:self-start">
              <h2
                id="related-posts-title"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6C47FF]"
              >
                {t("related")}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {relatedPosts.map((related, index) => (
                  <BlogCard
                    key={related.slug}
                    variant="compact"
                    index={index}
                    title={related.title}
                    excerpt={related.excerpt}
                    tag={related.tags[0] ?? ""}
                    imageSrc={getPostImage(related)}
                    href={toLocalePath(language, `/blog/${related.slug}`)}
                  />
                ))}
              </div>
              <Link
                href={backToBlogHref}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-[#6C47FF]"
              >
                {t("allPosts")} <span aria-hidden="true">→</span>
              </Link>
            </aside>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
