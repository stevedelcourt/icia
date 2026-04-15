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

const axes = [
  { title: 'Ateliers creatifs IA', description: "Des ateliers pratiques pour explorer les outils de generation IA dans votre discipline. Apprendre a utiliser l'IA comme outil d'amplification de votre creativite, pas de substitution." },
  { title: 'Securite juridique', description: "Comprendre et naviguer dans le cadre legal de l'IA creative : droit d'auteur, propriete intellectuelle, licences, et protection de vos creations face aux modeles generatifs." },
  { title: 'Laboratoire dinnovation', description: "Un espace dedie pour tester, prototyper et experimenter avec les derniers outils d'IA creative. Acces aux equipements et accompagnement technique pour vos projets creatifs." },
  { title: 'Monetisation', description: "Explorer les nouveaux modeles economiques offres par l'IA aux createurs : licences, collaborations humain-IA, et nouvelles formes de remuneration dans l'economie creative augmentee." },
]

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <nav className="flex gap-6 text-sm text-[#666666] mb-8">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/secteurs-creatifs' ? 'text-[#00255D] font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">Secteurs creatifs</h1>
              <p className="text-lg text-[#666666] mb-8">Creer avec l'IA, sans perdre son identite. L'IA genere disruption rapide sans cadre juridique clair. L'ICIA propose ateliers, securisation juridique et laboratoire pour experimenter sereinement.</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Secteurs creatifs" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16 mb-12">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-8">Secteurs couverts</h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="px-4 py-2 border border-[#E5E5E5] text-sm text-[#666666]">{sector}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {axes.map((axe) => (
              <div key={axe.title} className="p-8 border border-[#E5E5E5]">
                <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
                <p className="text-sm text-[#666666]">{axe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
