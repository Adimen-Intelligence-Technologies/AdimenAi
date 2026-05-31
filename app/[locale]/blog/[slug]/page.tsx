import { BlogPostPage } from "@/app/components/blog/BlogPostPage";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function LocaleBlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  return <BlogPostPage params={{ slug, locale }} />;
}
