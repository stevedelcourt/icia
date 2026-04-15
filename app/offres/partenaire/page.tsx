import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const levels = [
  {
    name: 'Essentiel',
    price: '1 000 € HT / mois',
    color: 'bg-gray-100',
    features: [
      'Veille réglementaire IA personnalisée',
      '2h office hours / mois',
      'Alertes AI Act',
    ],
  },
  {
    name: 'Stratégique',
    price: '2 000 € HT / mois',
    color: 'bg-rouge/10',
    features: [
      'Tout Essentiel',
      'Relecture projets IA',
      'Revue prestataires techniques',
      '4h office hours / mois',
    ],
  },
  {
    name: 'Dirigeant',
    price: '3 000 € HT / mois',
    color: 'bg-navy text-white',
    textColor: 'text-white',
    features: [
      'Tout Stratégique',
      '1 comité IA / trimestre',
      'Accès événements Institut',
      'Priorité diagnostics',
    ],
  },
]

export default function PartenairePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <Link href="/offres" className="text-white/60 hover:text-white mb-6 inline-block">
                ← Nos offres
              </Link>
              <div className="inline-block px-3 py-1 bg-rouge text-white text-xs font-bold rounded-full mb-4">
                OFFRE 04
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Partenaire IA Mensuel
              </h1>
              <p className="text-xl text-rouge font-medium mb-6">Abonnement</p>
              <p className="text-3xl font-bold text-white mb-2">1 000 – 3 000 € HT / mois</p>
              <p className="text-white/70">Selon le niveau choisi</p>
            </FadeIn>
          </div>
        </section>

        {/* Promesse */}
        <Section className="bg-cream">
          <FadeIn>
            <blockquote className="bg-white p-8 rounded-2xl border-l-4 border-rouge max-w-3xl">
              <p className="text-2xl font-serif text-navy italic leading-relaxed">
                Un partenaire indépendant pour vous aider à décider sur l'IA, en continu — 
                veille, conseil, arbitrage, alerte réglementaire. 
                <span className="block mt-2 font-normal text-lg text-rouge">
                  Votre numéro à appeler quand l'IA touche vos sujets.
                </span>
              </p>
            </blockquote>
          </FadeIn>
        </Section>

        {/* 3 niveaux */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-8 text-center">3 niveaux d'abonnement</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-6">
              {levels.map((level) => (
                <StaggerItem key={level.name}>
                  <div className={`p-8 rounded-2xl border border-border h-full ${level.color}`}>
                    <h3 className={`text-xl font-bold mb-2 ${level.textColor || 'text-navy'}`}>
                      {level.name}
                    </h3>
                    <p className={`text-2xl font-bold mb-6 ${level.textColor ? 'text-white' : 'text-rouge'}`}>
                      {level.price}
                    </p>
                    <ul className="space-y-3">
                      {level.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2 ${level.textColor ? 'text-white/80' : 'text-text-muted'}`}>
                          <span className={level.textColor ? 'text-white' : 'text-rouge'}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Modèle économique */}
        <Section className="bg-cream border-t border-border">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl">
                <h2 className="text-2xl font-serif text-navy mb-4">
                  Modèle économique pour vous
                </h2>
                <p className="text-text-muted mb-4">
                  Avec 20 clients abonnés, Mentivis génère 40 000 – 60 000 € / mois de revenus récurrents.
                </p>
                <p className="text-sm text-text-muted">
                  C'est aussi la garantie d'un partenaire engagé dans votre réussite sur le long terme.
                </p>
              </div>
              <div className="bg-navy p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-serif mb-4">
                  Zéro dépendance technique
                </h2>
                <p className="text-white/70 mb-4">
                  100% conseil pur, aucune sous-traitance technique requise.
                </p>
                <p className="font-bold text-rouge">
                  Marge maximale, alignement d'intérêts total.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Différence avec offres 01/03 */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-6">Comment ça s'articule avec les autres offres ?</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-navy mb-2">Offre 01 - Diagnostic</h3>
              <p className="text-sm text-text-muted">
                Une base pour démarrer. Le partenaire IA peut ensuite vous accompagner en continu.
              </p>
            </div>
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-navy mb-2">Offre 03 - Transformation</h3>
              <p className="text-sm text-text-muted">
                Un projet structurant. L'abonnement peut prendre le relais après la transformation.
              </p>
            </div>
            <div className="bg-rouge/10 p-6 rounded-xl border border-rouge/20">
              <h3 className="font-bold text-rouge mb-2">Offre 04 - Partenaire</h3>
              <p className="text-sm text-text-muted">
                Le conseil continu. Idéal pour les dirigeants qui veulent un avis expert disponible.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-navy">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-4">
                Devenir partenaire IA
              </h2>
              <p className="text-white/70 mb-8">
                Un interlocuteur dédié pour toutes vos questions IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=partenaire" variant="primary" size="lg" className="!bg-rouge !text-white">
                  Devenir partenaire
                </Button>
                <Button href="/offres" variant="outline" size="lg" className="!text-white !border-white">
                  Voir autres offres
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
