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

const programmes = [
  { title: 'Inclusion', description: "Lutter contre la fracture numerique et garantir que chacun puisse beneficier des avancees de l'IA. Ateliers dans les territoires, formations pour agents publics, accompagnement des associations locales." },
  { title: 'Transformation des services publics', description: "Aider les administrations a identifier les cas d'usage de l'IA pour ameliorer les services aux citoyens. Efficacite administrative, simplification des demarches et qualite du service." },
  { title: 'Remobilisation professionnelle', description: "Accompagner les agents publics et demandeurs d'emploi vers les metiers de l'IA. Bilans de competences, formations certifiantes et mise en relation avec les employeurs du territoire." },
  { title: 'Observatoire territorial', description: "Un outil de pilotage unique pour les decideurs publics : suivi de l'adoption de l'IA, identification des inegalites territoriales et recommandations personnalisees." },
]

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <nav className="flex gap-6 text-sm text-[#666666] mb-8">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/pouvoirs-publics' ? 'text-[#00255D] font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Pouvoirs publics</h1>
              <p className="text-lg text-[#666666] mb-8">Faire de l'IA un levier de service public, dans un cadre ethique et souverain. AMO IA, programme PRIAM, acculturation des agents - avec des enjeux d'ethique et de transparence.</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Pouvoirs publics" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programmes.map((prog) => (
                <div key={prog.title} className="p-8 border border-[#E5E5E5]">
                  <h3 className="text-xl font-serif text-black mb-3">{prog.title}</h3>
                  <p className="text-sm text-[#666666]">{prog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
