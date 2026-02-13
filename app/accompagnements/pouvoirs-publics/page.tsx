import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm text-accent mb-4">Accompagnements</p>
              <h1 className="font-serif text-h1 mb-6">
                Pouvoirs publics : inclusion, transformation et pilotage territorial
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA accompagne les collectivités territoriales, administrations et établissements 
                publics dans la compréhension et le déploiement de l'intelligence artificielle au 
                service des citoyens.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Programmes d'IA inclusive</h2>
              <p className="text-text-muted mb-6">
                Lutter contre la fracture numérique et garantir que chacun puisse bénéficier des 
                avancées de l'IA. Programmes de sensibilisation, formations adaptées et 
                accompagnements pour les publics éloignés du numérique.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Ateliers dans les territoires</li>
                  <li>• Formations pour agents publics</li>
                  <li>• Accompagnement des associations</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Accessibilité des services IA</li>
                  <li>• Inclusion des personnes âgées</li>
                  <li>• Zones rurales et QPV</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Remobilisation professionnelle</h2>
              <p className="text-text-muted mb-6">
                Accompagner les agents publics et les demandeurs d'emploi vers les métiers 
                de l'IA. Diagnostics de compétences, formations certifiantes et mise en 
                relation avec les employeurs du territoire.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Bilan de compétences IA</li>
                  <li>• Parcours de formation</li>
                  <li>• Certification professionnelle</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Partenariats locaux</li>
                  <li>• Mise en relation employeurs</li>
                  <li>• Suivi post-formation</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Transformation des services publics</h2>
              <p className="text-text-muted mb-6">
                Aider les administrations à identifier les cas d'usage de l'IA pour améliorer 
                les services aux citoyens. Efficacité administrative, simplification des 
                démarches, et qualité du service public.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Diagnostic des processus</li>
                  <li>• Identification cas d'usage</li>
                  <li>• Accompagnement au changement</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Formation des agents</li>
                  <li>• Éthique et transparence</li>
                  <li>• Évaluation des impacts</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-bg border-y border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Observatoire territorial</h2>
              <p className="text-text-muted mb-6">
                Un observatoire pour suivre l'adoption de l'IA dans les territoires français. 
                Données, analyses et recommandations pour aider les décideurs à piloter 
                la transformation numérique de leurs territoires.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">50+</p>
                  <p className="text-text-muted text-sm">indicateurs suivis</p>
                </div>
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">13</p>
                  <p className="text-text-muted text-sm">régions couvertes</p>
                </div>
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">4</p>
                  <p className="text-text-muted text-sm">rapports annuels</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Parlons de votre projet</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Vous êtes élu, directeur d'administration ou responsable de service public ? 
              Discutons de votre projet d'IA.
            </p>
            <Link href="/contact?subject=partnership&target=publics">
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
