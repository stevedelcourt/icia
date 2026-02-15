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
  const style = "w-16 h-16 stroke-black"
  switch (name) {
    case 'person':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={style} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="18" r="10" />
          <path d="M20 58c0-8 5-12 12-12s12 4 12 12" />
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={style} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="16" width="44" height="40" rx="2" />
          <path d="M10 28h44" />
          <path d="M24 16v-6M40 16v-6" />
          <path d="M24 40h6v6h-6zM34 40h6v6h-6z" />
        </svg>
      )
    case 'school':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={style} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6L6 22v24c0 6 10 12 26 12s26-6 26-12V22L32 6z" />
          <path d="M24 38h16M20 46h24" />
        </svg>
      )
    case 'creative':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={style} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 8c-8 0-16 8-16 20 0 10 6 16 16 20 10-4 16-10 16-20 0-12-8-20-16-20z" />
          <circle cx="32" cy="32" r="8" />
          <path d="M32 24v-6M24 32l-6-2M40 32l6-2M32 40v6" />
        </svg>
      )
    case 'government':
      return (
        <svg viewBox="0 0 64 64" fill="none" className={style} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 20l24-12 24 12v36c0 4-8 8-24 8s-24-4-24-8V20z" />
          <path d="M20 56h24M16 48h32" />
          <path d="M26 36h12v12h-12z" />
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
