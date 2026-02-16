import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const publics = [
  { 
    title: 'Citoyens', 
    subtitle: 'Grand public',
    description: 'Acculturation à l\'IA, sécurité, parcours vers l\'emploi et la reconversion.',
    href: '/accompagnements/citoyens',
    icon: 'person',
  },
  { 
    title: 'Entreprises', 
    subtitle: 'Secteur privé',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation.',
    href: '/accompagnements/entreprises',
    icon: 'building',
  },
  { 
    title: 'Écoles et Universités', 
    subtitle: 'Éducation',
    description: 'Bibliothèque pédagogique, formation des formateurs, certifications.',
    href: '/accompagnements/education',
    icon: 'school',
  },
  { 
    title: 'Secteurs créatifs', 
    subtitle: 'Industries créatives',
    description: 'Ateliers créatifs, sécurité juridique, laboratoire d\'innovation.',
    href: '/accompagnements/secteurs-creatifs',
    icon: 'creative',
  },
  { 
    title: 'Pouvoirs publics', 
    subtitle: 'Secteur public',
    description: 'IA inclusive, transformation des services publics, observatoire territorial.',
    href: '/accompagnements/pouvoirs-publics',
    icon: 'government',
  },
]

function Icon({ name, size = 'large' }: { name: string, size?: 'large' | 'small' }) {
  const baseStyle = size === 'large' ? "w-32 h-32" : "w-16 h-16"
  const iconColor = "#FFFFFF"
  
  switch (name) {
    case 'person':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={baseStyle} stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={baseStyle} stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h6" />
          <path d="M4 7v11" />
          <path d="M20 7v11" />
        </svg>
      )
    case 'school':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={baseStyle} stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    case 'creative':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={baseStyle} stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    case 'government':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={baseStyle} stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      )
    default:
      return null
  }
}

export default function AccompanimentsPage() {
  const featured = publics[0]
  const rest = publics.slice(1)

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="bg-gradient-to-b from-[#E5E4DF] to-white pt-24 pb-16">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Accompagnements
              </h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                L'ICIA propose des accompagnements adaptés à chaque public, 
                pour que chacun puisse comprendre, maîtriser et bénéficier de l'intelligence artificielle.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="-mt-8">
          <div className="grid lg:grid-cols-5 gap-6">
            <Link href={featured.href} className="block group lg:col-span-2">
              <article className="h-full bg-gradient-to-br from-[#264653] to-[#1a333d] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                <div className="aspect-[4/3] lg:aspect-[3/4] flex items-center justify-center">
                  <Icon name={featured.icon} size="large" />
                </div>
                <div className="p-8 text-white">
                  <p className="text-sm text-[#F4A261] mb-2 font-semibold uppercase tracking-wide">{featured.subtitle}</p>
                  <h2 className="font-serif text-3xl mb-4 group-hover:text-[#F4A261] transition-colors">{featured.title}</h2>
                  <p className="text-white/80 leading-relaxed">{featured.description}</p>
                </div>
              </article>
            </Link>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {rest.map((item) => (
                <Link key={item.title} href={item.href} className="block group">
                  <article className="h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group-hover:-translate-y-1">
                    <div className="aspect-square flex items-center justify-center bg-[#4A4A4A]">
                      <Icon name={item.icon} size="small" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-[#BF4D43] mb-2 font-semibold uppercase tracking-wide">{item.subtitle}</p>
                      <h3 className="font-serif text-xl mb-2 group-hover:text-[#BF4D43] transition-colors">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-20 bg-[#264653]">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Vous ne savez pas quel accompagnement vous correspond ?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                L'ICIA vous guide vers la solution la plus adaptée à vos besoins. 
                Notre équipe est disponible pour vous accompagner.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#BF4D43] text-white font-semibold rounded-lg hover:bg-[#a33d32] transition-colors">
                  Nous contacter
                </button>
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
