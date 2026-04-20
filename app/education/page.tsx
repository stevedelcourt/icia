'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const navActeurs = [
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Pouvoirs publics', href: '/pouvoirs-publics' },
  { label: 'Education', href: '/education' },
  { label: 'Secteurs creatifs', href: '/secteurs-creatifs' },
  { label: 'Grand public', href: '/citoyens' },
]

const axes = [
  { title: 'Bibliothèque pédagogique', description: "Une ressource complète et libre d'accès pour intégrer l'IA dans tous les niveaux." },
  { title: 'Formation des formateurs', description: "Accompagner les enseignants et formateurs pour maîtriser les concepts de l'IA." },
  { title: 'Certifications', description: "Des certifications officielles pour les élèves et étudiants, reconnaissables par les employeurs." },
  { title: 'Accréditation institutionnelle', description: "Accompagner les établissements pour obtenir une accréditation ICIA." },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <ScrollGradient startColor="green" />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex gap-4 md:gap-8 text-sm md:text-base text-gray-400 mb-12 md:mb-16 overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:overflow-visible whitespace-nowrap">
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
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
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
