'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const pillars = [
  {
    num: '01',
    title: 'Indépendance technologique',
    description: 'Aucune affiliation à un fournisseur d\'IA. Recommandations neutres, fondées uniquement sur vos besoins.',
    icon: '⚖️',
  },
  {
    num: '02',
    title: 'Conseil stratégique pur',
    description: 'Stratégie IA, gouvernance, change management, conformité AI Act. Nous pilotons les partenaires sans en dépendre.',
    icon: '🎯',
  },
  {
    num: '03',
    title: 'Tiers de confiance',
    description: 'Interlocuteur unique. Tous les livrables portent la marque Mentivis / Institut de l\'IA.',
    icon: '🤝',
  },
]

const offers = [
  {
    num: '01',
    title: 'Diagnostic IA & AI Act',
    tagline: 'Porte d\'entrée universelle',
    price: '8 000 – 12 000 €',
    description: 'En 4 à 6 semaines, vous savez où vous en êtes, où vous pouvez aller, et ce que l\'AI Act vous impose.',
    duration: '4-6 semaines',
    href: '/offres/diagnostic',
  },
  {
    num: '02',
    title: 'Formations & Acculturation',
    tagline: 'Volume & Financement OPCO',
    price: '2 000 – 5 000 € / jour',
    description: 'Vos équipes utilisent déjà l\'IA. On fait en sorte qu\'elles le fassent bien, dans un cadre sécurisé.',
    duration: 'Intra-entreprise',
    href: '/offres/formations',
  },
  {
    num: '03',
    title: 'Transformation IA',
    tagline: 'Accompagnement 6-12 mois',
    price: '30 000 – 80 000 €',
    description: 'On vous aide à passer de l\'expérimentation à la pratique quotidienne, avec des résultats mesurables.',
    duration: '6-12 mois',
    href: '/offres/transformation',
  },
  {
    num: '04',
    title: 'Partenaire IA Mensuel',
    tagline: 'Abonnement',
    price: '1 000 – 3 000 € / mois',
    description: 'Un partenaire indépendant pour vous aider à décider sur l\'IA, en continu.',
    duration: 'Abonnement',
    href: '/offres/partenaire',
  },
]

const targets = [
  {
    title: 'PME / ETI',
    description: 'Dirigeants, DAF, directeurs opérationnels',
    pain: 'Pas de DSI IA interne, peur du RGPD, AI Act',
    offer: 'Diagnostic + Feuille de route + Transformation',
    href: '/accompagnements/pme-eti',
  },
  {
    title: 'Pouvoirs publics',
    description: 'Métropoles, communes, établissements publics',
    pain: 'Modernisation, PRIAM, éthique, souveraineté',
    offer: 'AMO IA, acculturation agents, observatoire',
    href: '/accompagnements/pouvoirs-publics',
  },
  {
    title: 'Écoles / CFA',
    description: 'Enseignement supérieur, formation pro',
    pain: 'Pas d\'experts IA, besoin de modules clés en main',
    offer: 'Ingénierie pédagogique, formation formateurs',
    href: '/accompagnements/education',
  },
  {
    title: 'Industries créatives',
    description: 'Studios, agences, producteurs',
    pain: 'Droits d\'auteur, cadre juridique, expérimentation',
    offer: 'Ateliers, sécurisation juridique, labo',
    href: '/accompagnements/secteurs-creatifs',
  },
  {
    title: 'Grand public',
    description: 'Demandeurs d\'emploi, particuliers',
    pain: 'Fracture IA, méconnaissance, risques',
    offer: 'Ateliers acculturation, CPF, France Travail',
    href: '/accompagnements/citoyens',
  },
]

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20">
          <FadeIn>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/70 text-sm mb-8">
              Institut de l'IA · Campus Cyber.AI, Marseille
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 max-w-4xl leading-tight">
              Nous ne vendons pas de l'IA.
              <br />
              <span className="text-rouge">Nous aidons à en faire un avantage pour tous.</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-6 max-w-2xl leading-relaxed">
              L'IA transforme toutes les organisations, mais 95 % n'en tirent pas encore de vraies valeurs. 
              Il leur manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, 
              avec quel risque.
            </p>
            
            <p className="text-lg text-white/60 mb-12 max-w-2xl italic">
              "Quand vous faites construire une maison, vous ne choisissez pas votre architecte parce qu'il sait poser des parpaings. 
              Vous le choisissez parce qu'il comprend ce que vous voulez construire, qu'il sait qui appeler, 
              et qu'il ne vous lâche pas avant que ce soit parfait."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/offres" variant="primary" size="lg" className="!bg-rouge !text-white hover:!bg-rouge/90">
                Découvrir nos offres
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white/10">
                Parler à un expert
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* AI Act Alert */}
      <div className="bg-rouge text-white py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <span className="font-semibold">AI Act en vigueur en août 2026</span>
          <span className="mx-3">·</span>
          <span className="text-white/80">Obligations réglementaires, classification des systèmes IA, sanctions...</span>
          <Link href="/offres/diagnostic" className="ml-4 underline hover:no-underline">
            Préparer mon entreprise →
          </Link>
        </div>
      </div>

      {/* 3 Piliers */}
      <Section className="bg-cream">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Nos 3 piliers</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy">
              Indépendance · Conseil · Tiers de confiance
            </h2>
          </div>
        </FadeIn>
        
        <Stagger>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.num}>
                <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{pillar.title}</h3>
                  <p className="text-text-muted">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Section>

      {/* 4 Offres */}
      <Section className="bg-white" spacing="large">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Nos offres</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
              De la porte d'entrée à l'accompagnement long
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Quatre offres complémentaires pour répondre à chaque étape de votre transformation IA.
            </p>
          </div>
        </FadeIn>
        
        <Stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <StaggerItem key={offer.num}>
                <Link href={offer.href} className="group block bg-cream p-6 rounded-2xl border border-border hover:border-navy hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-navy/20">{offer.num}</span>
                    <span className="px-3 py-1 bg-rouge/10 text-rouge text-xs font-bold rounded-full">
                      {offer.tagline}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-rouge transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-2xl font-bold text-navy mb-1">{offer.price}</p>
                  <p className="text-sm text-text-muted mb-4">{offer.duration}</p>
                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{offer.description}</p>
                  <span className="text-rouge text-sm font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    En savoir plus →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
        
        <FadeIn>
          <div className="text-center mt-12">
            <Button href="/offres" variant="outline" size="lg">
              Voir toutes nos offres
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* 5 Cibles */}
      <Section className="bg-navy" spacing="large">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Nos cibles</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              5 segments, des réponses adaptées
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Chaque public dispose de parcours, d'outils et d'experts pensés pour ses besoins spécifiques.
            </p>
          </div>
        </FadeIn>
        
        <Stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {targets.map((target, index) => (
              <StaggerItem key={target.title}>
                <Link href={target.href} className="group block bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all h-full">
                  <h3 className="text-lg font-bold text-white mb-2">{target.title}</h3>
                  <p className="text-sm text-white/60 mb-3">{target.description}</p>
                  <p className="text-xs text-rouge mb-3">↳ {target.pain}</p>
                  <p className="text-xs text-white/50">{target.offer}</p>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
        
        <FadeIn>
          <div className="text-center mt-12">
            <Button href="/accompagnements" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white/10">
              Voir les accompagnements
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section className="bg-cream">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
              Prêt à faire de l'IA un avantage pour votre organisation ?
            </h2>
            <p className="text-text-muted mb-8">
              En 4 semaines, vous avez une feuille de route claire. En 6 mois, vos équipes changent de pratique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact?subject=diagnostic" variant="primary" size="lg" className="!bg-rouge !text-white hover:!bg-rouge/90">
                Demander un diagnostic
              </Button>
              <Button href="/a-propos" variant="outline" size="lg">
                En savoir plus sur nous
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Footer />
    </>
  )
}
