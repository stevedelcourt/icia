'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const niveaux = [
  { nom: "Essentiel", contenu: ["Veille réglementaire IA personnalisée", "2h office hours", "Alertes AI Act"] },
  { nom: "Stratégique", contenu: ["Tout Essentiel", "Relecture projets IA", "Revue prestataires techniques", "4h office hours"] },
  { nom: "Dirigeant", contenu: ["Tout Stratégique", "1 comité IA/trimstre", "Accés événements Institut", "Priorité diagnostics"] },
]

export default function PartenairePage() {
  const heroRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect()
      const heroHeight = hero.offsetHeight
      const maxScroll = heroHeight * 1.5
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const updateScrollButtons = () => {
      setCanScrollLeft(container.scrollLeft > 10)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }

    updateScrollButtons()
    container.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      container.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  const scrollMenu = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = container.clientWidth * 0.7
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  const heroBackground = `linear-gradient(to bottom, #f8f9fa ${100 - scrollProgress * 100}%, white 100%)`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.mariusia.com/partenaire',
    name: 'Partenaire Support Long Terme - Marius IA',
    description: 'Abonnement conseil IA : veille réglementaire, relecture de projets, alertes AI Act. 3 niveaux : Essentiel, Stratégique, Dirigeant.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
    },
    areaServed: ['FR', 'Europe'],
    serviceType: ['AI Consulting', 'Ongoing Support', 'Regulatory Monitoring'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <ScrollGradient />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/#offres" className="text-base text-gray-400 hover:text-black transition-colors duration-200 mb-10 inline-block">← Retour</Link>
          </motion.div>

          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-400 uppercase">OFFRE 04</span>
            <h1 className="text-4xl md:text-5xl  font-bold text-black mt-3 mb-3">Partenaire support long terme</h1>
            <p className="text-xl font-medium text-gray-600">Abonnement</p>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-5">Promesse</h2>
            <p className="text-2xl text-black max-w-3xl leading-relaxed">Un partenaire indépendant pour vous aider à décider sur l'IA, en continu - veille, conseil, arbitrage, alerte réglementaire. Votre numéro à appeler quand l'IA touche vos sujets.</p>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-10">3 niveaux d'abonnement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {niveaux.map((niveau, i) => (
                <motion.div 
                  key={niveau.nom} 
                  className="border border-gray-200 p-10 hover:border-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-black mb-4">{niveau.nom}</h3>
                  <ul className="space-y-3">
                    {niveau.contenu.map((item) => (
                      <li key={item} className="text-base text-gray-500 flex items-start gap-3">
                        <span className="text-gray-400">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-3">Notre approche</h2>
            <p className="text-lg text-gray-500">Zero dependance : 100% conseil pur, aucune sous-traitance technique requise</p>
          </motion.div>

          <motion.div className="flex gap-5" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-colors duration-200"><span className="md:hidden">Échanger</span><span className="hidden md:inline">Contactez-nous</span></Link>
            <Link href="/" className="inline-block px-10 py-4 text-lg text-black border-2 border-gray-200 hover:border-black transition-colors duration-200"><span className="md:hidden">Retour</span><span className="hidden md:inline">Retour à l'accueil</span></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
