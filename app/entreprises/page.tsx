'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const navActeurs = [
  { label: 'Entreprises', href: '/entreprises#acteurs' },
  { label: 'Pouvoirs publics', href: '/pouvoirs-publics#acteurs' },
  { label: 'Education', href: '/education#acteurs' },
  { label: 'Secteurs créatifs', href: '/secteurs-creatifs#acteurs' },
  { label: 'Grand public', href: '/citoyens#acteurs' },
]

const axes = [
  { num: '01', title: 'Diagnostic IA & AI Act', description: "Comprendre où vous en êtes. Cartographie des usages, analyse des risques réglementaires, feuille de route 12 mois.", href: '/diagnostic' },
  { num: '02', title: 'Formations & Acculturation', description: "Vos équipes utilisent déjà l'IA. On fait en sorte qu'elles le fassent bien, dans un cadre sécurisé.", href: '/formations' },
  { num: '03', title: 'Transformation IA', description: "Passer de l'expérimentation à la pratique quotidienne. Gouvernance, compétences, change management.", href: '/transformation' },
  { num: '04', title: 'Partenaire IA Mensuel', description: "Un partenaire indépendant pour vous aider à décider sur l'IA, en continu.", href: '/partenaire' },
]

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <ScrollGradient startColor="green" />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-4 md:mx-auto md:px-8">
          <nav className="flex gap-4 md:gap-8 text-sm md:text-base text-gray-400 mb-12 md:mb-16 overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:overflow-visible whitespace-nowrap">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-black transition-colors duration-200 ${item.href === '/entreprises' ? 'text-black font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl  font-bold text-black leading-tight mb-6">PME / ETI</h1>
              <p className="text-xl font-medium text-gray-600 mb-10">L'AI Act entre en vigueur en août 2026. L'ICIA vous aide à comprendre vos obligations, structurer vos usages et transformer votre organisation avec un partenaire de confiance.</p>
              <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
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
