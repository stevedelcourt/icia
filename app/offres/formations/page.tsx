import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const programmes = [
  { nom: "IA par metiers", contenu: "Managers, commerciaux, RH, finance, support client, logistique", duree: "1 jour" },
  { nom: "IA & securite", contenu: "Risques, donnees personnelles, arnaques, RGPD, bonnes pratiques", duree: "1/2 journee" },
  { nom: "IA & esprit critique", contenu: "Comprendre les LLM, biais, hallucinations, limites des outils", duree: "1/2 journee" },
  { nom: "Modules ecoles/CFA", contenu: "Cours structures, TD, cas pratiques pour etablissements", duree: "Sur mesure" },
  { nom: "Parcours emploi IA", contenu: "Socle numerique + IA metier + badge de competences", duree: "3 a 5 jours" },
  { nom: "Formation formateurs", contenu: "Former les equipes internes ou intervenants partenaires", duree: "2 jours" },
]

const exemple = {
  contexte: "CFA BTP Marseille (120 apprentis)",
  description: "Un CFA BTP veut integrer l'IA dans ses formations sans savoir comment. Les formateurs ne connaissent pas les outils. Les apprentis utilisent deja l'IA pour leurs devoirs.",
  jalons: [
    { phase: "Audit", action: "Audit de la maquette pedagogique existante (2 jours)" },
    { phase: "Co-construction", action: "Co-construction de 3 modules IA metier : metres augmentes, IA & securite chantier, reporting" },
    { phase: "Formation", action: "Formation des formateurs (2 jours)" },
    { phase: "Livraison", action: "Livraison des supports + badges de competences associes" },
    { phase: "Accompagnement", action: "Accompagnement sur 3 mois a la mise en place" },
  ],
}

export default function FormationsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/offres" className="text-sm text-[#666666] hover:text-[#00255D] mb-8 inline-block">← Nos offres</Link>

          <div className="mb-16">
            <span className="text-xs tracking-widest text-[#666666] uppercase">OFFRE 02</span>
            <h1 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-2">Formations & Acculturation IA</h1>
            <p className="text-lg text-[#666666]">Volume & Financement</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-4">Promesse</h2>
            <p className="text-xl text-black max-w-3xl leading-relaxed">Vos equipes utilisent deja l'IA, souvent sans le savoir, parfois sans securite. On fait en sorte qu'elles le fassent bien, en lien avec leur metier, dans un cadre securise.</p>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">Catalogue de programmes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E5E5E5]">
                    <th className="py-3 pr-4 text-xs tracking-widest text-[#666666] uppercase font-normal">Programme</th>
                    <th className="py-3 pr-4 text-xs tracking-widest text-[#666666] uppercase font-normal">Contenu</th>
                    <th className="py-3 text-xs tracking-widest text-[#666666] uppercase font-normal">Duree</th>
                  </tr>
                </thead>
                <tbody>
                  {programmes.map((p) => (
                    <tr key={p.nom} className="border-b border-[#E5E5E5]">
                      <td className="py-4 pr-4 font-medium text-black">{p.nom}</td>
                      <td className="py-4 pr-4 text-[#666666]">{p.contenu}</td>
                      <td className="py-4 text-[#666666]">{p.duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-12 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-6">Exemple</h2>
            <div className="bg-[#FAFAF7] p-8">
              <p className="font-medium text-black mb-2">{exemple.contexte}</p>
              <p className="text-[#666666] mb-6">{exemple.description}</p>
              <ul className="space-y-3">
                {exemple.jalons.map((j) => (
                  <li key={j.phase} className="flex gap-4 text-sm">
                    <span className="text-[#00255D] font-medium min-w-[120px]">{j.phase}</span>
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
                <p className="text-2xl font-medium text-black">12 000 - 18 000 EUR HT</p>
                <p className="text-sm text-[#666666]">Ingenierie peda + formation formateurs</p>
              </div>
              <div>
                <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-2">Levier</h2>
                <p className="text-[#666666] text-sm">100 % financible OPCO BTP - CPF pour parcours individuels - Qualiopi requis</p>
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
