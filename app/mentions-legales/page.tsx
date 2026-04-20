import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-black mb-12">Mentions légales</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-black mt-8 mb-4">Éditeur du site</h2>
            <p>Mentivis SAS</p>
            <p>Société par actions simplifiée au capital de dix mille euros</p>
            <p>Siège social : 60 rue François 1er, 75008 Paris</p>
            <p>941 914 814 R.C.S. Paris</p>
            
            <h2 className="text-xl font-bold text-black mt-8 mb-4">Hébergement</h2>
            <p>O2switch</p>
            <p>Siret : 510 909 807 00032</p>
            <p>RCS Clermont Ferrand</p>
            <p>SAS au capital de 100 000€</p>
            
            <h2 className="text-xl font-bold text-black mt-8 mb-4">Présentation corporate</h2>
            <p><a href="/MariusIA-BAM.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">Télécharger la présentation corporate (PDF)</a></p>
            
            <h2 className="text-xl font-bold text-black mt-8 mb-4">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}