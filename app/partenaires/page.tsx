import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import fs from 'fs'
import path from 'path'

const NOTION_KEY = process.env.NOTION_KEY
const NOTION_PARTNERS_DB = process.env.NOTION_PARTNERS_DB || '307d314b3ef0803aabeac0c66c1275fd'

export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateStaticParams() {
  return []
}

async function downloadImage(url: string, filename: string): Promise<string> {
  if (!url || !url.startsWith('http')) return ''
  
  const publicDir = path.join(process.cwd(), 'public', 'images', 'partners')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  const filepath = path.join(publicDir, filename)
  
  try {
    const response = await fetch(url)
    if (!response.ok) return ''
    const buffer = await response.arrayBuffer()
    fs.writeFileSync(filepath, Buffer.from(buffer))
    return `/images/partners/${filename}`
  } catch {
    return ''
  }
}

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

    const partners = await Promise.all(data.results.map(async (page: any) => {
      const props = page.properties
      const name = props.Company_name?.rich_text?.[0]?.plain_text || ''
      const logoUrl = props.Logo?.files?.[0]?.file?.url || props.Logo?.files?.[0]?.external?.url || ''
      
      let localLogo = ''
      if (logoUrl && name) {
        const ext = logoUrl.includes('.svg') ? 'svg' : 'png'
        const filename = `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.${ext}`
        localLogo = await downloadImage(logoUrl, filename)
      }

      return {
        name,
        description: props.Company_text?.rich_text?.[0]?.plain_text || '',
        logo: localLogo || logoUrl,
        website: props.Company_URL?.url || ''
      }
    }))

    return partners.filter((p: any) => p.name).sort((a: any, b: any) => a.name.localeCompare(b.name, 'fr'))
  } catch (e) {
    return []
  }
}

export default async function PartenairesPage() {
  const partners = await getPartners()

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12" style={{ backgroundColor: '#E3EAF7' }}>
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
        
        <Section className="pb-24" spacing="normal">
          <style jsx>{`
            .gradient-bg {
              background: linear-gradient(270deg, #00255D, #023D87, #00255D);
              background-size: 200% 200%;
              animation: gradientMove 8s ease infinite;
            }
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div className="gradient-bg">
            {partners.length > 0 ? (
            <Stagger>
              <div className="flex flex-col gap-6">
                {partners.map((partner: any, index: number) => (
                  <StaggerItem key={index}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-6 md:p-10 bg-black/30 hover:bg-black/40 transition-all backdrop-blur-sm">
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
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
