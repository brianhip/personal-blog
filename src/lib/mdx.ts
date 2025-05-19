// MDX Config
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog'); // Directory to the content

export function getPostSlugs(): string[] {
    return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(BLOG_DIR, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        content,
    };
}