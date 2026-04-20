import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import { ScrollGradient } from '@/components/ScrollGradient'
import './globals.css'

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://icia.fr'),
  title: {
    default: 'ICIA - Institut Collectif de l\'IA',
    template: '%s | ICIA',
  },
  description: 'Un projet français pour que chacun et chaque organisation puisse bénéficier concrètement de l\'intelligence artificielle.',
  keywords: ['IA', 'intelligence artificielle', 'formation IA', 'accompagnement IA', 'think tank IA', 'France'],
  authors: [{ name: 'Institut Collectif de l\'IA' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://icia.fr',
    siteName: 'ICIA',
    title: 'ICIA - Institut Collectif de l\'IA',
    description: 'Un projet français pour que chacun et chaque organisation puisse bénéficier concrètement de l\'intelligence artificielle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Institut Collectif de l\'IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICIA - Institut Collectif de l\'IA',
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
        <ScrollGradient />
        {children}
      </body>
    </html>
  )
}
