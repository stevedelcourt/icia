import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://icia.fr'),
  title: {
    default: 'ICIA - Institut Collectif de l\'IA',
    template: '%s | ICIA',
  },
  description: 'Un projet francais pour que chacun et chaque organisation puisse beneficier concretement de l\'intelligence artificielle.',
  keywords: ['IA', 'intelligence artificielle', 'formation IA', 'accompagnement IA', 'think tank IA', 'Marseille'],
  authors: [{ name: 'Institut Collectif de l\'IA' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://icia.fr',
    siteName: 'ICIA',
    title: 'ICIA - Institut Collectif de l\'IA',
    description: 'Un projet francais pour que chacun et chaque organisation puisse beneficier concretement de l\'intelligence artificielle.',
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
    description: 'Un projet francais pour que chacun et chaque organisation puisse beneficier concretement de l\'intelligence artificielle.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased bg-bg text-text">
        {children}
      </body>
    </html>
  )
}
