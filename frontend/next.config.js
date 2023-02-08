/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/strapi/:path*",
        destination: "http://127.0.0.1:1337/:path*", // Proxy to Backend
      },
    ];
  },
};
