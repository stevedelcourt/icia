import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SIZES = [640, 750, 828, 1080, 1200, 1920]

function getOptimizedUrl(originalUrl: string, width: number): string {
  if (!originalUrl) return ''
  
  try {
    const url = new URL(originalUrl)
    
    // S3 signed URLs - return as-is but with width parameter
    if (url.hostname.includes('amazonaws.com')) {
      // For S3, we'll use a query param approach
      const separator = url.search ? '&' : '?'
      return `${originalUrl}${separator}w=${width}`
    }
    
    // For other URLs, return as-is
    return originalUrl
  } catch {
    return originalUrl
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const width = parseInt(searchParams.get('width') || '800')
  
  if (!url) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }
  
  const optimizedUrl = getOptimizedUrl(url, width)
  
  return NextResponse.redirect(optimizedUrl)
}
