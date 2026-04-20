import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const pillars = [
  'Indépendance technologique',
  'Conseil stratégique pur',
  'Tiers de confiance',
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-6">
            Nous ne vendons pas de l'IA.<br />
            Nous aidons a en faire un avantage pour tous.
          </h1>
          
          <p className="text-[#666666] mb-12">
            L'Institut de l'IA est porte par Mentivis, cabinet de conseil en transformation strategique.
            Notre role : aider les organisations a comprendre, maitriser et deployer l'intelligence artificielle
            avec methode, independance et responsabilite.
          </p>
          
          <blockquote className="border-l-4 border-[#00255D] pl-6 mb-16">
            <p className="text-lg text-[#00255D] italic mb-4">
              "Quand vous faites construire une maison, vous ne choisissez pas votre architecte parce qu'il sait poser des parpaings. Vous le choisissez parce qu'il comprend ce que vous voulez construire, et qu'il ne vous lâche pas avant que ce soit parfait."
            </p>
            <p className="text-[#D92A1C] font-medium">
              C'est exactement ce que nous faisons avec l'IA.
            </p>
          </blockquote>
          
          <h2 className="text-xl font-medium text-[#00255D] mb-8">Nos 3 piliers</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar) => (
              <div key={pillar} className="p-6 border border-[#E5E5E5] rounded-lg">
                <h3 className="font-medium text-[#00255D]">{pillar}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-[#666666] mb-12">
            Institut de l'IA - Campus Cyber.AI, Marseille
          </p>
          
          <Link href="/contact" className="inline-block px-6 py-3 bg-[#00255D] text-white rounded-full hover:bg-[#001A3A] transition-colors">
            Planifier un échange
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
