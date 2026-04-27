import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/homepage-v2.html',
      },
    ];
  },
};

export default nextConfig;
