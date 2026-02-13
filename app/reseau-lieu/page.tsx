import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const spaces = [
  {
    name: 'Zone d\'accueil',
    description: 'Un espace ouvert et chaleureux pour accueillir le public, consulter des ressources et échanger.',
    capacity: '50 personnes',
    icon: '🏠'
  },
  {
    name: 'Salles de formation',
    description: 'Des espaces équipés pour les ateliers et formations, avec matériel audiovisuel.',
    capacity: '20-40 personnes',
    icon: '🎓'
  },
  {
    name: 'Laboratoire IA',
    description: 'Un environnement sécurisé pour tester et expérimenter les outils d\'IA.',
    capacity: '15 personnes',
    icon: '🔬'
  },
  {
    name: 'Espace créatif',
    description: 'Un lieu dédié aux creators pour expérimenter avec les outils de génération.',
    capacity: '20 personnes',
    icon: '🎨'
  },
  {
    name: 'Co-working',
    description: 'Des espaces de travail partagés pour les membres et partenaires.',
    capacity: '30 personnes',
    icon: '💼'
  },
]

const centers = [
  {
    name: 'Centre Flagship',
    location: 'Marseille',
    description: 'Services complets',
    surface: '300-500m²',
    services: ['Formation', 'Coworking', 'Événements', 'R&D']
  },
  {
    name: 'Hubs Régionaux',
    location: 'France',
    description: 'Formation et sensibilisation',
    surface: '150-200m²',
    services: ['Formation', 'Sensibilisation', 'Orientation']
  },
  {
    name: 'Espaces Satellites',
    location: 'Territoires',
    description: 'Sensibilisation et orientation',
    surface: '50-100m²',
    services: ['Information', 'Orientation', 'Ateliers']
  },
]

const timeline = [
  { phase: 'Phase 1', period: 'Année 1', content: 'Lancement flagship Marseille' },
  { phase: 'Phase 2', period: 'Années 2-3', content: '3-4 hubs régionaux' },
  { phase: 'Phase 3', period: 'Années 3-5', content: 'Déploiement national' },
]

export default function ReseauLieuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                Réseau & Lieu : un ancrage territorial, un rayonnement national
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA repose sur un modèle hybride : un lieu physique flagship à Marseille, 
                un réseau de hubs régionaux et d'espaces satellites, complété par une plateforme 
                numérique. Un ancrage territorial au service d'un rayonnement national.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Le lieu physique</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
              Le flagship ICIA à Marseille est un espace de 400m² conçu pour l'apprentissage, 
              l'expérimentation et les rencontres.
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space) => (
                <StaggerItem key={space.name}>
                  <div className="p-6 border border-border bg-white">
                    <div className="text-3xl mb-3">{space.icon}</div>
                    <h3 className="font-serif text-h3 mb-2">{space.name}</h3>
                    <p className="text-sm text-text-muted mb-3">{space.description}</p>
                    <p className="text-xs text-accent">Capacité: {space.capacity}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Architecture du réseau</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-6">
              {centers.map((center) => (
                <StaggerItem key={center.name}>
                  <div className="p-6 border border-border bg-bg">
                    <p className="text-xs text-text-muted mb-1">{center.location}</p>
                    <h3 className="font-serif text-h3 mb-2">{center.name}</h3>
                    <p className="text-sm text-text-muted mb-3">{center.description}</p>
                    <p className="text-xs text-accent mb-3">{center.surface}</p>
                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service) => (
                        <span key={service} className="text-xs px-2 py-1 bg-white border border-border">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Calendrier de déploiement</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.phase} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                  </div>
                  <div>
                    <p className="text-sm text-accent mb-1">{item.phase} • {item.period}</p>
                    <p className="font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-bg border-y border-border text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Rejoignez le réseau</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Vous souhaitez ouvrir un hub, accueillir un espace satellite ou devenir partenaire ? 
              Parlons-en.
            </p>
            <Link href="/contact?subject=partnership">
              <Button variant="primary" size="lg">
                Nous contacter
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
