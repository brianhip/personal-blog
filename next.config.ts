// next.config.ts
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export" as const, // for Hostinger compatibility
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true, // required for static export hosting
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Using ES module export syntax for consistency
export default withMDX(nextConfig);