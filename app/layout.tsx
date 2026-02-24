import type { Metadata } from 'next'
import { Lato, Open_Sans, Merriweather } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-lato',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-merriweather',
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
    <html lang="fr" className={`${lato.variable} ${openSans.variable} ${merriweather.variable}`}>
      <body className="antialiased bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  )
}
