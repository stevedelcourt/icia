import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const NOTION_KEY = process.env.NOTION_KEY
const NOTION_DB = process.env.NOTION_DB || '306d314b3ef080d58c4ec5bd85683d73'

async function getArticles() {
  if (!NOTION_KEY) return []
  
  const notion = {
    baseUrl: 'https://api.notion.com/v1',
    headers: {
      'Authorization': `Bearer ${NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    }
  }

  try {
    const query: any = { 
      page_size: 100,
      sorts: [{ property: 'Date', direction: 'descending' }]
    }
    
    const response = await fetch(`${notion.baseUrl}/databases/${NOTION_DB}/query`, {
      method: 'POST',
      headers: notion.headers,
      body: JSON.stringify(query),
      next: { revalidate: 60 }
    })

    if (!response.ok) return []
    
    const data = await response.json()
    if (!data.results) return []

    const getImageUrl = (prop: any) => {
      if (!prop) return ''
      if (prop.url) return prop.url
      if (prop.files && prop.files.length > 0) {
        const file = prop.files[0]
        if (file.file) return file.file.url
        if (file.external) return file.external.url
      }
      return ''
    }

    return data.results.map((page: any) => {
      const props = page.properties
      return {
        slug: props.Slug?.rich_text?.[0]?.plain_text || '',
        title: props.Titre?.rich_text?.[0]?.plain_text || '',
        excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || '',
        category: props.Category?.select?.name || '',
        date: props.Date?.date?.start || '',
        image: getImageUrl(props.Image) || getImageUrl(props.Media) || '',
        content: props.Article?.title?.[0]?.plain_text || ''
      }
    }).filter((a: any) => a.slug)
  } catch {
    return []
  }
}

export default async function ActualitesPage() {
  const validArticles = await getArticles()
  
  const displayArticles = validArticles
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
                <article className="border border-border bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all">
                  {latestArticle.image && (
                    <img src={latestArticle.image} alt="" className="w-full aspect-[16/9] object-cover" />
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-accent font-medium">{latestArticle.category}</span>
                      <span className="text-xs text-text-muted">{latestArticle.date}</span>
                    </div>
                    <h2 className="font-serif text-h1 mb-4 text-text group-hover:text-text transition-colors">
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
              {otherArticles.map((article: any) => (
                <StaggerItem key={article.slug}>
                  <Link href={`/actualites/${article.slug}`} className="block group">
                    <article className="h-full border border-border bg-white rounded-xl p-6 hover:bg-ivory-dark hover:shadow-sm transition-all">
                      {article.image && (
                        <img src={article.image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />
                      )}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-accent font-medium">{article.category}</span>
                        <span className="text-xs text-text-muted">{article.date}</span>
                      </div>
                      <h2 className="font-serif text-h3 mb-3 text-text group-hover:text-text transition-colors">
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
