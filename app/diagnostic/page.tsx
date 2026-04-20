'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const livrables = [
  "Cartographie des usages IA actuels (outils, donnees, processus)",
  "Mesure de maturite IA : gouvernance, culture, competences, infrastructure",
  "Analyse risques AI Act : classification, obligations haut risque, GPAI, RGPD",
  "Identification de 3 a 5 cas d'usage prioritaires avec estimation du ROI",
  "Feuille de route 12 mois : quick wins + chantiers structurants",
  "Restitution en comite de direction avec rapport executif",
]

const exemple = {
  contexte: "PME logistique 80 personnes (Marseille)",
  description: "Un transporteur regional utilise ChatGPT en informel, sans politique IA, inquiet du RGPD et de la concurrence. Objectif : structurer une approche IA sans risque.",
  jalons: [
    { phase: "J1-J3", action: "Interviews dirigeant, DAF, responsable operations, DSI" },
    { phase: "J4-J10", action: "Analyse des donnees, outils en place, cartographie risques AI Act" },
    { phase: "J11-J15", action: "Formalisation cas d'usage (tournees optimisees, service client IA, reporting auto)" },
    { phase: "J15-J18", action: "Redaction feuille de route + rapport de conformite" },
    { phase: "J20", action: "Restitution CODIR - decision de lancement offre 03" },
  ],
}

export default function DiagnosticPage() {
  return (
    <>
      <Header />
      <ScrollGradient />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/#offres" className="text-base text-gray-400 hover:text-black transition-colors duration-200 mb-10 inline-block">← Retour</Link>
          </motion.div>

          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-400 uppercase">OFFRE 01</span>
            <h1 className="text-4xl md:text-5xl  font-bold text-black mt-3 mb-3">Diagnostic IA & AI Act</h1>
            <p className="text-xl font-medium text-gray-600">Porte entree universelle</p>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-5">Promesse</h2>
            <p className="text-2xl text-black max-w-3xl leading-relaxed">En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concretement - avec une feuille de route prete a executer.</p>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-8">Contenu livre</h2>
            <ul className="space-y-5">
              {livrables.map((item, i) => (
                <li key={item} className="flex items-start gap-5 text-black text-lg">
                  <span className="text-gray-400 mt-1">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
                    <span className="text-gray-400 font-medium min-w-[60px]">{j.phase}</span>
                    <span className="text-gray-500">{j.action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-3">Levier</h2>
            <p className="text-lg text-gray-500">AI Act en vigueur aout 2026 - Urgence reglementaire = achat immediat - Ticket decidable par CEO/DAF seul</p>
          </motion.div>

          <motion.div className="flex gap-5" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
            <Link href="/" className="inline-block px-10 py-4 text-lg text-black border-2 border-gray-200 hover:border-black transition-colors duration-200">Retour à l'accueil</Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
