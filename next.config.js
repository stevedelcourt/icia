/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_EXPORT ? 'export' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    ppr: false,
  },
  async redirects() {
    return [
      {
        source: '/accompagnements/citoyen',
        destination: '/accompagnements/citoyens',
        permanent: true,
      },
      {
        source: '/accompagnements/entreprise',
        destination: '/accompagnements/entreprises',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
