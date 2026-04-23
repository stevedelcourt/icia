'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const programmes = [
  { nom: "IA par métiers", contenu: "Managers, commerciaux, RH, finance, support client, logistique", duree: "1 jour" },
  { nom: "IA & sécurité", contenu: "Risques, données personnelles, arnaques, RGPD, bonnes pratiques", duree: "1/2 journée" },
  { nom: "IA & esprit critique", contenu: "Comprendre les LLM, biais, hallucinations, limites des outils", duree: "1/2 journée" },
  { nom: "Modules écoles/CFA", contenu: "Cours structurés, TD, cas pratiques pour établissements", duree: "Sur mesure" },
  { nom: "Parcours emploi IA", contenu: "Socle numérique + IA métier + badge de compétences", duree: "3 à 5 jours" },
  { nom: "Formation formateurs", contenu: "Former les équipes internes ou intervenants partenaires", duree: "2 jours" },
]

const exemple = {
  contexte: "CFA BTP Marseille (120 apprentis)",
  description: "Un CFA BTP veut intégrer l'IA dans ses formations sans savoir comment. Les formateurs ne connaissent pas les outils. Les apprentis utilisent déjà l'IA pour leurs devoirs.",
  jalons: [
    { phase: "Audit", action: "Audit de la maquette pédagogique existante (2 jours)" },
    { phase: "Co-construction", action: "Co-construction de 3 modules IA métier : mètres augmentés, IA & sécurité chantier, reporting" },
    { phase: "Formation", action: "Formation des formateurs (2 jours)" },
    { phase: "Livraison", action: "Livraison des supports + badges de compétences associés" },
    { phase: "Accompagnement", action: "Accompagnement sur 3 mois à la mise en place" },
  ],
}

export default function FormationsPage() {
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
    '@id': 'https://www.mariusia.com/formations',
    name: 'Formations & Acculturation IA - Marius IA',
    description: 'Programmes de formation IA sur mesure par métier. Managers, commerciaux, RH, finance, support client, logistique.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
      url: 'https://www.mariusia.com',
    },
    areaServed: ['FR', 'Europe'],
    serviceType: ['AI Training', 'AI Acculturation', 'Professional Development'],
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
            <span className="text-sm tracking-widest text-gray-400 uppercase">OFFRE 02</span>
            <h1 className="text-4xl md:text-5xl  font-bold text-black mt-3 mb-3">Formations & Acculturation IA</h1>
            <p className="text-xl font-medium text-gray-600">Volume & Financement</p>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-5">Promesse</h2>
            <p className="text-2xl text-black max-w-3xl leading-relaxed">Vos équipes utilisent déjà l'IA, souvent sans le savoir, parfois sans sécurité. On fait en sorte qu'elles le fassent bien, en lien avec leur métier, dans un cadre sécurisé.</p>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-8">Catalogue de programmes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-5 pr-6 text-sm tracking-widest text-gray-400 uppercase font-normal">Programme</th>
                    <th className="py-5 pr-6 text-sm tracking-widest text-gray-400 uppercase font-normal">Contenu</th>
                    <th className="py-5 text-sm tracking-widest text-gray-400 uppercase font-normal">Duree</th>
                  </tr>
                </thead>
                <tbody>
                  {programmes.map((p) => (
                    <tr key={p.nom} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-5 pr-6 font-medium text-black">{p.nom}</td>
                      <td className="py-5 pr-6 text-gray-500">{p.contenu}</td>
                      <td className="py-5 text-gray-400">{p.duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-6">Exemple</h2>
            <div className="bg-gray-50 p-10">
              <p className="font-medium text-black text-lg mb-3">{exemple.contexte}</p>
              <p className="text-gray-500 mb-8">{exemple.description}</p>
              <ul className="space-y-4">
                {exemple.jalons.map((j) => (
                  <li key={j.phase} className="flex gap-6 text-base">
                    <span className="text-gray-400 font-medium min-w-[120px]">{j.phase}</span>
                    <span className="text-gray-500">{j.action}</span>
                  </li>
                ))}
              </ul>
            </div>
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
