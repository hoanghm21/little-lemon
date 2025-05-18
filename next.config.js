/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  basePath: "/little-lemon",
};
module.exports = nextConfig;