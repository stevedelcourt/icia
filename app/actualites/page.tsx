import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const articles = [
  {
    slug: 'lancement-icia',
    title: 'Lancement officiel de l\'Institut Collectif de l\'IA',
    excerpt: 'L\'ICIA ouvre ses portes à Marseille avec pour mission de démocratiser l\'accès à l\'intelligence artificielle pour tous les publics.',
    category: 'Actualité',
    date: '15 février 2025',
  },
  {
    slug: 'partenariat-education',
    title: 'Partenariat avec les universités de la région Sud',
    excerpt: 'L\'ICIA signe un accord avec les universités de Marseille pour proposer des formations IA aux étudiants.',
    category: 'Partenariats',
    date: '10 février 2025',
  },
  {
    slug: 'think-tank-premier-rapport',
    title: 'Le Think Tank publie son premier rapport sur l\'IA et l\'emploi',
    excerpt: 'Une analyse approfondie des impacts de l\'intelligence artificielle sur le marché du travail français.',
    category: 'Think Tank',
    date: '5 février 2025',
  },
  {
    slug: 'atelier-citoyen',
    title: 'Ateliers gratuits pour les citoyens : venez découvrir l\'IA',
    excerpt: 'L\'ICIA propose des ateliers ludiques et accessibles pour comprendre l\'intelligence artificielle.',
    category: 'Formations',
    date: '1 février 2025',
  },
  {
    slug: 'inauguration-lieu',
    title: 'Inauguration du lieu flagship à Marseille',
    excerpt: 'Le tout nouveau space de l\'ICIA ouvre ses portes au public marseillais.',
    category: 'Événements',
    date: '20 janvier 2025',
  },
]

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section spacing="large">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-serif text-h1 mb-6">
                Actualités
              </h1>
              <p className="text-body text-text-muted">
                Suivez l'actualité de l'ICIA : événements, publications, partenariats et réflexions sur l'IA.
              </p>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="pb-24" spacing="normal">
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link href={`/actualites/${article.slug}`} className="block group">
                    <article className="h-full border border-gray-200 bg-white rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-accent font-medium">{article.category}</span>
                        <span className="text-xs text-text-muted">{article.date}</span>
                      </div>
                      <h2 className="font-serif text-h3 mb-3 group-hover:text-accent transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-text-muted">
                        {article.excerpt}
                      </p>
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
