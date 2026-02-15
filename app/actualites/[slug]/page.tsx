import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

const NOTION_KEY = process.env.NOTION_KEY || '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'
const NOTION_DB = process.env.NOTION_DB || '306d314b3ef080d58c4ec5bd85683d73'

async function getArticles() {
  const notion = {
    baseUrl: 'https://api.notion.com/v1',
    headers: {
      'Authorization': `Bearer ${NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    }
  }

  try {
    const response = await fetch(`${notion.baseUrl}/databases/${NOTION_DB}/query`, {
      method: 'POST',
      headers: notion.headers,
      body: JSON.stringify({ page_size: 100 }),
      cache: 'no-store'
    })

    const data = await response.json()
    
    if (!data.results || data.results.length === 0) {
      return []
    }

    return data.results.map((page: any) => {
      const props = page.properties
      return {
        slug: props.Slug?.rich_text?.[0]?.plain_text || '',
        title: props.Titre?.rich_text?.[0]?.plain_text || '',
        date: props.Date?.date?.start || ''
      }
    }).filter((a: any) => a.slug)
  } catch (e) {
    return []
  }
}

async function getArticle(slug: string) {
  const notion = {
    baseUrl: 'https://api.notion.com/v1',
    headers: {
      'Authorization': `Bearer ${NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    }
  }

  try {
    const response = await fetch(`${notion.baseUrl}/databases/${NOTION_DB}/query`, {
      method: 'POST',
      headers: notion.headers,
      body: JSON.stringify({
        filter: {
          property: 'Slug',
          rich_text: { equals: slug }
        }
      }),
      cache: 'no-store'
    })

    const data = await response.json()
    
    if (!data.results || data.results.length === 0) {
      return null
    }

    const page = data.results[0]
    const props = page.properties

    return {
      slug: props.Slug?.rich_text?.[0]?.plain_text || '',
      title: props.Titre?.rich_text?.[0]?.plain_text || '',
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: props.Category?.select?.name || '',
      date: props.Date?.date?.start || '',
      image: props.Image?.url || '',
      content: props.Article?.title?.[0]?.plain_text || ''
    }
  } catch (e) {
    console.error('Error:', e)
    return null
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article: any) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  const allArticles = await getArticles()
  
  const sortedArticles = allArticles.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const currentIndex = sortedArticles.findIndex((a: any) => a.slug === slug)
  
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
                <h2 className="text-xl font-serif mb-4">Article</h2>
                <div className="whitespace-pre-wrap">{article.content}</div>
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
