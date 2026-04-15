import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const sectors = ['Musique', 'Arts visuels', 'Cinema', 'Jeux video', 'Edition', 'Architecture']

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
                Industries creatives
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                Creer avec l'IA, sans perdre son identite. Ateliers, securisation juridique et laboratoire pour experimenter sereinement.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                Nous contacter
              </Link>
            </div>
            <div>
              <img src="/images/podium.webp" alt="Industries creatives" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16 mb-12">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">Secteurs couverts</h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="px-4 py-2 border border-[#E5E5E5] text-sm text-[#666666]">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E5E5E5]">
              <h3 className="text-lg font-serif text-black mb-2">Ateliers creatifs IA</h3>
              <p className="text-sm text-[#666666]">Explorer les outils de generation IA dans votre discipline. Apprendre a utiliser l'IA comme outil d'amplification de votre creativite.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5]">
              <h3 className="text-lg font-serif text-black mb-2">Securite juridique</h3>
              <p className="text-sm text-[#666666]">Comprendre et naviguer dans le cadre legal de l'IA creative : droit d'auteur, propriete intellectuelle, licences.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5]">
              <h3 className="text-lg font-serif text-black mb-2">Laboratoire d'innovation</h3>
              <p className="text-sm text-[#666666]">Un espace dedie pour tester, prototyper et experimenter avec les derniers outils d'IA creative.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5]">
              <h3 className="text-lg font-serif text-black mb-2">Monetisation</h3>
              <p className="text-sm text-[#666666]">Explorer les nouveaux modeles economiques offerts par l'IA aux createurs.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
