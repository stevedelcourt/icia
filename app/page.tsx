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
  { title: 'Indépendance totale', desc: 'Aucun lien avec des éditeurs ou des intégrateurs. Nos recommandations ne servent que vos intérêts.', anchor: 'independance' },
  { title: 'Résultats mesurables', desc: 'Chaque engagement est cadré, suivi, évalué. Vous savez exactement où vous en êtes à chaque étape.', anchor: 'conseil' },
  { title: 'Conformité AI Act intégrée', desc: 'Le cadre réglementaire européen est pris en compte dans chaque mission. Pas comme une contrainte. Comme une exigence de sérieux.', anchor: 'confiance' },
]

const offres = [
  {
    num: '01',
    title: 'Savoir où vous en êtes. Décider où aller.',
    subtitle: 'Diagnostic IA et AI Act',
    description: "Vos usages IA cartographiés. Vos risques réglementaires identifiés. Vos cas d'usage prioritaires évalués et hiérarchisés. À l'issue de la mission, vous disposez d'une feuille de route sur 12 mois et d'un rapport de conformité présentable à votre CODIR.",
    price: 'À partir de 1 500 euros',
    duration: '4 à 6 semaines',
    href: '/diagnostic',
    image: '/images/IA.webp'
  },
  {
    num: '02',
    title: 'Former vos équipes, pas une audience.',
    subtitle: 'Formations et Acculturation',
    description: "Chaque programme est construit autour des réalités métier de vos collaborateurs. Un responsable commercial, un DRH et un responsable logistique n'ont pas les mêmes enjeux. Leurs formations non plus. De la demi-journée de sensibilisation au parcours sur 5 jours, chaque format est conçu pour produire un effet réel.",
    price: 'À partir de 750 euros',
    duration: 'Demi-journée à 5 jours',
    href: '/formations',
    image: '/images/book.webp'
  },
  {
    num: '03',
    title: 'Une transformation à votre rythme.',
    subtitle: 'Transformation IA',
    description: "Gouvernance IA, montée en compétences, pilotage des prestataires, conformité AI Act. Un accompagnement sur mesure, avec des résultats mesurables dès les premiers mois. Vous gardez la main sur chaque décision, à chaque étape.",
    price: 'À partir de 2 500 euros',
    duration: '6 à 12 mois',
    href: '/transformation',
    image: '/images/tree.webp'
  },
  {
    num: '04',
    title: 'Un expert disponible quand l\u2019IA touche vos sujets.',
    subtitle: 'Partenaire IA',
    description: "Veille réglementaire continue, relecture de projets, alertes AI Act, conseil ponctuel. Un partenaire indépendant, disponible au moment où vous en avez besoin. Trois niveaux d'engagement selon votre rythme et vos enjeux.",
    price: 'À partir de 750 euros par mois',
    duration: '3 niveaux',
    href: '/partenaire',
    image: '/images/team-work.webp'
  },
]

const acteurs = [
  {
    title: 'PME et ETI',
    desc: "Structurer votre approche avant que les obligations ne s'imposent. L'IA redessine les organisations et transforme les métiers plus vite que prévu. Intégrer les bons outils, former vos équipes et anticiper les exigences de l'AI Act relève désormais d'une décision stratégique. Nous vous aidons à le faire avec méthode et efficacité.",
    href: '/entreprises',
    anchor: 'entreprises',
    image: '/images/overworked.webp'
  },
  {
    title: 'Écoles, CFA, Universités',
    desc: "Rendre vos cursus pertinents dans un monde qui a changé. L'arrivée de l'IA dans tous les secteurs nécessite de repenser les formations actuelles et les façons de faire. Nouvelles filières, formation des formateurs, intégration pédagogique : nous intervenons à chaque niveau, avec une approche constructive et pragmatique.",
    href: '/education',
    anchor: 'education',
    image: '/images/educa.webp'
  },
  {
    title: 'Industries créatives',
    desc: "Créer avec l'IA sans y perdre son identité. Nouveaux workflows, nouveaux outils, nouveaux droits à comprendre et à défendre. L'IA ouvre des espaces créatifs réels. Elle pose aussi des questions auxquelles vous avez le droit d'exiger des réponses claires. Nous vous aidons à trouver votre position, dans les deux sens du terme.",
    href: '/secteurs-creatifs',
    anchor: 'secteurs-creatifs',
    image: '/images/music.png'
  },
  {
    title: 'Collectivités et administrations',
    desc: "L'IA au service du public, avec les bons garde-fous. Inclusion numérique, transformation des services, observation territoriale. L'IA peut renforcer l'efficacité et l'équité des services publics. À condition de l'aborder avec rigueur éthique et indépendance. C'est exactement ce que nous apportons.",
    href: '/pouvoirs-publics',
    anchor: 'pouvoirs-publics',
    image: '/images/crea.webp'
  },
  {
    title: 'Professions libérales',
    desc: "Votre expertise n'est pas remplaçable. Mais elle va changer de forme. L'IA entre dans le droit, la médecine, la comptabilité et l'architecture avec une vitesse que peu de cabinets ont anticipée. Comprendre ce qui relève de l'outil, ce qui relève de votre responsabilité, et ce que vous pouvez déléguer sans risque : c'est exactement ce dont vous avez besoin pour décider en confiance.",
    href: '/professions-liberales',
    anchor: 'professions-liberales',
    image: '/images/avocat.webp'
  },
  {
    title: 'Grand public',
    desc: "Comprendre l'IA. L'utiliser. Ne pas se faire avoir. Des ateliers accessibles, sans prérequis techniques, pour toutes celles et ceux qui veulent comprendre ce qui change dans leur quotidien. L'IA n'est pas réservée à ceux qui ont déjà tout. Ni à ceux qui savent déjà tout.",
    href: '/citoyens',
    anchor: 'citoyen',
    image: '/images/grandpu.webp'
  },
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
  { label: 'Pour qui ?', href: '#acteurs' },
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
                <h1 className="text-5xl md:text-6xl font-bold text-black leading-[1.1] mb-8">
                  Tout le monde parle d&apos;IA.<br />
                  Nous, on vous aide à décider quoi en faire.
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Diagnostic, formation, transformation.
                </p>
                <p className="text-xl text-gray-500 mb-6 max-w-lg leading-relaxed">
                  Des missions cadrées, des résultats mesurables, aucun conflit d&apos;intérêt avec un éditeur ou un intégrateur.
                </p>
                <Link
                  href="/#acteurs"
                  className="inline-block px-8 py-4 text-lg text-white bg-[#00255D] hover:bg-black transition-colors duration-200"
                >
                  C&apos;est pour qui ?
                </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black">Trois principes. Aucune exception.</h2>
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
                  <h3 className="text-3xl font-bold text-black mb-4">{p.title}</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black">Les offres</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">Chaque mission est calibrée. Aucune approche générique, aucun package vendu à la chaîne.</p>
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
                      <p className="text-sm text-gray-400 mb-3">{offre.subtitle}</p>
                      <p className="text-gray-500 mb-3">{offre.description}</p>
                      <p className="text-sm text-gray-400">{offre.price} · {offre.duration}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-black">Pour qui ?</h2>
              <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">Une organisation, des enjeux. Une réponse adaptée. Nos interventions sont conçues et adaptées selon votre contexte et vos besoins.</p>
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
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors duration-200">{acteur.title}</h3>
                    <p className="text-gray-500 text-sm">{acteur.desc}</p>
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