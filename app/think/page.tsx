'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    anime: any
  }
}

export default function ThinkPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const init = () => {
      if (!window.anime) {
        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js'
        script.onload = runAnimation
        document.body.appendChild(script)
      } else {
        runAnimation()
      }
    }

    const runAnimation = () => {
      if (!containerRef.current || !window.anime) return

      const container = containerRef.current
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('viewBox', '0 0 800 150')
      svg.setAttribute('width', '800')
      svg.setAttribute('height', '150')
      svg.style.display = 'block'
      svg.style.margin = '0 auto'
      container.appendChild(svg)

      const text = "L'IA POUR TOUS !"
      
      const fontSize = 80
      const letterSpacing = 5
      
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      canvas.width = 800
      canvas.height = 150
      
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
      ctx.fillStyle = 'white'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillText(text, 400, 75)
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const points: { x: number; y: number }[] = []
      
      for (let y = 0; y < canvas.height; y += 4) {
        for (let x = 0; x < canvas.width; x += 4) {
          const i = (y * canvas.width + x) * 4
          if (imageData.data[i] > 128) {
            points.push({ x, y })
          }
        }
      }

      points.forEach((point) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('cx', point.x.toString())
        circle.setAttribute('cy', point.y.toString())
        circle.setAttribute('r', '2')
        circle.setAttribute('fill', '#000000')
        circle.style.opacity = '0'
        svg.appendChild(circle)
      })

      const dots = svg.querySelectorAll('circle')

      window.anime({
        targets: dots,
        opacity: [0, 1],
        scale: [0, 1],
        delay: window.anime.stagger(2, { from: 'center' }),
        duration: 500,
        easing: 'easeOutQuad',
        complete: () => {
          setTimeout(() => {
            window.anime({
              targets: dots,
              fill: '#dd5d20',
              scale: [1, 1.5, 1],
              delay: window.anime.stagger(5, { from: 'center' }),
              duration: 800,
              easing: 'easeInOutQuad',
              complete: () => {
                setTimeout(() => {
                  window.anime({
                    targets: dots,
                    fill: '#0b9444',
                    scale: [1, 0.5, 1],
                    delay: window.anime.stagger(3, { from: 'random' }),
                    duration: 600,
                    easing: 'easeInOutQuad',
                    complete: () => {
                      setTimeout(() => {
                        window.anime({
                          targets: dots,
                          fill: '#1f91ac',
                          translateY: [0, -10, 0],
                          delay: window.anime.stagger(10, { from: 'center', direction: 'reverse' }),
                          duration: 1000,
                          easing: 'easeInOutQuad'
                        })
                      }, 500)
                    }
                  })
                }, 500)
              }
            })
          }, 1000)
        }
      })
    }

    init()

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full flex items-center justify-center"
      style={{ backgroundColor: '#E8E6DA' }}
    />
  )
}
