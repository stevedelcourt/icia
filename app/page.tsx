import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="min-h-[80vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-widest text-[#666666] uppercase mb-8">Institut de l'IA · Campus Cyber.AI, Marseille</p>
                
                <h1 className="text-5xl md:text-7xl font-serif text-black leading-[1.1] mb-12">
                  Nous ne vendons<br />
                  pas de l'IA.
                </h1>
                
                <p className="text-xl md:text-2xl text-[#666666] mb-12 max-w-xl leading-relaxed">
                  Nous aidons à en faire un avantage pour tous.
                </p>
                
                <p className="text-base text-[#666666] max-w-xl leading-relaxed mb-6">
                  L'IA transforme toutes les organisations. Il manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, avec quel risque.
                </p>
                
                <p className="text-sm text-black italic mb-12 max-w-lg">
                  "Quand vous faites construire une maison, vous ne choisissez pas votre architecte parce qu'il sait poser des parpaings. Vous le choisissez parce qu'il comprend ce que vous voulez construire, et qu'il ne vous lâche pas avant que ce soit parfait."
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="/images/podium.webp" 
                  alt="Institut de l'IA" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-[#E5E5E5]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-16">Nos 3 piliers</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-serif text-[#00255D] mb-4">Indépendance technologique</h3>
                <p className="text-sm text-[#666666]">Aucune affiliation à un fournisseur d'IA. Recommandations neutres.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#00255D] mb-4">Conseil stratégique pur</h3>
                <p className="text-sm text-[#666666]">Stratégie IA, gouvernance, change management, conformité AI Act.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#00255D] mb-4">Tiers de confiance</h3>
                <p className="text-sm text-[#666666]">Interlocuteur unique. Tous les livrables portent notre marque.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-[#E5E5E5]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-16">Nos offres</h2>
            <div className="space-y-12">
              <div className="flex justify-between items-start py-8 border-b border-[#E5E5E5]">
                <div className="max-w-xl">
                  <span className="text-xs text-[#666666] block mb-2">01</span>
                  <h3 className="text-2xl font-serif text-[#00255D] mb-2">Diagnostic IA & AI Act</h3>
                  <p className="text-sm text-[#666666]">En 4 à 6 semaines, vous savez où vous en êtes.</p>
                </div>
                <Link href="/offres/diagnostic" className="text-sm text-[#00255D] hover:underline">
                  →
                </Link>
              </div>
              <div className="flex justify-between items-start py-8 border-b border-[#E5E5E5]">
                <div className="max-w-xl">
                  <span className="text-xs text-[#666666] block mb-2">02</span>
                  <h3 className="text-2xl font-serif text-[#00255D] mb-2">Formations & Acculturation</h3>
                  <p className="text-sm text-[#666666]">Vos équipes utilisent l'IA dans un cadre sécurisé.</p>
                </div>
                <Link href="/offres/formations" className="text-sm text-[#00255D] hover:underline">
                  →
                </Link>
              </div>
              <div className="flex justify-between items-start py-8 border-b border-[#E5E5E5]">
                <div className="max-w-xl">
                  <span className="text-xs text-[#666666] block mb-2">03</span>
                  <h3 className="text-2xl font-serif text-[#00255D] mb-2">Transformation IA</h3>
                  <p className="text-sm text-[#666666]">De l'expérimentation à la pratique quotidienne.</p>
                </div>
                <Link href="/offres/transformation" className="text-sm text-[#00255D] hover:underline">
                  →
                </Link>
              </div>
              <div className="flex justify-between items-start py-8">
                <div className="max-w-xl">
                  <span className="text-xs text-[#666666] block mb-2">04</span>
                  <h3 className="text-2xl font-serif text-[#00255D] mb-2">Partenaire IA Mensuel</h3>
                  <p className="text-sm text-[#666666]">Un partenaire pour décider sur l'IA, en continu.</p>
                </div>
                <Link href="/offres/partenaire" className="text-sm text-[#00255D] hover:underline">
                  →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[30px] bg-[#F97316] flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white text-sm"><span className="font-medium">AI Act en vigueur en août 2026</span> · <span className="opacity-80">Obligations réglementaires, classification des systèmes IA</span></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
