import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/commissions",
        destination: "/workshops",
        permanent: true,
      },
      {
        source: "/repairs",
        destination: "/workshops",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/workshops",
        permanent: true,
      },
      {
        source: "/portfolio/:slug",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
