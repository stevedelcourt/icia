import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

export default function ConditionsUtilisationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <h1 className="font-serif text-h1 mb-6">Conditions d'utilisation</h1>
            <p className="text-sm text-text-muted mb-8">Dernière mise à jour : février 2025</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-h3 mb-4">1. Acceptation des conditions</h2>
              <p className="text-text-muted">
                En accédant au site ICIA, vous acceptez d'être lié par les présentes conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">2. Description du service</h2>
              <p className="text-text-muted">
                L'ICIA propose des informations, formations et accompagnements sur le thème de l'intelligence artificielle. 
                Les services décrits sur ce site peuvent être modifiés sans préavis.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-text-muted">
                L'ensemble des contenus du site ICIA (textes, images, vidéos, logos, etc.) est protégé par les droits 
                de propriété intellectuelle. Toute reproduction sans autorisation est interdite.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">4. Comportement de l'utilisateur</h2>
              <p className="text-text-muted mb-4">
                Vous vous engagez à :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Utiliser le site conformément à sa destination</li>
                <li>Ne pas tenter de porter atteinte au fonctionnement du site</li>
                <li>Ne pas copier ou reproduire le contenu à des fins commerciales</li>
                <li>Ne pas poster de contenu illicite, offensant ou diffamatoire</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">5. Limitation de responsabilité</h2>
              <p className="text-text-muted">
                L'ICIA s'efforce de fournir des informations exactes mais ne peut garantir l'exactitude, 
                l'exhaustivité ou l'actualité des informations. L'utilisation des informations du site se fait 
                sous votre seule responsabilité.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">6. Modification des conditions</h2>
              <p className="text-text-muted">
                L'ICIA se réserve le droit de modifier les présentes conditions à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">7. Droit applicable</h2>
              <p className="text-text-muted">
                Les présentes conditions sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">8. Contact</h2>
              <p className="text-text-muted">
                Pour toute question concernant ces conditions, contactez : contact@icia.fr
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
