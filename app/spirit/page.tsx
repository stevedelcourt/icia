'use client'

import { useEffect, useState } from 'react'

export default function SpiritPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <iframe 
      src="/spirit/index.html" 
      className="fixed inset-0 w-full h-full border-0"
      title="The Spirit WebGL"
    />
  )
}
