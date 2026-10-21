import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const BLOG_DIR = path.join(process.cwd(), "blogs");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  metaDescription: string;
  publishedAt: string;
  language: AppLocale;
  image?: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}

function readPostFile(slug: string, locale: AppLocale): BlogPost | null {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    title: data.title ?? "",
    slug: data.slug ?? slug,
    excerpt: data.excerpt ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    metaDescription: data.metaDescription ?? data.excerpt ?? "",
    // gray-matter parses YAML dates into Date objects; keep an ISO date so sorting and JSON-LD work.
    publishedAt:
      data.publishedAt instanceof Date
        ? data.publishedAt.toISOString().slice(0, 10)
        : data.publishedAt
          ? String(data.publishedAt)
          : "",
    language: (data.language as AppLocale) ?? locale,
    image: typeof data.image === "string" ? data.image : undefined,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) =>
      routing.locales.some((locale) => fs.existsSync(path.join(BLOG_DIR, slug, `${locale}.md`)))
    );
}

export function getPostBySlug(slug: string, locale: AppLocale): BlogPost | null {
  return readPostFile(slug, locale) ?? readPostFile(slug, routing.defaultLocale);
}

export function getAllPosts(locale: AppLocale): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

const FALLBACK_IMAGES = ["/background-03.jpg", "/background-04.jpg", "/background-05.jpg", "/background-06.jpg"];

// Cover image from frontmatter `image`, otherwise a stable fallback derived from the slug.
export function getPostImage(post: Pick<BlogPost, "slug" | "image">): string {
  if (post.image) return post.image;
  const hash = [...post.slug].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return FALLBACK_IMAGES[hash % FALLBACK_IMAGES.length];
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// Posts sharing the most tags first, then most recent.
export function getRelatedPosts(slug: string, locale: AppLocale, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug, locale);
  const currentTags = new Set((current?.tags ?? []).map((tag) => tag.toLowerCase()));

  return getAllPosts(locale)
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
