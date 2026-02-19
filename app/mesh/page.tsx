'use client'

import { useEffect, useRef, useState } from 'react'

interface MeshParams {
  color: number
  backgroundColor: number
  points: number
  maxDistance: number
  spacing: number
  showDots: boolean
  mouseControls: boolean
  touchControls: boolean
}

const defaultParams: MeshParams = {
  color: 0xc5c5c5,
  backgroundColor: 0x241e2d,
  points: 20,
  maxDistance: 25,
  spacing: 80,
  showDots: true,
  mouseControls: true,
  touchControls: true,
}

export default function MeshPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<any>(null)
  const [params, setParams] = useState<MeshParams>(defaultParams)
  const [loaded, setLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window === 'undefined') return

      const script1 = document.createElement('script')
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      script1.async = true
      document.body.appendChild(script1)

      await new Promise<void>((resolve) => {
        script1.onload = () => resolve()
      })

      const script2 = document.createElement('script')
      script2.src = 'https://cdn.jsdelivr.net/npm/vanta@0.12.23/dist/vanta.net.min.js'
      script2.async = true
      document.body.appendChild(script2)

      await new Promise<void>((resolve) => {
        script2.onload = () => resolve()
      })

      setLoaded(true)
    }

    loadVanta()
  }, [])

  useEffect(() => {
    if (!loaded || !containerRef.current || !(window as any).VANTA) return

    if (effectRef.current) {
      effectRef.current.destroy()
    }

    effectRef.current = (window as any).VANTA.NET({
      el: containerRef.current,
      ...params,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      gyroControls: false,
    })

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy()
      }
    }
  }, [loaded, params])

  const handleChange = (key: keyof MeshParams, value: number | boolean) => {
    setParams(prev => ({ ...prev, [key]: value }))
  }

  const colorToHex = (num: number) => '#' + num.toString(16).padStart(6, '0')
  const hexToColor = (hex: string) => parseInt(hex.replace('#', ''), 16)

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            ICIA
          </h1>
          <p className="text-xl text-white/60 font-light tracking-widest uppercase">
            Institut Collectif de l'IA
          </p>
        </div>
      </div>

      {/* Dashboard */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'w-72' : 'w-12'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center text-white"
        >
          {isOpen ? '✕' : '⚙'}
        </button>

        {isOpen && (
          <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 pt-10 text-white space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider border-b border-white/20 pb-2">
              Mesh Controls
            </h3>

            {/* Background Color */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Background Color</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={colorToHex(params.backgroundColor)}
                  onChange={(e) => handleChange('backgroundColor', hexToColor(e.target.value))}
                  className="w-full h-8 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={colorToHex(params.backgroundColor)}
                  onChange={(e) => handleChange('backgroundColor', hexToColor(e.target.value))}
                  className="w-20 bg-white/10 rounded px-2 text-xs font-mono"
                />
              </div>
            </div>

            {/* Point Color */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Point Color</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={colorToHex(params.color)}
                  onChange={(e) => handleChange('color', hexToColor(e.target.value))}
                  className="w-full h-8 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={colorToHex(params.color)}
                  onChange={(e) => handleChange('color', hexToColor(e.target.value))}
                  className="w-20 bg-white/10 rounded px-2 text-xs font-mono"
                />
              </div>
            </div>

            {/* Points */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Points: {params.points}</label>
              <input
                type="range"
                min="5"
                max="50"
                value={params.points}
                onChange={(e) => handleChange('points', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Max Distance */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Max Distance: {params.maxDistance}</label>
              <input
                type="range"
                min="10"
                max="100"
                value={params.maxDistance}
                onChange={(e) => handleChange('maxDistance', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Spacing */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Spacing: {params.spacing}</label>
              <input
                type="range"
                min="20"
                max="200"
                value={params.spacing}
                onChange={(e) => handleChange('spacing', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Toggles */}
            <div className="flex gap-4 pt-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.showDots}
                  onChange={(e) => handleChange('showDots', e.target.checked)}
                  className="rounded"
                />
                Dots
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.mouseControls}
                  onChange={(e) => handleChange('mouseControls', e.target.checked)}
                  className="rounded"
                />
                Mouse
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.touchControls}
                  onChange={(e) => handleChange('touchControls', e.target.checked)}
                  className="rounded"
                />
                Touch
              </label>
            </div>

            {/* Reset */}
            <button
              onClick={() => setParams(defaultParams)}
              className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-xs uppercase tracking-wider transition-colors"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
