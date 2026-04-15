import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
                Pouvoirs publics
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                Faire de l'IA un levier de service public, dans un cadre ethique et souverain. AMO IA, programme PRIAM, acculturation des agents.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                Nous contacter
              </Link>
            </div>
            <div>
              <img src="/images/podium.webp" alt="Pouvoirs publics" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Notre approche</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Inclusion</h3>
                <p className="text-sm text-[#666666]">Lutter contre la fracture numerique et garantir que chacun puisse beneficier des avancees de l'IA.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Transformation</h3>
                <p className="text-sm text-[#666666]">Aider les administrations a identifier les cas d'usage de l'IA pour ameliorer les services aux citoyens.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Pilotage</h3>
                <p className="text-sm text-[#666666]">Un observatoire pour suivre l'adoption de l'IA dans les territoires francais.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
