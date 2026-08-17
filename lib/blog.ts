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
    publishedAt: data.publishedAt ? String(data.publishedAt) : "",
    language: (data.language as AppLocale) ?? locale,
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
