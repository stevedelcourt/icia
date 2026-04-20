'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollGradient() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const maxScroll = 2000
  const progress = Math.min(scrollY / maxScroll, 1)
  
  const startR = isHomePage ? 189 : 250
  const startG = isHomePage ? 245 : 250
  const startB = isHomePage ? 171 : 250
  
  const r = Math.round(startR + (235 - startR) * progress)
  const g = Math.round(startG + (235 - startG) * progress)
  const b = Math.round(startB + (240 - startB) * progress)
  
  const bgColor = `rgb(${r}, ${g}, ${b})`

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: bgColor, transition: 'background 0.3s ease-out' }}
    />
  )
}
