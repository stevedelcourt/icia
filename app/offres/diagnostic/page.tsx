import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const livrables = [
  "Cartographie des usages IA actuels (outils, donnees, processus)",
  "Mesure de maturite IA : gouvernance, culture, competences, infrastructure",
  "Analyse risques AI Act : classification, obligations haut risque, GPAI, RGPD",
  "Identification de 3 a 5 cas d'usage prioritaires avec estimation du ROI",
  "Feuille de route 12 mois : quick wins + chantiers structurants",
  "Restitution en comite de direction avec rapport executif",
]

const exemple = {
  contexte: "PME logistique 80 personnes (Marseille)",
  description: "Un transporteur regional utilise ChatGPT en informel, sans politique IA, inquiet du RGPD et de la concurrence. Objectif : structurer une approche IA sans risque.",
  jalons: [
    { phase: "J1-J3", action: "Interviews dirigeant, DAF, responsable operations, DSI" },
    { phase: "J4-J10", action: "Analyse des donnees, outils en place, cartographie risques AI Act" },
    { phase: "J11-J15", action: "Formalisation cas d'usage (tournees optimisees, service client IA, reporting auto)" },
    { phase: "J15-J18", action: "Redaction feuille de route + rapport de conformite" },
    { phase: "J20", action: "Restitution CODIR - decision de lancement offre 03" },
  ],
}

export default function DiagnosticPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/offres" className="text-sm text-[#666666] hover:text-[#00255D] mb-8 inline-block">← Nos offres</Link>

          <div className="mb-16">
            <span className="text-xs tracking-widest text-[#666666] uppercase">OFFRE 01</span>
            <h1 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-2">Diagnostic IA & AI Act</h1>
            <p className="text-lg text-[#666666]">Porte entree universelle</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-4">Promesse</h2>
            <p className="text-xl text-black max-w-3xl leading-relaxed">En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concretement - avec une feuille de route prete a executer.</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">Contenu livre</h2>
            <ul className="space-y-4">
              {livrables.map((item) => (
                <li key={item} className="flex items-start gap-4 text-black">
                  <span className="text-[#00255D] mt-1">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-6">Exemple</h2>
            <div className="bg-[#FAFAF7] p-8">
              <p className="font-medium text-black mb-2">{exemple.contexte}</p>
              <p className="text-[#666666] mb-6">{exemple.description}</p>
              <ul className="space-y-3">
                {exemple.jalons.map((j) => (
                  <li key={j.phase} className="flex gap-4 text-sm">
                    <span className="text-[#00255D] font-medium min-w-[60px]">{j.phase}</span>
                    <span className="text-[#666666]">{j.action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Prix</h2>
                <p className="text-2xl font-medium text-black">9 500 EUR HT</p>
                <p className="text-sm text-[#666666]">5 a 6 jours consultants</p>
              </div>
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Levier</h2>
                <p className="text-[#666666] text-sm">AI Act en vigueur aout 2026 - Urgence reglementaire = achat immediat - Ticket decidable par CEO/DAF seul</p>
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
