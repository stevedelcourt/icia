import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const deliverables = [
  'Cartographie des usages IA actuels',
  'Mesure de maturite IA (gouvernance, culture, competences)',
  'Analyse risques AI Act',
  'Identification de cas dusage prioritaires',
  'Feuille de route 12 mois',
  'Restitution comite de direction',
]

export default function DiagnosticPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/offres" className="text-[#666666] hover:text-[#00255D] mb-6 inline-block text-sm">
            ← Nos offres
          </Link>
          
          <span className="inline-block px-3 py-1 bg-[#00255D] text-white text-xs rounded-full mb-4">01</span>
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-2">Diagnostic IA & AI Act</h1>
          <p className="text-[#666666] mb-8">Porte entree universelle - 4 a 6 semaines</p>
          
          <blockquote className="border-l-4 border-[#00255D] pl-6 mb-12">
            <p className="text-xl text-[#00255D] italic">
              En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concreatement - avec une feuille de route prete a executer.
            </p>
          </blockquote>
          
          <h2 className="text-xl font-medium text-[#00255D] mb-6">Ce que vous recevez</h2>
          <ul className="space-y-3 mb-12">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#666666]">
                <span className="text-[#00255D]">-</span>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#00255D] text-white rounded-full hover:bg-[#001A3A] transition-colors">
              Nous contacter
            </Link>
            <Link href="/offres" className="px-6 py-3 border border-[#E5E5E5] text-[#666666] rounded-full hover:border-[#00255D] hover:text-[#00255D] transition-colors">
              Retour aux offres
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
