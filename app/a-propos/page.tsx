'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const pillars = [
  {
    num: '01',
    title: 'Indépendance technologique',
    description: 'Aucune affiliation à un fournisseur d\'IA. Recommandations neutres, fondées sur les besoins du client. Nous lavorons avec les meilleurs artisans du marché.',
  },
  {
    num: '02',
    title: 'Conseil stratégique pur',
    description: 'Stratégie IA, gouvernance, change management, conformité AI Act. Nous pilotons les partenaires techniques sans en dépendre.',
  },
  {
    num: '03',
    title: 'Tiers de confiance',
    description: 'Interlocuteur unique du client. Tous les livrables, toutes les responsabilités portent la marque Mentivis / Institut de l\'IA.',
  },
]

const whatWeAreNot = [
  'Une agence IA ou un intégrateur technologique',
  'Un développeur de logiciels ou de modèles',
  'Un revendeur lié à un fournisseur (Microsoft, Google, OpenAI...)',
  'Un organisme de formation généraliste',
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">
                Institut de l'IA · Mentivis SAS
              </p>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 max-w-3xl">
                Nous ne vendons pas de l'IA.
                <br />
                <span className="text-rouge">Nous aidons à en faire un avantage pour tous.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl">
                L'Institut de l'IA est porté par Mentivis, cabinet de conseil en transformation stratégique. 
                Notre rôle : aider les organisations à comprendre, maîtriser et déployer l'intelligence artificielle 
                avec méthode, indépendance et responsabilité.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Architect quote */}
        <Section className="bg-cream">
          <FadeIn>
            <blockquote className="bg-white p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-serif text-navy italic leading-relaxed mb-6">
                "Quand vous faites construire une maison, vous ne choisissez pas votre architecte 
                parce qu'il sait poser des parpaings. Vous le choisissez parce qu'il comprend 
                ce que vous voulez construire, qu'il sait qui appeler pour le faire, 
                et qu'il ne vous lâche pas avant que ce soit parfait."
              </p>
              <p className="text-lg font-semibold text-rouge">
                C'est exactement ce que nous faisons avec l'IA.
              </p>
            </blockquote>
          </FadeIn>
        </Section>

        {/* Ce que nous ne sommes pas */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-8">Ce que nous ne sommes pas</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {whatWeAreNot.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                <span className="text-rouge text-xl">—</span>
                <span className="text-text-muted">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 3 Piliers */}
        <Section className="bg-cream border-t border-border">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Nos piliers</p>
              <h2 className="text-3xl md:text-4xl font-serif text-navy">
                Indépendance · Conseil · Tiers de confiance
              </h2>
            </div>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <StaggerItem key={pillar.num}>
                  <div className="bg-white p-8 rounded-2xl h-full">
                    <span className="text-4xl font-bold text-navy/20 block mb-4">{pillar.num}</span>
                    <h3 className="text-xl font-bold text-navy mb-4">{pillar.title}</h3>
                    <p className="text-text-muted">{pillar.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Notre rôle */}
        <Section className="bg-white">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-serif text-navy mb-6">Notre rôle</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  L'Institut de l'IA défend une conviction forte : l'IA doit devenir un <strong>bien commun</strong>, 
                  compréhensible et maîtrisable, permettant à chacun de progresser et de tirer parti de cette révolution — 
                  au service de l'intérêt général et de l'émancipation individuelle.
                </p>
                <p>
                  L'IA transforme toutes les organisations, mais 95 % n'en tirent pas encore de vraies valeurs. 
                  Pas parce qu'il manque d'outils ou d'algorithmes. Parce qu'il manque un partenaire de confiance, 
                  capable de dire clairement : quoi faire, dans quel ordre, avec quel risque.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Ancrage */}
        <Section className="bg-navy">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Ancrage</p>
                <h2 className="text-3xl font-serif text-white mb-6">
                  Campus Cyber.AI, Marseille
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Un lieu physique et un réseau humain, ancré dans le tissu économique local, 
                  qui accompagne les entreprises, les pouvoirs publics et les acteurs de la formation 
                  dans leur transformation IA.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl">
                <h3 className="font-bold text-white mb-4">Vision internationale</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Essaimage vers Lyon, Paris</li>
                  <li>• Maurice, Sénégal, Montréal</li>
                  <li>• Partage open source des ressources</li>
                  <li>• Standards identiques dans tous les centres</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="bg-cream">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-navy mb-4">
                En 4 semaines, vous avez une feuille de route claire.
                <br />
                En 6 mois, vos équipes changent de pratique.
              </h2>
              <p className="text-text-muted mb-8">
                Prenons rendez-vous pour discuter de votre transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-rouge text-white font-bold rounded-lg hover:bg-rouge/90 transition-colors">
                  Nous contacter
                </Link>
                <Link href="/offres" className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-colors">
                  Découvrir nos offres
                </Link>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
