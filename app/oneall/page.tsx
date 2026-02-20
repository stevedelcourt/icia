'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    anime: any
  }
}

export default function OneAllPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const loadAnime = () => {
      if (window.anime) {
        init()
        return
      }

      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js'
      script.async = true
      script.onload = init
      document.body.appendChild(script)
    }

    const init = () => {
      if (!containerRef.current || !window.anime) return

      const container = containerRef.current
      const rows = 41
      const grid: [number, number] = [rows, rows]
      const numberOfElements = rows * rows

      container.innerHTML = ''

      const fragment = document.createDocumentFragment()

      for (let i = 0; i < numberOfElements; i++) {
        const dotEl = document.createElement('div')
        dotEl.classList.add('dot')
        fragment.appendChild(dotEl)
      }

      container.appendChild(fragment)

      const cursorEl = document.createElement('div')
      cursorEl.classList.add('cursor')
      container.appendChild(cursorEl)

      const stagger = (value: string | number, options: any) => {
        return window.anime.stagger(value, options)
      }

      let index = Math.floor(Math.random() * numberOfElements)
      let nextIndex = 0

      window.anime.set(cursorEl, {
        x: stagger('-1rem', { grid, from: index, axis: 'x' }),
        y: stagger('-1rem', { grid, from: index, axis: 'y' })
      })

      function animateGrid() {
        nextIndex = Math.floor(Math.random() * numberOfElements)

        const tl = window.anime.timeline({
          easing: 'inOutQuad'
        })

        tl.add({
          targets: cursorEl,
          keyframes: [
            { scale: 0.625, duration: 200 },
            { scale: 1.125, duration: 200 },
            { scale: 1, duration: 200 }
          ],
          duration: 600
        })
        .add({
          targets: '.dot',
          keyframes: [
            {
              x: stagger('-3px', { grid, from: index, axis: 'x' }),
              y: stagger('-3px', { grid, from: index, axis: 'y' }),
              duration: 200
            },
            {
              x: stagger('2px', { grid, from: index, axis: 'x' }),
              y: stagger('2px', { grid, from: index, axis: 'y' }),
              scale: 2,
              duration: 500
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              duration: 600
            }
          ],
          delay: stagger(50, { grid, from: index })
        }, 0)
        .add({
          targets: cursorEl,
          x: { 
            value: stagger('-1rem', { grid, from: nextIndex, axis: 'x' }), 
            duration: 800 + Math.random() * 400 
          },
          y: { 
            value: stagger('-1rem', { grid, from: nextIndex, axis: 'y' }), 
            duration: 800 + Math.random() * 400 
          },
          easing: 'outCirc',
          complete: () => {
            index = nextIndex
            animateGrid()
          }
        }, '-=1500')
      }

      animateGrid()
      setReady(true)
    }

    loadAnime()

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#0a0a0a]">
      <div ref={containerRef} className="stagger-visualizer" />

      <style jsx>{`
        .stagger-visualizer {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 656px;
          height: 656px;
        }

        .stagger-visualizer :global(.dot) {
          position: relative;
          width: 4px;
          height: 4px;
          margin: 6px;
          background-color: #c5c5c5;
          border-radius: 50%;
        }

        .stagger-visualizer :global(.cursor) {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          background-color: #ff3f81;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
