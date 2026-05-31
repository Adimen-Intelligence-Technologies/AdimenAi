import { groq } from "next-sanity";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { translatePostContent } from "@/sanity/lib/translation";
import { Wrapper } from "../Wrapper";
import { PostBody } from "../../blog/[slug]/PostBody";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { toLocalePath } from "@/lib/locale-path";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug && (language == $language || language == "es" || !defined(language))] | order((language == $language) desc)[0] {
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  body,
  tags,
  publishedAt,
  language
}`;

type Props = {
  params: {
    slug: string;
    locale?: string;
  };
};

export async function BlogPostPage({ params }: Props) {
  const { slug, locale } = params;
  const language = locale ?? "es";
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug, language },
  });

  let post = data as
    | {
        _id: string;
        title: string;
        excerpt: string;
        slug: string;
        mainImage?: string;
        mainImageAlt?: string;
        body: unknown;
        tags?: string[];
        publishedAt?: string;
        language?: string;
      }
    | null;

  const { isEnabled: isDraftMode } = await draftMode();

  if (post && language !== "es" && post.language !== language) {
    post = await translatePostContent(post, language as "es" | "en" | "eu");
  }

  if (!post) {
    notFound();
  }

  const backToBlogHref = toLocalePath(language, "/blog");

  return (
    <Wrapper className="px-4 py-16 sm:px-6 lg:px-10 max-w-3xl mx-auto">
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
              {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>

        {post.mainImage && (
          <div className="relative aspect-video mb-10 overflow-hidden rounded-[28px]">
            <Image
              src={post.mainImage}
              alt={post.mainImageAlt ?? ""}
              fill
              className="object-cover"
            />
          </div>
        )}

        {post.body ? <PostBody value={post.body} /> : null}
      </article>

      <SanityLive includeDrafts={isDraftMode} />
    </Wrapper>
  );
}
