'use client'

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
            <p className="text-2xl text-black max-w-3xl leading-relaxed">Vos equipes utilisent deja l'IA, souvent sans le savoir, parfois sans securite. On fait en sorte qu'elles le fassent bien, en lien avec leur metier, dans un cadre securise.</p>
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
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200">Planifier un échange</Link>
            <Link href="/" className="inline-block px-10 py-4 text-lg text-black border-2 border-gray-200 hover:border-black transition-colors duration-200">Retour à l'accueil</Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
