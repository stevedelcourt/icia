import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <h1 className="font-serif text-h1 mb-6">Mentions légales</h1>
            <p className="text-sm text-text-muted mb-8">Dernière mise à jour : février 2025</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-h3 mb-4">1. Éditeur du site</h2>
              <p className="text-text-muted">
                Le site ICIA (Institut Collectif de l'IA) est édité par :<br />
                <strong>Institut Collectif de l'IA</strong><br />
                Association loi 1901<br />
                Siège social : Marseille, France<br />
                Email : contact@icia.fr
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">2. Directeur de la publication</h2>
              <p className="text-text-muted">
                Le directeur de la publication est le président de l'association Institut Collectif de l'IA.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">3. Hébergement</h2>
              <p className="text-text-muted">
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723, États-Unis
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-text-muted">
                L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est protégé par le droit d'auteur et le droit de la propriété intellectuelle.
              </p>
              <p className="text-text-muted mt-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments 
                du site est interdite sans autorisation écrite préalable de l'ICIA.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">5. Responsabilité</h2>
              <p className="text-text-muted">
                L'ICIA s'efforce de fournir des informations aussi précises que possible. Toutefois, l'ICIA ne pourra 
                être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">6. Crédits</h2>
              <p className="text-text-muted">
                Conception et développement : ICIA<br />
                Design : ICIA<br />
                Photos : ICIA et contributeurs
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">7. Déclaration CNIL</h2>
              <p className="text-text-muted">
                Le site ICIA fait l'objet d'une déclaration auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">8. Responsable des données personnelles</h2>
              <p className="text-text-muted">
                Le responsable des données personnelles est l'Institut Collectif de l'IA.<br />
                Email : contact@icia.fr
              </p>
            </section>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
