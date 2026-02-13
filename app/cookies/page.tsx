import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <h1 className="font-serif text-h1 mb-6">Politique de cookies</h1>
            <p className="text-sm text-text-muted mb-8">Dernière mise à jour : février 2025</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-h3 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-text-muted">
                Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. 
                Il permet de mémoriser des informations relatives à votre navigation.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">2. Types de cookies utilisés</h2>
              <p className="text-text-muted mb-4">Nous utilisons les types de cookies suivants :</p>
              
              <h3 className="font-medium mb-2">Cookies essentiels</h3>
              <p className="text-text-muted mb-4">
                Nécessaires au fonctionnement du site (navigation, accès aux espaces sécurisés). 
                Ces cookies ne peuvent pas être désactivés.
              </p>
              
              <h3 className="font-medium mb-2">Cookies analytiques</h3>
              <p className="text-text-muted mb-4">
                Nous utilisons un outil d'analyse anonymisé pour comprendre comment le site est utilisé. 
                Ces données nous aident à améliorer l'expérience utilisateur.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">3. Gestion des cookies</h2>
              <p className="text-text-muted mb-4">
                Lors de votre première visite, une bannière vous permet d'accepter ou de refuser les cookies non essentiels. 
                Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien "Cookies" en bas de page.
              </p>
              <p className="text-text-muted">
                Vous pouvez également configurer votre navigateur pour refuser les cookies. 
                Notez que cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">4. Cookies tiers</h2>
              <p className="text-text-muted">
                Certains cookies tiers (analytics) sont déposés par des services externes. 
                Nous n'avons pas de contrôle sur ces cookies. Veuillez consulter les politiques 
                de confidentialité des fournisseurs concernés.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">5. Durée de vie</h2>
              <p className="text-text-muted">
                Les cookies ont une durée de vie maximale de 13 mois. Les données collectées 
                par les cookies analytiques sont anonymisées et ne permettent pas de vous identifier.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">6. Contact</h2>
              <p className="text-text-muted">
                Pour toute question sur notre politique de cookies, contactez : contact@icia.fr
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
