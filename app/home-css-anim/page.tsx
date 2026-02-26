'use client'

import Link from 'next/link'
import { FadeIn, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'

const slogans = [
  "une IA comprise, maîtrisée et partagée",
  "reprendre la main sur l'intelligence artificielle",
  "comprendre l'IA. La maîtriser. L'utiliser.",
]

function getRandomSlogan() {
  if (typeof window === 'undefined') return slogans[0]
  const index = Math.floor(Math.random() * slogans.length)
  return slogans[index]
}

export default function HomeCSSAnim() {
  const slogan = getRandomSlogan()

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
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">
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
      </div>

      <div className="waves-container">
        <div className="box">
          <div className="wave" />
          <div className="wave -two" />
          <div className="wave -three" />
        </div>
      </div>

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 z-10" />
        
        <div className="relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 md:px-8 pt-20">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white drop-shadow-lg">
                <TextReveal delay={0.1}>L'Institut Collectif de l'IA :</TextReveal>
                <span className="block">
                  <TextReveal delay={0.3}>{slogan}</TextReveal>
                </span>
              </h1>
              <ScaleIn delay={0.5}>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                  Un projet français, ancré en France et ouvert sur le monde, pour que chacun et chaque organisation puisse bénéficier concrètement de l'intelligence artificielle.
                </p>
              </ScaleIn>
              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/accompagnements" variant="primary" size="lg">
                    Nos programmes
                  </Button>
                  <Button href="/contact" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white/10">
                    Nous contacter
                  </Button>
                </div>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
