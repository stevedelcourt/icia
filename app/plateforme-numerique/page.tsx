'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const features = [
  { 
    num: '01', 
    title: 'Parcours d\'apprentissage', 
    description: 'Des formations structurees et progressives, du niveau debutant a expert. Chaque parcours est adapte a vos objectifs et votre rythme.',
    tags: ['Debutant', 'Intermediaire', 'Avance']
  },
  { 
    num: '02', 
    title: 'Certifications & Badges', 
    description: 'Validez vos competences avec des certifications reconnues et des badges numeriques que vous pouvez partager sur LinkedIn.',
    tags: ['RNCP', 'Micro-certifications', 'Badges LinkedIn']
  },
  { 
    num: '03', 
    title: 'Bibliotheque de ressources', 
    description: 'Accedez a des contenus curationnes : etudes de cas, templates, outils et guides pratiques pour aller plus vite.',
    tags: ['Etudes de cas', 'Templates', 'Outils']
  },
  { 
    num: '04', 
    title: 'Communaute & Support', 
    description: 'Echangez avec d\'autres apprenants, posez vos questions aux experts et benefiez d\'un support personnalise.',
    tags: ['Forum', 'Sessions live', 'Mentorat']
  },
]

const formats = [
  { type: 'Formation', title: 'Cours video', description: 'Des lecons enregistrees avec des experts de l\'IA, accessibles a tout moment.' },
  { type: 'Pratique', title: 'Ateliers', description: 'Des sessions pratiques pour mettre en application vos connaissances.' },
  { type: 'Ressource', title: 'E-books', description: 'Des guides complets a telecharger pour approfondir vos connaissances.' },
  { type: 'Evenement', title: 'Webinaires', description: 'Des sessions en direct avec des intervenants specialises.' },
]

const roadmap = [
  { phase: 'Phase 1', period: 'Q2 2025', content: 'Lancement MVP - Acces beta ferme', description: 'Premiers parcours et formations de base' },
  { phase: 'Phase 2', period: 'Q4 2025', content: 'Lancement complet', description: 'Tous les parcours, certifications et communautes' },
  { phase: 'Phase 3', period: '2026', content: 'Fonctionnalites avancees', description: 'IA personnalisee, analytique avancee et partenariat entreprises' },
]

export default function PlateformeNumeriquePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12 bg-gradient-to-b from-ivory-dark to-white">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Plateforme numerique</p>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                    Apprendre.<br />
                    Certifier.<br />
                    Progresser.
                  </h1>
                </div>
                <div>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    La plateforme ICIA est votre compagnon pour maitriser l'intelligence artificielle. Tout ce qu'il vous faut pour developper vos competences, a votre rythme.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-full">Parcours varies</span>
                    <span className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full">Certifications</span>
                    <span className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full">Communaute</span>
                    <span className="px-4 py-2 border border-navy text-navy text-sm font-medium rounded-full">Acces bêta</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Fonctionnalites */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Fonctionnalites</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Tout ce qu'il vous faut<br />pour progresser</h2>
              <p className="text-text-muted leading-relaxed">
                Une plateforme complete pour apprendre, certifier et grandir avec l'IA. Chaque fonctionnalité est penssee pour vous accompagner dans votre parcours.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <StaggerItem key={feature.num}>
                    <div className="p-8 bg-white border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                      <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-sm text-text-muted mb-6 flex-grow">{feature.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {feature.tags.map((tag) => (
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

        {/* Formats de formation */}
        <Section className="py-20 bg-ivory-medium">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Formats</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Apprenez<br />comme vous voulez</h2>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {formats.map((format) => (
                  <StaggerItem key={format.title}>
                    <div className="p-6 bg-white border border-border hover:shadow-lg transition-shadow relative">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3 pb-2 border-b border-accent">{format.type}</p>
                      <h3 className="font-serif text-lg font-bold mb-2">{format.title}</h3>
                      <p className="text-sm text-text-muted">{format.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Tarifs */}
        <Section className="py-20 bg-ivory-dark">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div>
                  <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Tarifs</p>
                  <h2 className="font-serif text-3xl md:text-4xl">Tarifs simples<br />et transparents</h2>
                  <p className="text-text-muted mt-4 leading-relaxed">
                    Choisissez la formule qui correspond a vos besoins. L'acces bêta est gratuit pour tous les testeurs.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border border-border">
                      <h3 className="font-serif text-lg font-bold mb-2">Gratuit</h3>
                      <p className="text-2xl font-bold mb-1">0€ <span className="text-sm font-normal text-text-muted">/an</span></p>
                      <p className="text-xs text-text-muted mb-4">Pour decouvrir l'IA</p>
                      <ul className="space-y-2 mb-6">
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Acces aux bases
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Premiers modules
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Newsletter
                        </li>
                      </ul>
                      <Button href="/contact?subject=platform" variant="outline" size="sm" className="w-full">
                          Commencer
                        </Button>
                    </div>
                    
                    <div className="p-6 bg-white border-2 border-accent relative">
                      <h3 className="font-serif text-lg font-bold mb-2">Premium</h3>
                      <p className="text-2xl font-bold mb-1">120€ <span className="text-sm font-normal text-text-muted">/an</span></p>
                      <p className="text-xs text-text-muted mb-4">Pour se former profondement</p>
                      <ul className="space-y-2 mb-6">
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Tous les parcours
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Certifications
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Support prioritaire
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Evenements exclusifs
                        </li>
                      </ul>
                      <Button href="/contact?subject=platform" size="sm" className="w-full">
                          Commencer
                        </Button>
                    </div>
                    
                    <div className="p-6 bg-white border border-border">
                      <h3 className="font-serif text-lg font-bold mb-2">Entreprise</h3>
                      <p className="text-2xl font-bold mb-1">Sur devis</p>
                      <p className="text-xs text-text-muted mb-4">Pour les organisations</p>
                      <ul className="space-y-2 mb-6">
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Acces illimite
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Gestion des equipes
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Reporting avance
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <span className="text-accent">✓</span> Support dedie
                        </li>
                      </ul>
                      <Button href="/contact?subject=platform" variant="outline" size="sm" className="w-full">
                          Contact
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Roadmap */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Calendrier</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Feuille de route</h2>
              <p className="text-text-muted leading-relaxed">
                La plateforme ICIA evolue constamment. Voici les prochaines etapes de son developpement.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            {roadmap.map((item, index) => (
              <div key={item.phase} className="flex gap-6 py-5 border-b border-border/50 last:border-0">
                <span className="text-xs font-bold text-accent">{item.phase}</span>
                <div>
                  <h4 className="font-bold mb-1">{item.content}</h4>
                  <p className="text-sm text-text-muted">{item.period} — {item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-ivory-dark">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Essayez gratuitement</h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Rejoignez la bêta et accédez des maintenant aux ressources de l'ICIA. Sans engagement, sans carte bancaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=platform" size="lg">
                  Demander l'accès bêta
                </Button>
                <Button href="/a-propos" variant="outline" size="lg" arrow={false}>
                  En savoir plus
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
