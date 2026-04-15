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

const sectors = ['Musique', 'Arts visuels', 'Cinema', 'Jeux video', 'Edition', 'Architecture']

const contenu = {
  messageCle: "L'IA n'est pas la pour vous remplacer. Elle est la pour vous donner des super pouvoirs - si vous la maitrisez.",
  declencheur: "Crainte + curiosite",
  axes: [
    {
      title: 'Ateliers creatifs IA',
      description: "Explorer les outils de generation IA dans votre discipline.",
      items: ["Atelier generation d'images (DALL-E, Midjourney)", "Atelier composition musicale assistee", "Atelier ecriture et narration augmentee", "Sessions par secteur creatif"],
    },
    {
      title: 'Securite juridique',
      description: "Comprendre et naviguer dans le cadre legal de l'IA creative.",
      items: ["Conferences droit de l'IA & creativite", "Guides pratiques par secteur", "Consultations avec des juristes specialises", "Veille reglementaire (AI Act)"],
    },
    {
      title: 'Laboratoire dinnovation',
      description: "Un espace dedie pour tester, prototyper et experimenter avec les derniers outils d'IA creative.",
      items: ["Acces au labo IA (flagship Marseille)", "Accompagnement technique dedie", "Sessions de prototypage intensif", "Residences artistes & IA"],
    },
    {
      title: 'Monetisation',
      description: "Explorer les nouveaux modeles economiques offres par l'IA aux createurs.",
      items: ["Ateliers business model creatif", "Reseau d'entreprises partenaires", "Mise en relation createurs / marques", "Veille economique sectorielle"],
    },
  ],
  exemple: {
    contexte: "Studio de musique - Marseille",
    description: "Un studio de production musicale veut integrer l'IA dans son workflow sans perdre son identite artistique. Enjeux : copyright des generations, contrats avec les artistes, qualite de production.",
    jalons: [
      { phase: "Decouverte", action: "2h pour explorer les outils IA dans la discipline" },
      { phase: "Juridique", action: "Comprendre droits et obligations avant utilisation" },
      { phase: "Prototypage", action: "Acces au laboratoire pour concretiser un projet" },
      { phase: "Reseau", action: "Integration dans le reseau ICIA et mise en avant" },
    ],
  },
}

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-6 text-sm text-[#666666] mb-12">
            {navActeurs.map((item) => (
              <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/secteurs-creatifs' ? 'text-[#00255D] font-medium' : ''}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Secteurs creatifs</h1>
              <p className="text-xl text-black mb-4">{contenu.messageCle}</p>
              <p className="text-[#666666] mb-8">{contenu.declencheur}</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Secteurs creatifs" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16 mb-8">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-6">Secteurs couverts</h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="px-4 py-2 border border-[#E5E5E5] text-sm text-[#666666]">{sector}</span>
              ))}
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
