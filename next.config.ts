import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://65.0.139.121:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;