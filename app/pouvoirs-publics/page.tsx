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

const programmes = [
  { title: 'Inclusion', description: "Lutter contre la fracture numerique et garantir que chacun puisse beneficier des avancees de l'IA." },
  { title: 'Transformation des services publics', description: "Aider les administrations a identifier les cas d'usage de l'IA pour ameliorer les services aux citoyens." },
  { title: 'Remobilisation professionnelle', description: "Accompagner les agents publics et demandeurs d'emploi vers les metiers de l'IA." },
  { title: 'Observatoire territorial', description: "Un outil de pilotage unique pour les decideurs publics : suivi de l'adoption de l'IA." },
]

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex gap-8 text-base text-gray-400 mb-16">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/acteurs/pouvoirs-publics' ? 'text-black font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">Pouvoirs publics</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">Faire de l'IA un levier de service public, dans un cadre ethique et souverain.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:pt-20">
              <img src="/images/team-work.webp" alt="Pouvoirs publics" className="w-full" />
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
