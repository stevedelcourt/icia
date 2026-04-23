'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const programmes = [
  { title: 'Inclusion numérique', description: 'Une partie de vos administrés sera laissée de côté si personne ne s\'en préoccupe activement. On vous aide à construire des dispositifs qui réduisent la fracture plutôt qu\'à l\'aggraver.' },
  { title: 'Transformation des services publics', description: 'Identifier les cas d\'usage pertinents, évaluer les risques, prioriser ce qui améliore vraiment le service rendu. Ni résistance ni adoption aveugle : une démarche structurée.' },
  { title: 'Remobilisation professionnelle', description: 'Les agents publics sont en première ligne des changements induits par l\'IA. Les accompagner, c\'est aussi éviter que la transformation se fasse contre eux.' },
  { title: 'Observatoire territorial', description: 'Piloter une politique IA sur un territoire, ça suppose de voir ce qui se passe vraiment. On vous donne les outils pour suivre l\'adoption, mesurer les effets et ajuster.' },
]

const navActeurs = [
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Collectivités et administrations', href: '/pouvoirs-publics' },
  { label: 'Écoles, CFA, Universités', href: '/education' },
  { label: 'Industries créatives', href: '/secteurs-creatifs' },
  { label: 'Professions libérales', href: '/professions-liberales' },
  { label: 'Grand public', href: '/citoyens' },
]

export default function PouvoirsPublicsPage() {
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
    '@id': 'https://www.mariusia.com/pouvoirs-publics',
    name: 'Conseil IA pour Collectivités et Administrations - Marius IA',
    description: 'Inclusion numérique, transformation des services publics, remobilisation professionnelle, observatoire territorial.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
    },
    areaServed: ['FR'],
    serviceType: ['Public Sector AI Consulting', 'Digital Inclusion', 'Service Transformation'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-36 pb-24" style={{ background: heroBackground }}>
        <div className="max-w-6xl mx-auto px-8">
          <nav ref={heroRef} className="mb-12 md:mb-16">
            <div className="lg:hidden relative flex items-center">
              <button
                onClick={() => scrollMenu('left')}
                className={`absolute left-0 z-10 transition-opacity flex items-center justify-center ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ background: '#bdf5ab', width: '32px', height: '32px', padding: 0 }}
                aria-label="Scroll left"
              >
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div
                ref={scrollRef}
                className="flex gap-4 text-sm text-gray-400 pl-7 pr-7 overflow-x-auto scrollbar-hide whitespace-nowrap"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', background: '#bdf5ab' }}
              >
                {navActeurs.map((item) => (
                  <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 flex-shrink-0 ${item.href === '/pouvoirs-publics' ? 'text-black font-medium' : ''}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => scrollMenu('right')}
                className={`absolute right-0 z-10 transition-opacity flex items-center justify-center ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ background: '#bdf5ab', width: '32px', height: '32px', padding: 0 }}
                aria-label="Scroll right"
              >
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex gap-8 text-sm text-gray-400">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/pouvoirs-publics' ? 'text-black font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Pour qui ?</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">Collectivités et administrations</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">L'IA entre dans les services publics. Parfois par choix, parfois par obligation, souvent sans cadre suffisant. Ce qui est en jeu, c'est l'équité d'accès, la confiance des citoyens, et la capacité de vos agents à travailler autrement. Ça mérite une approche sérieuse, indépendante des vendeurs de solutions.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-colors duration-200">Contactez-nous</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/crea.webp" alt="Pouvoirs publics" className="w-full" />
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-200 pt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programmes.map((prog) => (
                <div key={prog.title} className="p-10 border border-gray-200 hover:border-black transition-colors duration-300">
                  <h3 className="text-xl  text-black mb-3">{prog.title}</h3>
                  <p className="text-gray-500">{prog.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
