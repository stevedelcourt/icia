import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const niveaux = [
  { nom: "Essentiel", contenu: ["Veille reglementaire IA personnalisee", "2h office hours", "Alertes AI Act"], prix: "1 000 EUR HT" },
  { nom: "Strategique", contenu: ["Tout Essentiel", "Relecture projets IA", "Revue prestataires techniques", "4h office hours"], prix: "2 000 EUR HT" },
  { nom: "Dirigeant", contenu: ["Tout Strategique", "1 comite IA/trimstre", "Acces evenements Institut", "Priorite diagnostics"], prix: "3 000 EUR HT" },
]

export default function PartenairePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/offres" className="text-sm text-[#666666] hover:text-[#00255D] mb-8 inline-block">← Nos offres</Link>

          <div className="mb-16">
            <span className="text-xs tracking-widest text-[#666666] uppercase">OFFRE 04</span>
            <h1 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-2">Partenaire IA Mensuel</h1>
            <p className="text-lg text-[#666666]">Abonnement</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-4">Promesse</h2>
            <p className="text-xl text-black max-w-3xl leading-relaxed">Un partenaire independant pour vous aider a decider sur l'IA, en continu - veille, conseil, arbitrage, alerte reglementaire. Votre numero a appeler quand l'IA touche vos sujets.</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">3 niveaux d'abonnement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {niveaux.map((niveau) => (
                <div key={niveau.nom} className="border border-[#E5E5E5] p-8">
                  <h3 className="text-lg font-medium text-black mb-2">{niveau.nom}</h3>
                  <p className="text-2xl font-medium text-[#00255D] mb-6">{niveau.prix}</p>
                  <ul className="space-y-2">
                    {niveau.contenu.map((item) => (
                      <li key={item} className="text-sm text-[#666666] flex items-start gap-2">
                        <span className="text-[#00255D]">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Modele economique</h2>
                <p className="text-[#666666]">20 clients abonne = 40 000 - 60 000 EUR/mois de revenus recurrents</p>
              </div>
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Notre approche</h2>
                <p className="text-[#666666]">Zero dependance : 100 % conseil pur, aucune sous-traitance technique requise - marge maximale</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            <Link href="/offres" className="inline-block px-8 py-4 border border-[#E5E5E5] text-[#666666] hover:border-[#00255D] hover:text-[#00255D] transition-colors">Retour aux offres</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
