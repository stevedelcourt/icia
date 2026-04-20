'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const navActeurs = [
  { label: 'Entreprises', href: '/acteurs/entreprises' },
  { label: 'Pouvoirs publics', href: '/acteurs/pouvoirs-publics' },
  { label: 'Education', href: '/acteurs/education' },
  { label: 'Secteurs creatifs', href: '/acteurs/secteurs-creatifs' },
  { label: 'Grand public', href: '/acteurs/citoyens' },
]

const axes = [
  { title: 'Acculturation a lIA', description: "Des ateliers ludiques et accessibles pour demystifier l'intelligence artificielle." },
  { title: 'Securite et ethique', description: "Apprendre a vous proteger dans un monde ou l'IA est omnipresente." },
  { title: 'Emploi et reconversion', description: "Accompagnement personnalise pour comprendre les evolutions du marche du travail." },
  { title: 'Passerelles vers la formation', description: "Faciliter l'acces aux formations en IA." },
]

export default function CitoyensPage() {
  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex gap-8 text-base text-gray-400 mb-16">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/acteurs/citoyens' ? 'text-black font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight mb-6">Grand public</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">La fracture IA grandit. L'ICIA vous aide a comprendre les outils IA du quotidien.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Etre accompagne</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/grandpu.webp" alt="Grand public" className="w-full" />
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-200 pt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {axes.map((axe) => (
                <div key={axe.title} className="p-10 border border-gray-200 hover:border-black transition-colors duration-300">
                  <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
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
