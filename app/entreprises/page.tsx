'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const COLORS = {
  green: { r: 189, g: 245, b: 171 },
  white: { r: 255, g: 255, b: 255 },
}

function interpolateToWhite(progress: number): string {
  const { r, g, b } = COLORS.green
  const { r: r2, g: g2, b: b2 } = COLORS.white
  const eased = 1 - Math.pow(1 - progress, 3)
  const R = Math.round(r + (r2 - r) * eased)
  const G = Math.round(g + (g2 - g) * eased)
  const B = Math.round(b + (b2 - b) * eased)
  return `rgb(${R}, ${G}, ${B})`
}

const navActeurs = [
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Collectivités et administrations', href: '/pouvoirs-publics' },
  { label: 'Écoles, CFA, Universités', href: '/education' },
  { label: 'Industries créatives', href: '/secteurs-creatifs' },
  { label: 'Grand public', href: '/citoyens' },
]

const axes = [
  { num: '01', title: 'Diagnostic IA et AI Act', description: 'Avant de transformer quoi que ce soit, comprendre où vous en êtes. Cartographie des usages réels, analyse des risques réglementaires, feuille de route sur 12 mois. Concret, pas théorique.', href: '/diagnostic' },
  { num: '02', title: 'Formations et acculturation', description: 'Vos équipes utilisent déjà l\'IA, souvent sans vous le dire et parfois sans les bons réflexes. On fait en sorte qu\'elles le fassent bien, dans un cadre sécurisé et adapté à vos métiers.', href: '/formations' },
  { num: '03', title: 'Transformation IA', description: 'Passer de l\'expérimentation dispersée à une pratique quotidienne cohérente. Gouvernance, montée en compétences, gestion du changement : on vous accompagne sur la durée, pas seulement sur le lancement.', href: '/transformation' },
  { num: '04', title: 'Partenaire support long terme', description: 'Les questions sur l\'IA ne s\'arrêtent pas après une mission. Nous restons disponibles pour vous aider à décider, en continu, sans conflit d\'intérêt avec un éditeur ou un intégrateur.', href: '/partenaire' },
]

export default function EntreprisesPage() {
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

  const heroBackground = interpolateToWhite(scrollProgress)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.mariusia.com/entreprises',
    name: 'Conseil IA pour PME/ETI - Marius IA',
    description: 'Accompagnement IA pour PME et ETI. Diagnostic, formations, transformation. L\'AI Act entre en vigueur août 2026 - anticipez avec méthode.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
    },
    areaServed: ['FR'],
    serviceType: ['AI Consulting', 'AI Strategy', 'AI Compliance'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="pt-36 pb-24" style={{ backgroundColor: heroBackground }}>
        <div className="max-w-6xl mx-4 md:mx-auto md:px-8">
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
                  <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 flex-shrink-0 ${item.href === '/entreprises' ? 'text-black font-medium' : ''}`}>
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
                <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/entreprises' ? 'text-black font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Pour qui ?</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">PME / ETI</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">L'AI Act entre en vigueur en août 2026. Mais ce n'est pas la seule raison d'agir. Vos concurrents avancent, vos collaborateurs improvisent, et les décisions que vous prenez aujourd'hui sur l'IA conditionneront votre position dans deux ans. Autant les prendre avec méthode.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-colors duration-200">Contactez-nous</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/overworked.webp" alt="Entreprises" className="w-full" />
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-200 pt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-12">Notre approche</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {axes.map((axe) => (
                <div key={axe.num} className="p-10 border border-gray-200 hover:border-black transition-colors duration-300 group">
                  <span className="text-sm text-gray-400 block mb-3">{axe.num}</span>
                  <h3 className="text-xl  text-black mb-3 group-hover:text-gray-600 transition-colors duration-200">{axe.title}</h3>
                  <p className="text-gray-500 mb-5">{axe.description}</p>
                  <Link href={axe.href} className="text-base text-black hover:underline transition-colors duration-200">En savoir plus</Link>
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
