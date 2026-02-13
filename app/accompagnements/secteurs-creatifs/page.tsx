import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm text-accent mb-4">Accompagnements</p>
              <h1 className="font-serif text-h1 mb-6">
                Secteurs créatifs : créer, innover et sécuriser
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA accompagne les professionnels des industries créatives (musique, cinéma, 
               design, journalisme, gaming...) pour intégrer l'IA dans leurs pratiques tout en 
                maîtrisant les enjeux juridiques.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 border-t border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Ateliers créatifs IA</h2>
              <p className="text-text-muted mb-6">
                Des ateliers pratiques pour découvrir comment l'IA peut amplificar votre créativité. 
                Génération d'images, musique assistée, écriture collaborative, création de contenus... 
                Utilisez l'IA comme partenaire créatif.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Introduction aux outils de génération</li>
                  <li>• Ateliers pratiques (hands-on)</li>
                  <li>• Cas d'usage par secteur</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Création de portfolios IA</li>
                  <li>• Collaboration humain-IA</li>
                  <li>• Expérimentation libre</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-white border-y border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Sécurité juridique</h2>
              <p className="text-text-muted mb-6">
                Comprendre et maîtriser les enjeux juridiques liés à l'IA dans les industries 
                créatives. Droits d'auteur, utilisation des œuvres pour l'entraînement, 
                propriété intellectuelle des créations IA...
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Cadre juridique européen et français</li>
                  <li>• Analyse des contrats</li>
                  <li>• Gestion des risques</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Certifications juridiques</li>
                  <li>• Conseils personnalisés</li>
                  <li>• Veille réglementaire</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Laboratoire créatif</h2>
              <p className="text-text-muted mb-6">
                Un espace dédié à l'expérimentation et à l'innovation pour les professionnels 
                des industries créatives. Accès à des outils avancés, accompagnement par des 
                experts, et rencontres avec d'autres créateurs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-text-muted">
                  <li>• Équipements professionnels</li>
                  <li>• Accès aux outils premium</li>
                  <li>•Résidences créatives</li>
                </ul>
                <ul className="space-y-2 text-text-muted">
                  <li>• Événements de networking</li>
                  <li>• Projets collaboratifs</li>
                  <li>• Showcases et démos</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 bg-bg border-y border-border">
          <FadeIn>
            <div>
              <h2 className="font-serif text-h2 mb-4">Écosystème et passerelles</h2>
              <p className="text-text-muted mb-6">
                L'ICIA facilite les rencontres entre les secteurs créatifs et les autres publics 
                (entreprises, éducation, pouvoirs publics) pour créer des projets incontournabiles 
                et des opportunités de collaboration.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">50+</p>
                  <p className="text-text-muted text-sm">partenaires culturels</p>
                </div>
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">20</p>
                  <p className="text-text-muted text-sm">événements annuels</p>
                </div>
                <div className="p-6">
                  <p className="font-serif text-h3 mb-2">100+</p>
                  <p className="text-text-muted text-sm">projets accompagnés</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="py-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-h2 mb-6">Boostez votre créativité</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              Vous êtes créateur, artiste, journaliste ou professionnel des industries créatives ? 
              Rejoignez notre communauté.
            </p>
            <Link href="/contact?subject=training&target=creatifs">
              <Button variant="primary" size="lg">
                Organiser un atelier
              </Button>
            </Link>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
