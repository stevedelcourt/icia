'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function AProposPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.mariusia.com/a-propos',
    name: 'À propos - Marius IA',
    description: 'Marius IA est l\'institut collectif de l\'IA. Conseil en stratégie IA, conformité AI Act, gouvernance IA pour PME, ETI et organisations françaises.',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
      url: 'https://www.mariusia.com',
      logo: 'https://www.mariusia.com/MariusIA-logo.svg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4 Bd Euroméditerranée, Quai d\'Arenc',
        addressLocality: 'Marseille',
        postalCode: '13002',
        addressCountry: 'FR'
      },
      areaServed: ['Europe', 'France'],
      sameAs: ['https://www.mentivis.com']
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-36 pb-24" style={{ backgroundColor: '#f9f7f3' }}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">À propos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] mb-16">
              Construire des solutions adaptées<br />
              exactement à votre besoin,<br />
              votre métier, votre structure.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-20 mb-24"
          >
            <div>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Marius IA est aux systèmes d&apos;intelligence artificielle ce que les architectes sont aux bâtiments : définir le besoin, évaluer l&apos;impact, construire la solution avec les experts adaptés.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Notre rôle est d&apos;accompagner les organisations à intégrer l&apos;intelligence artificielle de manière structurée, conforme et pérenne. Nous intervenons de la formation des acteurs jusqu&apos;à la conception, la construction et l&apos;orchestration de systèmes d&apos;IA opérationnels.
              </p>
            </div>
            <div className="lg:pt-0">
              <div className="flex items-start gap-12 mb-6" style={{ alignItems: 'flex-start' }}>
                <img 
                  src="/images/MariusIA-logo-grey-monogram.svg" 
                  alt="Marius IA" 
                  className="h-[70px] w-auto"
                />
                <img 
                  src="/images/cyber-campus-logo.svg" 
                  alt="Campus Cyber.AI" 
                  className="h-[70px] w-auto"
                />
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                Marius IA est porté par Mentivis, depuis le Campus Cyber.AI Euromed de Marseille.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-200 pt-16 mb-24"
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-4">L&apos;Institut Collectif de l&apos;IA</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-12">Un bien et une fois communs</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-gray-500 leading-relaxed">
                  L&apos;Institut Collectif de l&apos;IA est une association en cours de développement. Sa mission : rendre accessibles à tous les compétences nécessaires pour comprendre et maîtriser l&apos;IA. Un lieu, une plateforme, un réseau d&apos;experts. Porté par la conviction que l&apos;intelligence artificielle ne doit pas rester entre les mains de quelques-uns.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-4">Mission et vision</h4>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Permettre à tous de prendre des décisions éclairées face à l&apos;IA et de bénéficier de ses avancées.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Notre vision : une transformation IA lisible, maîtrisée et alignée avec les valeurs de ceux qui la conduisent.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-200 pt-16"
          >
<div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                  <a
                    href="https://campuscyber.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Campus Cyber.AI
                  </a>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Basés au Campus Cyber.AI Euromed, nous évoluons au cœur d&apos;un écosystème actif dédié à la cybersécurité et à l&apos;intelligence artificielle. Un ancrage concret, dans une ville qui asume sa transformation.
                </p>
              </div>
              <img
                src="/images/cybercampus.webp"
                alt="Campus Cyber.AI"
                className="w-full md:w-[400px] h-auto object-cover self-start"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-all duration-200">
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}