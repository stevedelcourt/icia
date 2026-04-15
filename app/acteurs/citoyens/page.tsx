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
  messageCle: "La fracture IA grandit. L'ICIA vous aide a comprendre les outils IA du quotidien, vous proteger des risques, et valoriser vos competences.",
  declencheur: "CPF + France Travail",
  axes: [
    {
      title: 'Acculturation a lIA',
      description: "Des ateliers ludiques et accessibles pour demystifier l'intelligence artificielle.",
      items: ["Ateliers decouverte (2h)", "Parcours thematiques progressifs", "Sessions questions-reponses avec des experts", "Aucun prerequis technique, ouvert a tous"],
    },
    {
      title: 'Securite et ethique',
      description: "Apprenez a vous proteger dans un monde ou l'IA est omnipresente.",
      items: ["Ateliers de sensibilisation aux risques", "Deepfakes, arnaques, desinformation", "Protection des donnees personnelles", "Guides pratiques telechargeables"],
    },
    {
      title: 'Emploi et reconversion',
      description: "Accompagnement personnalise pour comprendre les evolutions du marche du travail.",
      items: ["Diagnostic competences", "Orientation vers les formations", "Mise en relation avec des employeurs", "Construction d'un projet professionnel adapte"],
    },
    {
      title: 'Passerelles vers la formation',
      description: "L'ICIA facilite l'acces aux formations en IA.",
      items: ["Reseau de partenaires formation", "Aide aux demarches CPF / financement", "Suivi personnalise du parcours", "Orientation et mise en relation"],
    },
  ],
  exemple: {
    contexte: "Demandeur d'emploi - Marseille",
    description: "Une personne en reconversion veut comprendre comment l'IA peut l'aider dans sa recherche d'emploi ou sa formation. Ni technique, ni motive par le buzz.",
    jalons: [
      { phase: "Premier contact", action: "Envoyez-nous un message ou venez a l'accueil du flagship Marseille" },
      { phase: "Echange", action: "30 min pour evaluer vos besoins, votre niveau et vos objectifs" },
      { phase: "Parcours", action: "Rejoignez les ateliers ou le parcours correspondant a votre profil" },
      { phase: "Suivi", action: "Un accompagnement continu, a votre rythme" },
    ],
  },
}

export default function CitoyensPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-6 text-sm text-[#666666] mb-12">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/citoyens' ? 'text-[#00255D] font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Grand public</h1>
              <p className="text-xl text-black mb-4">{contenu.messageCle}</p>
              <p className="text-[#666666] mb-8">{contenu.declencheur}</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Etre accompagne</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Grand public" className="w-full" />
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
