/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bouquetesencias.com',
      },
    ],
  },
}

module.exports = nextConfig
