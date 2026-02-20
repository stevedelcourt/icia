'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const publics = [
  { 
    title: 'Citoyen', 
    subtitle: 'Grand public',
    description: 'Acculturation a l\'IA, securite numerique, parcours vers l\'emploi et la reconversion professionnelle.',
    href: '/accompagnements/citoyen',
    color: 'citoyen',
    accent: '#BF4D43',
  },
  { 
    title: 'Entreprise', 
    subtitle: 'Secteur prive',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation et rester competitif.',
    href: '/accompagnements/entreprise',
    color: 'entreprise',
    accent: '#D4A27F',
  },
  { 
    title: 'Ecole', 
    subtitle: 'Education',
    description: 'Bibliotheque pedagogique, formation des formateurs, certifications et parcours accredites.',
    href: '/accompagnements/education',
    color: 'education',
    accent: '#7A9E7E',
  },
  { 
    title: 'Secteur creatif', 
    subtitle: 'Industries creatives',
    description: 'Ateliers creatifs, securite juridique, laboratoire d\'innovation pour les industries culturelles.',
    href: '/accompagnements/secteurs-creatifs',
    color: 'creatif',
    accent: '#8B7A6B',
  },
  { 
    title: 'Pouvoir public', 
    subtitle: 'Secteur public',
    description: 'IA inclusive, transformation des services publics et observatoire territorial de l\'impact IA.',
    href: '/accompagnements/pouvoirs-publics',
    color: 'public',
    accent: '#6B7A8B',
  },
]

const processSteps = [
  { num: '01', title: 'Diagnostic initial', description: 'Evaluation des besoins, du niveau de maturite IA et des objectifs a atteindre.' },
  { num: '02', title: 'Plan personnalise', description: 'Conception d\'un parcours sur mesure : formats, rythme, contenus adaptes.' },
  { num: '03', title: 'Mise en oeuvre', description: 'Depoiement des formations, ateliers et prototypes avec suivi continu.' },
  { num: '04', title: 'Evaluation & suivi', description: 'Mesure d\'impact, ajustements et ancrage durable des nouvelles pratiques.' },
]

const cardGradients: Record<string, string> = {
  citoyen: 'linear-gradient(135deg, rgba(191,77,67,0.08) 0%, rgba(191,77,67,0.02) 100%)',
  entreprise: 'linear-gradient(135deg, rgba(212,162,127,0.08) 0%, rgba(212,162,127,0.02) 100%)',
  education: 'linear-gradient(135deg, rgba(122,158,126,0.08) 0%, rgba(122,158,126,0.02) 100%)',
  creatif: 'linear-gradient(135deg, rgba(139,122,107,0.08) 0%, rgba(139,122,107,0.02) 100%)',
  public: 'linear-gradient(135deg, rgba(107,122,139,0.08) 0%, rgba(107,122,139,0.02) 100%)',
}

function FlowHero() {
  const cloudRef = useRef<HTMLTextAreaElement>(null)
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
      time += 0.008
      const autoX = Math.sin(time * 0.5) * 150
      const autoY = Math.cos(time * 0.3) * 80
      
      cloud.style.transform = `translate(calc(-50% + ${
        offsetX.current + autoX
      }px), calc(-50% + ${offsetY.current + autoY}px))`
      animFrame = requestAnimationFrame(animateCloud)
    }

    animateCloud()

    const skyBackground = document.querySelector('.hero-sky-background') as HTMLElement
    const shadow2 = document.getElementById('hero-shadow2') as any
    const shadow3 = document.getElementById('hero-shadow3') as any
    const shadow4 = document.getElementById('hero-shadow4') as any
    const shadow5 = document.getElementById('hero-shadow5') as any

    if (skyBackground) {
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
    }

    return () => {
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="hero-sky-background absolute inset-0" 
        style={{ 
          background: 'linear-gradient(0deg, #3a4a5c 0%, #2a3a4c 50%, #1a2a3c 100%)',
          zIndex: 0
        }} 
      />

      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <filter id="hero-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" seed="462" baseFrequency="0.011" numOctaves="5" result="noise1" />
            <feTurbulence type="fractalNoise" seed="462" baseFrequency="0.011" numOctaves="2" result="noise2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            <feDisplacementMap in="blur1" scale="100" in2="noise1" result="cloud1" />
            <feFlood id="hero-shadow2" floodColor="rgb(215,215,215)" floodOpacity="0.4" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-10" dy="-3" />
            <feMorphology radius="20" />
            <feGaussianBlur stdDeviation="20" />
            <feDisplacementMap scale="100" in2="noise1" result="cloud2" />
            <feFlood id="hero-shadow3" floodColor="rgb(66,105,146)" floodOpacity="0.4" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="-10" dy="40" />
            <feMorphology radius="0 40" />
            <feGaussianBlur stdDeviation="20" />
            <feDisplacementMap scale="80" in2="noise2" result="cloud3" />
            <feFlood id="hero-shadow4" floodColor="rgb(0,0,0)" floodOpacity="0.6" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feOffset dx="20" dy="60" />
            <feMorphology radius="0 65" />
            <feGaussianBlur stdDeviation="30" />
            <feDisplacementMap scale="100" in2="noise2" result="cloud4" />
            <feFlood id="hero-shadow5" floodColor="rgb(0,0,0)" floodOpacity="0.7" />
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

      <div className="hero-cloud-container absolute inset-0" style={{ filter: 'url(#hero-filter)', zIndex: 1 }}>
        <textarea ref={cloudRef} className="hero-cloud" readOnly style={{
          width: '800px',
          height: '320px',
          background: '#e0e0e0',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'grab',
          willChange: 'transform',
          touchAction: 'none',
          border: 'none',
          outline: 'none',
          resize: 'none',
        }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Accompagnements</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              L'IA, enfin<br />pour tous.
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mx-auto">
              L'ICIA propose des accompagnements adaptes a chaque public, pour que chacun puisse comprendre, maitriser et beneficier de l'intelligence artificielle dans son contexte propre.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function AccompanimentsNewPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <FlowHero />

        {/* Stats */}
        <div className="border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3">
              <div className="p-8 border-r border-border">
                <p className="text-3xl md:text-5xl font-bold text-slate-dark mb-1">
                  <span className="text-book-cloth">5</span>
                </p>
                <p className="text-xs font-medium text-slate-dark/40 uppercase tracking-wide">Publics</p>
              </div>
              <div className="p-8 border-r border-border">
                <p className="text-3xl md:text-5xl font-bold text-slate-dark mb-1">
                  <span className="text-kraft">100%</span>
                </p>
                <p className="text-xs font-medium text-slate-dark/40 uppercase tracking-wide">Sur mesure</p>
              </div>
              <div className="p-8">
                <p className="text-3xl md:text-5xl font-bold text-slate-dark mb-1">
                  <span className="text-manilla">Gratuit</span>
                </p>
                <p className="text-xs font-medium text-slate-dark/40 uppercase tracking-wide">Grand public</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nos programmes */}
        <Section className="py-24 bg-ivory-light">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-sm font-medium text-book-cloth uppercase tracking-widest mb-4">Nos programmes</p>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-dark mb-4">Cinq programmes,<br />autant de publics</h2>
              <p className="text-slate-dark/60 leading-relaxed">
                Chaque accompagnement est con�u en profondeur pour repondre aux enjeux specifiques d'un public � de l'acculturation citoyenne a la transformation organisationnelle.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {publics.map((item) => (
                  <StaggerItem key={item.title}>
                    <Link href={item.href} className="block group h-full">
                      <div 
                        className="p-6 h-full flex flex-col relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                        style={{ 
                          background: cardGradients[item.color],
                          border: '1px solid rgba(0,0,0,0.06)'
                        }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(circle at center, ${item.accent}15 0%, transparent 70%)` }} />
                        <div className="w-8 h-px bg-slate-dark/20 mb-4 group-hover:bg-slate-dark/40 transition-colors" style={{ backgroundColor: item.accent }} />
                        <span className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.accent }}>
                          {item.subtitle}
                        </span>
                        <h3 className="font-serif text-lg font-bold mb-3 text-slate-dark">{item.title}</h3>
                        <p className="text-sm text-slate-dark/60 flex-grow leading-relaxed">{item.description}</p>
                        <div className="mt-4 gap-2 text-xs flex items-center uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" style={{ color: item.accent }}>
                          Decouvrir
                          <span>�</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Processus */}
        <Section className="py-24 bg-ivory-medium">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                  <p className="text-sm font-medium text-kraft uppercase tracking-widest mb-4">Notre processus</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-dark mb-4">Un accompagnement structure en 4 temps</h2>
                  <p className="text-slate-dark/60 leading-relaxed">
                    Chaque programme demarre par une phase de diagnostic pour calibrer l'accompagnement au plus pres de vos besoins reels.
                  </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                  {processSteps.map((step) => (
                    <div key={step.num} className="p-6 bg-white/50 border border-border/50 hover:border-border transition-colors">
                      <span className="text-xs font-bold mb-2 block" style={{ color: '#D4A27F' }}>{step.num}</span>
                      <h4 className="font-bold mb-2 text-slate-dark">{step.title}</h4>
                      <p className="text-sm text-slate-dark/60">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="py-24 bg-ivory-light">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-slate-dark mb-6">Vous ne savez pas quel accompagnement vous correspond ?</h2>
              <p className="text-slate-dark/60 mb-8 max-w-xl mx-auto">
                L'ICIA vous guide vers la solution la plus adaptee a vos besoins. Notre equipe est disponible pour vous accompagner.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                  Nous contacter
                  <span className="ml-2">�</span>
                </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
