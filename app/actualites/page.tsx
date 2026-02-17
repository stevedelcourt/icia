import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const validArticles = [
  { slug: 'lancement-icia', title: 'Lancement officiel de l\'Institut Collectif de l\'IA', excerpt: 'L\'ICIA ouvre ses portes à Marseille avec pour mission de rendre l\'IA accessible à tous.', category: 'Actualite', date: '2025-01-15', image: '' },
  { slug: 'partenariat-universites', title: 'Partenariat avec les universités de la région', excerpt: 'Signature d\'accords avec les universités Aix-Marseille pour des programmes de formation.', category: 'Partenariat', date: '2025-01-20', image: '' },
  { slug: 'ecosysteme-marseille', title: 'L\'écosystème IA de Marseille se structure', excerpt: 'Retour sur les initiatives qui font de Marseille un hub de l\'intelligence artificielle.', category: 'Analyse', date: '2025-02-01', image: '' },
  { slug: 'think-tank-rapport', title: 'Publication du premier rapport du Think Tank', excerpt: 'Le groupe de réflexion de l\'ICIA publie ses recommandations pour une IA éthique.', category: 'Publication', date: '2025-02-10', image: '' },
]

export default async function ActualitesPage() {
  const displayArticles = validArticles
    .filter((a) => a.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const latestArticle = displayArticles[0]
  const otherArticles = displayArticles.slice(1)

  return (
    <>
      <Header />
      <main id="main-content">
        <Section spacing="large">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-serif text-h1 mb-6">
                Actualites
              </h1>
              <p className="text-body text-text-muted">
                Suivez l'actualite de l'ICIA : evenements, publications, partenariats et reflexions sur l'IA.
              </p>
            </div>
          </FadeIn>
        </Section>

        {latestArticle && (
          <Section className="pb-12">
            <FadeIn>
              <Link href={`/actualites/${latestArticle.slug}`} className="block group">
                <article className="border border-gray-200 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all">
                  {latestArticle.image && (
                    <img src={latestArticle.image} alt="" className="w-full aspect-[16/9] object-cover" />
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-accent font-medium">{latestArticle.category}</span>
                      <span className="text-xs text-text-muted">{latestArticle.date}</span>
                    </div>
                    <h2 className="font-serif text-h1 mb-4 group-hover:text-accent transition-colors">
                      {latestArticle.title}
                    </h2>
                    <p className="text-body text-text-muted max-w-2xl">
                      {latestArticle.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          </Section>
        )}
        
        <Section className="pb-24" spacing="normal">
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link href={`/actualites/${article.slug}`} className="block group">
                    <article className="h-full border border-gray-200 bg-white rounded-xl p-6 hover:bg-[#E5E4DF] hover:shadow-sm transition-all">
                      {article.image && (
                        <img src={article.image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                      )}
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
