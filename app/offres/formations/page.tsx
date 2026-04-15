import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const programs = [
  'IA par metiers (managers, commerciaux, RH, finance)',
  'IA & Securite (donnees personnelles, RGPD)',
  'IA & Esprit critique (LLM, biais, hallucinations)',
  'Modules ecoles/CFA sur mesure',
  'Formation de formateurs',
]

export default function FormationsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/offres" className="text-[#666666] hover:text-[#00255D] mb-6 inline-block text-sm">
            ← Nos offres
          </Link>
          
          <span className="inline-block px-3 py-1 bg-[#00255D] text-white text-xs rounded-full mb-4">02</span>
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-2">Formations & Acculturation</h1>
          <p className="text-[#666666] mb-8">Intra-entreprise - Parcours sur mesure</p>
          
          <blockquote className="border-l-4 border-[#00255D] pl-6 mb-12">
            <p className="text-xl text-[#00255D] italic">
              Vos equipes utilisent deja l'IA, souvent sans le savoir, parfois sans securite. On fait en sorte qu'elles le fassent bien, dans un cadre securise.
            </p>
          </blockquote>
          
          <h2 className="text-xl font-medium text-[#00255D] mb-6">Programmes disponibles</h2>
          <ul className="space-y-3 mb-12">
            {programs.map((item) => (
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
