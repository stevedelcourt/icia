'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const navActeurs = [
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Collectivités et administrations', href: '/pouvoirs-publics' },
  { label: 'Écoles, CFA, Universités', href: '/education' },
  { label: 'Industries créatives', href: '/secteurs-creatifs' },
  { label: 'Professions libérales', href: '/professions-liberales' },
  { label: 'Grand public', href: '/citoyens' },
]

const axes = [
  { title: 'Bibliothèque pédagogique', description: 'Des ressources libres d\'accès, construites pour être utilisées directement en cours, à tous les niveaux d\'enseignement et dans toutes les disciplines.' },
  { title: 'Création de filière', description: 'Certains métiers n\'existaient pas il y a trois ans. D\'autres ont profondément changé. On vous aide à construire des parcours qui préparent vraiment à ce qui attend vos étudiants.' },
  { title: 'Formation des formateurs', description: 'Avant d\'enseigner l\'IA, il faut la comprendre. On accompagne vos équipes pédagogiques avec une approche adaptée à leur contexte, sans les noyer dans la technique.' },
  { title: 'Certifications', description: 'Des certifications reconnues par les employeurs, pour que la maîtrise de l\'IA par vos étudiants devienne un atout visible sur le marché du travail.' },
  { title: 'Développement', description: 'Structurer une offre de formation en IA prend du temps et demande de la méthode. On vous accompagne dans la durée, pas seulement au lancement.' },
  { title: 'Accréditation institutionnelle', description: 'Pour les établissements qui souhaitent afficher un engagement formel et crédible sur l\'IA, nous accompagnons la démarche d\'accréditation ICIA de bout en bout.' },
]

export default function EducationPage() {
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
    '@id': 'https://www.mariusia.com/education',
    name: 'Conseil IA pour Écoles, CFA, Universités - Marius IA',
    description: 'Bibliothèque pédagogique, création de filière, formation des formateurs, certifications, accréditation ICIA pour établissements.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
    },
    areaServed: ['FR'],
    serviceType: ['AI Education Consulting', 'Curriculum Development', 'Trainer Training'],
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
                  <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 flex-shrink-0 ${item.href === '/education' ? 'text-black font-medium' : ''}`}>
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
                <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/education' ? 'text-black font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Pour qui ?</p>
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">Écoles, CFA, Universités</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">Vos étudiants utilisent déjà l'IA. Souvent sans méthode, sans cadre, sans comprendre les limites de ce qu'ils produisent. Ce n'est pas une question de discipline : c'est une question de formation. Et ça commence par les formateurs.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-colors duration-200">Contactez-nous</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/educa.webp" alt="Education" className="w-full" />
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-200 pt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {axes.map((axe) => (
                <div key={axe.title} className="p-10 border border-gray-200 hover:border-black transition-colors duration-300">
                  <h3 className="text-xl text-black mb-3">{axe.title}</h3>
                  <p className="text-gray-500">{axe.description}</p>
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
