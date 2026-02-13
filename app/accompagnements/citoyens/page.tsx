import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export default function CitoyensPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm text-accent mb-4">Accompagnements</p>
              <h1 className="font-serif text-h1 mb-6">
                Citoyens : comprendre l'IA, rester en sécurité, progresser vers l'emploi
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA propose des parcours adaptés aux particuliers pour mieux comprendre 
                l'intelligence artificielle, se protéger des risques, et développer ses compétences.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-h2 mb-4">Acculturation à l'IA</h2>
                <p className="text-text-muted mb-6">
                  Des ateliers ludiques et accessibles pour démystifier l'intelligence artificielle. 
                  Comprendre ce qu'est l'IA, comment elle fonctionne, et quelles sont ses limites. 
                  Pas de prérequis techniques, ouvert à tous.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Ateliers découverte (2h)</li>
                  <li>• Parcours thématiques</li>
                  <li>• Sessions questions-réponses avec des experts</li>
                </ul>
                <Button variant="secondary">Découvrir les ateliers</Button>
              </div>
              <div>
                <h2 className="font-serif text-h2 mb-4">Sécurité et éthique</h2>
                <p className="text-text-muted mb-6">
                  Apprenez à vous protéger dans un monde où l'IA est omniprésente. 
                  Comprendre les risques liés aux deepfakes, arnaques, désinformation, 
                  et protection de vos données personnelles.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Ateliers de sensibilisation</li>
                  <li>• Guides pratiques</li>
                  <li>• Ressources vérifiées</li>
                </ul>
                <Button variant="secondary">En savoir plus</Button>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-h2 mb-4">Parcours emploi et reconversion</h2>
                <p className="text-text-muted mb-6">
                  L'IA transforme le marché du travail. Accompagnement personnalisé pour 
                  comprendre ces évolutions, identifier les opportunités et construire un projet 
                  professionnel adapté.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Diagnostic compétences</li>
                  <li>• Orientation vers les formations</li>
                  <li>• Mise en relation avec des employeurs</li>
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-h2 mb-4">Passerelles vers la formation</h2>
                <p className="text-text-muted mb-6">
                  L'ICIA facilite l'accès aux formations en IA. Orientation, mise en relation 
                  avec des organismes partenaires, et suivi personnalisé pour les personnes 
                  souhaitant se former aux métiers de l'IA.
                </p>
                <div className="p-4 bg-bg border border-border">
                  <p className="text-sm text-text-muted mb-2">Objectif</p>
                  <p className="text-2xl font-serif">1 500 à 2 500</p>
                  <p className="text-text-muted">personnes accompagnées par an</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Prêt à vous lancer ?</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Que vous soyez curiosidadin, en reconversion ou simplement curieux, 
              l'ICIA a un accompagnement pour vous.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Être accompagné
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
