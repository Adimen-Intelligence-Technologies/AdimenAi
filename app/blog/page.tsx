import {BlogPage} from '@/app/components/blog/BlogPage';
import {getLocale} from 'next-intl/server';

export default async function BlogRootPage() {
  const locale = await getLocale();

  return <BlogPage locale={locale} />;
}
