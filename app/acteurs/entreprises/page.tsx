import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const navActeurs = [
  { label: 'Entreprises', href: '/acteurs/entreprises' },
  { label: 'Pouvoirs publics', href: '/acteurs/pouvoirs-publics' },
  { label: 'Education', href: '/acteurs/education' },
  { label: 'Secteurs creatifs', href: '/acteurs/secteurs-creatifs' },
  { label: 'Grand public', href: '/acteurs/citoyens' },
]

const contenu = {
  messageCle: "Vos concurrents passent a l'IA, vous aussi, sans vous y perdre ni y laisser votre marge.",
  declencheur: "Peur du decrochage + AI Act = urgence",
  axes: [
    {
      num: '01',
      title: 'Diagnostic IA & AI Act',
      promesse: "En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concretement.",
      livrables: ["Cartographie des usages IA actuels", "Mesure de maturite IA", "Analyse risques AI Act", "Feuille de route 12 mois"],
      prix: "9 500 EUR HT",
      href: '/offres/diagnostic',
    },
    {
      num: '02',
      title: 'Formations & Acculturation',
      promesse: "Vos equipes utilisent deja l'IA. On fait en sorte qu'elles le fassent bien, dans un cadre securise.",
      livrables: ["IA par metiers", "IA & Securite (RGPD)", "IA & Esprit critique", "Formation de formateurs"],
      prix: "12 000 - 18 000 EUR HT",
      href: '/offres/formations',
    },
    {
      num: '03',
      title: 'Transformation IA',
      promesse: "Passer de l'experimentation a la pratique quotidienne. Gouvernance, competences, change management.",
      livrables: ["Gouvernance IA", "Plan de competences", "Change management", "Pilotage partenaires techniques"],
      prix: "50 000 - 70 000 EUR HT",
      href: '/offres/transformation',
    },
    {
      num: '04',
      title: 'Partenaire IA Mensuel',
      promesse: "Un partenaire independant pour vous aider a decider sur l'IA, en continu.",
      livrables: ["Veille reglementaire IA", "Office hours", "Relecture projets IA", "Comite IA trimestriel"],
      prix: "1 000 - 3 000 EUR HT/mois",
      href: '/offres/partenaire',
    },
  ],
  exemple: {
    contexte: "PME logistique 80 personnes (Marseille)",
    description: "Un transporteur regional utilise ChatGPT en informel, sans politique IA, inquiet du RGPD et de la concurrence. Objectif : structurer une approche IA sans risque.",
    jalons: [
      { phase: "J1-J3", action: "Interviews dirigeant, DAF, responsable operations, DSI" },
      { phase: "J4-J10", action: "Analyse des donnees, cartographie risques AI Act" },
      { phase: "J11-J15", action: "Formalisation cas d'usage (tournees optimisees, service client IA)" },
      { phase: "J20", action: "Restitution CODIR - decision de lancement transformation" },
    ],
  },
}

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-6 text-sm text-[#666666] mb-12">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/entreprises' ? 'text-[#00255D] font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">PME / ETI</h1>
              <p className="text-xl text-black mb-4">{contenu.messageCle}</p>
              <p className="text-[#666666] mb-8">{contenu.declencheur}</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="PME / ETI" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Nos offres adaptees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {contenu.axes.map((axe) => (
                <div key={axe.num} className="border border-[#E5E5E5] p-8">
                  <span className="text-xs text-[#666666] block mb-2">{axe.num}</span>
                  <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
                  <p className="text-sm text-[#666666] mb-4">{axe.promesse}</p>
                  <ul className="space-y-1 mb-4">
                    {axe.livrables.map((item) => (
                      <li key={item} className="text-sm text-[#666666] flex items-start gap-2">
                        <span className="text-[#00255D]">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-black mb-4">{axe.prix}</p>
                  <Link href={axe.href} className="text-sm text-[#00255D] hover:underline">En savoir plus →</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-6">Exemple</h2>
            <div className="bg-[#FAFAF7] p-8">
              <p className="font-medium text-black mb-2">{contenu.exemple.contexte}</p>
              <p className="text-[#666666] mb-6">{contenu.exemple.description}</p>
              <ul className="space-y-3">
                {contenu.exemple.jalons.map((j) => (
                  <li key={j.phase} className="flex gap-4 text-sm">
                    <span className="text-[#00255D] font-medium min-w-[60px]">{j.phase}</span>
                    <span className="text-[#666666]">{j.action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
