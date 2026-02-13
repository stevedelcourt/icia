import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

function HeroImage() {
  return (
    <FadeIn direction="up" duration={0.8} delay={0.2}>
      <div className="w-full aspect-[16/9] bg-border overflow-hidden">
        <img 
          src="/images/hero.webp" 
          alt="Institut Collectif de l'IA" 
          className="w-full h-full object-cover"
        />
      </div>
    </FadeIn>
  )
}

export default function Home() {
  const cards = [
    { 
      title: 'Citoyens', 
      description: 'Comprendre l\'IA, rester en securite, se former et evoluer professionnellement.',
      href: '/accompagnements/citoyens'
    },
    { 
      title: 'Entreprises', 
      description: 'Diagnostics partages, formations ciblees, prototypes et accompagnement au deploiement.',
      href: '/accompagnements/entreprises'
    },
    { 
      title: 'Ecoles et Universites', 
      description: 'Ressources pedagogiques, formation des formateurs, certifications et badges.',
      href: '/accompagnements/education'
    },
    { 
      title: 'Createurs et creatrices', 
      description: 'Ateliers, innovation, cadre juridique et laboratoire securise pour les secteurs creatifs.',
      href: '/accompagnements/secteurs-creatifs'
    },
    { 
      title: 'Pouvoirs publics', 
      description: 'Programmes d\'inclusion, transformation des services et observatoire territorial.',
      href: '/accompagnements/pouvoirs-publics'
    },
  ]

  return (
    <>
      <Header />
      <main id="main-content">
        <Section spacing="large">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-h1 mb-8 leading-tight">
                L'Institut Collectif de l'IA : une IA comprise, maitrisee et partagee
              </h1>
              <p className="text-body text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                Un projet francais, ancre a Marseille et ouvert sur le monde, pour que chacun et chaque organisation puisse beneficier concretement de l'intelligence artificielle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/accompagnements">
                  <Button variant="primary" size="lg">
                    Decouvrir nos accompagnements
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <HeroImage />
        
        <Section spacing="normal">
          <FadeIn delay={0.1}>
            <div className="max-w-2xl">
              <h2 className="font-serif text-h2 mb-8">
                Pourquoi l'Institut Collectif de l'IA ?
              </h2>
              <p className="text-body text-text-muted mb-6 leading-relaxed">
                L'intelligence artificielle progresse tres vite, mais son appropriation reste inegale. Une grande partie de la population, des PME, des createurs et creatrices, et des institutions n'a ni le temps, ni les reperes, ni les ressources pour l'utiliser de maniere eclairee et securisee.
              </p>
              <p className="text-body text-text-muted mb-8 leading-relaxed">
                L'Institut Collectif de l'IA agit comme un tiers de confiance : il explique, outille et securise les usages de l'IA pour toutes et tous. Notre mission est de rendre l'IA accessible, comprehensible et maitrisable, dans une demarche collective et ouverte.
              </p>
              <Link href="/a-propos" className="text-accent hover:text-accent-hover underline underline-offset-4">
                En savoir plus sur notre vision
              </Link>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="bg-white border-y border-border" spacing="normal">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-h2 mb-12 text-center">
              Cinq publics, des accompagnements sur mesure
            </h2>
          </FadeIn>
          <Stagger delay={0.08}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((item) => (
                <StaggerItem key={item.title}>
                  <Link href={item.href} className="block bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-400 hover:shadow-sm transition-all h-full">
                    <h3 className="font-serif text-h3 mb-4">{item.title}</h3>
                    <p className="text-text-muted mb-4">{item.description}</p>
                    <span className="text-accent text-sm">Voir l'accompagnement →</span>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section spacing="normal">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-h2 mb-8 text-center">
              Un modele unique : lieu + plateforme + reseau
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-body text-text-muted leading-relaxed mb-8">
                L'Institut Collectif de l'IA repose sur trois piliers complementaires :
              </p>
              <ul className="space-y-6 text-body">
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Un lieu physique accessible</strong>
                  <span className="text-text-muted"> — avec espaces d'accueil, salles de formation, laboratoire IA et espace creatif.</span>
                </li>
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Une plateforme numerique</strong>
                  <span className="text-text-muted"> — pour apprendre, se former, suivre des parcours et obtenir des badges.</span>
                </li>
                <li className="pl-6 border-l-2 border-accent">
                  <strong className="font-medium">Un reseau d'acteurs</strong>
                  <span className="text-text-muted"> — entreprises, ecoles, experts, pouvoirs publics qui partagent leurs ressources.</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reseau-lieu" className="text-accent hover:text-accent-hover underline underline-offset-4">
                Decouvrir le lieu et le reseau →
              </Link>
              <span className="text-text-muted hidden sm:inline">·</span>
              <Link href="/plateforme-numerique" className="text-accent hover:text-accent-hover underline underline-offset-4">
                Acceder a la plateforme →
              </Link>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="bg-white border-t border-border" spacing="normal">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-serif text-h2 mb-4">
                Vous avez un projet, une question ?
              </h2>
              <p className="text-text-muted mb-8">
                L'equipe de l'Institut Collectif de l'IA est a votre ecoute.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
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
