/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.wsj.net", "beta.ems.ladbiblegroup.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
  
  module.exports = nextConfig;
  