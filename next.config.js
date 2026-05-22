/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as a fully static site — works on any web host (Hostinger, etc.)
  output: "export",

  // Disable Next.js image optimization (not available on static hosts)
  images: {
    unoptimized: true,
  },

  // Ensure trailing slashes so Hostinger routes /about → /about/index.html
  trailingSlash: true,
};

module.exports = nextConfig;
