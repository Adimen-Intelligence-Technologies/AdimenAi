import { BlogPostPage } from "@/app/components/blog/BlogPostPage";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export const dynamic = "force-dynamic";

export default async function LocaleBlogPostPage({ params }: Props) {
  return <BlogPostPage params={params} />;
}
