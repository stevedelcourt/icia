'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import { Icon } from '@/components/ui/Icon'
import { PartnerLogos } from '@/components/ui/PartnerLogos'

const spaces = [
  {
    name: 'Zone d\'accueil',
    description: 'Un espace ouvert et chaleureux pour accueillir le public.',
    icon: 'home'
  },
  {
    name: 'Salles de formation',
    description: 'Espaces équipés pour les ateliers et formations.',
    icon: 'graduation'
  },
  {
    name: 'Laboratoire IA',
    description: 'Environnement sécurisé pour tester les outils IA.',
    icon: 'lab'
  },
  {
    name: 'Co-working',
    description: 'Espaces de travail partagés pour les membres.',
    icon: 'coworking'
  },
]

const accompagnements = [
  {
    title: 'Citoyens',
    description: 'Comprendre l\'IA pour mieux l\'utiliser au quotidien',
    href: '/accompagnements/citoyens'
  },
  {
    title: 'Entreprises',
    description: 'Intégrer l\'IA dans votre stratégie et vos opérations',
    href: '/accompagnements/entreprises'
  },
  {
    title: 'Secteurs créatifs',
    description: 'Exploiter les outils de génération créative',
    href: '/accompagnements/secteurs-creatifs'
  },
  {
    title: 'Éducation',
    description: 'Former les générations présentes et futures',
    href: '/accompagnements/education'
  },
  {
    title: 'Pouvoirs publics',
    description: 'Accompagner la transformation numérique publique',
    href: '/accompagnements/pouvoirs-publics'
  },
]

export default function OnePage() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add('bg-bg/95', 'backdrop-blur-sm', 'shadow-sm')
        } else {
          headerRef.current.classList.remove('bg-bg/95', 'backdrop-blur-sm', 'shadow-sm')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent transition-all duration-300 py-5"
      >
        <div className="max-w-content mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="ICIA" className="h-8 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollTo('apropos')} className="text-sm font-medium hover:text-accent transition-colors">À propos</button>
            <button onClick={() => scrollTo('accompagner')} className="text-sm font-medium hover:text-accent transition-colors">Accompagner</button>
            <button onClick={() => scrollTo('think-tank')} className="text-sm font-medium hover:text-accent transition-colors">Think Tank</button>
            <button onClick={() => scrollTo('reseau')} className="text-sm font-medium hover:text-accent transition-colors">Réseau</button>
            <button onClick={() => scrollTo('plateforme')} className="text-sm font-medium hover:text-accent transition-colors">Plateforme</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium hover:text-accent transition-colors">Contact</button>
          </nav>
          <button onClick={() => scrollTo('contact')} className="hidden lg:block">
            <Button variant="primary" size="sm">Nous contacter</Button>
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-tight mb-8">
                <TextReveal delay={0.1}>L'Institut Collectif de l'IA :</TextReveal>
                <span className="block">
                  <TextReveal delay={0.3}>une IA comprise, maîtrisée et partagée</TextReveal>
                </span>
              </h1>
              <ScaleIn delay={0.5}>
                <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
                  Un projet français, ancré en France et ouvert sur le monde, pour que chacun et chaque organisation puisse bénéficier concrètement de l'intelligence artificielle.
                </p>
              </ScaleIn>
              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" onClick={() => scrollTo('accompagner')}>
                    Nos programmes
                  </Button>
                  <Button variant="ghost" size="lg" onClick={() => scrollTo('contact')}>
                    Nous contacter
                  </Button>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </section>

        <section id="apropos" className="py-24 px-4 border-t border-border">
          <div className="max-w-content mx-auto">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-8">Pourquoi l'Institut Collectif de l'IA ?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-text-muted mb-8 max-w-2xl">
                L'intelligence artificielle progresse très vite, mais son appropriation reste inégale. 
                L'Institut Collectif de l'IA agit comme un tiers de confiance : il explique, outille et sécurise les usages de l'IA pour toutes et tous.
              </p>
            </FadeIn>
            <Stagger>
              <div className="grid md:grid-cols-4 gap-6 mt-12">
                {[
                  { title: 'Indépendance', desc: 'Une gouvernance pluraliste pour garantir notre liberté de parole et d\'action.' },
                  { title: 'Transparence', desc: 'Une organisation ouverte, dont les finances et les méthodes sont accessibles à tous.' },
                  { title: 'Éthique', desc: 'Une approche responsable de l\'IA, au service de l\'humanité et de l\'environnement.' },
                  { title: 'Collectif', desc: 'Un projet porté par une communauté diverse, au-delà des intérêts particuliers.' },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-6 border border-border bg-white rounded-xl">
                      <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="accompagner" className="py-24 px-4 bg-gray-50 border-t border-border">
          <div className="max-w-content mx-auto">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-4 text-center">Nos accompagnements</h2>
              <p className="text-lg text-text-muted text-center mb-12 max-w-2xl mx-auto">
                Des parcours adaptés à chaque profil pour maîtriser l'intelligence artificielle.
              </p>
            </FadeIn>
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accompagnements.map((item) => (
                  <StaggerItem key={item.title}>
                    <Link href={item.href} className="block p-8 border border-border bg-white rounded-xl hover:shadow-md transition-all group">
                      <h3 className="font-serif text-xl mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-text-muted">{item.description}</p>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="think-tank" className="py-24 px-4 border-t border-border">
          <div className="max-w-content mx-auto">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-4">Think Tank IA</h2>
              <p className="text-lg text-text-muted mb-12 max-w-2xl">
                Observer, analyser, proposer. Un lieu de réflexion indépendante sur les enjeux de l'intelligence artificielle.
              </p>
            </FadeIn>
            <Stagger>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Régulation et gouvernance', desc: 'Analyser les cadres réglementaires, proposer une gouvernance éthique.' },
                  { title: 'Impacts socio-économiques', desc: 'Comprendre les transformations du marché du travail et les enjeux économiques.' },
                  { title: 'Usages sectoriels', desc: 'Analyser les applications de l\'IA dans chaque secteur d\'activité.' },
                  { title: 'IA et société', desc: 'Examiner les implications de l\'IA sur le tissu social et démocratique.' },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-6 border border-border bg-white rounded-xl">
                      <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="reseau" className="py-24 px-4 bg-gray-50 border-t border-border">
          <div className="max-w-content mx-auto">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-4 text-center">Notre réseau</h2>
              <p className="text-lg text-text-muted text-center mb-12 max-w-2xl mx-auto">
                Un ancrage territorial, un rayonnement national.
              </p>
            </FadeIn>
            <Stagger>
              <div className="grid md:grid-cols-4 gap-6">
                {spaces.map((space) => (
                  <StaggerItem key={space.name}>
                    <div className="p-6 border border-border bg-white text-center">
                      <div className="w-12 h-12 mx-auto mb-4 text-black">
                        <Icon name={space.icon} className="w-full h-full" />
                      </div>
                      <h3 className="font-serif text-lg mb-2">{space.name}</h3>
                      <p className="text-sm text-text-muted">{space.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="plateforme" className="py-24 px-4 border-t border-border">
          <div className="max-w-content mx-auto">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-4">Plateforme numérique</h2>
              <p className="text-lg text-text-muted mb-12 max-w-2xl">
                Apprendre, se former, progresser. Votre compagnon pour maîtriser l'intelligence artificielle.
              </p>
            </FadeIn>
            <Stagger>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Parcours d\'apprentissage', desc: 'Des formations structurées et progressives.' },
                  { title: 'Certifications', desc: 'Validez vos compétences avec des certifications reconnues.' },
                  { title: 'Communauté', desc: 'Échangez avec d\'autres apprenants et des experts.' },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-6 border border-border bg-white rounded-xl">
                      <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </section>

        <section id="partenaires" className="py-0">
          <PartnerLogos />
        </section>

        <section id="contact" className="py-24 px-4 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-serif text-[40px] mb-4">Contactez-nous</h2>
              <p className="text-lg text-text-muted mb-8">
                Vous avez un projet, une question, une idée de partenariat ? L'équipe de l'ICIA est à votre écoute.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button href="/contact" variant="primary" size="lg">Envoyer un message</Button>
            </FadeIn>
          </div>
        </section>

        <footer className="bg-black text-white py-12 px-4 border-t border-white/20">
          <div className="max-w-content mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <img src="/logo-white.svg" alt="ICIA" className="h-8 w-auto mb-2" />
              <p className="text-sm text-white/70">Un projet français pour que chacun puisse bénéficier de l'IA.</p>
            </div>
            <div className="flex gap-6 text-sm text-white/70">
              <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
              <Link href="/partenaires" className="hover:text-white">Partenaires</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
