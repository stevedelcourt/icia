import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
                Ecoles / CFA
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                Former les formateurs de demain. Vos etudiants utilisent deja l'IA — souvent sans securite. Preparez-les au monde qui existe.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                Nous contacter
              </Link>
            </div>
            <div>
              <img src="/images/podium.webp" alt="Ecoles / CFA" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Notre approche</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Bibliotheque pedagogique</h3>
                <p className="text-sm text-[#666666]">Sequences pedagogiques cles en main, du primaire a l'universite.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Formation des formateurs</h3>
                <p className="text-sm text-[#666666]">Maitriser les concepts de l'IA et les integrer dans vos pratiques pedagogiques.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-black mb-2">Accreditation</h3>
                <p className="text-sm text-[#666666]">Un label reconnu pour les etablissements engages dans l'IA.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
