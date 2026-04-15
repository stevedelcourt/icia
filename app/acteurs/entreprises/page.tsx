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
  { num: '01', title: 'Diagnostic IA & AI Act', description: "Comprendre ou vous en etes. Cartographie des usages, analyse des risques reglementaires, feuille de route 12 mois.", href: '/offres/diagnostic' },
  { num: '02', title: 'Formations & Acculturation', description: "Vos equipes utilisent deja l'IA. On fait en sorte qu'elles le fassent bien, dans un cadre securise.", href: '/offres/formations' },
  { num: '03', title: 'Transformation IA', description: "Passer de l'experimentation a la pratique quotidienne. Gouvernance, competences, change management.", href: '/offres/transformation' },
  { num: '04', title: 'Partenaire IA Mensuel', description: "Un partenaire independant pour vous aider a decider sur l'IA, en continu. Veille, conseil, arbitrage.", href: '/offres/partenaire' },
]

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <nav className="flex gap-6 text-sm text-[#666666] mb-8">
              {navActeurs.map((item) => (
                <Link key={item.href} href={item.href} className={`hover:text-[#00255D] transition-colors ${item.href === '/acteurs/entreprises' ? 'text-[#00255D] font-medium' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <p className="text-xs tracking-widest text-[#666666] uppercase mb-4">Acteurs</p>
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">PME / ETI</h1>
              <p className="text-lg text-[#666666] mb-8">L'AI Act entre en vigueur en aout 2026. L'ICIA vous aide a comprendre vos obligations, structurer vos usages et transformer votre organisation avec un partenaire de confiance.</p>
              <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">Nous contacter</Link>
            </div>
            <div className="lg:pt-24">
              <img src="/images/podium.webp" alt="Entreprises" className="w-full" />
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-16">
            <h2 className="text-xs tracking-widest text-[#666666] uppercase mb-12">Notre approche</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {axes.map((axe) => (
                <div key={axe.num} className="p-8 border border-[#E5E5E5]">
                  <span className="text-xs text-[#666666] block mb-2">{axe.num}</span>
                  <h3 className="text-xl font-serif text-black mb-3">{axe.title}</h3>
                  <p className="text-sm text-[#666666] mb-4">{axe.description}</p>
                  <Link href={axe.href} className="text-sm text-[#00255D] hover:underline">En savoir plus</Link>
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
