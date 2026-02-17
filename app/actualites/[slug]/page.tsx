import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

const validArticles = [
  { slug: 'lancement-icia', title: 'Lancement officiel de l\'Institut Collectif de l\'IA', excerpt: 'L\'ICIA ouvre ses portes à Marseille avec pour mission de rendre l\'IA accessible à tous.', category: 'Actualite', date: '2025-01-15', image: '', content: 'Lancement de l\'Institut Collectif de l\'IA à Marseille.\n\nL\'ICIA a officiellement ouvert ses portes ce janvier 2025. Cette initiative unique en France vise à rendre l\'intelligence artificielle accessible à tous les citoyens, entreprises et institutions.\n\n\"L\'IA ne doit pas être confisquée par quelques-uns\" est le mantra de l\'Institut qui propose des parcours adaptés à chaque public.' },
  { slug: 'partenariat-universites', title: 'Partenariat avec les universités de la région', excerpt: 'Signature d\'accords avec les universités Aix-Marseille pour des programmes de formation.', category: 'Partenariat', date: '2025-01-20', image: '', content: 'L\'ICIA signe un partenariat stratégique avec les universités de la région Aix-Marseille.\n\nCe partenariat permettra aux étudiants de bénéficier de formations certifiantes en IA, d\'accès au laboratoire et aux ressources pédagogiques de l\'Institut.\n\nLes premiers cursus seront lancés dès la rentrée 2025.' },
  { slug: 'ecosysteme-marseille', title: 'L\'écosystème IA de Marseille se structure', excerpt: 'Retour sur les initiatives qui font de Marseille un hub de l\'intelligence artificielle.', category: 'Analyse', date: '2025-02-01', image: '', content: 'Marseille devient un pôle majeur de l\'intelligence artificielle en France.\n\nAvec l\'arrivée de l\'ICIA et le soutien de la Région, la ville phocéenne attire startups, chercheurs et investisseurs du secteur.\n\nCe développement s\'inscrit dans une stratégie régionale ambitieuse de transformation numérique.' },
  { slug: 'think-tank-rapport', title: 'Publication du premier rapport du Think Tank', excerpt: 'Le groupe de réflexion de l\'ICIA publie ses recommandations pour une IA éthique.', category: 'Publication', date: '2025-02-10', image: '', content: 'Le Think Tank de l\'ICIA publie son rapport inaugural sur l\'IA responsable.\n\nCe document de 120 pages présente les recommandations du groupe d\'experts pour une intelligence artificielle éthique, souveraine et au service du bien commun.\n\nLes principales pistes : gouvernance multipartite, transparence des algorithmes, formation massive aux compétences IA.' },
]

export async function generateStaticParams() {
  return validArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = validArticles.find((a) => a.slug === slug)
  
  const sortedArticles = validArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const currentIndex = sortedArticles.findIndex((a) => a.slug === slug)
  
  const prevArticle = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null
  const nextArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null

  if (!article) {
    return (
      <>
        <Header />
        <main id="main-content">
          <Section className="pt-40 pb-24">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-serif text-h1 mb-6">Article non trouve</h1>
              <p className="text-text-muted mb-8">Cet article n'existe pas.</p>
              <Link href="/actualites" className="text-accent hover:text-accent-hover underline">
                Retour aux actualites
              </Link>
            </div>
          </Section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <FadeIn>
            <article className="max-w-3xl mx-auto">
              <Link href="/actualites" className="text-sm text-text-muted hover:text-accent mb-6 inline-block">
                ← Retour aux actualites
              </Link>
              
              {article.image && (
                <img src={article.image} alt={article.title} className="w-full aspect-square md:aspect-video lg:aspect-[16/9] object-cover rounded-lg mb-8" />
              )}
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-accent font-medium">{article.category}</span>
                <span className="text-sm text-text-muted">{article.date}</span>
              </div>
              
              <h1 className="font-serif text-h1 mb-6">{article.title}</h1>
              
              <div className="prose max-w-none mb-12">
                <p className="text-text-muted text-lg leading-relaxed mb-6">{article.excerpt}</p>
                <div className="whitespace-pre-wrap text-text-muted">{article.content}</div>
              </div>

              <div className="flex justify-between border-t border-border pt-8">
                {prevArticle ? (
                  <Link href={`/actualites/${prevArticle.slug}`} className="text-left">
                    <span className="text-sm text-text-muted">Article precedent</span>
                    <p className="text-accent hover:underline">{prevArticle.title}</p>
                  </Link>
                ) : <div />}
                
                {nextArticle ? (
                  <Link href={`/actualites/${nextArticle.slug}`} className="text-right">
                    <span className="text-sm text-text-muted">Article suivant</span>
                    <p className="text-accent hover:underline">{nextArticle.title}</p>
                  </Link>
                ) : <div />}
              </div>
            </article>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
