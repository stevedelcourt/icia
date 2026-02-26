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
    href: '/accompagnements/citoyens',
    color: 'citoyen',
    accent: '#023D87',
  },
  { 
    title: 'Entreprise', 
    subtitle: 'Secteur prive',
    description: 'Diagnostics, formations et prototypes IA pour transformer votre organisation et rester competitif.',
    href: '/accompagnements/entreprise',
    color: 'entreprise',
    accent: '#2E5A8C',
  },
  { 
    title: 'Ecole', 
    subtitle: 'Education',
    description: 'Bibliotheque pedagogique, formation des formateurs, certifications et parcours accredites.',
    href: '/accompagnements/education',
    color: 'education',
    accent: '#4A7AB8',
  },
  { 
    title: 'Secteur creatif', 
    subtitle: 'Industries creatives',
    description: 'Ateliers creatifs, securite juridique, laboratoire d\'innovation pour les industries culturelles.',
    href: '/accompagnements/secteurs-creatifs',
    color: 'creatif',
    accent: '#6B9BD1',
  },
  { 
    title: 'Pouvoir public', 
    subtitle: 'Secteur public',
    description: 'IA inclusive, transformation des services publics et observatoire territorial de l\'impact IA.',
    href: '/accompagnements/pouvoirs-publics',
    color: 'public',
    accent: '#8CB4E3',
  },
]

const processSteps = [
  { num: '01', title: 'Diagnostic initial', description: 'Evaluation des besoins, du niveau de maturite IA et des objectifs a atteindre.' },
  { num: '02', title: 'Plan personnalise', description: 'Conception d\'un parcours sur mesure : formats, rythme, contenus adaptes.' },
  { num: '03', title: 'Mise en oeuvre', description: 'Depoiement des formations, ateliers et prototypes avec suivi continu.' },
  { num: '04', title: 'Evaluation & suivi', description: 'Mesure d\'impact, ajustements et ancrage durable des nouvelles pratiques.' },
]

const cardGradients: Record<string, string> = {
  citoyen: 'linear-gradient(135deg, rgba(2,61,135,0.08) 0%, rgba(2,61,135,0.02) 100%)',
  entreprise: 'linear-gradient(135deg, rgba(46,90,140,0.08) 0%, rgba(46,90,140,0.02) 100%)',
  education: 'linear-gradient(135deg, rgba(74,122,184,0.08) 0%, rgba(74,122,184,0.02) 100%)',
  creatif: 'linear-gradient(135deg, rgba(107,155,209,0.08) 0%, rgba(107,155,209,0.02) 100%)',
  public: 'linear-gradient(135deg, rgba(140,180,227,0.08) 0%, rgba(140,180,227,0.02) 100%)',
}

function FlowHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(270deg, #00255D, #023D87, #00255D);
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-container .wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero-container .wave span {
          position: absolute;
          width: 325vh;
          height: 325vh;
          top: 0;
          left: 50%;
          transform: translate(-50%, -75%);
          background: #0af;
          border-radius: 45%;
          opacity: 0.3;
        }
        .hero-container .wave span:nth-child(1) {
          background: rgba(10, 170, 255, 0.3);
          animation: animate 7s linear infinite;
        }
        .hero-container .wave span:nth-child(2) {
          background: rgba(0, 26, 58, 0.3);
          animation: animate 11s linear infinite;
        }
        .hero-container .wave span:nth-child(3) {
          background: rgba(119, 218, 255, 0.4);
          animation: animate 5s linear infinite;
        }
        @keyframes animate {
          0% { transform: translate(-50%, -75%) rotate(0deg); }
          100% { transform: translate(-50%, -75%) rotate(360deg); }
        }
      `}</style>
      
      <div className="hero-container">
        <div className="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 md:px-8" style={{ marginLeft: '10%' }}>
            <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Accompagnements</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              L'IA, enfin<br />pour <span className="text-rouge">tous</span>.
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
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

        {/* Nos programmes */}
        <Section className="py-24 bg-ivory-light">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Nos programmes</p>
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
                        <h3 className="font-serif text-lg mb-3 text-slate-dark">{item.title}</h3>
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
                  <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Notre processus</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-dark mb-4">Un accompagnement structure en 4 temps</h2>
                  <p className="text-slate-dark/60 leading-relaxed">
                    Chaque programme demarre par une phase de diagnostic pour calibrer l'accompagnement au plus pres de vos besoins reels.
                  </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                  {processSteps.map((step) => (
                    <div key={step.num} className="p-6 bg-white/50 border border-border/50 hover:border-border transition-colors">
                      <span className="text-xs font-bold mb-2 block" style={{ color: '#D92A1C' }}>{step.num}</span>
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
                </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
