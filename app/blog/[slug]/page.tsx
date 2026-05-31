import {BlogPostPage} from '@/app/components/blog/BlogPostPage';
import {getLocale} from 'next-intl/server';

type Props = {
  params: Promise<{slug: string}>;
};

export const dynamic = 'force-dynamic';

export default async function PostRootPage({params}: Props) {
  const {slug} = await params;
  const locale = await getLocale();

  return <BlogPostPage params={{slug, locale}} />;
}
