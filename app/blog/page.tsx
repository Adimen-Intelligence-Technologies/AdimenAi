import { BlogPage } from "@/app/components/blog/BlogPage";

export const dynamic = "force-dynamic";

export default async function BlogRootPage() {
  return <BlogPage />;
}
