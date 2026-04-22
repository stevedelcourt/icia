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
  metadataBase: new URL('https://mariusia.com'),
  icons: {
    icon: '/images/favicon_io/favicon.ico',
    apple: '/images/favicon_io/apple-touch-icon.png',
  },
  title: {
    default: 'Marius IA | Les architectes de l\'IA - formation et accompagnement',
    template: '%s | Marius IA - Les architectes de l\'IA',
  },
  description: "Marius IA, les architectes de l'IA. Formation, conseil et accompagnement pour entreprises, écoles et organisations. Passage à l'usage concret de l'intelligence artificielle.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mariusia.com',
    siteName: 'Marius IA - Les architectes de l\'IA',
    title: 'Marius IA | Les architectes de l\'IA',
    description: "Formation et accompagnement sur mesure par les architectes de l'IA pour transformer vos organisations.",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marius IA - Les architectes de l\'IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marius IA | Les architectes de l\'IA',
    description: "Formation et accompagnement en intelligence artificielle par les architectes de l'IA.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={workSans.variable}>
<body className="antialiased bg-transparent text-text" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <ScrollGradient />
      {children}
      <SpeedBanner />
      <Script src="/js/tarteaucitron.min.js" strategy="beforeInteractive" />
      <Script src="/js/cookies.js" strategy="beforeInteractive" />
    </body>
    </html>
  )
}
