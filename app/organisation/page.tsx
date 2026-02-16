'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { useEffect, useState } from 'react'

const orbits = [
  { name: 'Citoyens', color: '#F4A261', size: 120, speed: 20, sizeDot: 12 },
  { name: 'Entreprises', color: '#E9C46A', size: 180, speed: 30, sizeDot: 14 },
  { name: 'Écoles', color: '#2A9D8F', size: 240, speed: 40, sizeDot: 14 },
  { name: 'Secteurs créatifs', color: '#E76F51', size: 300, speed: 50, sizeDot: 14 },
  { name: 'Pouvoirs publics', color: '#264653', size: 360, speed: 60, sizeDot: 14 },
]

function AnimatedSolarSystem() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-[800px] h-[800px] mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ 
            background: 'linear-gradient(135deg, #264653 0%, #1a333d 100%)',
            boxShadow: '0 0 60px rgba(38, 70, 83, 0.6), inset 0 0 30px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-center leading-tight">INSTITUT<br/>COLLECTIF<br/>DE L'IA</span>
        </div>
      </div>

      {orbits.map((orbit, index) => (
        <div
          key={orbit.name}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
          style={{
            width: orbit.size * 2,
            height: orbit.size * 2,
            borderColor: orbit.color,
            opacity: 0.4,
            animation: `rotate ${orbit.speed}s linear infinite`,
          }}
        >
          <div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: orbit.sizeDot,
              height: orbit.sizeDot,
              backgroundColor: orbit.color,
              boxShadow: `0 0 20px ${orbit.color}`,
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: `counter-rotate ${orbit.speed}s linear infinite`,
            }}
          />
          <span 
            className="absolute text-xs font-medium whitespace-nowrap"
            style={{ color: orbit.color }}
          >
            {orbit.name}
          </span>
        </div>
      ))}

      <style jsx>{`
        @keyframes rotate {
          from { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          to { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
        @keyframes counter-rotate {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}

export default function OrganisationPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-h1 mb-4 text-center">
              Organisation
            </h1>
            <p className="text-body text-text-muted text-center mb-8">
              Le système solaire ICIA - Chaqueublics gravit autour de la mission de l'Institut
            </p>
            
            <div className="w-full overflow-x-auto flex justify-center">
              {mounted && <AnimatedSolarSystem />}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-text-muted">
                Le centre représente l'Institut Collectif de l'IA.<br/>
                Chaque orbite représente un public accompagné par l'Institut.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
