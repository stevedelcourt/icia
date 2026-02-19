'use client'

import { useEffect, useRef, useState } from 'react'

interface SpiritParams {
  density: number
  speed: number
  curl: number
  color1: string
  color2: string
  backgroundColor: string
}

const defaultParams: SpiritParams = {
  density: 0.96,
  speed: 0.5,
  curl: 0.3,
  color1: '#ff6b6b',
  color2: '#4ecdc4',
  backgroundColor: '#1a1a2e',
}

class Particle {
  x: number = 0
  y: number = 0
  vx: number = 0
  vy: number = 0
  size: number = 0
  life: number = 0
  maxLife: number = 0

  constructor(canvasWidth: number, canvasHeight: number, speed: number) {
    this.reset(canvasWidth, canvasHeight, speed)
    this.life = Math.random() * 100
  }

  reset(canvasWidth: number, canvasHeight: number, speed: number) {
    this.x = Math.random() * canvasWidth
    this.y = canvasHeight + 10
    this.vx = (Math.random() - 0.5) * 2
    this.vy = -Math.random() * speed * 3 - 1
    this.size = Math.random() * 3 + 1
    this.maxLife = 100 + Math.random() * 200
    this.life = 0
  }

  update(mouseX: number, mouseY: number, curl: number, speed: number, canvasWidth: number, canvasHeight: number) {
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    
    if (dist < 200 && dist > 0) {
      const force = (200 - dist) / 200
      this.vx += (dx / dist) * force * curl * 0.5
      this.vy += (dy / dist) * force * curl * 0.5
    }

    this.vx *= 0.99
    this.vy *= 0.99
    this.vy -= 0.01 * speed

    this.x += this.vx
    this.y += this.vy
    this.life++

    if (this.life > this.maxLife || this.y < -50 || this.x < -50 || this.x > canvasWidth + 50) {
      this.reset(canvasWidth, canvasHeight, speed)
    }
  }

  draw(ctx: CanvasRenderingContext2D, density: number, color1: string) {
    const alpha = Math.min(1, (this.life / 20), ((this.maxLife - this.life) / 50)) * density
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)
    gradient.addColorStop(0, color1)
    gradient.addColorStop(1, 'transparent')
    
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.globalAlpha = alpha
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

export default function SpiritPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [params, setParams] = useState<SpiritParams>(defaultParams)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const numParticles = Math.floor(window.innerWidth * window.innerHeight * 0.001)
    particlesRef.current = Array.from({ length: numParticles }, () => new Particle(canvas.width, canvas.height, params.speed))

    const animate = () => {
      ctx.fillStyle = params.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(p => {
        p.update(mouseRef.current.x, mouseRef.current.y, params.curl, params.speed, canvas.width, canvas.height)
        p.draw(ctx, params.density, params.color1)
      })

      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [params])

  const handleChange = (key: keyof SpiritParams, value: number | string) => {
    setParams(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
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
              Spirit Controls
            </h3>

            {/* Background Color */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Background</label>
              <input
                type="color"
                value={params.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            {/* Color 1 */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Color 1</label>
              <input
                type="color"
                value={params.color1}
                onChange={(e) => handleChange('color1', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            {/* Color 2 */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Color 2</label>
              <input
                type="color"
                value={params.color2}
                onChange={(e) => handleChange('color2', e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>

            {/* Density */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Density: {params.density.toFixed(2)}</label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.01"
                value={params.density}
                onChange={(e) => handleChange('density', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Speed */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Speed: {params.speed.toFixed(2)}</label>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={params.speed}
                onChange={(e) => handleChange('speed', parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Curl */}
            <div>
              <label className="text-xs text-white/60 block mb-1">Curl: {params.curl.toFixed(2)}</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={params.curl}
                onChange={(e) => handleChange('curl', parseFloat(e.target.value))}
                className="w-full"
              />
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
