import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl  text-black mb-12">Politique de cookies</h1>
          <div className="prose prose-lg max-w-none text-[#666666]">
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un fichier texte déposé sur votre ordinateur lors de votre visite sur un site web. Il permet de mémoriser vos préférences et d'améliorer votre expérience de navigation.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Cookies utilisés</h2>
            <p>Notre site utilise des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques pour mesurer l'audience.</p>
            <ul className="list-disc pl-6">
              <li><strong>Cookies essentiels :</strong> nécessaires au bon fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> nous aident à comprendre comment vous utilisez le site</li>
            </ul>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Gestion des cookies</h2>
            <p>Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne plus fonctionner correctement.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
