'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Partner {
  name: string
  logo: string
  website: string
}

export function PartnerLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [partners, setPartners] = useState<Partner[] | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('/api/partners')
        if (res.ok) {
          const data = await res.json()
          if (data.length > 0) {
            setPartners(data)
            return
          }
        }
        const fallbackRes = await fetch('/partners.json')
        const fallbackData = await fallbackRes.json()
        setPartners(fallbackData)
      } catch (e) {
        try {
          const fallbackRes = await fetch('/partners.json')
          const fallbackData = await fallbackRes.json()
          setPartners(fallbackData)
        } catch {}
      }
    }
    fetchPartners()
  }, [])

  useEffect(() => {
    if (partners === null) {
      const timer = setTimeout(() => {
        fetch('/partners.json')
          .then(r => r.json())
          .then(setPartners)
          .catch(() => setPartners([]))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [partners])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  if (!partners || partners.length === 0) return null

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="bg-[#40403E] border-t border-border overflow-hidden py-8">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-container {
          animation: scroll 30s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .scroll-container {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="scroll-container flex gap-16 overflow-x-hidden cursor-grab active:cursor-grabbing px-8"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ width: '200%' }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 flex items-center" style={{ width: '300px' }}>
            {partner.website ? (
              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={140}
                  className="h-28 w-auto object-contain"
                  priority={index < partners.length}
                />
              </a>
            ) : (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={280}
                height={140}
                className="h-28 w-auto object-contain"
                priority={index < partners.length}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
