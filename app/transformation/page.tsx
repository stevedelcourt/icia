'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const apports = [
  "Gouvernance IA : création du comité IA, charte d'usage, référent interne formé",
  "Plan de compétences : cartographie des besoins par rôle, parcours de montée en compétences",
  "Change management : communication interne, ateliers d'adhésion, coaching des managers",
  "Conformité AI Act + RGPD : mise en cohérence des usages avec les obligations légales",
  "Pilotage des partenaires techniques (Flowt ou autres) : Mentivis arbitre, contrôle, valide",
  "Jalons de mesure d'impact tous les trimestres - KPI définis en amont, restitution CODIR",
]

const exemple = {
  contexte: "ETI services 350 personnes",
  description: "Une ETI de services aux entreprises a réalisé un diagnostic. 3 cas d'usage prioritaires identifiés : automatisation du support client, IA dans la prospection commerciale, génération de rapports. La direction veut déployer sans risque sur 9 mois.",
  jalons: [
    { phase: "M1-M2", action: "Mise en place gouvernance IA, charte, formation CODIR" },
    { phase: "M2-M4", action: "Deploiement support client IA avec Flowt sous pilotage Mentivis" },
    { phase: "M4-M6", action: "Formation equipes commerciales, deploiement IA prospection" },
    { phase: "M6-M8", action: "Automatisation reporting, mesure d'impact, ajustement" },
    { phase: "M9", action: "Bilan, ROI mesure, feuille de route phase 2" },
  ],
}

export default function TransformationPage() {
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
            <span className="text-sm tracking-widest text-gray-400 uppercase">OFFRE 03</span>
            <h1 className="text-4xl md:text-5xl  font-bold text-black mt-3 mb-3">Transformation IA</h1>
            <p className="text-xl font-medium text-gray-600">Programme 6-12 mois</p>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-5">Promesse</h2>
            <p className="text-2xl text-black max-w-3xl leading-relaxed">On vous aide à faire passer l'IA de l'expérimentation à la pratique quotidienne - sans casser votre organisation, sans dépendre d'un seul prestataire, avec des résultats mesurables tous les 3 mois.</p>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-8">Ce que Mentivis apporte</h2>
            <ul className="space-y-5">
              {apports.map((item) => (
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
