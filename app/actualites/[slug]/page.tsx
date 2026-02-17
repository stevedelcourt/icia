import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'

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

    const getRichText = (prop: any) => {
      if (!prop) return ''
      if (prop.rich_text && prop.rich_text.length > 0) {
        return prop.rich_text.map((t: any) => t.plain_text).join('')
      }
      if (prop.title && prop.title.length > 0) {
        return prop.title.map((t: any) => t.plain_text).join('')
      }
      return ''
    }

    const getPageContent = async (pageId: string) => {
      try {
        const contentRes = await fetch(`${notion.baseUrl}/blocks/${pageId}/children`, {
          headers: notion.headers,
          next: { revalidate: 60 }
        })
        if (!contentRes.ok) return ''
        const contentData = await contentRes.json()
        if (!contentData.results) return ''
        
        return contentData.results.map((block: any) => {
          if (block.type === 'paragraph') {
            return block.paragraph.rich_text.map((t: any) => t.plain_text).join('')
          }
          if (block.type === 'heading_1') {
            return '# ' + block.heading_1.rich_text.map((t: any) => t.plain_text).join('')
          }
          if (block.type === 'heading_2') {
            return '## ' + block.heading_2.rich_text.map((t: any) => t.plain_text).join('')
          }
          if (block.type === 'heading_3') {
            return '### ' + block.heading_3.rich_text.map((t: any) => t.plain_text).join('')
          }
          if (block.type === 'bulleted_list_item') {
            return '• ' + block.bulleted_list_item.rich_text.map((t: any) => t.plain_text).join('')
          }
          if (block.type === 'numbered_list_item') {
            return '1. ' + block.numbered_list_item.rich_text.map((t: any) => t.plain_text).join('')
          }
          return ''
        }).filter(Boolean).join('\n\n')
      } catch {
        return ''
      }
    }

    const articles = await Promise.all(data.results.map(async (page: any) => {
      const props = page.properties
      const content = await getPageContent(page.id)
      return {
        slug: getRichText(props.Slug),
        title: getRichText(props.Titre),
        excerpt: getRichText(props.Excerpt),
        category: props.Category?.select?.name || '',
        date: props.Date?.date?.start || '',
        image: getImageUrl(props.Image) || getImageUrl(props.Media) || '',
        articleField: getRichText(props.Article),
        content: content
      }
    }))

    return articles.filter((a: any) => a.slug)
  } catch {
    return []
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
  const allArticles = await getArticles()
  
  const sortedArticles = allArticles
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  const article = sortedArticles.find((a: any) => a.slug === slug)
  
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
              
              <h1 className="font-serif text-h1 mb-6">{article.title}</h1>
              
              <div className="prose max-w-none mb-12">
                <p className="text-text-muted text-lg leading-relaxed mb-6">{article.excerpt}</p>
                {article.articleField && (
                  <div className="whitespace-pre-wrap text-text-muted">{article.articleField}</div>
                )}
                {article.content && (
                  <div className="whitespace-pre-wrap text-text-muted mt-6">{article.content}</div>
                )}
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
