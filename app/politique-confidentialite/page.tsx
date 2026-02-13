import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <h1 className="font-serif text-h1 mb-6">Politique de confidentialité</h1>
            <p className="text-sm text-text-muted mb-8">Dernière mise à jour : février 2025</p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-h3 mb-4">1. Introduction</h2>
              <p className="text-text-muted">
                La présente politique de confidentialité décrit comment l'Institut Collectif de l'IA (ci-après "ICIA") 
                collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection 
                des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">2. Responsable du traitement</h2>
              <p className="text-text-muted">
                Le responsable du traitement des données personnelles est :<br />
                <strong>Institut Collectif de l'IA</strong><br />
                Email : contact@icia.fr
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">3. Données collectées</h2>
              <p className="text-text-muted mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li><strong>Via le formulaire de contact :</strong> civilité, prénom, nom, email, téléphone, message</li>
                <li><strong>Via les inscriptions formations :</strong> informations professionnelles, niveau</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">4. Finalités du traitement</h2>
              <p className="text-text-muted mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Répondre à vos demandes via le formulaire de contact</li>
                <li>Vous informer sur nos services et événements</li>
                <li>Analyser l'utilisation du site pour l'améliorer</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">5. Base légale</h2>
              <p className="text-text-muted">
                Le traitement de vos données repose sur votre consentement (formulaire de contact, newsletter) 
                et notre intérêt légitime (analyse du trafic, amélioration des services).
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">6. Destinataires</h2>
              <p className="text-text-muted">
                Vos données ne sont pas transmises à des tiers, sauf obligation légale. 
                Elles sont hébergées sur des serveurs situés en France ou dans l'Union Européenne.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">7. Durée de conservation</h2>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li>Données du formulaire de contact : 3 ans après le dernier contact</li>
                <li>Données analytiques : 13 mois</li>
                <li>Données de newsletter : jusqu'au retrait du consentement</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">8. Vos droits</h2>
              <p className="text-text-muted mb-4">Vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2 text-text-muted">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation du traitement et une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit de limitation :</strong> demander la limitation du traitement</li>
              </ul>
              <p className="text-text-muted mt-4">
                Pour exercer ces droits, contactez : contact@icia.fr
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">9. Sécurité</h2>
              <p className="text-text-muted">
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>
            
            <section>
              <h2 className="font-serif text-h3 mb-4">10. Réclamation</h2>
              <p className="text-text-muted">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                auprès de la CNIL : www.cnil.fr
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
