'use client'

import { useEffect, useRef, useState } from 'react'

const defaultSettings = {
  density: 96,
  speed: 0.5,
  curl: 0.3,
  color: '#c5c5c5',
  backgroundColor: '#241e2d',
  points: 20,
}

export default function SpiritPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [settings, setSettings] = useState(defaultSettings)
  const [isOpen, setIsOpen] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const init = async () => {
      const script1 = document.createElement('script')
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      script1.async = true
      document.head.appendChild(script1)

      await new Promise<void>((resolve) => {
        script1.onload = () => resolve()
      })

      const script2 = document.createElement('script')
      script2.src = 'https://cdn.jsdelivr.net/npm/vanta@0.12.23/dist/vanta.net.min.js'
      script2.async = true
      document.head.appendChild(script2)

      await new Promise<void>((resolve) => {
        script2.onload = () => resolve()
      })

      setLoaded(true)
    }

    init()
  }, [])

  useEffect(() => {
    if (!loaded || !containerRef.current || !(window as any).VANTA) return

    const effect = (window as any).VANTA.NET({
      el: containerRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      points: settings.points,
      maxDistance: 25,
      spacing: 80,
      color: parseInt(settings.color.replace('#', ''), 16),
      backgroundColor: parseInt(settings.backgroundColor.replace('#', ''), 16),
    })

    return () => {
      if (effect) effect.destroy()
    }
  }, [loaded, settings])

  const update = (key: string, value: number | string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const hexToInt = (hex: string) => parseInt(hex.replace('#', ''), 16)

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-2 tracking-tighter" style={{ textShadow: '0 0 60px rgba(255,255,255,0.3)' }}>
            ICIA
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-light tracking-[0.3em] uppercase">
            Institut Collectif de l&apos;IA
          </p>
        </div>
      </div>

      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'w-72' : 'w-12'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white"
        >
          {isOpen ? '✕' : '⚙'}
        </button>

        {isOpen && loaded && (
          <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-5 text-white border border-white/10 shadow-2xl">
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] border-b border-white/10 pb-3 mb-4">
              The Spirit
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-white/50 uppercase tracking-wider block mb-1">Background</label>
                <input
                  type="color"
                  value={settings.backgroundColor}
                  onChange={(e) => update('backgroundColor', e.target.value)}
                  className="w-full h-8 rounded cursor-pointer"
                />
              </div>

              <div>
                <label className="text-[10px] text-white/50 uppercase tracking-wider block mb-1">Color</label>
                <input
                  type="color"
                  value={settings.color}
                  onChange={(e) => update('color', e.target.value)}
                  className="w-full h-8 rounded cursor-pointer"
                />
              </div>

              <div>
                <label className="text-[10px] text-white/50 uppercase tracking-wider flex justify-between mb-1">
                  <span>Points</span>
                  <span>{settings.points}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={settings.points}
                  onChange={(e) => update('points', parseInt(e.target.value))}
                  className="w-full accent-white"
                />
              </div>

              <button
                onClick={() => setSettings(defaultSettings)}
                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs uppercase tracking-wider"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {isOpen && !loaded && (
          <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-5 text-white">
            <p className="text-sm">Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}
