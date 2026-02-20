'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    anime: any
  }
}

export default function OneAllPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const loadAnime = async () => {
      if (window.anime) {
        setLoaded(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js'
      script.async = true
      script.onload = () => setLoaded(true)
      document.body.appendChild(script)
    }

    loadAnime()
  }, [])

  useEffect(() => {
    if (!loaded || !containerRef.current || !window.anime) return

    const container = containerRef.current
    const rows = 25
    const numberOfElements = rows * rows
    const grid: [number, number] = [rows, rows]

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

    const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
    const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min

    const stagger = (value: string | number, options: any) => {
      return window.anime.stagger(value, options)
    }

    let index = random(0, numberOfElements)
    let nextIndex = 0

    const set = (el: string | Element, props: any) => {
      window.anime.set(el, props)
    }

    set(cursorEl, {
      x: stagger('-1.5rem', { grid, from: index, axis: 'x' }),
      y: stagger('-1.5rem', { grid, from: index, axis: 'y' }),
    })

    function animateGrid() {
      nextIndex = random(0, numberOfElements)

      const timeline = window.anime.timeline({
        defaults: {
          ease: 'inOutQuad',
        },
        complete: animateGrid,
      })

      timeline
        .add(cursorEl, {
          keyframes: [
            { scale: 0.625 },
            { scale: 1.125 },
            { scale: 1 },
          ],
          duration: 600,
        })
        .add(
          '.dot',
          {
            keyframes: [
              {
                x: stagger('-0.2rem', { grid, from: index, axis: 'x' }),
                y: stagger('-0.2rem', { grid, from: index, axis: 'y' }),
                duration: 200,
              },
              {
                x: stagger('0.15rem', { grid, from: index, axis: 'x' }),
                y: stagger('0.15rem', { grid, from: index, axis: 'y' }),
                scale: 2,
                duration: 500,
              },
              {
                x: 0,
                y: 0,
                scale: 1,
                duration: 600,
              },
            ],
            delay: stagger(30, { grid, from: index }),
          },
          0
        )
        .add(
          cursorEl,
          {
            x: {
              from: stagger('-1.5rem', { grid, from: index, axis: 'x' }),
              to: stagger('-1.5rem', { grid, from: nextIndex, axis: 'x' }),
              duration: randomFloat(800, 1200),
            },
            y: {
              from: stagger('-1.5rem', { grid, from: index, axis: 'y' }),
              to: stagger('-1.5rem', { grid, from: nextIndex, axis: 'y' }),
              duration: randomFloat(800, 1200),
            },
            easing: 'outCirc',
          },
          '-=1500'
        )

      index = nextIndex
    }

    animateGrid()

    return () => {
      container.innerHTML = ''
    }
  }, [loaded])

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#0a0a0a]">
      <style jsx>{`
        .stagger-visualizer {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 500px;
          height: 500px;
        }

        .stagger-visualizer .dot {
          position: relative;
          width: 0.25rem;
          height: 0.25rem;
          margin: 0.375rem;
          background-color: #c5c5c5;
          border-radius: 50%;
        }

        .stagger-visualizer .cursor {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 1rem;
          height: 1rem;
          background-color: #ff3f81;
          border-radius: 50%;
        }

        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
          pointer-events: none;
        }

        .title h1 {
          font-size: 4rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: -0.025em;
        }

        .title p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="title">
        <h1>ICIA</h1>
        <p>Institut Collectif de l&apos;IA</p>
      </div>

      <div ref={containerRef} className="stagger-visualizer" />
    </div>
  )
}
