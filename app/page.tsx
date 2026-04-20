'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const piliers = [
  { title: 'Independence technologique', desc: 'Aucune affiliation a un fournisseur d\'IA. Recommandations neutres.', anchor: 'independance' },
  { title: 'Conseil strategique pur', desc: 'Strategie IA, gouvernance, change management, conformite AI Act.', anchor: 'conseil' },
  { title: 'Tiers de confiance', desc: 'Interlocuteur unique. Tous les livrables portent notre marque.', anchor: 'confiance' },
]

const offres = [
  { num: '01', title: 'Diagnostic IA & AI Act', tagline: 'Porte entree universelle', duration: '4-6 semaines', description: "En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concretement - avec une feuille de route prete a executer.", href: '/diagnostic' },
  { num: '02', title: 'Formations & Acculturation', tagline: 'Intra-entreprise', duration: 'Parcours sur mesure', description: "Vos equipes utilisent deja l'IA, souvent sans le savoir, parfois sans securite. On fait en sorte qu'elles le fassent bien, dans un cadre securise.", href: '/formations' },
  { num: '03', title: 'Transformation IA', tagline: 'Accompagnement 6-12 mois', duration: '6-12 mois', description: "On vous aide a faire passer l'IA de l'experimentation a la pratique quotidienne - sans casser votre organisation, avec des resultats mesurables.", href: '/transformation' },
  { num: '04', title: 'Partenaire IA Mensuel', tagline: 'Abonnement', duration: 'Engagement 12 mois', description: "Un partenaire independant pour vous aider a decider sur l'IA, en continu - veille, conseil, arbitrage, alerte reglementaire.", href: '/partenaire' },
]

const acteurs = [
  { title: 'Entreprises', desc: 'PME / ETI face a l\'IA. Diagnostic, transformation, formation.', href: '/acteurs/entreprises', anchor: 'entreprises' },
  { title: 'Pouvoirs publics', desc: 'Service public, inclusion, pilotage territorial.', href: '/acteurs/pouvoirs-publics', anchor: 'pouvoirs-publics' },
  { title: 'Education', desc: 'Ecoles, CFA, universites. Former les formateurs de demain.', href: '/acteurs/education', anchor: 'education' },
  { title: 'Secteurs creatifs', desc: 'Musique, cinema, design. Creer avec l\'IA sans perdre son identite.', href: '/acteurs/secteurs-creatifs', anchor: 'secteurs-creatifs' },
  { title: 'Grand public', desc: 'Acculturation, securite, emploi. Reduire la fracture IA.', href: '/acteurs/citoyens', anchor: 'citoyens' },
]

const partners = [
  '/partners/tertium-invest.svg',
  '/partners/air-france.svg',
  '/partners/ionis-education-group.svg',
  '/partners/clarins.svg',
  '/partners/airwell.svg',
  '/partners/mk2-.svg',
]

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: '3 Piliers', href: '#piliers' },
  { label: 'Offres', href: '#offres' },
  { label: 'Acteurs', href: '#acteurs' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const gradient = `linear-gradient(180deg, #aebddb 0%, #d0d5de ${scrollProgress * 50}%, #ebe9e6 ${Math.min(scrollProgress * 100, 100)}%)`

  return (
    <>
      <div 
        className="gradient-background"
        style={{ background: gradient }}
      />
      <Header />
      <main className="pt-14">

        <section id="accueil" className="py-16 md:py-20 border-b border-gray-200" style={{ backgroundColor: '#aebddb' }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm tracking-widest text-gray-400 uppercase mb-8">Institut de l'IA · Campus Cyber.AI, Marseille</p>
                <h1 className="text-5xl md:text-6xl  font-bold text-black leading-[1.1] mb-8">
                  Nous ne vendons<br />
                  pas de l'IA.
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Nous aidons a en faire un avantage pour tous.
                </p>
                <p className="text-base text-gray-500 mb-10 max-w-lg leading-relaxed">
                  L'IA transforme toutes les organisations. Il manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, avec quel risque.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-gray-800 hover:shadow-xl transition-all duration-200">
                    Planifier un echanges
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-sm"
              >
                <motion.img 
                  src="/images/paperplane.png" 
                  alt="Institut de l'IA" 
                  className="w-full shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="piliers" className="py-16 md:py-20 border-b border-gray-200" style={{ backgroundColor: '#f9f7f3' }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Ce qui nous distingue</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Nos 3 piliers</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {piliers.map((p, i) => (
                <motion.div 
                  key={p.title} 
                  id={p.anchor}
                  className="p-10 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3 className="text-2xl  font-bold text-black mb-4">{p.title}</h3>
                  <p className="text-gray-500">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="offres" className="py-16 md:py-20 border-b border-gray-200" style={{ backgroundColor: '#aebddb' }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Nos services</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Offres pour entreprises</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">De la porte entree a l'accompagnement long.</p>
            </div>
            <div className="space-y-0">
              {offres.map((offre, i) => (
                <motion.div 
                  key={offre.num}
                  id={offre.href.replace('/offres/', 'offre-')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link href={offre.href} className="flex justify-between items-start py-10 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50 transition-all duration-200">
                    <div className="flex items-start gap-10 max-w-3xl">
                      <span className="text-lg text-gray-300 font-medium w-10">{offre.num}</span>
                      <div>
                        <h3 className="text-2xl  font-bold text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">{offre.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{offre.tagline} - {offre.duration}</p>
                        <p className="text-gray-500">{offre.description}</p>
                      </div>
                    </div>
                    <span className="text-xl text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      ➔
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            </div>
        </section>

        <section id="acteurs" className="py-16 md:py-20 border-b border-gray-200" style={{ backgroundColor: '#f9f7f3' }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">A qui s'adressons-nous</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Nos acteurs</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">L'IA ne transforme pas les organisations de la meme facon. Selon votre secteur, vos enjeux sont differents.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acteurs.map((acteur, i) => (
                <motion.div
                  key={acteur.title}
                  id={acteur.anchor}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={acteur.href} className="group block p-8 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-200 h-full">
                    <h3 className="text-xl  font-bold text-black mb-3 group-hover:text-gray-600 transition-colors duration-200">{acteur.title}</h3>
                    <p className="text-gray-500 text-sm">{acteur.desc}</p>
                    <span className="inline-block mt-4 text-sm text-gray-400 group-hover:text-black transition-colors duration-200">
                      Decouvrir ➔
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            </div>
        </section>

        <section id="partenaires" className="py-20 border-b border-gray-200 overflow-hidden">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Confiance</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Ils nous font confiance</h2>
            </div>
            <div className="relative">
              <div className="flex gap-16 animate-scroll">
                {[...partners, ...partners].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`Partenaire ${(i % 6) + 1}`} 
                    className="w-[150px] h-auto grayscale opacity-60 flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="max-w-4xl mx-auto px-8 flex items-center gap-12">
            <div className="flex-1 text-center">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Parlons de votre projet</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-white mb-6">Pret a vous lancer ?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                Planifions un premier echanges pour comprendre vos enjeux et voir comment nous pouvons vous aider.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Link href="/contact" className="inline-block px-12 py-5 text-lg text-black bg-white hover:bg-gray-100 transition-all duration-200">
                  Planifier un echanges
                </Link>
              </motion.div>
            </div>
            <img 
              src="/images/paperplane.png" 
              alt="Project" 
              className="w-48 h-auto hidden lg:block"
            />
          </div>
        </section>

        <section className="h-[30px] bg-orange-500 flex items-center justify-center">
          <p className="text-white text-sm"><span className="font-medium">AI Act en vigueur en aout 2026</span> · <span className="opacity-80">Obligations reglementaires, classification des systemes IA</span></p>
        </section>
      </main>
      <Footer />
    </>
  )
}
