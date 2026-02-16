import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 60

const NOTION_KEY = process.env.NOTION_KEY
const NOTION_PARTNERS_DB = process.env.NOTION_PARTNERS_DB || '307d314b3ef0803aabeac0c66c1275fd'

export async function GET() {
  if (!NOTION_PARTNERS_DB) {
    return NextResponse.json([])
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
      next: { revalidate: 60 }
    })

    const data = await response.json()
    
    if (!data.results || data.results.length === 0) {
      return NextResponse.json([])
    }

    const partners = data.results.map((page: any) => {
      const props = page.properties
      return {
        name: props.Company_name?.rich_text?.[0]?.plain_text || '',
        logo: props.Logo?.files?.[0]?.file?.url || props.Logo?.files?.[0]?.external?.url || '',
        website: props.Company_URL?.url || ''
      }
    }).filter((p: any) => p.logo).sort((a: any, b: any) => a.name.localeCompare(b.name))

    return NextResponse.json(partners)
  } catch (e) {
    console.error('Error fetching partners:', e)
    return NextResponse.json([])
  }
}
