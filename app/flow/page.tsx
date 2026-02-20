'use client'

import { useEffect, useRef, useState } from 'react'

export default function FlowPage() {
  const cloudRef = useRef<HTMLTextAreaElement>(null)
  const isDragging = useRef(false)
  const offsetX = useRef(0)
  const offsetY = useRef(0)
  const startMouseX = useRef(0)
  const startMouseY = useRef(0)
  const [weatherValue, setWeatherValue] = useState(0)

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
    const slider = document.getElementById('weatherSlider') as HTMLInputElement
    const skyBackground = document.querySelector('.sky-background') as HTMLElement
    const shadow2 = document.getElementById('shadow2') as any
    const shadow3 = document.getElementById('shadow3') as any
    const shadow4 = document.getElementById('shadow4') as any
    const shadow5 = document.getElementById('shadow5') as any

    if (!slider || !skyBackground) return

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t

    const updateWeather = (value: number) => {
      const t = value / 100
      const saturation = lerp(100, 30, t)
      const brightness = lerp(100, 50, t)
      skyBackground.style.filter = `saturate(${saturation}%) brightness(${brightness}%)`

      if (shadow2) shadow2.setAttribute('flood-opacity', String(lerp(0, 0.4, t)))
      if (shadow3) shadow3.setAttribute('flood-opacity', String(lerp(0.1, 0.4, t)))
      if (shadow4) shadow4.setAttribute('flood-opacity', String(lerp(0.2, 0.6, t)))
      if (shadow5) shadow5.setAttribute('flood-opacity', String(lerp(0.2, 0.7, t)))
    }

    const handleInput = (e: Event) => {
      const value = parseInt((e.target as HTMLInputElement).value)
      setWeatherValue(value)
      updateWeather(value)
    }

    slider.addEventListener('input', handleInput)
    updateWeather(0)

    return () => {
      slider.removeEventListener('input', handleInput)
    }
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

        .weather-slider-container {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .sun {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 9px;
          width: 14px;
          height: 14px;
          color: white;
          pointer-events: none;
          mix-blend-mode: difference;
        }

        .storm {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 9px;
          width: 14px;
          height: 14px;
          color: white;
          pointer-events: none;
          mix-blend-mode: difference;
        }

        .weather-slider {
          width: 300px;
          padding: 2px;
          -webkit-appearance: none;
          appearance: none;
          background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.3));
          border-radius: 20px;
          outline: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }

        .weather-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid white;
          cursor: pointer;
        }

        .weather-slider::-webkit-slider-thumb:hover {
          background: white;
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

      <div className="weather-slider-container">
        <svg className="sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="4" strokeWidth="0" fill="currentColor" />
          <line x1="10" y1="2" x2="10" y2="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="15.657" y1="4.343" x2="14.596" y2="5.404" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="18" y1="10" x2="16.5" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="15.657" y1="15.657" x2="14.596" y2="14.596" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="10" y1="18" x2="10" y2="16.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="4.343" y1="15.657" x2="5.404" y2="14.596" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="2" y1="10" x2="3.5" y2="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="4.343" y1="4.343" x2="5.404" y2="5.404" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
        <svg className="storm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M96 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 0196 416zM120 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01120 480zM376 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 01376 416zM400 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01400 480z" />
          <path d="M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 00192 416h32v64a16 16 0 0029 9.3l80-112a16 16 0 00-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 001.51-183.1z" />
        </svg>
        <input 
          type="range" 
          min="0" 
          max="100" 
          defaultValue="0" 
          className="weather-slider" 
          id="weatherSlider" 
        />
      </div>
    </div>
  )
}
