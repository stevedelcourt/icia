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
  messageCle: "Preparez vos etudiants au monde qui existe deja - pas a celui d'il y a 5 ans.",
  declencheur: "Obsolescence pedagogique",
  axes: [
    {
      title: 'Bibliotheque pedagogique',
      description: "Une ressource complete et libre d'acces pour integrer l'IA dans tous les niveaux.",
      items: ["Sequences pedagogiques cles en main", "Exercices et mises en situation", "Ressources differenciees par niveau", "Mises a jour regulieres"],
    },
    {
      title: 'Formation des formateurs',
      description: "Accompagnement dedie aux enseignants et formateurs pour maitriser les concepts de l'IA.",
      items: ["Ateliers d'initiation a l'IA (2 jours)", "Formation a l'usage pedagogique des outils IA", "Communaute d'enseignants", "Ressources exclusives formateurs"],
    },
    {
      title: 'Certifications',
      description: "Des certifications officielles pour les eleves et etudiants, reconnaissables par les employeurs.",
      items: ["Certification socle IA (lycee)", "Certification avancee (superieur)", "Badges numeriques partageables", "Reconnaissance employeurs partenaires"],
    },
    {
      title: 'Accreditation institutionnelle',
      description: "Accompagnement des etablissements pour obtenir une accreditation ICIA, gage de qualite.",
      items: ["Audit du programme existant", "Feuille de route pedagogique", "Label ICIA Education", "Mise en reseau avec d'autres etablissements"],
    },
  ],
  exemple: {
    contexte: "CFA BTP Marseille (120 apprentis)",
    description: "Un CFA BTP veut integrer l'IA dans ses formations sans savoir comment. Les formateurs ne connaissent pas les outils. Les apprentis utilisent deja l'IA pour leurs devoirs.",
    jalons: [
      { phase: "Audit", action: "Audit de la maquette pedagogique existante (2 jours)" },
      { phase: "Co-construction", action: "Co-construction de 3 modules IA metier" },
      { phase: "Formation", action: "Formation des formateurs (2 jours)" },
      { phase: "Livraison", action: "Livraison des supports + badges de competences associes" },
      { phase: "Accompagnement", action: "Accompagnement sur 3 mois a la mise en place" },
    ],
  },
}

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-6 text-sm text-[#666666] mb-12">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/education' ? 'text-[#00255D] font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Education</h1>
              <p className="text-xl text-black mb-4">{contenu.messageCle}</p>
              <p className="text-[#666666] mb-8">{contenu.declencheur}</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Education" className="w-full" />
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
                    <span className="text-[#00255D] font-medium min-w-[120px]">{j.phase}</span>
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
