import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const piliers = [
  { title: 'Indépendance technologique', desc: 'Aucune affiliation à un fournisseur d\'IA. Recommandations neutres.' },
  { title: 'Conseil stratégique pur', desc: 'Stratégie IA, gouvernance, change management, conformité AI Act.' },
  { title: 'Tiers de confiance', desc: 'Interlocuteur unique. Tous les livrables portent notre marque.' },
]

const offres = [
  { num: '01', title: 'Diagnostic IA & AI Act', desc: 'En 4 à 6 semaines, vous savez où vous en êtes.', prix: '9 500 EUR HT', href: '/offres/diagnostic' },
  { num: '02', title: 'Formations & Acculturation', desc: 'Vos équipes utilisent l\'IA dans un cadre sécurisé.', prix: '12 000 - 18 000 EUR HT', href: '/offres/formations' },
  { num: '03', title: 'Transformation IA', desc: 'De l\'expérimentation à la pratique quotidienne.', prix: '50 000 - 70 000 EUR HT', href: '/offres/transformation' },
  { num: '04', title: 'Partenaire IA Mensuel', desc: 'Un partenaire pour décider sur l\'IA, en continu.', prix: '1 000 - 3 000 EUR HT/mois', href: '/offres/partenaire' },
]

const acteurs = [
  { title: 'Entreprises', desc: 'PME / ETI face à l\'IA. Diagnostic, transformation, formation.', href: '/acteurs/entreprises' },
  { title: 'Pouvoirs publics', desc: 'Service public, inclusion, pilotage territorial.', href: '/acteurs/pouvoirs-publics' },
  { title: 'Education', desc: 'Ecoles, CFA, universités. Former les formateurs de demain.', href: '/acteurs/education' },
  { title: 'Secteurs créatifs', desc: 'Musique, cinéma, design. Créer avec l\'IA sans perdre son identité.', href: '/acteurs/secteurs-creatifs' },
  { title: 'Grand public', desc: 'Acculturation, sécurité, emploi. Réduire la fracture IA.', href: '/acteurs/citoyens' },
]

const partners = [
  '/partners/tertium-invest.svg',
  '/partners/air-france.svg',
  '/partners/ionis-education-group.svg',
  '/partners/clarins.svg',
  '/partners/airwell.svg',
  '/partners/mk2-.svg',
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-widest text-[#666666] uppercase mb-6">Institut de l'IA · Campus Cyber.AI, Marseille</p>
                <h1 className="text-5xl md:text-6xl font-serif text-black leading-[1.1] mb-8">
                  Nous ne vendons<br />
                  pas de l'IA.
                </h1>
                <p className="text-xl text-[#666666] mb-8 max-w-xl leading-relaxed">
                  Nous aidons à en faire un avantage pour tous.
                </p>
                <p className="text-sm text-[#666666] mb-8 max-w-lg leading-relaxed">
                  L'IA transforme toutes les organisations. Il manque un partenaire de confiance, capable de dire : quoi faire, dans quel ordre, avec quel risque.
                </p>
                <p className="text-sm text-black italic mb-10 max-w-lg leading-relaxed">
                  "Quand vous faites construire une maison, vous ne choisissez pas votre architecte parce qu'il sait poser des parpaings. Vous le choisissez parce qu'il comprend ce que vous voulez construire, et qu'il ne vous lâche pas avant que ce soit parfait."
                </p>
                <Link href="/contact" className="inline-block px-8 py-4 text-white bg-black hover:bg-black/80 transition-colors">
                  Nous contacter
                </Link>
              </div>
              <div>
                <img src="/images/podium.webp" alt="Institut de l'IA" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-widest text-[#666666] uppercase mb-8">Nos 3 piliers</p>
            <div className="grid md:grid-cols-3 gap-8">
              {piliers.map((p) => (
                <div key={p.title} className="p-8 border border-[#E5E5E5]">
                  <h3 className="text-2xl font-serif text-[#00255D] mb-3">{p.title}</h3>
                  <p className="text-[#666666]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs tracking-widest text-[#666666] uppercase">Offres pour entreprises</p>
              <Link href="/offres" className="text-sm text-[#00255D] hover:underline">Toutes les offres →</Link>
            </div>
            <div className="space-y-0">
              {offres.map((offre) => (
                <div key={offre.num} className="flex justify-between items-start py-6 border-b border-[#E5E5E5] last:border-b-0">
                  <div className="flex items-start gap-8">
                    <span className="text-xs text-[#666666] pt-1 w-6">{offre.num}</span>
                    <div>
                      <h3 className="text-xl font-serif text-black mb-1">{offre.title}</h3>
                      <p className="text-sm text-[#666666]">{offre.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-black">{offre.prix}</p>
                    <Link href={offre.href} className="text-xs text-[#00255D] hover:underline">En savoir plus</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs tracking-widest text-[#666666] uppercase">Par secteur</p>
              <Link href="/acteurs" className="text-sm text-[#00255D] hover:underline">Tous les acteurs →</Link>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {acteurs.map((acteur) => (
                <Link key={acteur.title} href={acteur.href} className="group p-6 border border-[#E5E5E5] hover:border-[#00255D] transition-colors">
                  <h3 className="text-base font-medium text-black group-hover:text-[#00255D] mb-2">{acteur.title}</h3>
                  <p className="text-xs text-[#666666]">{acteur.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-widest text-[#666666] uppercase mb-8">Ils nous font confiance</p>
            <div className="flex flex-wrap gap-12 items-center">
              {partners.map((src, i) => (
                <img key={i} src={src} alt={`Partenaire ${i + 1}`} className="h-10 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              ))}
            </div>
          </div>
        </section>

        <section className="h-[30px] bg-[#F97316] flex items-center justify-center">
          <p className="text-white text-sm"><span className="font-medium">AI Act en vigueur en août 2026</span> · <span className="opacity-80">Obligations réglementaires, classification des systèmes IA</span></p>
        </section>
      </main>
      <Footer />
    </>
  )
}
