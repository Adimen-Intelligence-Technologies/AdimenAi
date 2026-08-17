import { getAllPosts } from '@/lib/blog';
import { Wrapper } from '../Wrapper';
import { BlogCard } from '../ui/BlogCard';
import { getTranslations } from 'next-intl/server';
import { toLocalePath } from '@/lib/locale-path';
import type { AppLocale } from '@/i18n/routing';

const FALLBACK_IMAGES = ['/background-03.jpg', '/background-04.jpg', '/background-05.jpg', '/background-06.jpg'];

type Props = {
  locale?: string;
};

export async function BlogPage({ locale }: Props) {
  const language = (locale ?? 'es') as AppLocale;
  const posts = getAllPosts(language);
  const blogBasePath = toLocalePath(language, '/blog');
  const t = await getTranslations('blogPage');

  return (
    <div className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">{t('eyebrow')}</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">{t('title')}</h1>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg tracking-tight">{t('description')}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              index={index}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tags?.[0] ?? ''}
              imageSrc={FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]}
              href={`${blogBasePath}/${post.slug}`}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
