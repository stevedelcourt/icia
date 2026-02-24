/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_EXPORT ? 'export' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
