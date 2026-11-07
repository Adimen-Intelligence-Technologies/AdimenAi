import { getTranslations } from "next-intl/server";
import { Sparkles } from "lucide-react";
import { getPostBySlug, getPostImage, type BlogPost } from "@/lib/blog";
import { toLocalePath } from "@/lib/locale-path";
import type { AppLocale } from "@/i18n/routing";
import { Wrapper } from "../Wrapper";
import { BlogCard } from "../ui/BlogCard";

type Props = {
  locale: AppLocale;
  slugs: string[];
};

export async function WebDesignRelatedPosts({ locale, slugs }: Props) {
  const t = await getTranslations("webDesignPage.related");
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null);

  if (posts.length === 0) return null;

  return (
    <section className="border-b border-zinc-200">
      <Wrapper className="px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("badge")}
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              index={index}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tags[0] ?? ""}
              imageSrc={getPostImage(post)}
              href={toLocalePath(locale, `/blog/${post.slug}`)}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
