'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

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
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style jsx>{`
        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          background: linear-gradient(315deg, #BF4D43 0%, #61AAF2 50%, #BF4D43 100%);
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
          overflow: hidden;
        }
        @keyframes gradient {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .wave {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 1000% 1000% 0 0;
          position: absolute;
          width: 200%;
          height: 12em;
          animation: wave 10s -3s linear infinite;
          transform: translate3d(0, 0, 0);
          opacity: 0.8;
          bottom: 0;
          left: 0;
        }
        .wave:nth-of-type(2) {
          bottom: -1.25em;
          animation: wave 18s linear reverse infinite;
          opacity: 0.8;
        }
        .wave:nth-of-type(3) {
          bottom: -2.5em;
          animation: wave 20s -1s reverse infinite;
          opacity: 0.9;
        }
        @keyframes wave {
          2% { transform: translateX(1); }
          25% { transform: translateX(-25%); }
          50% { transform: translateX(-50%); }
          75% { transform: translateX(-25%); }
          100% { transform: translateX(1); }
        }
      `}</style>
      
      <div className="hero-container">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />

        <div className="absolute inset-0 flex items-center z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 md:px-8" style={{ marginLeft: '10%' }}>
            <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Accompagnements</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              L'IA, enfin<br />pour tous.
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              L'ICIA propose des accompagnements adaptes a chaque public, pour que chacun puisse comprendre, maitriser et beneficier de l'intelligence artificielle dans son contexte propre.
            </p>
          </div>
        </FadeIn>
      </div>
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
                Chaque accompagnement est conçu en profondeur pour répondre aux enjeux spécifiques d'un public, de l'acculturation citoyenne à la transformation organisationnelle.
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
                          <span>→</span>
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
