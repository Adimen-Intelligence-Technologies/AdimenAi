import { BlogPage } from "@/app/components/blog/BlogPage";

type Props = {
  params: {
    locale: string;
  };
};

export default async function LocaleBlogPage({ params }: Props) {
  return <BlogPage locale={params.locale} />;
}
