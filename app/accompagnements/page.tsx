'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const targets = [
  {
    title: 'PME / ETI',
    description: 'Dirigeants, DAF, directeurs opérationnels de PME et ETI.',
    needs: [
      'Pas de DSI IA interne, manque de méthode',
      'Peur du RGPD et des risques de l\'IA',
      'Obligations AI Act inconnues ou sous-estimées',
      'Concurrence qui accélère, risque de décrochage',
    ],
    offer: 'Diagnostic IA & AI Act + Feuille de route + Transformation',
    pricing: '8 000 – 12 000 € diagnostic · 30-80 k€ transformation',
    href: '/accompagnements/pme-eti',
  },
  {
    title: 'Pouvoirs publics & Collectivités',
    description: 'Métropoles, communes, conseils régionaux/départementaux, établissements publics.',
    needs: [
      'Moderniser les services publics avec l\'IA',
      'Programme PRIAM Métropole AMP en cours',
      'Formation et acculturation des agents publics',
      'Enjeux d\'éthique, de souveraineté et de transparence',
    ],
    offer: 'AMO IA, acculturation agents, observatoire territorial',
    pricing: 'Marchés publics (PRIAM) · 20-100 k€ par mission',
    href: '/accompagnements/pouvoirs-publics',
  },
  {
    title: 'Écoles, CFA, Universités',
    description: 'Établissements d\'enseignement supérieur, CFA, organismes de formation professionnelle.',
    needs: [
      'Intégrer l\'IA dans des cursus non techniques',
      'Pas d\'experts IA internes pour concevoir les contenus',
      'Besoin d\'intervenants qualifiés et modules clés en main',
      'Certifications et badges de compétences',
    ],
    offer: 'Ingénierie pédagogique IA, modules, formation formateurs',
    pricing: '3 000 – 8 000 € / module · Financement OPCO possible',
    href: '/accompagnements/education',
  },
  {
    title: 'Industries créatives',
    description: 'Studios de cinéma, agences de publicité, médias, designers, producteurs audiovisuels.',
    needs: [
      'IA génère disruption rapide sans cadre juridique clair',
      'Questions sur droits d\'auteur et propriété intellectuelle',
      'Besoin d\'expérimentation sécurisée',
      'Pas d\'espace neutre pour tester et se former',
    ],
    offer: 'Ateliers IA & créativité, sécurisation juridique, labo',
    pricing: '2 000 – 5 000 € / jour · Financement AFDAS',
    href: '/accompagnements/secteurs-creatifs',
  },
  {
    title: 'Grand public & Demandeurs d\'emploi',
    description: 'Particuliers, demandeurs d\'emploi, publics éloignés du numérique, étudiants.',
    needs: [
      'Fracture IA croissante sur le marché de l\'emploi',
      'Méconnaissance des outils IA du quotidien',
      'Besoin de reconversion et montée en compétences',
      'Risques, données personnelles, arnaques IA',
    ],
    offer: 'Ateliers d\'acculturation, parcours emploi IA, badges',
    pricing: 'Financement France Travail, CPF, subventions Région Sud',
    href: '/accompagnements/citoyens',
  },
]

export default function AccompagnementsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Accompagnements</p>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                5 segments, des réponses adaptées
              </h1>
              <p className="text-xl text-white/70 max-w-2xl">
                Chaque public dispose de parcours, d'outils et d'experts pensés pour ses besoins spécifiques.
                De l'entreprise à l'individu, de la collectivité à l'école.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Offre 01 link */}
        <div className="bg-rouge py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Commencez par un diagnostic</p>
              <p className="text-white/80">OFFRE 01 · 8 000 – 12 000 € HT · 4-6 semaines</p>
            </div>
            <Link href="/offres/diagnostic" className="px-6 py-3 bg-white text-rouge font-bold rounded-lg hover:bg-white/90 transition-colors">
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Targets */}
        <Section className="bg-cream" spacing="large">
          <Stagger>
            <div className="grid lg:grid-cols-2 gap-8">
              {targets.map((target) => (
                <StaggerItem key={target.title}>
                  <div className="bg-white p-8 rounded-2xl h-full flex flex-col">
                    <h2 className="text-2xl font-serif text-navy mb-2">{target.title}</h2>
                    <p className="text-text-muted mb-6">{target.description}</p>
                    
                    <h3 className="font-bold text-navy mb-3">Besoins identifiés</h3>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {target.needs.map((need) => (
                        <li key={need} className="flex items-start gap-2 text-text-muted text-sm">
                          <span className="text-rouge">↳</span>
                          {need}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-text-muted mb-1">
                        <span className="font-bold text-navy">Notre offre :</span> {target.offer}
                      </p>
                      <p className="text-sm text-rouge font-semibold">{target.pricing}</p>
                    </div>
                    
                    <Link href={target.href} className="mt-6 inline-flex items-center gap-2 text-rouge font-bold hover:gap-4 transition-all">
                      Découvrir <span>→</span>
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* CTA */}
        <Section className="bg-white">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-navy mb-4">
                Besoin d'un accompagnement personnalisé ?
              </h2>
              <p className="text-text-muted mb-8">
                Discutons de votre situation pour vous orienter vers l'offre la plus adaptée.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-rouge text-white font-bold rounded-lg hover:bg-rouge/90 transition-colors">
                Nous contacter
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
