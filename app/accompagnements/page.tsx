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
    subtitle: 'Secteur prive',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation.',
    href: '/accompagnements/entreprises',
    icon: 'building',
  },
  { 
    title: 'Écoles et Universités', 
    subtitle: 'Education',
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

function Icon({ name }: { name: string }) {
  const baseStyle = "w-24 h-24"
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

function ImagePlaceholder({ icon }: { icon: string }) {
  return (
    <div 
      className="w-full aspect-[1/1] flex items-center justify-center bg-[#4A4A4A]"
    >
      <Icon name={icon} />
    </div>
  )
}

export default function AccompanimentsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section spacing="large">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-h1 mb-6">
                Accompagnements
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA propose des accompagnements adaptes a chaque public, 
                pour que chacun puisse comprendre, maitriser et beneficier de l'intelligence artificielle.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="pb-24" spacing="normal">
          <Stagger delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publics.map((item) => (
                <StaggerItem key={item.title}>
                  <Link href={item.href} className="block group">
                    <article className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                      <ImagePlaceholder icon={item.icon} />
                      <div className="p-6">
                        <p className="text-xs text-[#BF4D43] mb-2 font-semibold uppercase tracking-wide">{item.subtitle}</p>
                        <h2 className="font-serif text-h3 mb-3 group-hover:text-[#BF4D43] transition-colors">{item.title}</h2>
                        <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>
      </main>
      <Footer />
    </>
  )
}
