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
  },
  { 
    title: 'Entreprises', 
    subtitle: 'Secteur prive',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation.',
    href: '/accompagnements/entreprises',
  },
  { 
    title: 'Ecoles et Universites', 
    subtitle: 'Education',
    description: 'Bibliotheque pedagogique, formation des formateurs, certifications.',
    href: '/accompagnements/education',
  },
  { 
    title: 'Secteurs creatifs', 
    subtitle: 'Industries creatives',
    description: 'Ateliers creatifs, securite juridique, laboratoire d\'innovation.',
    href: '/accompagnements/secteurs-creatifs',
  },
  { 
    title: 'Pouvoirs publics', 
    subtitle: 'Secteur public',
    description: 'IA inclusive, transformation des services publics, observatoire territorial.',
    href: '/accompagnements/pouvoirs-publics',
  },
]

function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div 
      className="w-full aspect-[1/1] flex items-center justify-center bg-black"
    >
      <span className="text-white/60 text-sm font-medium">{title}</span>
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
                    <article className="h-full border border-gray-200 bg-white rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-sm transition-all">
                      <ImagePlaceholder title={item.title} />
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
