import {redirect} from 'next/navigation';

export default async function BlogRootPage() {
  redirect('/blog');
}
