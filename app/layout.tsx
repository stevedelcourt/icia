import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import ScrollGradient from '@/components/ScrollGradient'
import './globals.css'

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mariusia.com'),
  title: {
    default: 'MariusIA - Institut Collectif de l\'IA',
    template: '%s | MariusIA',
  },
  description: 'Un projet français pour que chacun et chaque organisation puisse bénéficier concrètement de l\'intelligence artificielle.',
  keywords: ['IA', 'intelligence artificielle', 'formation IA', 'accompagnement IA', 'think tank IA', 'France'],
  authors: [{ name: 'Institut Collectif de l\'IA' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mariusia.com',
    siteName: 'MariusIA',
    title: 'MariusIA - Institut Collectif de l\'IA',
    description: 'Un projet français pour que chacun et chaque organisation puisse bénéficier concrètement de l\'intelligence artificielle.',
    images: [
      {
        url: '/MariusIA-logo-monogram.png',
        width: 1200,
        height: 630,
        alt: 'Institut Collectif de l\'IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MariusIA - Institut Collectif de l\'IA',
    description: 'Un projet français pour que chacun et chaque organisation puisse bénéficier concrètement de l\'intelligence artificielle.',
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
        <script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.9.5/tarteaucitron.min.js"></script>
        <ScrollGradient />
        {children}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NJWMZE9B0P"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJWMZE9B0P');
        `}} />
        <script src="/js/cookies.js"></script>
      </body>
    </html>
  )
}
