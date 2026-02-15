import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const publics = [
  { 
    title: 'Citoyens', 
    subtitle: 'Grand public',
    description: 'Acculturation a l\'IA, securite, parcours vers l\'emploi et la reconversion.',
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
    title: 'Ecoles et Universites', 
    subtitle: 'Education',
    description: 'Bibliotheque pedagogique, formation des formateurs, certifications.',
    href: '/accompagnements/education',
    icon: 'school',
  },
  { 
    title: 'Secteurs creatifs', 
    subtitle: 'Industries creatives',
    description: 'Ateliers creatifs, securite juridique, laboratoire d\'innovation.',
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
  switch (name) {
    case 'person':
      return (
        <svg viewBox="0 0 100 100" className={baseStyle}>
          <circle cx="50" cy="30" r="20" fill="#F4A261" stroke="#264653" strokeWidth="3"/>
          <path d="M20 90c0-20 15-30 30-30s30 10 30 30" fill="#F4A261" stroke="#264653" strokeWidth="3"/>
          <circle cx="35" cy="25" r="4" fill="#264653"/>
          <circle cx="65" cy="25" r="4" fill="#264653"/>
          <path d="M40 38 Q50 45 60 38" stroke="#264653" strokeWidth="2" fill="none"/>
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 100 100" className={baseStyle}>
          <rect x="20" y="25" width="60" height="65" rx="3" fill="#2A9D8F" stroke="#264653" strokeWidth="3"/>
          <rect x="25" y="35" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="42" y="35" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="59" y="35" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="25" y="55" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="42" y="55" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="59" y="55" width="15" height="12" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <path d="M15 25 L50 10 L85 25" fill="#E76F51" stroke="#264653" strokeWidth="3"/>
        </svg>
      )
    case 'school':
      return (
        <svg viewBox="0 0 100 100" className={baseStyle}>
          <path d="M50 15 L15 35 L15 80 L85 80 L85 35 Z" fill="#E9C46A" stroke="#264653" strokeWidth="3"/>
          <rect x="30" y="50" width="40" height="30" fill="#F4A261" stroke="#264653" strokeWidth="2"/>
          <circle cx="50" cy="35" r="10" fill="#E76F51" stroke="#264653" strokeWidth="2"/>
          <path d="M20 45 L30 35 M80 45 L70 35" stroke="#264653" strokeWidth="2"/>
        </svg>
      )
    case 'creative':
      return (
        <svg viewBox="0 0 100 100" className={baseStyle}>
          <circle cx="50" cy="50" r="30" fill="#E9C46A" stroke="#264653" strokeWidth="3"/>
          <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="#E76F51" stroke="#264653" strokeWidth="2"/>
          <circle cx="50" cy="50" r="8" fill="#2A9D8F" stroke="#264653" strokeWidth="2"/>
          <circle cx="35" cy="40" r="5" fill="#F4A261"/>
          <circle cx="65" cy="40" r="5" fill="#F4A261"/>
          <path d="M40 60 L50 70 L60 60" stroke="#264653" strokeWidth="2" fill="none"/>
        </svg>
      )
    case 'government':
      return (
        <svg viewBox="0 0 100 100" className={baseStyle}>
          <rect x="20" y="30" width="60" height="55" rx="2" fill="#264653" stroke="#264653" strokeWidth="3"/>
          <path d="M20 30 L50 10 L80 30" fill="#2A9D8F" stroke="#264653" strokeWidth="3"/>
          <rect x="35" y="45" width="30" height="20" fill="#E9C46A" stroke="#264653" strokeWidth="2"/>
          <rect x="30" y="75" width="8" height="8" fill="#F4A261"/>
          <rect x="46" y="75" width="8" height="8" fill="#F4A261"/>
          <rect x="62" y="75" width="8" height="8" fill="#F4A261"/>
        </svg>
      )
    default:
      return null
  }
}

function ImagePlaceholder({ icon }: { icon: string }) {
  return (
    <div 
      className="w-full aspect-[1/1] flex items-center justify-center bg-white"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publics.map((item) => (
                <StaggerItem key={item.title}>
                  <Link href={item.href} className="block group">
                    <article className="h-full border border-gray-200 bg-white rounded-xl overflow-hidden hover:bg-[#e3dacc] hover:shadow-sm transition-all">
                      <ImagePlaceholder icon={item.icon} />
                      <div className="p-6">
                        <p className="text-sm text-black mb-2 font-medium">{item.subtitle}</p>
                        <h2 className="font-serif text-h3 mb-3 group-hover:text-black transition-colors">{item.title}</h2>
                        <p className="text-text-muted text-sm">{item.description}</p>
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
