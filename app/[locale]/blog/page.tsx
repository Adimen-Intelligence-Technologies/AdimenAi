import { BlogPage } from "@/app/components/blog/BlogPage";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleBlogPage({ params }: Props) {
  const { locale } = await params;
  return <BlogPage locale={locale} />;
}
