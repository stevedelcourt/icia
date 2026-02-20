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

    container.innerHTML = ''

    const fragment = document.createDocumentFragment()

    for (let i = 0; i < numberOfElements; i++) {
      const dotEl = document.createElement('div')
      dotEl.classList.add('dot')
      dotEl.style.width = '4px'
      dotEl.style.height = '4px'
      dotEl.style.margin = '6px'
      dotEl.style.backgroundColor = '#c5c5c5'
      dotEl.style.borderRadius = '50%'
      dotEl.style.position = 'relative'
      fragment.appendChild(dotEl)
    }

    container.appendChild(fragment)

    const cursorEl = document.createElement('div')
    cursorEl.classList.add('cursor')
    cursorEl.style.position = 'absolute'
    cursorEl.style.zIndex = '1'
    cursorEl.style.top = '0'
    cursorEl.style.left = '0'
    cursorEl.style.width = '16px'
    cursorEl.style.height = '16px'
    cursorEl.style.backgroundColor = '#ff3f81'
    cursorEl.style.borderRadius = '50%'
    container.appendChild(cursorEl)

    const getGridPosition = (index: number) => {
      return {
        x: (index % rows) * 16,
        y: Math.floor(index / rows) * 16
      }
    }

    let currentIndex = Math.floor(Math.random() * numberOfElements)
    let nextIndex = 0

    const setCursorPosition = (index: number) => {
      const pos = getGridPosition(index)
      cursorEl.style.left = pos.x + 'px'
      cursorEl.style.top = pos.y + 'px'
    }

    setCursorPosition(currentIndex)

    function animateGrid() {
      nextIndex = Math.floor(Math.random() * numberOfElements)

      const dots = container.querySelectorAll('.dot')
      dots.forEach((dot, i) => {
        const row = Math.floor(i / rows)
        const col = i % rows
        const curRow = Math.floor(currentIndex / rows)
        const curCol = currentIndex % rows
        const distFromCursor = Math.abs(col - curCol) + Math.abs(row - curRow)
        const delay = distFromCursor * 30

        window.anime({
          targets: dot,
          translateX: [
            { value: -3, duration: 200, easing: 'easeOutQuad' },
            { value: 2, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 600, easing: 'easeOutQuad' }
          ],
          translateY: [
            { value: -3, duration: 200, easing: 'easeOutQuad' },
            { value: 2, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 600, easing: 'easeOutQuad' }
          ],
          scale: [
            { value: 1, duration: 200 },
            { value: 2, duration: 500 },
            { value: 1, duration: 600 }
          ],
          delay: delay,
          complete: () => {
            if (i === dots.length - 1) {
              currentIndex = nextIndex
              setTimeout(animateCursor, 500)
            }
          }
        })
      })

      window.anime({
        targets: cursorEl,
        scale: [0.625, 1.125, 1],
        duration: 600,
        easing: 'inOutQuad'
      })
    }

    function animateCursor() {
      const toPos = getGridPosition(nextIndex)
      const duration = 800 + Math.random() * 400

      window.anime({
        targets: cursorEl,
        left: toPos.x,
        top: toPos.y,
        duration: duration,
        easing: 'outCirc',
        complete: () => {
          currentIndex = nextIndex
          animateGrid()
        }
      })
    }

    animateGrid()

    return () => {
      container.innerHTML = ''
    }
  }, [loaded])

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#0a0a0a]">
      <div className="title">
        <h1>ICIA</h1>
        <p>Institut Collectif de l&apos;IA</p>
      </div>

      <style jsx>{`
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

      <div 
        ref={containerRef} 
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '400px',
          height: '400px',
        }} 
      />
    </div>
  )
}
