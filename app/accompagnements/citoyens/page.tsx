import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function CitoyensPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
                Grand public
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                La fracture IA grandit. L'ICIA vous aide a comprendre les outils IA du quotidien, vous proteger des risques, et valoriser vos competences.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                Etre accompagne
              </Link>
            </div>
            <div>
              <img src="/images/podium.webp" alt="Grand public" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Nos programmes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Acculturation a l'IA</h3>
                <p className="text-sm text-[#666666]">Des ateliers ludiques et accessibles pour demystifier l'intelligence artificielle.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Securite et ethique</h3>
                <p className="text-sm text-[#666666]">Apprenez a vous proteger dans un monde ou l'IA est omnipresente.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Emploi et reconversion</h3>
                <p className="text-sm text-[#666666]">Accompagnement personnalise pour comprendre les evolutions du marche du travail.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Passerelles vers la formation</h3>
                <p className="text-sm text-[#666666]">Orientation, mise en relation avec des organismes partenaires, et suivi personnalise.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
