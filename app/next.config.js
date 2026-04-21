/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Workshops',
        destination: '/workshops',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;