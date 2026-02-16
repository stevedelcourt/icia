import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'

const missionObjectives = [
  { title: 'Comprendre', description: 'Permettre au plus grand nombre de comprendre concrètement l\'IA' },
  { title: 'Accompagner', description: 'Accompagner les organisations dans son adoption responsable' },
  { title: 'Soutenir', description: 'Soutenir l\'évolution des formations et des compétences' },
  { title: 'Contribuer', description: 'Contribuer au débat public sur ses impacts sociaux et économiques' },
]

const modelColumns = [
  { 
    title: 'Un lieu', 
    description: 'Un espace ouvert accueillant ateliers, formations, laboratoire IA et rencontres entre acteurs publics, éducatifs, économiques et culturels.' 
  },
  { 
    title: 'Une plateforme', 
    description: 'Un environnement numérique proposant ressources, parcours en ligne, cas d\'usage, certifications et orientation.' 
  },
  { 
    title: 'Un réseau', 
    description: 'Une communauté structurée d\'experts, d\'écoles, d\'entreprises et d\'acteurs publics partageant leurs compétences et leurs ressources.' 
  },
]

const audienceList = [
  { 
    title: 'Citoyens et actifs', 
    description: 'Comprendre l\'IA, développer leurs compétences, renforcer leur employabilité.' 
  },
  { 
    title: 'Entreprises et organisations', 
    description: 'Identifier des usages pertinents, former leurs équipes, déployer des solutions.' 
  },
  { 
    title: 'Écoles et universités', 
    description: 'Intégrer l\'IA dans les cursus, mobiliser des experts, accéder à des contenus pédagogiques.' 
  },
  { 
    title: 'Acteurs culturels et créatifs', 
    description: 'Expérimenter de nouveaux outils, comprendre les impacts juridiques et économiques.' 
  },
  { 
    title: 'Acteurs publics et territoires', 
    description: 'Soutenir l\'inclusion numérique, accompagner la transformation des services, renforcer l\'attractivité locale.' 
  },
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>À propos de l'</TextReveal>
                <TextReveal delay={0.2}>Institut Collectif de l'IA</TextReveal>
              </h1>
              <ScaleIn delay={0.4}>
                <p className="text-body text-text-muted">
                  L'Institut Collectif de l'IA est une initiative française d'intérêt collectif visant à rendre 
                  l'intelligence artificielle comprise, accessible et utile à tous.
                </p>
                <p className="text-body text-text-muted mt-4">
                  Ancré en France et ouvert sur le monde, il agit pour que l'IA devienne un levier de progrès 
                  social, économique et culturel, au service de l'intérêt général.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>

        {/* Notre conviction */}
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-h2 mb-6">Notre conviction</h2>
              <p className="text-lg text-text-muted">
                L'intelligence artificielle transforme en profondeur le travail, l'accès au savoir, la création et l'action publique.
              </p>
              <p className="text-lg text-text-muted mt-4">
                Pourtant, son appropriation reste inégale. Sans espaces neutres pour comprendre, tester et déployer 
                ces technologies, les organisations comme les citoyens avancent sans repère commun.
              </p>
              <p className="text-lg text-text-muted mt-4 font-medium">
                L'Institut a été créé pour offrir ce cadre collectif : expliquer, outiller et sécuriser l'usage de l'IA dans la société.
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Notre mission */}
        <Section className="py-12">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Notre mission</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              L'Institut poursuit quatre objectifs :
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionObjectives.map((item, index) => (
                <StaggerItem key={item.title}>
                  <div className="p-6 border border-border bg-white rounded-xl h-full">
                    <span className="text-2xl mb-4 block">{index + 1}</span>
                    <h3 className="font-serif text-h3 mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Organisation Schema */}
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Notre organisation</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              Découvrez la structure de l'Institut à travers son organisation systémique.
            </p>
            <div className="w-full overflow-x-auto">
              <img 
                src="/organisation-schema.svg" 
                alt="Organisation ICIA" 
                className="w-full min-w-[900px]"
                style={{ minHeight: '450px' }}
              />
            </div>
            <div className="text-center mt-6">
              <Link href="/organisation">
                <Button variant="secondary" size="md">
                  Voir la page complète
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Section>

        {/* Un modèle en trois dimensions */}
        <Section className="py-12">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Un modèle en trois dimensions</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              L'action de l'Institut repose sur un modèle intégré :
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-6">
              {modelColumns.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-8 border border-border bg-white rounded-xl h-full text-center">
                    {item.title === 'Un lieu' && (
                      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4">
                        <path d="M32 8 L56 28 L56 52 L8 52 L8 28 Z" fill="none" stroke="black" strokeWidth="3"/>
                        <rect x="22" y="36" width="20" height="16" fill="black"/>
                        <rect x="26" y="40" width="4" height="4" fill="white"/>
                        <rect x="34" y="40" width="4" height="4" fill="white"/>
                      </svg>
                    )}
                    {item.title === 'Une plateforme' && (
                      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4">
                        <rect x="4" y="20" width="56" height="32" rx="4" fill="none" stroke="black" strokeWidth="3"/>
                        <rect x="10" y="26" width="20" height="2" fill="black"/>
                        <rect x="10" y="32" width="44" height="2" fill="black"/>
                        <rect x="10" y="38" width="36" height="2" fill="black"/>
                        <circle cx="50" cy="44" r="4" fill="black"/>
                      </svg>
                    )}
                    {item.title === 'Un réseau' && (
                      <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-4">
                        <circle cx="32" cy="32" r="8" fill="black"/>
                        <circle cx="16" cy="20" r="6" fill="none" stroke="black" strokeWidth="2"/>
                        <circle cx="48" cy="20" r="6" fill="none" stroke="black" strokeWidth="2"/>
                        <circle cx="16" cy="44" r="6" fill="none" stroke="black" strokeWidth="2"/>
                        <circle cx="48" cy="44" r="6" fill="none" stroke="black" strokeWidth="2"/>
                        <line x1="26" y1="26" x2="18" y2="22" stroke="black" strokeWidth="2"/>
                        <line x1="38" y1="26" x2="46" y2="22" stroke="black" strokeWidth="2"/>
                        <line x1="26" y1="38" x2="18" y2="42" stroke="black" strokeWidth="2"/>
                        <line x1="38" y1="38" x2="46" y2="42" stroke="black" strokeWidth="2"/>
                      </svg>
                    )}
                    <h3 className="font-serif text-h3 mb-4">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Pour qui */}
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Pour qui agit l'Institut</h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
              L'Institut s'adresse à :
            </p>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {audienceList.map((item) => (
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

        {/* Une infrastructure collective */}
        <Section className="py-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-h2 mb-6">Une infrastructure collective</h2>
              <p className="text-lg text-text-muted mb-8">
                L'Institut Collectif de'est ni un simple centre de formation, l'IA n ni un think tank, ni un incubateur.
              </p>
              <div className="p-8 rounded-xl" style={{ backgroundColor: '#EBDBBC' }}>
                <p className="text-xl font-medium mb-6">
                  Il constitue une <strong>infrastructure collective</strong> permettant :
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-2">
                      <rect x="8" y="16" width="48" height="36" rx="4" fill="black"/>
                      <rect x="14" y="22" width="36" height="2" fill="white"/>
                      <rect x="14" y="28" width="24" height="2" fill="white"/>
                      <rect x="14" y="34" width="30" height="2" fill="white"/>
                      <rect x="14" y="40" width="18" height="2" fill="white"/>
                    </svg>
                    <p className="font-medium">D'apprendre</p>
                  </div>
                  <div className="text-center">
                    <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-2">
                      <circle cx="32" cy="32" r="20" fill="none" stroke="black" strokeWidth="3"/>
                      <circle cx="32" cy="32" r="8" fill="black"/>
                      <circle cx="32" cy="16" r="4" fill="black"/>
                      <circle cx="32" cy="48" r="4" fill="black"/>
                      <circle cx="16" cy="32" r="4" fill="black"/>
                      <circle cx="48" cy="32" r="4" fill="black"/>
                    </svg>
                    <p className="font-medium">D'expérimenter</p>
                  </div>
                  <div className="text-center">
                    <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-2">
                      <path d="M32 8 L56 32 L44 32 L44 56 L20 56 L20 32 L8 32 Z" fill="black"/>
                      <path d="M28 24 L36 24 L36 32 L28 32 Z" fill="white"/>
                    </svg>
                    <p className="font-medium">De déployer</p>
                  </div>
                  <div className="text-center">
                    <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-2">
                      <ellipse cx="32" cy="24" rx="16" ry="12" fill="none" stroke="black" strokeWidth="3"/>
                      <path d="M16 40 Q32 56 48 40" fill="none" stroke="black" strokeWidth="3"/>
                      <circle cx="26" cy="22" r="2" fill="black"/>
                      <circle cx="38" cy="22" r="2" fill="black"/>
                    </svg>
                    <p className="font-medium">Et de débattre</p>
                  </div>
                </div>
                <p className="text-lg text-text-muted mt-8">
                  Afin que l'intelligence artificielle reste un outil maîtrisé, partagé et orienté vers le bien commun.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="py-12 text-center border-t border-border">
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
