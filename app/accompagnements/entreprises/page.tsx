import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
                PME / ETI
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                L'AI Act en vigueur en aout 2026. L'ICIA vous aide a comprendre vos obligations, structurer vos usages et transformer votre organisation.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                Nous contacter
              </Link>
            </div>
            <div>
              <img src="/images/podium.webp" alt="PME / ETI" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Nos offres</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-[#E5E5E5]">
                <span className="text-xs text-[#666666] block mb-2">01</span>
                <h3 className="text-xl font-serif text-black mb-2">Diagnostic IA & AI Act</h3>
                <p className="text-sm text-[#666666] mb-4">En 4 a 6 semaines, vous savez ou vous en etes.</p>
                <Link href="/offres/diagnostic" className="text-sm text-[#00255D] hover:underline">En savoir plus →</Link>
              </div>
              <div className="p-8 border border-[#E5E5E5]">
                <span className="text-xs text-[#666666] block mb-2">02</span>
                <h3 className="text-xl font-serif text-black mb-2">Formations & Acculturation</h3>
                <p className="text-sm text-[#666666] mb-4">Vos equipes utilisent l'IA dans un cadre securise.</p>
                <Link href="/offres/formations" className="text-sm text-[#00255D] hover:underline">En savoir plus →</Link>
              </div>
              <div className="p-8 border border-[#E5E5E5]">
                <span className="text-xs text-[#666666] block mb-2">03</span>
                <h3 className="text-xl font-serif text-black mb-2">Transformation IA</h3>
                <p className="text-sm text-[#666666] mb-4">De l'experimentation a la pratique quotidienne.</p>
                <Link href="/offres/transformation" className="text-sm text-[#00255D] hover:underline">En savoir plus →</Link>
              </div>
              <div className="p-8 border border-[#E5E5E5]">
                <span className="text-xs text-[#666666] block mb-2">04</span>
                <h3 className="text-xl font-serif text-black mb-2">Partenaire IA Mensuel</h3>
                <p className="text-sm text-[#666666] mb-4">Un partenaire pour decider sur l'IA, en continu.</p>
                <Link href="/offres/partenaire" className="text-sm text-[#00255D] hover:underline">En savoir plus →</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
