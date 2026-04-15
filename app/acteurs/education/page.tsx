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
  { title: 'Bibliotheque pedagogique', description: "Une ressource complete et libre d'acces pour integrer l'IA dans tous les niveaux - du primaire a l'universite. Sequences pedagogiques cles en main, exercices et mises en situation, ressources differenciees." },
  { title: 'Formation des formateurs', description: "Accompagnement dedie aux enseignants et formateurs pour maitriser les concepts de l'IA et les integrer dans leurs pratiques pedagogiques. Ateliers d'initiation, formation a l'usage pedagogique des outils IA." },
  { title: 'Certifications', description: "Des certifications officielles pour les eleves et etudiants, reconnaissables par les employeurs. Un standard commun pour valider les competences en IA dans le parcours educatif." },
  { title: 'Accreditation institutionnelle', description: "Accompagnement des etablissements pour obtenir une accreditation ICIA, gage de qualite. Un label reconnu au niveau national." },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <nav className="flex gap-6 text-sm text-[#666666] mb-8">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/education' ? 'text-[#00255D] font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Education</h1>
              <p className="text-lg text-[#666666] mb-8">Former les formateurs de demain. Vos etudiants utilisent deja l'IA - souvent sans securite. Preparez-les au monde qui existe, pas a celui d'il y a 5 ans.</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Education" className="w-full" />
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
