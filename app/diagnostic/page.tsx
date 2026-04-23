'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ScrollGradient from '@/components/ScrollGradient'

const livrables = [
  "Cartographie des usages IA actuels (outils, données, processus)",
  "Mesure de maturité IA : gouvernance, culture, compétences, infrastructure",
  "Analyse risques AI Act : classification, obligations haut risque, GPAI, RGPD",
  "Identification de 3 à 5 cas d'usage prioritaires avec estimation du ROI",
  "Feuille de route 12 mois : quick wins + chantier structurants",
  "Restitution en comité de direction avec rapport exécutif",
]

const exemple = {
  contexte: "PME logistique 80 personnes (Marseille)",
  description: "Un transporteur régional utilise ChatGPT de manière informelle, sans politique IA, inquiet du RGPD et de la concurrence. Objectif : structurer une approche IA sans risque.",
  jalons: [
    { phase: "J1-J3", action: "Interviews dirigeant, DAF, responsable operations, DSI" },
    { phase: "J4-J10", action: "Analyse des données, outils en place, cartographie risques AI Act" },
    { phase: "J11-J15", action: "Formalisation cas d'usage (tournées optimisées, service client IA, reporting auto)" },
    { phase: "J15-J18", action: "Rédaction feuille de route + rapport de conformité" },
    { phase: "J20", action: "Restitution CODIR - décision de lancement offre 03" },
  ],
}

export default function DiagnosticPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.mariusia.com/diagnostic',
    name: 'Diagnostic IA & AI Act - Marius IA',
    description: 'Cartographie des usages IA, analyse des risques réglementaires AI Act, feuille de route 12 mois. Duration 4-6 semaines.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.mariusia.com/#organization',
      name: 'Marius IA',
      url: 'https://www.mariusia.com',
    },
    areaServed: ['FR', 'Europe'],
    serviceType: ['AI Audit', 'AI Compliance', 'AI Strategy'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diagnostic IA',
      description: 'Porte d\'entrée universelle pour comprendre votre positionnement IA',
      url: 'https://www.mariusia.com/diagnostic',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que l\'AI Act et quand entre-t-il en vigueur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'AI Act (Règlement européen sur l\'intelligence artificielle) entre pleinement en vigueur en août 2026. Il impose des obligations spécifiques aux organisations utilisant des systèmes IA, notamment pour les systèmes dits "à haut risque" couvrant la santé, la justice, l\'éducation, l\'emploi, les services financiers et les administrations publiques.'
        }
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure un diagnostic IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un diagnostic IA complet dure généralement 4 à 6 semaines. Il inclut la cartographie des usages, l\'analyse des risques réglementaires, l\'identification des cas d\'usage prioritaires et une feuille de route sur 12 mois.'
        }
      },
      {
        '@type': 'Question',
        name: 'À qui s\'adresse le diagnostic IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le diagnostic IA s\'adresse à toutes les organisations françaises et européennes confrontées à l\'adoption de l\'IA : PME, ETI, écoles, administrations, collectivités, industries créatives et professions libérales. Il est particulièrement recommandé avant toute transformation majeure.'
        }
      },
      {
        '@type': 'Question',
        name: 'Pourquoi faire appel à un conseil indépendant ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marius IA n\'est lié à aucun éditeur ou intégrateur. Cette indépendance garantit que nos recommandations servent uniquement vos intérêts, sans conflit d\'intérêt. Vous gardez la maîtrise de vos choix technologiques et de vos prestataires.'
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
            <p className="text-2xl text-black max-w-3xl leading-relaxed">En 4 à 6 semaines, vous savez exactement où vous en êtes, où vous pouvez aller, et ce que l'AI Act vous impose concrètement - avec une feuille de route prête à exécuter.</p>
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
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-colors duration-200"><span className="md:hidden">Échanger</span><span className="hidden md:inline">Contactez-nous</span></Link>
            <Link href="/" className="inline-block px-10 py-4 text-lg text-black border-2 border-gray-200 hover:border-black transition-colors duration-200"><span className="md:hidden">Retour</span><span className="hidden md:inline">Retour à l'accueil</span></Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
