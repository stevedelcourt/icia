'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomeCSSAnim() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .waves-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, #00255D, #023D87, #00255D);
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
          overflow: hidden;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .box {
          position: absolute;
          top: 0;
          transform: rotate(0deg);
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wave {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #0af;
          width: 200vw;
          height: 200vh;
          margin-left: -100vw;
          margin-top: -50vh;
          border-radius: 40%;
          animation: drift 7000ms infinite linear;
          opacity: 0.3;
        }

        .wave.-three {
          animation: drift 11000ms infinite linear;
          background-color: #77daff;
          opacity: 0.4;
        }

        .wave.-two {
          animation: drift 5000ms infinite linear;
          background-color: #001a3a;
          opacity: 0.2;
        }

        @keyframes drift {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        .content-overlay {
          animation-delay: 4s;
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          background: linear-gradient(270deg, #00255D, #023D87, #00255D);
          opacity: ${showContent ? 0 : 1};
          pointer-events: ${showContent ? 'none' : 'auto'};
          transition: opacity 1s ease;
        }

        .content-overlay.hidden {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="waves-container">
        <div className="box">
          <div className="wave" />
          <div className="wave -two" />
          <div className="wave -three" />
        </div>
      </div>

      <div className={`content-overlay ${showContent ? 'hidden' : ''}`}>
        <div style={{ display: 'flex', gap: '5px' }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon" style={{
              width: '100px',
              height: '100px',
              margin: '0 5px'
            }}>
              <svg 
                viewBox="0 0 100 100" 
                style={{
                  animation: `anim 2s ease infinite`,
                  animationDelay: `${i * 0.1}s`,
                  transform: 'scale(0,0) rotateZ(180deg)',
                  animationFillMode: 'forwards'
                }}
              >
                <circle cx="50" cy="50" r="40" fill="white" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes anim {
          0% { transform: scale(0, 0) rotateZ(-90deg); opacity: 0; }
          30% { transform: scale(1, 1) rotateZ(0deg); opacity: 1; }
          50% { transform: scale(1, 1) rotateZ(0deg); opacity: 1; }
          80% { transform: scale(0, 0) rotateZ(90deg); opacity: 0; }
          100% { transform: scale(0, 0) rotateZ(90deg); opacity: 0; }
        }
      `}</style>

      <main 
        className="relative min-h-screen flex flex-col"
        style={{ opacity: showContent ? 1 : 0, transition: 'opacity 1s ease' }}
      >
        <header className="relative z-20">
          <nav className="max-w-content mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo-white.svg" alt="ICIA" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/accompagnements" className="text-white/90 hover:text-white transition-colors">
                Accompagnements
              </Link>
              <Link href="/think-tank" className="text-white/90 hover:text-white transition-colors">
                Think Tank
              </Link>
              <Link href="/actualites" className="text-white/90 hover:text-white transition-colors">
                Actualites
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <section className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
              L'Institut Collectif de l'IA :
              <span className="block">une IA comprise, maitrisee et partagee</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Un projet francais, ancre en France et ouvert sur le monde, pour que chacun et chaque organisation puisse beneficier concrets ment de l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/accompagnements" 
                className="px-8 py-4 bg-white text-[#00255D] font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Nos programmes
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
