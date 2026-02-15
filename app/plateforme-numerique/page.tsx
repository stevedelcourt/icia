import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import { Icon } from '@/components/ui/Icon'

const features = [
  {
    title: 'Parcours d\'apprentissage',
    description: 'Des formations structurées et progressives, du niveau débutant à expert.',
    icon: 'book'
  },
  {
    title: 'Certifications & Badges',
    description: 'Validez vos compétences avec des certifications reconnues et des badges numériques.',
    icon: 'trophy'
  },
  {
    title: 'Bibliothèque de ressources',
    description: 'Accédez à des contenus curationnés : études de cas, templates, outils.',
    icon: 'library'
  },
  {
    title: 'Communauté & Support',
    description: 'Échangez avec d\'autres apprenants, posez vos questions aux experts.',
    icon: 'community'
  },
  {
    title: 'Suivi de progression',
    description: 'Dashboard personnalisé, achievements, et parcours adaptés à vos objectifs.',
    icon: 'chart'
  },
]

const pricing = [
  {
    name: 'Gratuit',
    price: '0€',
    period: '/an',
    description: 'Pour découvrir l\'IA',
    features: [
      'Accès aux bases',
      'Premiers modules',
      'Newsletter',
    ]
  },
  {
    name: 'Premium',
    price: '120€',
    period: '/an',
    description: 'Pour se former profondément',
    features: [
      'Tous les parcours',
      'Certifications',
      'Support prioritaire',
      'Événements exclusifs',
    ],
    popular: true
  },
  {
    name: 'Entreprise',
    price: 'Sur devis',
    period: '',
    description: 'Pour les organisations',
    features: [
      'Accès illimité',
      'Gestion des équipes',
      'Reporting avancé',
      'Support dédié',
    ]
  },
]

const roadmap = [
  { phase: 'Phase 1', period: 'Q2 2025', content: 'Lancement MVP' },
  { phase: 'Phase 2', period: 'Q4 2025', content: 'Lancement complet' },
  { phase: 'Phase 3', period: '2026', content: 'Fonctionnalités avancées' },
]

export default function PlateformeNumeriquePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>Plateforme numérique :</TextReveal>
                <br />
                <TextReveal delay={0.2}>apprendre, se former,</TextReveal>
                <br />
                <TextReveal delay={0.3}>progresser</TextReveal>
              </h1>
              <ScaleIn delay={0.5}>
                <p className="text-body text-text-muted">
                  La plateforme ICIA est votre compagnon pour maîtriser l'intelligence artificielle. 
                  Parcours personnalisés, certifications reconnues, ressourcesactualisées...
                  Tout ce qu'il vous faut pour développer vos compétences.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Fonctionnalités clés</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="p-6 border border-border bg-white">
                    <div className="w-10 h-10 mb-3 text-black"><Icon name={feature.icon} className="w-full h-full" /></div>
                    <h3 className="font-serif text-h3 mb-2">{feature.title}</h3>
                    <p className="text-sm text-text-muted">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Offres et tarifs</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricing.map((tier) => (
                <StaggerItem key={tier.name}>
                  <div className={`p-6 border ${tier.popular ? 'border-accent bg-bg' : 'border-border bg-white'}`}>
                    {tier.popular && (
                      <p className="text-xs text-accent mb-2">Le plus populaire</p>
                    )}
                    <h3 className="font-serif text-h3 mb-1">{tier.name}</h3>
                    <p className="text-2xl font-serif mb-1">{tier.price}<span className="text-sm text-text-muted">{tier.period}</span></p>
                    <p className="text-sm text-text-muted mb-4">{tier.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="text-sm text-text-muted flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant={tier.popular ? 'primary' : 'secondary'} className="w-full">
                      {tier.name === 'Entreprise' ? 'Contactez-nous' : 'Commencer'}
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Feuille de route</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto">
              {roadmap.map((item, index) => (
                <div key={item.phase} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    {index < roadmap.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
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
            <h2 className="font-serif text-h2 mb-6">Essayez gratuitement</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Rejoignez la bêta et accédez dès maintenant aux ressources de l'ICIA.
            </p>
            <Link href="/contact?subject=platform">
              <Button variant="primary" size="lg">
                S'inscrire à la bêta
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
