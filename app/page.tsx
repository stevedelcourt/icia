'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const COLORS = {
  blue: { r: 174, g: 189, b: 219 },
  cream: { r: 249, g: 247, b: 243 },
  white: { r: 255, g: 255, b: 255 },
}

function interpolateColor(progress: number): string {
  const { r, g, b } = COLORS.blue
  const { r: r2, g: g2, b: b2 } = COLORS.cream
  const eased = 1 - Math.pow(1 - progress, 3)
  const R = Math.round(r + (r2 - r) * eased)
  const G = Math.round(g + (g2 - g) * eased)
  const B = Math.round(b + (b2 - b) * eased)
  return `rgb(${R}, ${G}, ${B})`
}

function interpolateToWhite(progress: number): string {
  const { r, g, b } = COLORS.blue
  const { r: r2, g: g2, b: b2 } = COLORS.white
  const eased = 1 - Math.pow(1 - progress, 3)
  const R = Math.round(r + (r2 - r) * eased)
  const G = Math.round(g + (g2 - g) * eased)
  const B = Math.round(b + (b2 - b) * eased)
  return `rgb(${R}, ${G}, ${B})`
}

const piliers = [
  { title: 'Indépendance technologique', desc: 'Aucune dépendance à un fournisseur. Des recommandations réellement neutres.', anchor: 'independance' },
  { title: 'Conseil stratégique', desc: 'Stratégie IA, gouvernance, conduite du changement, conformité AI Act.', anchor: 'conseil' },
  { title: 'Tiers de confiance', desc: 'Un interlocuteur unique, des livrables assumés et signés.', anchor: 'confiance' },
]

const offres = [
  { num: '01', title: 'Diagnostic IA & AI Act', tagline: 'Porte d\'entrée universelle', duration: '4-6 semaines', description: "En 4 à 6 semaines, vous savez exactement où vous en êtes, où vous pouvez aller, et ce que l'AI Act vous impose concrètement - avec une feuille de route prête à exécuter.", href: '/diagnostic', image: '/images/IA.webp' },
  { num: '02', title: 'Formations & Acculturation', tagline: 'Intra-entreprise', duration: 'Parcours sur mesure', description: "Vos équipes utilisent déjà l'IA, souvent sans le savoir, parfois sans sécurité. On fait en sorte qu'elles le fassent bien, dans un cadre sécurisé.", href: '/formations', image: '/images/book.webp' },
  { num: '03', title: 'Transformation IA', tagline: 'Accompagnement 6-12 mois', duration: '6-12 mois', description: "On vous aide à faire passer l'IA de l'expérimentation à la pratique quotidienne - sans casser votre organisation, avec des résultats mesurables.", href: '/transformation', image: '/images/tree.webp' },
  { num: '04', title: 'Partenaire support long terme', tagline: 'Abonnement', duration: 'Engagement 12 mois', description: "Un partenaire indépendant pour vous aider à decidir sur l'IA, en continu - veille, conseil, arbitrage, alerte réglementaire.", href: '/partenaire', image: '/images/team-work.webp' },
]

const acteurs = [
  { title: 'Entreprises', desc: 'PME / ETI face à l\'IA. Diagnostic, transformation, formation.', href: '/entreprises', anchor: 'entreprises', image: '/images/overworked.webp' },
  { title: 'Pouvoirs publics', desc: 'Service public, inclusion, pilotage territorial.', href: '/pouvoirs-publics', anchor: 'pouvoirs-publics', image: '/images/crea.webp' },
  { title: 'Education', desc: 'Ecoles, CFA, universités. Former les formateurs de demain.', href: '/education', anchor: 'education', image: '/images/educa.webp' },
  { title: 'Industries créatives', desc: 'Musique, cinéma, design. Créer avec l\'IA sans perdre son identité.', href: '/secteurs-creatifs', anchor: 'secteurs-creatifs', image: '/images/music.png' },
  { title: 'Grand public', desc: 'Acculturation, sécurité, emploi. Réduire la fracture IA.', href: '/citoyens', anchor: 'citoyen', image: '/images/grandpu.webp' },
]

const partners = [
  '/partners/tertium-invest.webp',
  '/partners/ionis-education-group.webp',
  '/partners/airwell.webp',
  '/partners/mk2-.webp',
]

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: '3 Piliers', href: '#piliers' },
  { label: 'Offres', href: '#offres' },
  { label: 'Acteurs', href: '#acteurs' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const offreRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [offreProgress, setOffreProgress] = useState(0)

  useEffect(() => {
    const hero = heroRef.current
    const offre = offreRef.current
    if (!hero || !offre) return

const handleScroll = () => {
      const rect1 = hero.getBoundingClientRect()
      const heroHeight = hero.offsetHeight
      const maxScroll1 = heroHeight * 1.5
      const scrolled1 = Math.max(0, -rect1.top)
      setScrollProgress(Math.min(scrolled1 / maxScroll1, 1))
 
      const rect2 = offre.getBoundingClientRect()
      const offreHeight = offre.offsetHeight
      const maxScroll2 = offreHeight * 1.5
      const scrolled2 = Math.max(0, -rect2.top)
      setOffreProgress(Math.min(scrolled2 / maxScroll2, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroBackground = interpolateColor(scrollProgress)
  const offreBackground = interpolateToWhite(offreProgress)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Marius IA",
            "url": "https://www.mariusia.com",
            "description": "Conseil en stratégie IA et conformité AI Act pour PME et ETI. Accompagnement pragmatique vers la transformation IA.",
            "areaServed": ["Europe", "France"],
            "knowsAbout": ["Artificial Intelligence", "AI Act", "AI Governance", "Machine Learning", "Change Management"],
            "serviceType": ["AI Strategy Consulting", "AI Compliance", "AI Training"],
            "contactPoint": { "@type": "ContactPoint", "url": "https://www.mariusia.com/contact" }
          })
        }}
      />
      <Header />
      <main className="pt-14">

        <section 
          id="accueil" 
          ref={heroRef}
          className="py-16 md:py-20 border-b border-gray-200"
          style={{ backgroundColor: heroBackground }}
        >
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm tracking-widest uppercase mb-8" style={{ color: '#000000' }}>Institut de l'IA · Campus Cyber.AI, Marseille</p>
                <h1 className="text-5xl md:text-6xl  font-bold text-black leading-[1.1] mb-8">
                  Nous ne vendons<br />
                  pas de l'IA.
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Nous aidons à en faire un avantage pour tous.
                </p>
                <p className="text-base text-gray-500 mb-10 max-w-lg leading-relaxed">
                  L'IA transforme toutes les organisations. Il manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, avec quel risque.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black hover:shadow-xl transition-all duration-200">
                    Contactez-nous
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
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Ce qui fait la différence</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Trois principes structurants</h2>
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

        <section 
          id="offres" 
          ref={offreRef}
          className="py-16 md:py-20 border-b border-gray-200"
          style={{ backgroundColor: offreBackground }}
        >
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Nos services</p>
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Offre entreprise</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">Du premier pas à l'accompagnement sur le long terme.</p>
            </div>
            <div className="py-10">
              {offres.map((offre, i) => (
                <motion.div 
                  key={offre.num}
                  id={'offre-' + offre.href.replace('/', '')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link href={offre.href} className="flex flex-col md:flex-row items-stretch group hover:bg-gray-100 transition-all duration-200 py-10">
                    <div className="flex-1 pl-6 self-center order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-black mb-1 group-hover:text-gray-600 transition-colors duration-200">{offre.num} {offre.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">{offre.tagline} - {offre.duration}</p>
                      <p className="text-gray-500">{offre.description}</p>
                    </div>
                    <img src={offre.image} alt={offre.title} className="w-full md:w-[300px] aspect-square object-contain order-1 md:order-2" />
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
              <h2 className="text-4xl md:text-5xl  font-bold text-black">Acteurs cibles</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">L'IA ne transforme pas les organisations de la même façon. Selon votre secteur, vos enjeux sont différents.</p>
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
                    {acteur.image && <div className="w-full aspect-square mb-4 overflow-hidden"><img src={acteur.image} alt={acteur.title} className="w-full h-full object-contain" /></div>}
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

        <section id="contact" className="py-20" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-3xl mx-auto px-8 text-center">
            <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Parlons de votre projet</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Prêt à vous lancer ?</h2>
            <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
              Planifions un premier échange pour comprendre vos enjeux et voir comment nous pouvons vous aider.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="inline-block">
              <Link href="/contact" className="inline-block px-12 py-5 text-lg text-white bg-black hover:bg-white hover:text-black transition-all duration-200">
                Contactez-nous
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Partners section hidden temporarily
        <section id="partenaires" className="py-20 border-b border-gray-200 overflow-hidden" style={{ backgroundColor: '#d8d8d8' }}>
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
                    alt={`Partenaire ${(i % 5) + 1}`} 
                    className="w-[150px] h-auto grayscale opacity-60 flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
      <Footer />
    </>
  )
}
