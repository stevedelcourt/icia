import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function ConditionsUtilisation() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl  text-black mb-12">Conditions d'utilisation</h1>
          <div className="prose prose-lg max-w-none text-[#666666]">
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Acceptation des conditions</h2>
            <p>En utilisant ce site, vous acceptez sans réserve les présentes conditions d'utilisation.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Utilisation du site</h2>
            <p>Le site est destiné à informer sur les services de l'Institut de l'IA. Toute utilisation à des fins illégales ou contraires à l'esprit du site est interdite.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, images, logos) sont protégés par le droit d'auteur. Toute reproduction est interdite sans autorisation.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Limitation de responsabilité</h2>
            <p>Les informations présentées sur ce site sont fournies à titre indicatif. L'Institut de l'IA ne saurait être tenu responsable des dommages résultant de l'utilisation du site.</p>
            
            <h2 className="text-xl font-medium text-black mt-8 mb-4">Droit applicable</h2>
            <p>Les présentes conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
