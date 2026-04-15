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
  messageCle: "Faire de l'IA un levier de service public, dans un cadre ethique et souverain.",
  declencheur: "Programme PRIAM + responsabilite publique",
  axes: [
    {
      title: 'Inclusion',
      description: "Lutter contre la fracture numerique et garantir que chacun puisse beneficier des avancees de l'IA.",
      items: ["Ateliers dans les territoires (QPV, zones rurales)", "Formations pour agents publics", "Accompagnement des associations locales", "Accessibilite des services IA", "Inclusion des personnes agees"],
    },
    {
      title: 'Transformation des services publics',
      description: "Aider les administrations a identifier les cas d'usage de l'IA pour ameliorer les services aux citoyens.",
      items: ["Diagnostic des processus administratifs", "Identification et priorisation des cas d'usage", "Accompagnement au changement", "Formation des agents a l'IA", "Ethique, transparence et evaluation d'impact"],
    },
    {
      title: 'Remobilisation professionnelle',
      description: "Accompagner les agents publics et demandeurs d'emploi vers les metiers de l'IA.",
      items: ["Bilan de competences IA", "Parcours de formation certifiante", "Certification professionnelle reconnue", "Partenariats employeurs locaux", "Suivi post-formation individualise"],
    },
    {
      title: 'Observatoire territorial',
      description: "Un outil de pilotage unique pour les decideurs publics : suivi de l'adoption de l'IA dans les territoires.",
      items: ["50+ indicateurs suivis en continu", "13 regions couvertes", "4 rapports annuels publies", "Tableaux de bord personnalises par territoire"],
    },
  ],
  exemple: {
    contexte: "Collectivite territoriale - Sud de la France",
    description: "Une collectivite de 250 agents veut integrer l'IA dans ses services sans competence technique interne. Enjeux : efficacite administrative, reponse aux usagers, conformite AI Act.",
    jalons: [
      { phase: "Cadrage", action: "Comprendre les specificites, les publics et les enjeux propres au territoire" },
      { phase: "Plan d'action", action: "Co-construction d'une feuille de route adaptee aux contraintes budgetaires" },
      { phase: "Deploiement", action: "Mise en oeuvre des programmes sur le terrain" },
      { phase: "Reporting", action: "Tableaux de bord et rapports reguliers pour suivre l'impact" },
    ],
  },
}

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-6 text-sm text-[#666666] mb-12">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/pouvoirs-publics' ? 'text-[#00255D] font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Pouvoirs publics</h1>
              <p className="text-xl text-black mb-4">{contenu.messageCle}</p>
              <p className="text-[#666666] mb-8">{contenu.declencheur}</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Pouvoirs publics" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16 mb-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {contenu.axes.map((axe) => (
                <div key={axe.title} className="border border-[#E5E5E5] p-8">
                  <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
                  <p className="text-sm text-[#666666] mb-4">{axe.description}</p>
                  <ul className="space-y-1">
                    {axe.items.map((item) => (
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

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-6">Exemple</h2>
            <div className="bg-[#FAFAF7] p-8">
              <p className="font-medium text-black mb-2">{contenu.exemple.contexte}</p>
              <p className="text-[#666666] mb-6">{contenu.exemple.description}</p>
              <ul className="space-y-3">
                {contenu.exemple.jalons.map((j) => (
                  <li key={j.phase} className="flex gap-4 text-sm">
                    <span className="text-[#00255D] font-medium min-w-[100px]">{j.phase}</span>
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
