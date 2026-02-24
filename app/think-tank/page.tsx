'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const axes = [
  { 
    num: '01', 
    id: 'regulation',
    title: 'Régulation et gouvernance', 
    description: 'Analyser les cadres réglementaires, proposer une gouvernance éthique et démocratique de l\'IA en France et en Europe.',
    tags: ['Éthique et régulation', 'Étude d\'impact', 'Gouvernance des systèmes IA']
  },
  { 
    num: '02', 
    id: 'impacts',
    title: 'Impacts socio-économiques', 
    description: 'Comprendre les transformations du marché du travail et les enjeux économiques liés à la généralisation de l\'IA.',
    tags: ['Emploi et compétences', 'Métiers proofs à l\'IA', 'Redistribution de la valeur']
  },
  { 
    num: '03', 
    id: 'usages',
    title: 'Usages sectoriels', 
    description: 'Analyser les applications concrètes de l\'IA dans chaque secteur d\'activité et leurs implications spécifiques.',
    tags: ['Industries créatives', 'Services publics', 'Éducation', 'Santé']
  },
  { 
    num: '04', 
    id: 'societe',
    title: 'IA et société', 
    description: 'Examiner les implications de l\'IA sur le tissu social, la démocratie et la culture à l\'ère de l\'information automatisée.',
    tags: ['Débat public', 'Désinformation', 'Implications démocratiques', 'Évolution culturelle']
  },
]

const formats = [
  { freq: 'Bimestriel', title: 'Notes de recherche', description: 'Analyses courtes et réactives sur l\'actualite de l\'IA pour nourir le debat en temps reel.' },
  { freq: 'Trimestriel', title: 'Livres blancs', description: 'Etudes approfondies sur des thématiques cles, avec recommandations a destination des decideurs.' },
  { freq: 'Semestriel', title: 'Rapports', description: 'Bilans complets et recommandations strategiques pour les pouvoirs publics et les organisations.' },
  { freq: 'Regulier', title: 'Conferences publiques', description: 'Evenements de diffusion et de debat vers le grand public, les entreprises et les institutions.' },
]

const steps = [
  { num: '01', title: 'Observation et veille', description: 'Suivi continu des evolutions technologiques, réglementaires et sociales liees a l\'IA en France, en Europe et dans le monde.' },
  { num: '02', title: 'Analyse pluridisciplinaire', description: 'Mobilisation d\'experts issus de l\'economie, du droit, des sciences sociales et de la technique pour croiser les regards.' },
  { num: '03', title: 'Consultation des parties prenantes', description: 'Dialogue avec les acteurs concernes : entreprises, associations, collectivites, citoyens, pour ancrer les analyses dans la realite.' },
  { num: '04', title: 'Diffusion et impact', description: 'Publication des travaux en acces ouvert et organisation d\'evenements pour maximiser l\'impact des recommandations.' },
]

export default function ThinkTankPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12 bg-gradient-to-b from-ivory-dark to-white">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Think Tank IA</p>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                    Observer.<br />
                    Analyser.<br />
                    Proposer.
                  </h1>
                </div>
                <div>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    Le Think Tank de l'ICIA est un lieu de reflexion independante sur les enjeux de l'intelligence artificielle. Nous produisons des analyses rigoureuses, accompagnons les decideurs et participons au debat public.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#regulation" className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-full hover:bg-navy-dark transition-colors cursor-pointer">Regulation</a>
                    <a href="#impacts" className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full hover:bg-navy hover:text-white transition-colors cursor-pointer">Impacts socio-eco</a>
                    <a href="#usages" className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full hover:bg-navy hover:text-white transition-colors cursor-pointer">Usages sectoriels</a>
                    <a href="#societe" className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full hover:bg-navy hover:text-white transition-colors cursor-pointer">IA & Societe</a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Axes de recherche */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Axes de recherche</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Quatre axes<br />de reflexion</h2>
              <p className="text-text-muted leading-relaxed">
                Des travaux pluridisciplinaires pour comprendre, anticiper et orienter les transformations induites par l'intelligence artificielle sur le plan economique, social et democratique.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 gap-6">
                {axes.map((axe) => (
                  <StaggerItem key={axe.num}>
                    <div id={axe.id} className="p-8 bg-white border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                      <h3 className="font-serif text-xl font-bold mb-3">{axe.title}</h3>
                      <p className="text-sm text-text-muted mb-6 flex-grow">{axe.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {axe.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-ivory-medium text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Formats de publication */}
        <Section className="py-20 bg-ivory-medium">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Formats de publication</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">De la note courte<br />au rapport de fond</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {formats.map((format) => (
                  <StaggerItem key={format.title}>
                    <div className="p-6 bg-white border border-border hover:shadow-lg transition-shadow relative">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3 pb-2 border-b border-accent">{format.freq}</p>
                      <h3 className="font-serif text-lg font-bold mb-2">{format.title}</h3>
                      <p className="text-sm text-text-muted">{format.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Méthodologie */}
        <Section className="py-20 bg-ivory-dark">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div>
                  <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Notre méthodologie</p>
                  <h2 className="font-serif text-3xl md:text-4xl">Une recherche rigoureuse et independante</h2>
                  <p className="text-text-muted mt-4 leading-relaxed">
                    Le Think Tank ICIA s'appuie sur une communaute d'experts, de chercheurs et de praticiens pour produire des travaux de qualite, accessibles et actionnables.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  {steps.map((step, index) => (
                    <div key={step.num} className="flex gap-6 py-5 border-b border-border/50 last:border-0">
                      <span className="text-xs font-bold text-accent">{step.num}</span>
                      <div>
                        <h4 className="font-bold mb-1">{step.title}</h4>
                        <p className="text-sm text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-ivory-dark">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Participez aux travaux du Think Tank</h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Rejoignez nos groupes de travail, participez a nos evenements ou soumettez vos propositions de recherche. Le Think Tank ICIA est ouvert aux contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=partnership" size="lg" arrow={false}>
                  Rejoindre le Think Tank ➔
                </Button>
                <Button href="#newsletter" variant="outline" size="lg" arrow={false}>
                  S'inscrire à la newsletter
                </Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
