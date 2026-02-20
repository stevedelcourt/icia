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
      
      const text = "L'IA POUR TOUS !"
      
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      canvas.width = 700
      canvas.height = 120
      
      ctx.font = `bold 90px Arial, sans-serif`
      ctx.fillStyle = 'white'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillText(text, 350, 60)
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const points: { x: number; y: number }[] = []
      
      for (let y = 0; y < canvas.height; y += 6) {
        for (let x = 0; x < canvas.width; x += 6) {
          const i = (y * canvas.width + x) * 4
          if (imageData.data[i] > 128) {
            points.push({ x, y })
          }
        }
      }

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('viewBox', `0 0 ${canvas.width} ${canvas.height}`)
      svg.setAttribute('width', '700')
      svg.setAttribute('height', '120')
      svg.style.display = 'block'
      svg.style.margin = 'auto'
      container.appendChild(svg)

      points.forEach((point) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('cx', point.x.toString())
        circle.setAttribute('cy', point.y.toString())
        circle.setAttribute('r', '4')
        circle.setAttribute('fill', '#000000')
        circle.style.opacity = '0'
        svg.appendChild(circle)
      })

      const dots = svg.querySelectorAll('circle')

      window.anime({
        targets: dots,
        opacity: [0, 1],
        r: [0, 4],
        delay: window.anime.stagger(3, { from: 'center' }),
        duration: 600,
        easing: 'easeOutQuad',
        complete: () => {
          setTimeout(() => {
            window.anime({
              targets: dots,
              fill: '#dd5d20',
              r: [4, 7, 4],
              delay: window.anime.stagger(8, { from: 'center' }),
              duration: 1000,
              easing: 'easeInOutQuad',
              complete: () => {
                setTimeout(() => {
                  window.anime({
                    targets: dots,
                    fill: '#0b9444',
                    r: [4, 6, 4],
                    delay: window.anime.stagger(5, { from: 'random' }),
                    duration: 800,
                    easing: 'easeInOutQuad',
                    complete: () => {
                      setTimeout(() => {
                        window.anime({
                          targets: dots,
                          fill: '#1f91ac',
                          r: [4, 5, 4],
                          translateY: [0, -15, 0],
                          delay: window.anime.stagger(15, { from: 'center', direction: 'reverse' }),
                          duration: 1200,
                          easing: 'easeInOutQuad'
                        })
                      }, 800)
                    }
                  })
                }, 800)
              }
            })
          }, 1500)
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
