import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const targets = [
  'PME / ETI',
  'Pouvoirs publics',
  'Ecoles / CFA',
  'Industries creatives',
  'Grand public',
]

export default function AccompagnementsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif text-[#00255D] mb-4">Accompagnements</h1>
          <p className="text-[#666666] mb-16">5 segments, des reponses adaptees.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {targets.map((target) => (
              <Link 
                key={target}
                href={`/accompagnements/${target.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`}
                className="p-6 border border-[#E5E5E5] rounded-lg hover:border-[#00255D] transition-colors"
              >
                <h2 className="font-medium text-[#00255D]">{target}</h2>
              </Link>
            ))}
          </div>

          <Link href="/offres" className="inline-block px-6 py-3 border border-[#E5E5E5] text-[#666666] rounded-full hover:border-[#00255D] hover:text-[#00255D] transition-colors">
            Voir nos offres
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
