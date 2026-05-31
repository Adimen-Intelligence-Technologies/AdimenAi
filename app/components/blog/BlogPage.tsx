import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { translatePostListItem } from "@/sanity/lib/translation";
import { Wrapper } from "../Wrapper";
import { BlogCard } from "../ui/BlogCard";
import type { Post } from "@/app/blog/types";
import { toLocalePath } from "@/lib/locale-path";

const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current) && (language == $language || language == "es" || !defined(language))] | order((language == $language) desc, publishedAt desc) {
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  tags,
  publishedAt,
  language
}`;

type Props = {
  locale?: string;
};

export async function BlogPage({ locale }: Props) {
  const language = locale ?? "es";
  const { data } = await sanityFetch({ query: POSTS_QUERY, params: { language } });
  const rawPosts = (data ?? []) as Post[];
  const posts = await Promise.all(
    rawPosts.map(async (post) => translatePostListItem(post, language as "es" | "en" | "eu")),
  );
  const blogBasePath = toLocalePath(language, "/blog");

  return (
    <div className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
            Ideas y casos prácticos de IA para empresas.
          </h1>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg tracking-tight">
            Descubre contenido pensado para líderes que quieren impulsar su
            negocio con agentes inteligentes y automatización.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {posts.map((post: Post, index: number) => (
            <BlogCard
              key={post._id}
              index={index}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tags?.[0] ?? ""}
              imageSrc={post.mainImage ?? "/background-03.jpg"}
              href={`${blogBasePath}/${post.slug}`}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
