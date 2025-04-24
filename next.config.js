/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub repo name is NOT yourusername.github.io,
  // uncomment and update the following line:
  // basePath: '/your-repo-name',
};

module.exports = nextConfig; 