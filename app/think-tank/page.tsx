import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'

const themes = [
  {
    title: 'Régulation et gouvernance',
    description: 'Analyser les cadres réglementaires, proposer une gouvernance éthique et démocrat',
    items: [
      'Éthique et régulation de l\'IA',
      'Méthodologie d\'étude d\'impact',
      'Gouvernance des systèmes IA',
    ]
  },
  {
    title: 'Impacts socio-économiques',
    description: 'Comprendre les transformations du marché du travail et les enjeux économiques',
    items: [
      'Emploi et transformation des compétences',
      'Métiers proofs à l\'IA',
      'Redistribution de la valeur économique',
    ]
  },
  {
    title: 'Usages sectoriels',
    description: 'Analyser les applications de l\'IA dans chaque secteur d\'activité',
    items: [
      'Industries créatives',
      'Services publics',
      'Éducation et formation',
      'Santé',
    ]
  },
  {
    title: 'IA et société',
    description: 'Examiner les implications de l\'IA sur le tissu social et démocratique',
    items: [
      'Débat public et participation',
      'Désinformation et fake news',
      'Implications démocratiques',
      'Évolution culturelle',
    ]
  },
]

const outputs = [
  { title: 'Notes de recherche', frequency: 'Bimestriel', description: 'Analyses courtes sur l\'actualit\u00e9 de l\'IA' },
  { title: 'Livres blancs', frequency: 'Trimestriel', description: 'Études approfondies sur des thématiques clés' },
  { title: 'Rapports', frequency: 'Semestriel', description: 'Bilans et recommandations pour les décideurs' },
  { title: 'Conférences publiques', frequency: 'Régulier', description: 'Événements de diffusion vers le grand public' },
]

export default function ThinkTankPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>Think Tank IA :</TextReveal>
                <br />
                <TextReveal delay={0.2}>observer, analyser, proposer</TextReveal>
              </h1>
              <ScaleIn delay={0.4}>
                <p className="text-body text-text-muted">
                  Le Think Tank de l'ICIA est un lieu de réflexion indépendante sur les enjeux 
                  de l'intelligence artificielle. Nous produisons des analyses rigoureuses, 
                  accompagnons les décideurs et partecipons au débat public.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-0">
          <div className="w-full">
            <img src="/images/think.webp" alt="THINK" className="w-full h-auto" />
          </div>
        </Section>

        <Section className="py-12 border-t border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Nos quatre axes de recherche</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 gap-6">
              {themes.map((theme) => (
                <StaggerItem key={theme.title}>
                  <article className="p-8 border border-border bg-white hover:bg-[#e3dacc] rounded-xl transition-colors">
                    <h3 className="font-serif text-h3 mb-3">{theme.title}</h3>
                    <p className="text-text-muted mb-4">{theme.description}</p>
                    <ul className="space-y-1">
                      {theme.items.map((item) => (
                        <li key={item} className="text-sm text-text-muted flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Nos formats de publication</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outputs.map((output) => (
                <StaggerItem key={output.title}>
                  <div className="p-6 border border-border rounded-xl">
                    <p className="text-xs text-accent mb-2">{output.frequency}</p>
                    <h3 className="font-serif text-h3 mb-2">{output.title}</h3>
                    <p className="text-sm text-text-muted">{output.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-h2 mb-4">Participez aux travaux</h2>
              <p className="text-text-muted mb-8">
                Le Think Tank ICIA est ouvert aux contributions. Rejoignez nos groupes de travail, 
                participez à nos événements ou soumettez vos propositions de recherche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact?subject=partnership">
                  <Button variant="primary">
                    Participer aux travaux
                  </Button>
                </Link>
                <Button variant="secondary">
                  S'inscrire à la newsletter
                </Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
