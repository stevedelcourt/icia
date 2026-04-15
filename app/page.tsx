'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import { PartnerLogos } from '@/components/ui/PartnerLogos'
import { HeroBackgroundCSS } from './home-3d/HeroBackgroundCSS'

const slogans = [
  "une IA comprise, maîtrisée et partagée",
  "reprendre la main sur l'intelligence artificielle",
  "comprendre l'IA. La maîtriser. L'utiliser.",
]

function getRandomSlogan() {
  if (typeof window === 'undefined') return slogans[0]
  const index = Math.floor(Math.random() * slogans.length)
  return slogans[index]
}

const cards = [
  { 
    title: 'Citoyens', 
    description: 'Comprendre l\'IA, rester en sécurité, se former et évoluer professionnellement.',
    href: '/accompagnements/citoyens'
  },
  { 
    title: 'Entreprises', 
    description: 'Diagnostics partagés, formations ciblées, prototypes et accompagnement au déploiement.',
    href: '/accompagnements/entreprises'
  },
  { 
    title: 'Écoles et Universités', 
    description: 'Ressources pédagogiques, formation des formateurs, certifications et badges.',
    href: '/accompagnements/education'
  },
  { 
    title: 'Createurs', 
    description: 'Ateliers, innovation, cadre juridique et laboratoire sécurisé pour les secteurs créatifs.',
    href: '/accompagnements/secteurs-creatifs'
  },
  { 
    title: 'Pouvoirs publics', 
    description: 'Programmes d\'inclusion, transformation des services et observatoire territorial.',
    href: '/accompagnements/pouvoirs-publics'
  },
]

export default function Home() {
  const [slogan, setSlogan] = useState(slogans[0])
  
  useEffect(() => {
    setSlogan(getRandomSlogan())
  }, [])
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackgroundCSS />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 z-10" />
        
        <div className="relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 md:px-8 pt-20">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white drop-shadow-lg">
                <TextReveal delay={0.1}>L'Institut Collectif de l'IA :</TextReveal>
                <span className="block">
                  <TextReveal delay={0.3}>{slogan}</TextReveal>
                </span>
              </h1>
              <ScaleIn delay={0.5}>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                  Un projet français, ancré en France et ouvert sur le monde, pour que chacun et chaque organisation puisse bénéficier concrètement de l'intelligence artificielle.
                </p>
              </ScaleIn>
              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/accompagnements" variant="primary" size="lg" className="!bg-[#D92A1C] !text-white hover:!bg-[#D92A1C]/90">
                    Nos programmes
                  </Button>
                  <Button href="/contact" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white/10">
                    Nous contacter
                  </Button>
                </div>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </section>

      <main id="main-content" className="relative z-30 bg-gradient-to-b from-ivory-light to-white">
        {/* AI Act Alert */}
        <Section className="bg-navy py-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-lg mb-2">
              <strong>L'AI Act entre en vigueur en août 2026.</strong>
            </p>
            <p className="text-white/70 mb-4">
              Obligations réglementaires, classification des systèmes IA, sanctions... Êtes-vous prêt ?
            </p>
            <Link href="/accompagnements/entreprises#offres" className="inline-flex items-center gap-2 text-sm font-bold text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
              Diagnostiquer mon entreprise
              <span>→</span>
            </Link>
          </div>
        </Section>

        <Section spacing="normal">
          <FadeIn delay={0.1}>
            <div className="max-w-2xl">
              <h2 className="font-serif text-h2 mb-8">
                <TextReveal>Pourquoi l'Institut Collectif de l'IA ?</TextReveal>
              </h2>
              <ScaleIn delay={0.2}>
                <p className="text-body text-text-muted mb-6 leading-relaxed">
                  L'intelligence artificielle progresse très vite, mais son appropriation reste inégale. Une grande partie de la population, des PME, des créateurs, et des institutions n'a ni le temps, ni les repères, ni les ressources pour l'utiliser de manière éclairée et sécurisée.
                </p>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <p className="text-body text-text-muted mb-8 leading-relaxed">
                  L'Institut Collectif de l'IA agit comme un tiers de confiance : il explique, outille et sécurise les usages de l'IA pour toutes et tous. Notre mission est de rendre l'IA accessible, compréhensible et maîtrisable, dans une démarche collective et ouverte.
                </p>
              </ScaleIn>
              <FadeIn delay={0.4}>
                <Link href="/a-propos" className="text-navy hover:text-navy inline-flex items-center group">
                  En savoir plus sur notre vision
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">➔</span>
                </Link>
              </FadeIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="bg-white/50 border-y border-border" spacing="normal">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-h2 mb-12 text-center">
              Cinq publics, des accompagnements sur mesure
            </h2>
          </FadeIn>
          <Stagger delay={0.08}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((item) => (
                <StaggerItem key={item.title}>
                  <Link href={item.href} className="block bg-ivory-dark border border-border rounded-xl p-8 hover:bg-ivory-dark hover:shadow-sm transition-all h-full flex flex-col">
                    <h3 className="font-serif text-h3 mb-4">{item.title}</h3>
                    <p className="text-text-muted mb-4 flex-grow">{item.description}</p>
                    <span className="text-accent text-sm inline-flex items-center group mt-auto">
                      Voir l'accompagnement
                      <span className="ml-1 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">➔</span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section spacing="normal">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-h2 mb-8 text-center">
              Un modèle unique : lieu + plateforme + réseau
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-body text-text-muted leading-relaxed mb-8">
                L'Institut Collectif de l'IA repose sur trois piliers complémentaires :
              </p>
              <ul className="space-y-6 text-body">
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Un lieu physique accessible</strong>
                  <span className="text-text-muted"> — avec espaces d'accueil, salles de formation, laboratoire IA et espace créatif.</span>
                </li>
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Une plateforme numérique</strong>
                  <span className="text-text-muted"> — pour apprendre, se former, suivre des parcours et obtenir des badges.</span>
                </li>
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Un réseau d'acteurs</strong>
                  <span className="text-text-muted"> — entreprises, écoles, experts, pouvoirs publics qui partagent leurs ressources.</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reseau-lieu" className="text-navy hover:text-navy inline-flex items-center group">
                Découvrir le lieu et le réseau
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">➔</span>
              </Link>
              <span className="text-text-muted hidden sm:inline">·</span>
              <Link href="/plateforme-numerique" className="text-navy hover:text-navy inline-flex items-center group">
                Accéder à la plateforme
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">➔</span>
              </Link>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="bg-white/50 border-t border-border" spacing="normal">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-serif text-h2 mb-4">
                Vous avez un projet, une question ?
              </h2>
              <p className="text-text-muted mb-8">
                L'équipe de l'Institut Collectif de l'IA est à votre écoute.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                  Nous contacter
                </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <PartnerLogos />
      <Footer />
    </>
  )
}
