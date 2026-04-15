import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-black mb-12">Politique de confidentialité</h1>
          <div className="prose prose-lg max-w-none text-[#666666]">
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Responsable du traitement</h2>
            <p>Mentivis SAS, en sa qualité de responsable de traitement, s'engage à protéger vos données personnelles.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Données collectées</h2>
            <p>Nous collectons uniquement les données nécessaires à l'exécution de nos services : nom, email, téléphone, et informations relatives à votre entreprise.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous informer sur nos services</li>
              <li>Exécuter les prestations commandées</li>
            </ul>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à privacy@icia.fr.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Durée de conservation</h2>
            <p>Vos données sont conservées pendant la durée de notre relation contractuelle et jusqu'à 3 ans après votre dernier contact.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
