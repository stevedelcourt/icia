import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const levels = [
  { name: 'Essentiel', features: ['Veille reglementaire IA', '2h office hours/mois', 'Alertes AI Act'] },
  { name: 'Strategique', features: ['Tout Essentiel', 'Relecture projets IA', '4h office hours/mois'] },
  { name: 'Dirigeant', features: ['Tout Strategique', 'Comite IA/trimstre', 'Acces evenements'] },
]

export default function PartenairePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/offres" className="text-[#666666] hover:text-[#00255D] mb-6 inline-block text-sm">
            ← Nos offres
          </Link>
          
          <span className="inline-block px-3 py-1 bg-[#00255D] text-white text-xs rounded-full mb-4">04</span>
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-2">Partenaire IA Mensuel</h1>
          <p className="text-[#666666] mb-8">Abonnement - Engagement 12 mois</p>
          
          <blockquote className="border-l-4 border-[#00255D] pl-6 mb-12">
            <p className="text-xl text-[#00255D] italic">
              Un partenaire independant pour vous aider a decider sur l'IA, en continu - veille, conseil, arbitrage, alerte reglementaire.
            </p>
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {levels.map((level) => (
              <div key={level.name} className="p-6 border border-[#E5E5E5] rounded-lg">
                <h3 className="font-medium text-[#00255D] mb-4">{level.name}</h3>
                <ul className="space-y-2">
                  {level.features.map((feature) => (
                    <li key={feature} className="text-sm text-[#666666]">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
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
