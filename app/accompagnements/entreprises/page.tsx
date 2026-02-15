import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm text-accent mb-4">Accompagnements</p>
              <h1 className="font-serif text-h1 mb-6">
                Entreprises : diagnostics, formations et prototypes IA
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA accompagne les entreprises dans leur transformation par l'intelligence 
                artificielle, avec des diagnostics précis, des formations ciblées et des POC concrets.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-serif text-h2 mb-4">Diagnostics et audits</h2>
                <p className="text-text-muted mb-6">
                  Analyse approfondie du potentiel IA de votre entreprise. Identification des cas 
                  d'usage à forte valeur ajoutée, évaluation de la maturité numérique, et 
                  recommandations personnalisées.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Cartographie des processus</li>
                  <li>• Benchmark sectoriel</li>
                  <li>• Analyse coût/bénéfice</li>
                  <li>• Feuille de route stratégique</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-border rounded-xl">
                <p className="text-sm text-text-muted mb-2">Tarif indicatif</p>
                <p className="text-3xl font-serif mb-2">~ 10 k€</p>
                <p className="text-text-muted text-sm">Pack diagnostic complet</p>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-serif text-h2 mb-4">Formations ciblées</h2>
                <p className="text-text-muted mb-6">
                  Formations adaptées à vos équipes, du dirigeant au opérationnel. Comprendre 
                  l'IA pour mieux la piloter, former vos équipes techniques, ou sensibilisation 
                  l'ensemble des collaborateurs.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Formation dirigeants (décision IA)</li>
                  <li>• Formation équipes opérationnelles</li>
                  <li>• Formation développeurs</li>
                  <li>• Sensibilisation pour tous</li>
                </ul>
              </div>
              <div className="bg-bg p-6 border border-border rounded-xl">
                <p className="text-sm text-text-muted mb-2">Tarif indicatif</p>
                <p className="text-3xl font-serif mb-2">5 k€</p>
                <p className="text-text-muted text-sm">par personne (intra-entreprise)</p>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-serif text-h2 mb-4">Prototypes et POC</h2>
                <p className="text-text-muted mb-6">
                  Développement de preuves de concept pour valider rapidement vos cas d'usage. 
                  Accompagnement de la conception à la mise en production, avec une approche 
                  pragmatique et orientée résultats.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Identification du cas d'usage</li>
                  <li>• Conception technique</li>
                  <li>• Développement itératif</li>
                  <li>• Déploiement et suivi</li>
                </ul>
              </div>
              <div className="bg-accent text-white p-6">
                <p className="text-sm opacity-80 mb-2">Tarif indicatif</p>
                <p className="text-3xl font-serif mb-2">30-60 k€</p>
                <p className="text-sm opacity-80">POC sur 4-6 semaines</p>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-bg border-y border-border">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-8 text-center">Objectifs annuels</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <div className="p-6">
                  <p className="text-4xl font-serif mb-2">~20</p>
                  <p className="text-text-muted">diagnostics réalisés</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <p className="text-4xl font-serif mb-2">50-80</p>
                  <p className="text-text-muted">personnes formées</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <p className="text-4xl font-serif mb-2">10-15</p>
                  <p className="text-text-muted">POC développés</p>
                </div>
              </StaggerItem>
            </div>
          </Stagger>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Démarrez votre transformation</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Planifiez un diagnostic gratuit de 30 minutes pour évaluer 
              le potentiel de l'IA pour votre entreprise.
            </p>
            <Link href="/contact?subject=diagnostic">
              <Button variant="primary" size="lg">
                Demander un diagnostic
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
