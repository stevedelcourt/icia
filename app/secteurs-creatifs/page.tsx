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

const sectors = ['Musique', 'Arts visuels', 'Cinema', 'Jeux video', 'Edition', 'Architecture']

const axes = [
  { title: 'Ateliers creatifs IA', description: "Explorer les outils de generation IA dans votre discipline." },
  { title: 'Securite juridique', description: "Comprendre et naviguer dans le cadre legal de l'IA creative." },
  { title: 'Laboratoire dinnovation', description: "Un espace dedie pour tester et experimenter avec les outils d'IA creative." },
  { title: 'Monetisation', description: "Explorer les nouveaux modeles economiques offres par l'IA aux createurs." },
]

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <ScrollGradient />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex gap-8 text-base text-gray-400 mb-16">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/secteurs-creatifs' ? 'text-black font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">Secteurs creatifs</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">Creer avec l'IA, sans perdre son identite.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/crea.webp" alt="Secteurs creatifs" className="w-full" />
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-200 pt-16 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-8">Secteurs couverts</h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="px-5 py-3 border border-gray-200 text-base text-gray-500">{sector}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="border-t border-gray-200 pt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
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
