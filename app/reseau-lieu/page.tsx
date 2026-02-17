'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import Link from 'next/link'

const espaces = [
  { num: '01', title: 'Zone d\'accueil', description: 'Un espace ouvert et chaleureux pour accueillir le public, consulter des ressources et échanger.', capacity: '50 personnes' },
  { num: '02', title: 'Salles de formation', description: 'Des espaces équipés pour les ateliers et formations, avec matériel audiovisuel complet.', capacity: '20–40 personnes' },
  { num: '03', title: 'Laboratoire IA', description: 'Un environnement sécurisé pour tester et expérimenter les outils d\'intelligence artificielle.', capacity: '15 personnes' },
  { num: '04', title: 'Espace créatif', description: 'Un lieu dédié aux creators pour expérimenter avec les outils de génération créative.', capacity: '20 personnes' },
  { num: '05', title: 'Co-working', description: 'Des espaces de travail partagés pour les membres et partenaires du réseau ICIA.', capacity: '30 personnes' },
]

const archCards = [
  { num: '01', tag: 'Marseille', title: 'Centre Flagship', subtitle: 'Services complets', surface: '300–500 m²', pills: ['Formation', 'Coworking', 'Événements', 'R&D'] },
  { num: '02', tag: 'France', title: 'Hubs Régionaux', subtitle: 'Formation et sensibilisation', surface: '150–200 m²', pills: ['Formation', 'Sensibilisation', 'Orientation'] },
  { num: '03', tag: 'Territoires', title: 'Espaces Satellites', subtitle: 'Sensibilisation et orientation', surface: '50–100 m²', pills: ['Information', 'Orientation', 'Ateliers'] },
]

const timelineItems = [
  { phase: 'Phase 1 · Année 1', title: 'Lancement flagship Marseille', description: 'Ouverture du centre principal avec l\'ensemble des cinq zones d\'activité.' },
  { phase: 'Phase 2 · Années 2–3', title: '3–4 hubs régionaux', description: 'Déploiement des premiers hubs dans les métropoles françaises prioritaires.' },
  { phase: 'Phase 3 · Années 3–5', title: 'Déploiement national', description: 'Couverture nationale avec les espaces satellites et la plateforme numérique.' },
]

export default function ReseauLieuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12 bg-gradient-to-b from-[#E5E4DF] to-white">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Réseau & Lieu</p>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                    Un ancrage<br />
                    territorial,<br />
                    un rayonnement<br />
                    <em className="not-italic font-light">national</em>
                  </h1>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    L'ICIA repose sur un modèle hybride : un lieu physique flagship à Marseille, un réseau de hubs régionaux et d'espaces satellites, complété par une plateforme numérique.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-[#264653] text-white text-sm font-medium rounded-full">Marseille</span>
                    <span className="px-4 py-2 border border-[#264653] text-[#264653] text-sm font-medium rounded-full">Hubs régionaux</span>
                    <span className="px-4 py-2 border border-[#264653] text-[#264653] text-sm font-medium rounded-full">Espaces satellites</span>
                    <span className="px-4 py-2 border border-[#264653] text-[#264653] text-sm font-medium rounded-full">Plateforme numérique</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-[#264653] text-white rounded-xl">
                    <p className="text-4xl font-light mb-2">400m²</p>
                    <p className="text-sm text-white/80">Flagship Marseille</p>
                  </div>
                  <div className="p-6 bg-[#264653] text-white rounded-xl">
                    <p className="text-4xl font-light mb-2">3–5 ans</p>
                    <p className="text-sm text-white/80">Déploiement national</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Lieu physique */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Le lieu physique</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Le flagship<br />ICIA Marseille</h2>
              <p className="text-text-muted mb-8">Un espace de 400 m² conçu pour l'apprentissage, l'expérimentation et les rencontres. Cinq zones distinctes pour répondre à tous les usages liés à l'intelligence artificielle.</p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              <div className="text-center p-4 bg-[#E5E4DF] rounded-lg">
                <p className="font-bold text-[#264653]">Ville</p>
                <p className="text-sm text-text-muted">Marseille</p>
              </div>
              <div className="text-center p-4 bg-[#E5E4DF] rounded-lg">
                <p className="font-bold text-[#264653]">Surface totale</p>
                <p className="text-sm text-text-muted">400 m²</p>
              </div>
              <div className="text-center p-4 bg-[#E5E4DF] rounded-lg">
                <p className="font-bold text-[#264653]">Capacité totale</p>
                <p className="text-sm text-text-muted">135 personnes</p>
              </div>
              <div className="text-center p-4 bg-[#E5E4DF] rounded-lg">
                <p className="font-bold text-[#264653]">Espaces</p>
                <p className="text-sm text-text-muted">5 zones</p>
              </div>
              <div className="text-center p-4 bg-[#E5E4DF] rounded-lg">
                <p className="font-bold text-[#264653]">Phase</p>
                <p className="text-sm text-text-muted">Année 1</p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {espaces.map((espace) => (
                  <StaggerItem key={espace.num}>
                    <div className="p-6 border border-border bg-white rounded-xl h-full flex flex-col">
                      <p className="text-3xl font-light text-[#264653] mb-4">{espace.num}</p>
                      <h3 className="font-serif text-lg font-bold mb-3">{espace.title}</h3>
                      <p className="text-sm text-text-muted flex-grow mb-4">{espace.description}</p>
                      <p className="text-xs font-medium text-[#BF4D43]">{espace.capacity}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Architecture du réseau */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Architecture du réseau</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Trois niveaux,<br />un seul réseau</h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Du flagship marseillais aux espaces satellites en région, le réseau ICIA déploie une présence progressive et cohérente sur l'ensemble du territoire français.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-3 gap-8">
                {archCards.map((card) => (
                  <StaggerItem key={card.num}>
                    <div className="p-8 border border-border bg-[#E5E4DF] rounded-xl h-full">
                      <p className="text-4xl font-light text-[#264653] mb-4">{card.num}</p>
                      <span className="inline-block px-3 py-1 bg-[#264653] text-white text-xs font-bold rounded-full mb-3">{card.tag}</span>
                      <h3 className="font-serif text-xl font-bold mb-1">{card.title}</h3>
                      <p className="text-sm text-text-muted mb-4">{card.subtitle}</p>
                      <p className="text-lg font-medium text-[#BF4D43] mb-4">{card.surface}</p>
                      <div className="flex flex-wrap gap-2">
                        {card.pills.map((pill) => (
                          <span key={pill} className="px-3 py-1 bg-white text-xs border border-border">{pill}</span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Calendrier */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Calendrier de déploiement</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Une expansion<br />progressive</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={item.phase} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#BF4D43] rounded-full"></div>
                  {index < timelineItems.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                </div>
                <div className="pb-8 last:pb-0">
                  <p className="text-sm font-medium text-[#BF4D43] mb-1">{item.phase}</p>
                  <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-gradient-to-b from-[#E5E4DF] to-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Rejoignez le réseau ICIA</h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Vous souhaitez ouvrir un hub, accueillir un espace satellite ou devenir partenaire ? Notre équipe est disponible pour en discuter.
              </p>
              <Link href="/contact?subject=partnership">
                <button className="px-8 py-4 bg-[#BF4D43] text-white font-semibold rounded-lg hover:bg-[#a33d32] transition-colors">
                  Nous contacter <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
