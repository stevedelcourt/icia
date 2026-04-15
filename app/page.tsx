import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const pillars = [
  { title: 'Indépendance technologique' },
  { title: 'Conseil stratégique pur' },
  { title: 'Tiers de confiance' },
]

const offers = [
  { num: '01', title: 'Diagnostic IA & AI Act', promise: 'En 4 à 6 semaines, vous savez où vous en êtes.' },
  { num: '02', title: 'Formations & Acculturation', promise: 'Vos équipes utilisent l\'IA bien, dans un cadre sécurisé.' },
  { num: '03', title: 'Transformation IA', promise: 'De l\'expérimentation à la pratique quotidienne.' },
  { num: '04', title: 'Partenaire IA Mensuel', promise: 'Un partenaire pour décider sur l\'IA, en continu.' },
]

const targets = [
  'PME / ETI',
  'Pouvoirs publics',
  'Écoles / CFA',
  'Industries créatives',
  'Grand public',
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-[#666666] mb-6">Institut de l'IA · Campus Cyber.AI, Marseille</p>
            
            <h1 className="text-3xl md:text-5xl font-serif text-[#00255D] mb-8 leading-tight">
              Nous ne vendons pas de l'IA.
              <br />
              Nous aidons à en faire un avantage pour tous.
            </h1>
            
            <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
              L'IA transforme toutes les organisations. Il manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, avec quel risque.
            </p>
            
            <p className="text-base text-[#666666] italic mb-12 max-w-xl mx-auto">
              "Quand vous faites construire une maison, vous ne choisissez pas votre architecte parce qu'il sait poser des parpaings. Vous le choisissez parce qu'il comprend ce que vous voulez construire, et qu'il ne vous lâche pas avant que ce soit parfait."
            </p>
            
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 text-white bg-[#00255D] rounded-full hover:bg-[#001A3A] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </section>

        <section className="py-16 border-t border-[#E5E5E5]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs text-[#666666] uppercase tracking-widest text-center mb-8">Nos 3 piliers</p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-lg font-medium text-[#00255D]">{pillar.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FAFAF7]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs text-[#666666] uppercase tracking-widest text-center mb-8">Nos offres</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offers.map((offer) => (
                <Link 
                  key={offer.num}
                  href={`/offres/${offer.num === '01' ? 'diagnostic' : offer.num === '02' ? 'formations' : offer.num === '03' ? 'transformation' : 'partenaire'}`}
                  className="p-6 bg-white border border-[#E5E5E5] rounded-lg hover:border-[#00255D] transition-colors"
                >
                  <span className="text-xs text-[#666666] block mb-2">{offer.num}</span>
                  <h3 className="font-medium text-[#00255D] mb-2">{offer.title}</h3>
                  <p className="text-sm text-[#666666]">{offer.promise}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs text-[#666666] uppercase tracking-widest text-center mb-8">Nos cibles</p>
            <div className="flex flex-wrap justify-center gap-4">
              {targets.map((target) => (
                <Link 
                  key={target}
                  href="/accompagnements"
                  className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm text-[#666666] hover:border-[#00255D] hover:text-[#00255D] transition-colors"
                >
                  {target}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#D92A1C]">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <p className="text-lg">
              <span className="font-medium">AI Act en vigueur en août 2026</span>
              <span className="mx-3">·</span>
              <span className="opacity-80">Obligations réglementaires, classification des systèmes IA</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
