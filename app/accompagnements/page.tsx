'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import Link from 'next/link'

const publics = [
  { 
    title: 'Citoyen', 
    subtitle: 'Grand public',
    description: 'Acculturation a l\'IA, securite numerique, parcours vers l\'emploi et la reconversion professionnelle.',
    href: '/accompagnements/citoyens',
    color: 'orange',
  },
  { 
    title: 'Entreprise', 
    subtitle: 'Secteur prive',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation et rester competitif.',
    href: '/accompagnements/entreprises',
    color: 'blue',
  },
  { 
    title: 'Ecole', 
    subtitle: 'Education',
    description: 'Bibliotheque pedagogique, formation des formateurs, certifications et parcours accredites.',
    href: '/accompagnements/education',
    color: 'green',
  },
  { 
    title: 'Secteur creatif', 
    subtitle: 'Industries creatives',
    description: 'Ateliers creatifs, securite juridique, laboratoire d\'innovation pour les industries culturelles.',
    href: '/accompagnements/secteurs-creatifs',
    color: 'purple',
  },
  { 
    title: 'Pouvoir public', 
    subtitle: 'Secteur public',
    description: 'IA inclusive, transformation des services publics et observatoire territorial de l\'impact IA.',
    href: '/accompagnements/pouvoirs-publics',
    color: 'teal',
  },
]

const processSteps = [
  { num: '01', title: 'Diagnostic initial', description: 'Evaluation des besoins, du niveau de maturite IA et des objectifs a atteindre.' },
  { num: '02', title: 'Plan personnalise', description: 'Conception d\'un parcours sur mesure : formats, rythme, contenus adaptes.' },
  { num: '03', title: 'Mise en oeuvre', description: 'Depoiement des formations, ateliers et prototypes avec suivi continu.' },
  { num: '04', title: 'Evaluation & suivi', description: 'Mesure d\'impact, ajustements et ancrage durable des nouvelles pratiques.' },
]

const colorMap: Record<string, string> = {
  orange: '#e84b1a',
  blue: '#2a6fff',
  green: '#2a9e62',
  purple: '#7c4dff',
  teal: '#008b8b',
}

export default function AccompanimentsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-0 bg-gradient-to-b from-[#E5E4DF] to-white">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Accompanissements</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-0">
                L'IA pour<br />chacun.
              </h1>
            </div>
          </FadeIn>
        </Section>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 border-t border-border">
            <div className="p-8 border-r border-border">
              <p className="text-text-muted leading-relaxed">
                L'ICIA propose des accompagnements adaptes a chaque public, pour que chacun puisse comprendre, maitriser et beneficier de l'intelligence artificielle dans son contexte propre.
              </p>
            </div>
            <div className="p-8 flex items-center justify-around">
              <div className="text-center">
                <p className="text-4xl font-bold">5</p>
                <p className="text-xs text-text-muted">Publics accompagnes</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-xs text-text-muted">Sur mesure</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <p className="text-4xl font-bold">Gratuit</p>
                <p className="text-xs text-text-muted">Pour le grand public</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nos programmes */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Nos programmes</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Cinq programmes,<br />autant de publics</h2>
              <p className="text-text-muted leading-relaxed">
                Chaque accompagnement est conçu en profondeur pour repondre aux enjeux specifiques d'un public — de l'acculturation citoyenne a la transformation organisationnelle.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
                {publics.map((item) => (
                  <StaggerItem key={item.title}>
                    <Link href={item.href} className="block group h-full">
                      <div className="p-6 bg-white hover:bg-[#f4f1eb] transition-colors h-full flex flex-col relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 right-0 h-1" 
                          style={{ backgroundColor: colorMap[item.color] }}
                        />
                        <span 
                          className="text-xs font-bold uppercase tracking-widest mb-3"
                          style={{ color: colorMap[item.color] }}
                        >
                          {item.subtitle}
                        </span>
                        <h3 className="font-serif text-lg font-bold mb-3">{item.title}</h3>
                        <p className="text-sm text-text-muted flex-grow">{item.description}</p>
                        <div className="mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colorMap[item.color] }}>
                          →
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
        <Section className="py-20 bg-[#f4f1eb]">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                <div>
                  <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Notre processus</p>
                  <h2 className="font-serif text-3xl md:text-4xl">Un accompagnement structure en 4 temps</h2>
                  <p className="text-text-muted mt-4 leading-relaxed">
                    Chaque programme demarre par une phase de diagnostic pour calibrer l'accompagnement au plus pres de vos besoins reels.
                  </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-border">
                  {processSteps.map((step) => (
                    <div key={step.num} className="p-6 bg-white">
                      <span className="text-xs font-bold text-[#BF4D43] mb-2 block">{step.num}</span>
                      <h4 className="font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-text-muted">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-[#e8e3d9]">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Vous ne savez pas quel accompagnement vous correspond ?</h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                L'ICIA vous guide vers la solution la plus adaptee a vos besoins. Notre equipe est disponible pour vous accompagner.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#0d0e0f] text-white font-semibold rounded-lg hover:bg-[#BF4D43] transition-colors">
                  Nous contacter →
                </button>
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
