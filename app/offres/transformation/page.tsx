import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const apports = [
  "Gouvernance IA : creation du comite IA, charte d'usage, referent interne forme",
  "Plan de competences : cartographie des besoins par role, parcours de montee en competences",
  "Change management : communication interne, ateliers d'adhesion, coaching des managers",
  "Conformite AI Act + RGPD : mise en coherence des usages avec les obligations legales",
  "Pilotage des partenaires techniques (Flowt ou autres) : Mentivis arbitre, controle, valide",
  "Jalons de mesure d'impact tous les trimestres - KPI definis en amont, restitution CODIR",
]

const exemple = {
  contexte: "ETI services 350 personnes",
  description: "Une ETI de services aux entreprises a realise un diagnostic. 3 cas d'usage prioritaires identifies : automatisation du support client, IA dans la prospection commerciale, generation de rapports. La direction veut deployer sans risque sur 9 mois.",
  jalons: [
    { phase: "M1-M2", action: "Mise en place gouvernance IA, charte, formation CODIR" },
    { phase: "M2-M4", action: "Deploiement support client IA avec Flowt sous pilotage Mentivis" },
    { phase: "M4-M6", action: "Formation equipes commerciales, deploiement IA prospection" },
    { phase: "M6-M8", action: "Automatisation reporting, mesure d'impact, ajustement" },
    { phase: "M9", action: "Bilan, ROI mesure, feuille de route phase 2" },
  ],
}

export default function TransformationPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/offres" className="text-sm text-[#666666] hover:text-[#00255D] mb-8 inline-block">← Nos offres</Link>

          <div className="mb-16">
            <span className="text-xs tracking-widest text-[#666666] uppercase">OFFRE 03</span>
            <h1 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-2">Transformation IA</h1>
            <p className="text-lg text-[#666666]">Programme 6-12 mois</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-4">Promesse</h2>
            <p className="text-xl text-black max-w-3xl leading-relaxed">On vous aide a faire passer l'IA de l'experimentation a la pratique quotidienne - sans casser votre organisation, sans dependre d'un seul prestataire, avec des resultats mesurables tous les 3 mois.</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">Ce que Mentivis apporte</h2>
            <ul className="space-y-4">
              {apports.map((item) => (
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
                <p className="text-2xl font-medium text-black">50 000 - 70 000 EUR HT</p>
                <p className="text-sm text-[#666666]">9 mois, 3-4 jours/mois</p>
              </div>
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Levier</h2>
                <p className="text-[#666666] text-sm">Chaque diagnostic mene ici - Chaque mission se prolonge en abonnement (offre 04)</p>
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
