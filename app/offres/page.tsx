import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const offers = [
  {
    num: '01',
    title: 'Diagnostic IA & AI Act',
    tagline: 'Porte entree universelle',
    duration: '4-6 semaines',
    description: "En 4 a 6 semaines, vous savez exactement ou vous en etes, ou vous pouvez aller, et ce que l'AI Act vous impose concreatement - avec une feuille de route prete a executer.",
    deliverables: [
      'Cartographie des usages IA actuels',
      'Mesure de maturite IA (gouvernance, culture, competences)',
      'Analyse risques AI Act',
      "Identification de cas d'usage prioritaires",
      'Feuille de route 12 mois',
      'Restitution comite de direction',
    ],
    href: '/offres/diagnostic',
  },
  {
    num: '02',
    title: 'Formations & Acculturation',
    tagline: 'Intra-entreprise',
    duration: 'Parcours sur mesure',
    description: "Vos equipes utilisent deja l'IA, souvent sans le savoir, parfois sans securite. On fait en sorte qu'elles le fassent bien, dans un cadre securise.",
    deliverables: [
      'IA par metiers (managers, commerciaux, RH, finance)',
      'IA & Securite (RGPD, donnees personnelles)',
      'IA & Esprit critique (LLM, biais, hallucinations)',
      'Modules ecoles/CFA sur mesure',
      'Formation de formateurs',
    ],
    href: '/offres/formations',
  },
  {
    num: '03',
    title: 'Transformation IA',
    tagline: 'Accompagnement 6-12 mois',
    duration: '6-12 mois',
    description: "On vous aide a faire passer l'IA de l'experimentation a la pratique quotidienne - sans casser votre organisation, avec des resultats mesurables.",
    deliverables: [
      'Gouvernance IA (comite, charte, referent)',
      'Plan de competences par role',
      'Change management (ateliers, coaching)',
      'Conformite AI Act + RGPD',
      'Pilotage partenaires techniques',
      'Jalons mesure impact trimestriels',
    ],
    href: '/offres/transformation',
  },
  {
    num: '04',
    title: 'Partenaire IA Mensuel',
    tagline: 'Abonnement',
    duration: 'Engagement 12 mois',
    description: "Un partenaire independant pour vous aider a decider sur l'IA, en continu - veille, conseil, arbitrage, alerte reglementaire.",
    levels: [
      { name: 'Essentiel', features: ['Veille reglementaire IA', '2h office hours/mois', 'Alertes AI Act'] },
      { name: 'Strategique', features: ['Tout Essentiel', 'Relecture projets IA', '4h office hours/mois'] },
      { name: 'Dirigeant', features: ['Tout Strategique', 'Comite IA/trimstre', 'Acces evenements'] },
    ],
    href: '/offres/partenaire',
  },
]

export default function OffresPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-4">Nos offres</h1>
          <p className="text-[#666666] mb-16">De la porte entree a l'accompagnement long.</p>

          <div className="space-y-16">
            {offers.slice(0, 3).map((offer) => (
              <div key={offer.num} className="border-b border-[#E5E5E5] pb-16">
                <div className="mb-6">
                  <span className="text-xs text-[#666666] uppercase tracking-widest">{offer.num}</span>
                  <h2 className="text-2xl font-serif text-[#00255D] mt-1">{offer.title}</h2>
                  <p className="text-sm text-[#666666] mt-1">{offer.tagline} - {offer.duration}</p>
                </div>
                <p className="text-[#666666] mb-6">{offer.description}</p>
                <ul className="space-y-2 mb-8">
                  {offer.deliverables?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#666666]">
                      <span className="text-[#00255D]">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link href={offer.href} className="px-6 py-2.5 bg-[#00255D] text-white text-sm rounded-full hover:bg-[#001A3A] transition-colors">
                    En savoir plus
                  </Link>
                  <Link href="/contact" className="px-6 py-2.5 border border-[#E5E5E5] text-[#666666] text-sm rounded-full hover:border-[#00255D] hover:text-[#00255D] transition-colors">
                    Nous contacter
                  </Link>
                </div>
              </div>
            ))}

            <div>
              <div className="mb-6">
                <span className="text-xs text-[#666666] uppercase tracking-widest">04</span>
                <h2 className="text-2xl font-serif text-[#00255D] mt-1">Partenaire IA Mensuel</h2>
                <p className="text-sm text-[#666666] mt-1">Abonnement - Engagement 12 mois</p>
              </div>
              <p className="text-[#666666] mb-8">{offers[3].description}</p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {offers[3].levels?.map((level) => (
                  <div key={level.name} className="p-6 border border-[#E5E5E5] rounded-lg">
                    <h3 className="font-medium text-[#00255D] mb-3">{level.name}</h3>
                    <ul className="space-y-1">
                      {level.features.map((feature) => (
                        <li key={feature} className="text-sm text-[#666666]">{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link href="/offres/partenaire" className="inline-block px-6 py-2.5 bg-[#00255D] text-white text-sm rounded-full hover:bg-[#001A3A] transition-colors">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
