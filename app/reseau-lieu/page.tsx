'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const troisDimensions = [
  {
    num: '01',
    title: 'Un lieu physique',
    description: 'Un espace identifié de 600 à 1 200 m² avec salle d\'accueil, salles de formation (20-30 personnes), laboratoire IA (GPU, serveurs), espace dédié aux industries créatives et zone de rencontres. Un repère concret dans le territoire.',
    link: '/reseau-lieu',
    linkText: 'Découvrir le lieu',
  },
  {
    num: '02',
    title: 'Une plateforme numérique',
    description: 'Un environnement en ligne ouvert proposant inscription et orientation, parcours de formation, bibliothèque de ressources, badges et micro-certifications. Accessible à tout moment, identique sur tous les sites du réseau.',
    link: '/plateforme-numerique',
    linkText: 'Découvrir la plateforme',
  },
  {
    num: '03',
    title: 'Un réseau humain',
    description: 'Une communauté structurée d\'entreprises membres, d\'écoles partenaires et d\'experts référencés. Les ressources et compétences sont partagées entre tous les sites, dans un esprit open source et de mutualisation.',
    link: '/reseau-lieu',
    linkText: 'Rejoindre le réseau',
  },
]

const cinqPublics = [
  {
    num: '01',
    tag: 'Grand public',
    subtitle: 'Citoyens et actifs',
    items: [
      'Ateliers d\'acculturation (2h à ½ journée)',
      'Parcours emploi et reconversion',
      'Micro-certifications et badges métiers',
      'Passerelles vers la formation qualifiante',
    ],
    link: '/accompagnements',
  },
  {
    num: '02',
    tag: 'Entreprises',
    subtitle: 'PME, TPE et grandes organisations',
    items: [
      'Diagnostic de maturité IA (10 k€)',
      'Audit RGPD, PI, sécurité',
      'Formations ciblées par métier (5 k€/pers.)',
      'Prototypes et POC en 4-6 semaines',
    ],
    link: '/accompagnements',
  },
  {
    num: '03',
    tag: 'Éducation',
    subtitle: 'Écoles et universités',
    items: [
      'Bibliothèque de contenus pédagogiques',
      'Experts intervenants pour les cursus',
      'Certifications RNCP et micro-certifications',
      'Travaux pratiques en laboratoire',
    ],
    link: '/accompagnements',
  },
  {
    num: '04',
    tag: 'Création',
    subtitle: 'Créateurs et acteurs culturels',
    items: [
      'Ateliers IA appliquée (écriture, image, son)',
      'Sécurisation juridique (droits d\'auteur, PI)',
      'Laboratoire créatif d\'expérimentation',
      'Écosystème créateurs / studios / droit',
    ],
    link: '/accompagnements',
  },
  {
    num: '05',
    tag: 'Pouvoirs publics',
    subtitle: 'Institutions et territoires',
    items: [
      'Programmes d\'IA inclusive et d\'insertion',
      'Accompagnement transformation des services',
      'Observatoire territorial de l\'IA',
      'Renforcement de l\'attractivité du territoire',
    ],
    link: '/accompagnements',
  },
]

export default function ReseauLieuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12 bg-gradient-to-b from-ivory-dark to-white">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Réseau & Lieu</p>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                    Un ancrage<br />
                    territorial,<br />
                    un rayonnement<br />
                    <em className="not-italic font-light">national</em>
                  </h1>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    L'ICIA repose sur un modèle hybride : un lieu physique flagship à Marseille, un réseau de hubs régionaux et d'espaces satellites, complété par une plateforme numérique.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-slate-dark text-white text-sm font-medium rounded-full">Marseille</span>
                    <span className="px-4 py-2 border border-slate-dark text-slate-dark text-sm font-medium rounded-full">Hubs régionaux</span>
                    <span className="px-4 py-2 border border-slate-dark text-slate-dark text-sm font-medium rounded-full">Espaces satellites</span>
                    <span className="px-4 py-2 border border-slate-dark text-slate-dark text-sm font-medium rounded-full">Plateforme numérique</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-dark text-white rounded-xl">
                    <p className="text-4xl font-light mb-2">400m²</p>
                    <p className="text-sm text-white/80">Flagship Marseille</p>
                  </div>
                  <div className="p-6 bg-slate-dark text-white rounded-xl">
                    <p className="text-4xl font-light mb-2">3–5 ans</p>
                    <p className="text-sm text-white/80">Déploiement national</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Trois dimensions complémentaires */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">L'Institut</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">L'Institut est conçu comme<br />une infrastructure collective</h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Trois dimensions complémentaires. Ensemble, elles forment un tiers de confiance accessible à tous.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-3 gap-8">
                {troisDimensions.map((dim) => (
                  <StaggerItem key={dim.num}>
                    <div className="p-8 border border-border bg-ivory-dark rounded-xl h-full flex flex-col">
                      <p className="text-4xl font-light text-slate-dark mb-4">{dim.num}</p>
                      <h3 className="font-serif text-xl font-bold mb-4">{dim.title}</h3>
                      <p className="text-sm text-text-muted mb-6 flex-grow">{dim.description}</p>
                      <Link href={dim.link} className="inline-flex items-center text-accent font-medium hover:underline">
                        {dim.linkText} <span className="ml-1">➔</span>
                      </Link>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Cinq publics */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Accompagnements</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Cinq publics,<br />des réponses adaptées</h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                L'Institut n'est pas un service généraliste. Chaque public dispose de parcours, d'outils et d'experts pensés pour ses besoins spécifiques.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {cinqPublics.map((publicData) => (
                  <StaggerItem key={publicData.num}>
                    <div className="p-6 border border-border bg-white rounded-xl h-full flex flex-col">
                      <p className="text-3xl font-light text-slate-dark mb-2">{publicData.num}</p>
                      <span className="inline-block px-3 py-1 bg-slate-dark text-white text-xs font-bold rounded-full mb-3">{publicData.tag}</span>
                      <p className="text-sm text-accent font-medium mb-4">{publicData.subtitle}</p>
                      <ul className="space-y-2 mb-4 flex-grow">
                        {publicData.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-text-muted">{item}</li>
                        ))}
                      </ul>
                      <Link href={publicData.link} className="inline-flex items-center text-sm text-accent font-medium hover:underline">
                        En savoir plus <span className="ml-1">➔</span>
                      </Link>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-gradient-to-b from-ivory-dark to-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Rejoignez le réseau ICIA</h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Vous souhaitez ouvrir un hub, accueillir un espace satellite ou devenir partenaire ? Notre équipe est disponible pour en discuter.
              </p>
              <Button href="/contact?subject=partnership" size="lg" arrow={false}>
                  Nous contacter ➔
                </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
