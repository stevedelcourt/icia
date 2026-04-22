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
  { label: 'Pouvoirs publics', href: '/pouvoirs-publics' },
  { label: 'Education', href: '/education' },
  { label: 'Industries créatives', href: '/secteurs-creatifs' },
  { label: 'Grand public', href: '/citoyens' },
]

const axes = [
  { title: 'Bibliothèque pédagogique', description: "Une ressource complète et libre d'accès pour intégrer l'IA dans tous les niveaux." },
  { title: 'Création de filière', description: "Développer des parcours de formation adaptés aux métiers de demain." },
  { title: 'Formation des formateurs', description: "Accompagner les enseignants et formateurs pour maîtriser les concepts de l'IA." },
  { title: 'Certifications', description: "Des certifications officielles pour les élèves et étudiants, reconnaissables par les employeurs." },
  { title: 'Développement', description: "Accompagner la croissance des formations liées à l'IA." },
  { title: 'Accréditation institutionnelle', description: "Accompagner les établissements pour obtenir une accréditation ICIA." },
]

export default function EducationPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const heroBackground = interpolateToWhite(scrollProgress)

  return (
    <>
      <Header />
      <main className="pt-36 pb-24" style={{ backgroundColor: heroBackground }}>
        <div className="max-w-6xl mx-auto px-8">
          <nav ref={heroRef} className="flex gap-4 md:gap-8 text-sm md:text-base text-gray-400 mb-12 md:mb-16 overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:overflow-visible whitespace-nowrap">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/education' ? 'text-black font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">Education</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">Former les formateurs de demain. Vos étudiants utilisent déjà l'IA - souvent sans sécurité.</p>
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
                  <h3 className="text-xl  text-black mb-3">{axe.title}</h3>
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
