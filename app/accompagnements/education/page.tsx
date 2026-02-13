import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export default function EducationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm text-accent mb-4">Accompagnements</p>
              <h1 className="font-serif text-h1 mb-6">
                Éducation : intégrer l'IA dans vos cursus
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA accompagne les établissements d'enseignement dans l'intégration de l'IA 
                dans leurs programmes, de la maternelle à l'université.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-h2 mb-4">Bibliothèque de contenus pédagogiques</h2>
                <p className="text-text-muted mb-6">
                  Accédez à une bibliothèque complète de ressources pédagogiques pour enseigner 
                  l'IA. Cours, exercices, projets, évaluations... Tout ce dont vous avez besoin 
                  pour vos enseignements.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Contenus pour tous les niveaux</li>
                  <li>• Mise à jour régulière</li>
                  <li>• Adaptés aux programmes officiels</li>
                  <li>• Format multidisciplinaire</li>
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-h2 mb-4">Formation des formateurs</h2>
                <p className="text-text-muted mb-6">
                  Formez vos enseignants à l'intelligence artificielle pour qu'ils puedan 
                  transmettre ces connaissances à leurs élèves. Des formations certifiantes 
                  adaptées aux enseignants de toutes disciplines.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Sessions présentielles et en ligne</li>
                  <li>• Certification ICIA</li>
                  <li>• Accompagnement pédagogique</li>
                  <li>• Communauté de pratiques</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-h2 mb-4">Experts et intervenants</h2>
                <p className="text-text-muted mb-6">
                  Accédez à un réseau d'experts et de professionnels de l'IA pour intervenir 
                  dans vos établissements. Conferences, ateliers, projets tutorés...
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Base de 50+ experts</li>
                  <li>• Intervention en classe</li>
                  <li>• Projets collaboratifs</li>
                  <li>• Visites de laboratoires</li>
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-h2 mb-4">Certifications et badges</h2>
                <p className="text-text-muted mb-6">
                  Proposez à vos élèves et étudiants des certifications reconnues pour 
                  valider leurs compétences en IA. Des badges numériques vérifiables pour 
                  booster leur employabilité.
                </p>
                <ul className="space-y-2 text-text-muted mb-6">
                  <li>• Certifications ICIA</li>
                  <li>• Badges Open Badges</li>
                  <li>• Reconnaissance internationale</li>
                  <li>• Intégration CV</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Construisons un partenariat</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Vous êtes établissement scolaire, université ou formation ? 
              Parlons de votre projet d'intégration de l'IA.
            </p>
            <Link href="/contact?subject=partnership&target=education">
              <Button variant="primary" size="lg">
                Échanger sur un partenariat
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
