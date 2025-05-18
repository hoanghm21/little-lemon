/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // <-- Add this line
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};
module.exports = nextConfig;