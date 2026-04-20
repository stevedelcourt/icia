'use client'

import { useState, useEffect } from 'react'

export default function ScrollGradient() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const maxScroll = 2000
  const progress = Math.min(scrollY / maxScroll, 1)
  
  const r = Math.round(189 + (235 - 189) * progress)
  const g = Math.round(245 + (235 - 245) * progress)
  const b = Math.round(171 + (240 - 171) * progress)
  
  const bgColor = `rgb(${r}, ${g}, ${b})`

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: bgColor, transition: 'background 0.3s ease-out' }}
    />
  )
}
