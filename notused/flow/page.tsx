'use client'

import { useEffect, useRef, useState } from 'react'

export default function FlowPage() {
  const cloudRef = useRef<HTMLTextAreaElement>(null)
  const isDragging = useRef(false)
  const offsetX = useRef(0)
  const offsetY = useRef(0)
  const startMouseX = useRef(0)
  const startMouseY = useRef(0)

  useEffect(() => {
    const cloud = cloudRef.current
    if (!cloud) return

    let animFrame: number
    let time = 0

    const animateCloud = () => {
      if (!isDragging.current) {
        time += 0.008
        const autoX = Math.sin(time * 0.5) * 150
        const autoY = Math.cos(time * 0.3) * 80
        
        cloud.style.transform = `translate(calc(-50% + ${
          offsetX.current + autoX
        }px), calc(-50% + ${offsetY.current + autoY}px))`
      }
      animFrame = requestAnimationFrame(animateCloud)
    }

    animateCloud()

    return () => {
      cancelAnimationFrame(animFrame)
    }
  }, [])

  useEffect(() => {
    const cloud = cloudRef.current
    if (!cloud) return

    const handleMouseDown = (e: MouseEvent) => {
      const rect = cloud.getBoundingClientRect()
      const scrollbarWidth = cloud.offsetWidth - cloud.clientWidth
      const resizeHandleSize = 50

      if (e.clientX > rect.right - scrollbarWidth - resizeHandleSize) return
      if (e.clientY > rect.bottom - resizeHandleSize) return

      isDragging.current = true
      startMouseX.current = e.clientX
      startMouseY.current = e.clientY
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return

      const deltaX = e.clientX - startMouseX.current
      const deltaY = e.clientY - startMouseY.current

      cloud.style.transform = `translate(calc(-50% + ${
        offsetX.current + deltaX
      }px), calc(-50% + ${offsetY.current + deltaY}px))`
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - startMouseX.current
        const deltaY = e.clientY - startMouseY.current
        offsetX.current += deltaX
        offsetY.current += deltaY
      }
      isDragging.current = false
    }

    cloud.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      cloud.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const skyBackground = document.querySelector('.sky-background') as HTMLElement
    const shadow2 = document.getElementById('shadow2') as any
    const shadow3 = document.getElementById('shadow3') as any
    const shadow4 = document.getElementById('shadow4') as any
    const shadow5 = document.getElementById('shadow5') as any

    if (!skyBackground) return

    const updateWeather = (value: number) => {
      const t = value / 100
      const saturation = 100 - t * 70
      const brightness = 100 - t * 50
      skyBackground.style.filter = `saturate(${saturation}%) brightness(${brightness}%)`

      if (shadow2) shadow2.setAttribute('flood-opacity', String(0 + t * 0.4))
      if (shadow3) shadow3.setAttribute('flood-opacity', String(0.1 + t * 0.3))
      if (shadow4) shadow4.setAttribute('flood-opacity', String(0.2 + t * 0.4))
      if (shadow5) shadow5.setAttribute('flood-opacity', String(0.2 + t * 0.5))
    }

    updateWeather(100)
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden">
      <style jsx>{`
        .sky-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(0deg, #62a0d8 0%, #2178d1 50%, #085cb3 100%);
          z-index: -1;
          transition: filter 0.3s ease;
        }

        .cloud-container {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }

        .cloud {
          width: 680px;
          height: 280px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: grab;
          will-change: transform;
          touch-action: none;
          border: none;
          outline: none;
          resize: none;
        }

        .cloud:active {
          cursor: grabbing;
        }

        .lightning-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 33%;
          height: 33%;
          border-radius: 50%;
          background: radial-gradient(closest-side, white, rgba(255, 255, 255, 0));
          pointer-events: none;
          opacity: 0;
          mix-blend-mode: overlay;
          filter: blur(50px);
        }

        .lightning-glow.flash {
          animation: lightning-glow 0.8s ease-out;
        }

        @keyframes lightning-glow {
          0% { opacity: 0.8; }
          15%, 100% { opacity: 0; }
        }

        .title {
          position: fixed;
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

      <div className="sky-background" />

      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <filter id="filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" seed="462" baseFrequency="0.011" numOctaves="5" result="noise1" />
            <feTurbulence type="fractalNoise" seed="462" baseFrequency="0.011" numOctaves="2" result="noise2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            <feDisplacementMap in="blur1" scale="100" in2="noise1" result="cloud1" />
            <feFlood id="shadow2" floodColor="rgb(215,215,215)" floodOpacity="0.2" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-10" dy="-3" />
            <feMorphology radius="20" />
            <feGaussianBlur stdDeviation="20" />
            <feDisplacementMap scale="100" in2="noise1" result="cloud2" />
            <feFlood id="shadow3" floodColor="rgb(66,105,146)" floodOpacity="0.1" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-10" dy="40" />
            <feMorphology radius="0 40" />
            <feGaussianBlur stdDeviation="20" />
            <feDisplacementMap scale="80" in2="noise2" result="cloud3" />
            <feFlood id="shadow4" floodColor="rgb(0,0,0)" floodOpacity="0.2" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="20" dy="60" />
            <feMorphology radius="0 65" />
            <feGaussianBlur stdDeviation="30" />
            <feDisplacementMap scale="100" in2="noise2" result="cloud4" />
            <feFlood id="shadow5" floodColor="rgb(0,0,0)" floodOpacity="0.2" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="20" dy="70" />
            <feMorphology radius="0 200" />
            <feGaussianBlur stdDeviation="30" />
            <feDisplacementMap scale="100" in2="noise2" result="cloud5" />
            <feMerge>
              <feMergeNode in="cloud1" />
              <feMergeNode in="cloud2" />
              <feMergeNode in="cloud3" />
              <feMergeNode in="cloud4" />
              <feMergeNode in="cloud5" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="cloud-container" style={{ filter: 'url(#filter)' }}>
        <textarea ref={cloudRef} className="cloud" readOnly />
      </div>

      <div className="lightning-glow" />

      <div className="title">
        <h1>ICIA</h1>
        <p>Institut Collectif de l&apos;IA</p>
      </div>
    </div>
  )
}
