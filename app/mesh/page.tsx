'use client'

import { useEffect, useRef } from 'react'

export default function MeshPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const THREE = (await import('three')).default
        
        const script1 = document.createElement('script')
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        script1.async = true
        document.body.appendChild(script1)

        script1.onload = () => {
          const script2 = document.createElement('script')
          script2.src = 'https://cdn.jsdelivr.net/npm/vanta@0.12.23/dist/vanta.net.min.js'
          script2.async = true
          document.body.appendChild(script2)

          script2.onload = () => {
            if (containerRef.current && (window as any).VANTA) {
              (window as any).VANTA.NET({
                el: containerRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color: 0xc5c5c5,
                backgroundColor: 0x241e2d,
                points: 20,
              })
            }
          }
        }
      }
    }

    loadVanta()

    return () => {
      const vanta = (window as any).vanta
      if (vanta) {
        vanta.destroy()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full flex items-center justify-center">
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          ICIA
        </h1>
        <p className="text-xl text-white/60 font-light tracking-widest uppercase">
          Institut Collectif de l'IA
        </p>
      </div>
    </div>
  )
}
