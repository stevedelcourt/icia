import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const acteurs = [
  {
    title: 'Entreprises',
    slug: 'entreprises',
    description: 'PME et ETI face a l\'IA. Diagnostic, transformation, formation.',
    href: '/acteurs/entreprises',
  },
  {
    title: 'Pouvoirs publics',
    slug: 'pouvoirs-publics',
    description: 'Service public, inclusion, pilotage territorial.',
    href: '/acteurs/pouvoirs-publics',
  },
  {
    title: 'Education',
    slug: 'education',
    description: 'Ecoles, CFA, universites. Former les formateurs de demain.',
    href: '/acteurs/education',
  },
  {
    title: 'Secteurs creatifs',
    slug: 'secteurs-creatifs',
    description: 'Musique, cinema, design, edition. Creer avec l\'IA sans perdre son identite.',
    href: '/acteurs/secteurs-creatifs',
  },
  {
    title: 'Grand public',
    slug: 'citoyens',
    description: 'Acculturation, securite, emploi. Reduire la fracture IA.',
    href: '/acteurs/citoyens',
  },
]

export default function ActeursPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Institut de l'IA</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-4">Nos acteurs</h1>
          <p className="text-lg text-[#666666] mb-16 max-w-2xl">
            L'IA ne transforme pas les organisations de la meme facon. Selon votre secteur, vos enjeux sont different. Nous avons des reponses adaptees.
          </p>

          <div className="space-y-0">
            {acteurs.map((acteur, index) => (
              <Link 
                key={acteur.slug}
                href={acteur.href}
                className="group block py-8 border-b border-[#E5E5E5] last:border-b-0"
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <span className="text-xs text-[#666666] block mb-2">0{index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-serif text-black group-hover:text-[#00255D] transition-colors mb-2">
                      {acteur.title}
                    </h2>
                    <p className="text-[#666666]">{acteur.description}</p>
                  </div>
                  <span className="text-2xl text-[#666666] group-hover:text-[#00255D] transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
