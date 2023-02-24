/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["res.cloudinary.com"],
  },
};
module.exports = withContentlayer(nextConfig);
