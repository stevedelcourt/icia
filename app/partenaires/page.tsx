import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'

const NOTION_KEY = process.env.NOTION_KEY || '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'
const NOTION_PARTNERS_DB = process.env.NOTION_PARTNERS_DB

async function getPartners() {
  if (!NOTION_PARTNERS_DB) {
    return []
  }

  const notion = {
    baseUrl: 'https://api.notion.com/v1',
    headers: {
      'Authorization': `Bearer ${NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    }
  }

  try {
    const response = await fetch(`${notion.baseUrl}/databases/${NOTION_PARTNERS_DB}/query`, {
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
        name: props.Company_name?.rich_text?.[0]?.plain_text || '',
        description: props.Company_text?.rich_text?.[0]?.plain_text || '',
        logo: props.Logo?.files?.[0]?.file?.url || props.Logo?.files?.[0]?.external?.url || '',
        website: props.Company_URL?.url || ''
      }
    }).filter((p: any) => p.name)
  } catch (e) {
    console.error('Error fetching partners:', e)
    return []
  }
}

export default async function PartenairesPage() {
  const partners = await getPartners()

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12 bg-gray-100">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>Les partenaires de l'ICIA</TextReveal>
              </h1>
              <ScaleIn delay={0.3}>
                <p className="text-body text-text-muted">
                  L'ICIA remercie ses partenaires qui soutiennent notre mission : rendre l'intelligence 
                  artificielle accessible à tous. Ensemble, nous construisons un écosystème innovant 
                  et responsable.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="pb-24 bg-[#40403E]" spacing="normal">
          {partners.length > 0 ? (
            <Stagger>
              <div className="flex flex-col gap-6">
                {partners.map((partner: any, index: number) => (
                  <StaggerItem key={index}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-6 md:p-10 bg-[#2a2a2a] hover:bg-[#333333] transition-all">
                      {partner.logo && (
                        <div className="w-full md:w-[350px] flex-shrink-0 flex items-center justify-center md:justify-start">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 w-full">
                        <h2 className="font-serif text-[28px] md:text-[32px] mb-3 text-white">{partner.name}</h2>
                        {partner.description && (
                          <p className="text-base text-gray-300 mb-4">{partner.description}</p>
                        )}
                        {partner.website && (
                          <a 
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-900 text-sm font-medium rounded hover:bg-gray-200 transition-colors"
                          >
                            En savoir plus ➔
                          </a>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted">
                Les partenaires seront bientôt annoncés.
              </p>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}
