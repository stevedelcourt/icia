import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-serif text-black mb-12">Mentions légales</h1>
          <div className="prose prose-lg max-w-none text-[#666666]">
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Éditeur du site</h2>
            <p>Mentivis SAS<br />Campus Cyber.AI<br />Marseille, France</p>
            <p>SIRET : [À compléter]<br />Téléphone : [À compléter]<br />Email : contact@icia.fr</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Directeur de publication</h2>
            <p>[À compléter]</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Hébergement</h2>
            <p>Vercel Inc.<br />340 S Lemon Ave #5138<br />Walnut, CA 91789, USA</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
