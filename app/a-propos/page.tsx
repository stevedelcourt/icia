import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'

const values = [
  { title: 'Indépendance', description: 'Une gouvernance pluraliste pour garantir notre liberté de parole et d\'action.' },
  { title: 'Transparence', description: 'Une organisation ouverte, dont les finances et les méthodes sont accessibles à tous.' },
  { title: 'Éthique', description: 'Une approche responsable de l\'IA, au service de l\'humanité et de l\'environnement.' },
  { title: 'Collectif', description: 'Un projet porté par une communauté diverse, au-delà des intérêts particuliers.' },
]

const governance = [
  { title: 'Conseil d\'administration', description: 'Définit la stratégie et surveille la gestion' },
  { title: 'Comité scientifique', description: 'Assure la rigueur des recherches et recommandations' },
  { title: 'Conseil consultatif', description: 'Représente les parties prenantes et apporte expertise' },
  { title: 'Équipe opérationnelle', description: 'Met en œuvre les missions au quotidien' },
]

const funding = [
  { title: 'Financement public', percent: '30-40%', description: 'Subventions, appels à projets' },
  { title: 'Partenariats privés', percent: '30-40%', description: 'Entreprises, fondations' },
  { title: 'Revenus services', percent: '20-30%', description: 'Formations, accompagnements' },
  { title: 'Dons', percent: '5-10%', description: 'Mécénat, donations' },
]

const timeline = [
  { year: '2024', event: 'Lancement du projet ICIA' },
  { year: 'Q2 2025', event: 'Ouverture du flagship Marseille' },
  { year: 'Q4 2025', event: 'Lancement de la plateforme numérique' },
  { year: '2026', event: 'Premiers hubs régionaux' },
  { year: '2027+', event: 'Déploiement national' },
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>À propos de l'Institut Collectif de l'IA</TextReveal>
              </h1>
              <ScaleIn delay={0.3}>
                <p className="text-body text-text-muted">
                  L'Institut Collectif de l'IA (ICIA) est une organisation française à but non lucratif 
                  qui accompagne les citoyens, entreprises et institutions dans leur appropriation de 
                  l'intelligence artificielle.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Notre mission</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              Permettre à chacun – individu, organisation, territoire – de comprendre, maîtriser 
              et bénéficier concrètement de l'intelligence artificielle, dans une démarche éthique 
              et responsable.
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="p-6 border border-border bg-white rounded-xl">
                    <h3 className="font-serif text-h3 mb-2">{value.title}</h3>
                    <p className="text-sm text-text-muted">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Gouvernance</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 gap-6">
              {governance.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-6 border border-border bg-bg rounded-xl">
                    <h3 className="font-serif text-h3 mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Modèle économique</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              Un financement diversifié pour garantir notre indépendance et notre pérenité.
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 gap-6">
              {funding.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="text-center p-6">
                    <p className="text-3xl font-serif mb-2">{item.percent}</p>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 bg-bg border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Chronologie</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-accent mb-1">{item.year}</p>
                    <p className="font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Rejoignez l'aventure</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              L'ICIA est un projet collectif. Partenaires, bénévoles, chercheurs, formateurs... 
              Il y a de nombreuses façons de participer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?subject=partnership">
                <Button variant="primary" size="lg">
                  Devenir partenaire
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
