'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const niveaux = [
  { nom: "Essentiel", contenu: ["Veille reglementaire IA personnalisee", "2h office hours", "Alertes AI Act"] },
  { nom: "Strategique", contenu: ["Tout Essentiel", "Relecture projets IA", "Revue prestataires techniques", "4h office hours"] },
  { nom: "Dirigeant", contenu: ["Tout Strategique", "1 comite IA/trimstre", "Acces evenements Institut", "Priorite diagnostics"] },
]

export default function PartenairePage() {
  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="text-base text-gray-400 hover:text-black transition-colors duration-200 mb-10 inline-block">← Accueil</Link>
          </motion.div>

          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-400 uppercase">OFFRE 04</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mt-3 mb-3">Partenaire IA Mensuel</h1>
            <p className="text-xl font-medium text-gray-600">Abonnement</p>
          </div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-5">Promesse</h2>
            <p className="text-2xl text-black max-w-3xl leading-relaxed">Un partenaire independant pour vous aider a decider sur l'IA, en continu - veille, conseil, arbitrage, alerte reglementaire. Votre numero a appeler quand l'IA touche vos sujets.</p>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-10">3 niveaux d'abonnement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {niveaux.map((niveau, i) => (
                <motion.div 
                  key={niveau.nom} 
                  className="border border-gray-200 p-10 hover:border-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-black mb-4">{niveau.nom}</h3>
                  <ul className="space-y-3">
                    {niveau.contenu.map((item) => (
                      <li key={item} className="text-base text-gray-500 flex items-start gap-3">
                        <span className="text-gray-400">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-200 pt-14 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-3">Modele economique</h2>
                <p className="text-lg text-gray-500">20 clients abonne = revenus recurrents</p>
              </div>
              <div>
                <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-3">Notre approche</h2>
                <p className="text-lg text-gray-500">Zero dependance : 100% conseil pur, aucune sous-traitance technique requise</p>
              </div>
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
