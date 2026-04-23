import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import Script from 'next/script'
import ScrollGradient from '@/components/ScrollGradient'
import SpeedBanner from '@/components/SpeedBanner'
import './globals.css'

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mariusia.com'),
  icons: {
    icon: '/images/favicon_io/favicon.ico',
    apple: '/images/favicon_io/apple-touch-icon.png',
  },
  title: {
    default: 'Marius IA | Institut Conseil IA - Diagnostic, Formation, Transformation',
    template: '%s | Marius IA',
  },
  description: 'Marius IA, l\'institut collectif de l\'IA. Conseil en stratégie IA et conformité AI Act pour PME, ETI et organisations françaises. Diagnostic, formations, transformation. Marseille.',
  keywords: ['conseil IA', 'intelligence artificielle', 'AI Act', 'conformité IA', 'transformation IA', 'PME', 'ETI', 'formation IA', 'audit IA', 'gouvernance IA', 'Marseille', 'France'],
  authors: [{ name: 'Mentivis SAS', url: 'https://www.mentivis.com' }],
  creator: 'Mentivis SAS',
  publisher: 'Mentivis SAS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.mariusia.com',
    siteName: 'Marius IA - Institut Collectif de l\'IA',
    title: 'Marius IA | Institut Conseil IA - Diagnostic, Formation, Transformation',
    description: 'Conseil en stratégie IA et conformité AI Act. Accompagnement des organisations françaises : diagnostic, formations, transformation. Marseille.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marius IA - Institut Collectif de l\'IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marius IA | Institut Conseil IA',
    description: 'Conseil en stratégie IA et conformité AI Act pour PME, ETI et organisations.',
  },
  alternates: {
    canonical: 'https://www.mariusia.com',
    languages: {
      'fr-FR': 'https://www.mariusia.com',
    },
  },
  verification: {
    google: 'pEdbpM4Yo2aeiF2mUp1KU5sClwLo7xebz1TP1R450S0',
  },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.mariusia.com/#organization',
  name: 'Marius IA',
  alternateName: 'Institut Collectif de l\'IA',
  url: 'https://www.mariusia.com',
  logo: 'https://www.mariusia.com/images/MariusIA-logo.svg',
  description: 'Institut de conseil en intelligence artificielle. Accompagnement des organisations dans leur transformation IA avec indépendance et résultats mesurables.',
  areaServed: [
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Europe' },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'AI Act',
    'EU AI Regulation',
    'AI Governance',
    'Machine Learning',
    'Change Management',
    'Digital Transformation',
  ],
  serviceType: [
    'AI Strategy Consulting',
    'AI Compliance',
    'AI Training',
    'Digital Transformation',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@mariusia.com',
    areaServed: 'FR',
    availableLanguage: ['French', 'English'],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Mentivis SAS',
    url: 'https://www.mentivis.com',
  },
  location: {
    '@type': 'Place',
    name: 'Campus Cyber.AI Euromed',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marseille',
      addressCountry: 'FR',
    },
  },
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.mariusia.com/#website',
  url: 'https://www.mariusia.com',
  name: 'Marius IA - Institut Collectif de l\'IA',
  description: 'Conseil en stratégie IA et conformité AI Act pour PME et organisations françaises.',
  publisher: { '@id': 'https://www.mariusia.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.mariusia.com/contact',
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.mariusia.com',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={workSans.variable}>
      <body className="antialiased bg-transparent text-text" style={{ fontFamily: 'Work Sans, sans-serif' }}>
        <Script
          type="application/ld+json"
          id="jsonld-organization"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Script
          type="application/ld+json"
          id="jsonld-website"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <ScrollGradient />
        {children}
        <SpeedBanner />
        <Script src="/js/tarteaucitron.min.js" strategy="beforeInteractive" />
        <Script src="/js/cookies.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}