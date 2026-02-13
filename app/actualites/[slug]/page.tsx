import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

const articles = [
  {
    slug: 'lancement-icia',
    title: 'Lancement officiel de l\'Institut Collectif de l\'IA',
    excerpt: 'L\'ICIA ouvre ses portes à Marseille avec pour mission de démocratiser l\'accès à l\'intelligence artificielle pour tous les publics.',
    content: `L'Institut Collectif de l'IA (ICIA) a officiellement lance ses activites a Marseille, marquant le debut d'une nouvelle aventure pour la democratisation de l'intelligence artificielle en France.

Fonde sur une vision humaniste et collective, l'ICIA se donne pour mission de rendre l'IA accessible, comprehensible et maitrisable par tous. Citoyen.ne.s, entreprises, ecoles, createurs et creatrices, pouvoirs publics : chacun peut beneficier des avancees de l'IA dans une demarche eclairee et securisee.

Le flagship marseillais, situe au coeur de la ville, accueillera des maintenant des ateliers, des formations et des evenements pour tous les publics. Un lieu de rencontre, d'apprentissage et d'innovation ouvert sur la Mediterranee et le monde.

« L'IA ne doit pas etre confisquee par quelques acteurs. Elle doit etre pensee, partagee et transmise collectivement », declare l'equipe fondatrice.`,
    category: 'Actualité',
    date: '15 février 2025',
  },
  {
    slug: 'partenariat-education',
    title: 'Partenariat avec les universités de la région Sud',
    excerpt: 'L\'ICIA signe un accord avec les universités de Marseille pour proposer des formations IA aux étudiants.',
    content: `L'Institut Collectif de l'IA est heureux d'annoncer un partenariat majeur avec les universités de la région Sud-Provence-Alpes-Côte d'Azur.

Ce partenariat permettra aux étudiants de bénéficier de contenus pédagogiques spécialisés en intelligence artificielle, développés en collaboration avec les équipes pédagogiques universitaires. Les formations couvriront les fondamentaux de l'IA, les enjeux éthiques et les applications sectorielles.

« Former les générations futures à l'IA est essentiel pour garantir une appropriation collective et responsable de ces technologies », explique le directeur pédagogique de l'ICIA.`,
    category: 'Partenariats',
    date: '10 février 2025',
  },
  {
    slug: 'think-tank-premier-rapport',
    title: 'Le Think Tank publie son premier rapport sur l\'IA et l\'emploi',
    excerpt: 'Une analyse approfondie des impacts de l\'intelligence artificielle sur le marché du travail français.',
    content: `Le Think Tank de l'ICIA publie son premier rapport thématique : « Intelligence artificielle et transformation du marché du travail ».

Cette étude exhaustive analyse les impacts de l'IA sur différents secteurs économiques français, les métiers en transformation, les nouvelles compétences recherchées et les politiques publiques à mettre en place.

Le rapport présente des recommandations concrètes pour accompagner les salariés, les entreprises et les pouvoirs publics dans cette transition.`,
    category: 'Think Tank',
    date: '5 février 2025',
  },
  {
    slug: 'atelier-citoyen',
    title: 'Ateliers gratuits pour les citoyens : venez découvrir l\'IA',
    excerpt: 'L\'ICIA propose des ateliers ludiques et accessibles pour comprendre l\'intelligence artificielle.',
    content: `L'Institut Collectif de l'IA propose une série d'ateliers gratuits ouverts à tous les citoyens.

Ces ateliers ludiques et accessibles permettent de démystifier l'intelligence artificielle, de comprendre ses applications quotidiennes et d'apprendre les bonnes pratiques pour une utilisation sécurisée.

Les sessions sont animées par des experts et adaptées à tous les niveaux, sans prérequis techniques.`,
    category: 'Formations',
    date: '1 février 2025',
  },
  {
    slug: 'inauguration-lieu',
    title: 'Inauguration du lieu flagship à Marseille',
    excerpt: 'Le tout nouveau space de l\'ICIA ouvre ses portes au public marseillais.',
    content: `C'est un grand jour pour l'ICIA : notre lieu flagship à Marseille accueille ses premiers visiteurs.

Cet espace de 400m² comprend des salles de formation, un laboratoire IA, un espace créatif et une zone d'accueil ouverte à tous.`,
    category: 'Événements',
    date: '20 janvier 2025',
  },
]

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug) || articles[0]
  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main id="main-content">
        <Section spacing="large">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <FadeIn>
                <header className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-accent font-medium">{article.category}</span>
                    <span className="text-sm text-text-muted">{article.date}</span>
                  </div>
                  <h1 className="font-serif text-h1 mb-6">{article.title}</h1>
                  <p className="text-body text-text-muted text-lg">{article.excerpt}</p>
                </header>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                {/* Article Image */}
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-accent/20 to-border mb-8 flex items-center justify-center">
                  <span className="text-text-muted">Image de l'article</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-body text-text-muted mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                {/* Navigation */}
                <nav className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between gap-4">
                    {prevArticle ? (
                      <Link href={`/actualites/${prevArticle.slug}`} className="group flex-1">
                        <span className="text-sm text-text-muted">← Article precedent</span>
                        <p className="font-medium text-sm group-hover:text-accent transition-colors mt-1 line-clamp-1">{prevArticle.title}</p>
                      </Link>
                    ) : <div className="flex-1" />}
                    
                    <span className="text-sm text-text-muted whitespace-nowrap">
                      {currentIndex + 1} / {articles.length}
                    </span>
                    
                    {nextArticle ? (
                      <Link href={`/actualites/${nextArticle.slug}`} className="group text-right flex-1">
                        <span className="text-sm text-text-muted">Article suivant →</span>
                        <p className="font-medium text-sm group-hover:text-accent transition-colors mt-1 line-clamp-1">{nextArticle.title}</p>
                      </Link>
                    ) : <div className="flex-1" />}
                  </div>
                </nav>
              </FadeIn>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-32">
                  <h3 className="font-serif text-base mb-4">Derniers articles</h3>
                  <div className="space-y-4">
                    {articles.map((item) => (
                      <Link 
                        key={item.slug} 
                        href={`/actualites/${item.slug}`}
                        className={`block group ${item.slug === slug ? 'opacity-50 pointer-events-none' : ''}`}
                      >
                        <span className="text-xs text-text-muted">{item.date}</span>
                        <h4 className="font-medium text-xs group-hover:text-accent transition-colors leading-tight">
                          {item.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
