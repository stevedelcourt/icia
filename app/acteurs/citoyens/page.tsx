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

const axes = [
  { title: 'Acculturation a lIA', description: "Des ateliers ludiques et accessibles pour demystifier l'intelligence artificielle. Comprendre ce qu'est l'IA, comment elle fonctionne et quelles sont ses limites. Aucun prerequis technique, ouvert a tous." },
  { title: 'Securite et ethique', description: "Apprenez a vous proteger dans un monde ou l'IA est omnipresente. Deepfakes, arnaques, desinformation, protection de vos donnees personnelles - ateliers de sensibilisation et guides pratiques." },
  { title: 'Emploi et reconversion', description: "L'IA transforme le marche du travail. Accompagnement personnalise pour comprendre ces evolutions, identifier les opportunites et construire un projet professionnel adapte." },
  { title: 'Passerelles vers la formation', description: "L'ICIA facilite l'acces aux formations en IA. Orientation, mise en relation avec des organismes partenaires, aide aux demarches CPF et suivi personnalise du parcours." },
]

export default function CitoyensPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <nav className="flex gap-6 text-sm text-[#666666] mb-8">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/citoyens' ? 'text-[#00255D] font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Grand public</h1>
              <p className="text-lg text-[#666666] mb-8">La fracture IA grandit sur le marche de l'emploi. L'ICIA vous aide a comprendre les outils IA du quotidien, vous proteger des risques, et valoriser vos competences.</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Etre accompagne</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Grand public" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Axes d'accompagnement</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {axes.map((axe) => (
                <div key={axe.title} className="p-8 border border-[#E5E5E5]">
                  <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
                  <p className="text-sm text-[#666666]">{axe.description}</p>
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
