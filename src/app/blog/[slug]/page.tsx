// import { getPostBySlug, getPostSlugs } from '../../../lib/mdx';
import { getPostSlugs } from '../../../lib/mdx';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">Loading: {params.slug}</h1>
        <p>This is where the blog post content will appear.</p>
      </main>
    );
  }
  