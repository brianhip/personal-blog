import { getPostSlugs, getPostBySlug } from '../lib/mdx';
import Link from 'next/link';

interface PostPreview {
  slug: string;
  title: string;
  date: string;
}

function getAllPosts(): PostPreview[] {
  return getPostSlugs()
    .map((slug) => {
      const { title, date } = getPostBySlug(slug.replace(/\.mdx$/, ''));
      return { slug: slug.replace(/\.mdx$/, ''), title, date };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Brian&apos;s Knowledge Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-accent1 hover:underline text-xl font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
