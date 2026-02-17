'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import Link from 'next/link'

const examples = [
  { persona: 'Citoyen', description: 'Un demandeur d\'emploi ne sait pas comment tirer profit de l\'IA pour renforcer sa désirabilité sur le marché du travail.' },
  { persona: 'PME / TPE', description: 'Une petite entreprise n\'ose pas adopter l\'IA par peur des enjeux RGPD ou de ne pas voir le retour sur investissement.' },
  { persona: 'Industrie créative', description: 'Un producteur de cinéma subit l\'IA sans cadre juridique ni espace pour expérimenter et sécuriser ses pratiques.' },
  { persona: 'Éducation', description: 'Une école veut intégrer l\'IA dans ses programmes mais manque d\'experts, de contenus à jour et d\'infrastructure.' },
]

const modelCards = [
  { num: '01', title: 'Un lieu physique', description: 'Un espace identifié de 600 à 1 200 m² avec salle d\'accueil, salles de formation (20-30 personnes), laboratoire IA (GPU, serveurs), espace dédié aux industries créatives et zone de rencontres. Un repère concret dans le territoire.' },
  { num: '02', title: 'Une plateforme numérique', description: 'Un environnement en ligne ouvert proposant inscription et orientation, parcours de formation, bibliothèque de ressources, badges et micro-certifications. Accessible à tout moment, identique sur tous les sites du réseau.' },
  { num: '03', title: 'Un réseau humain', description: 'Une communauté structurée d\'entreprises membres, d\'écoles partenaires et d\'experts référencés. Les ressources et compétences sont partagées entre tous les sites, dans un esprit open source et de mutualisation.' },
]

const publicsCards = [
  { num: '01', subtitle: 'Grand public', title: 'Citoyens et actifs', items: ['Ateliers d\'acculturation (2h à ½ journée)', 'Parcours emploi et reconversion', 'Micro-certifications et badges métiers', 'Passerelles vers la formation qualifiante'] },
  { num: '02', subtitle: 'Entreprises', title: 'PME, TPE et grandes organisations', items: ['Diagnostic de maturité IA (10 k€)', 'Audit RGPD, PI, sécurité', 'Formations ciblées par métier (5 k€/pers.)', 'Prototypes et POC en 4-6 semaines'] },
  { num: '03', subtitle: 'Éducation', title: 'Écoles et universités', items: ['Bibliothèque de contenus pédagogiques', 'Experts intervenants pour les cursus', 'Certifications RNCP et micro-certifications', 'Travaux pratiques en laboratoire'] },
  { num: '04', subtitle: 'Industries créatives', title: 'Créateurs et acteurs culturels', items: ['Ateliers IA appliquée (écriture, image, son)', 'Sécurisation juridique (droits d\'auteur, PI)', 'Laboratoire créatif d\'expérimentation', 'Écosystème créateurs / studios / droit'] },
  { num: '05', subtitle: 'Pouvoirs publics', title: 'Institutions et territoires', items: ['Programmes d\'IA inclusive et d\'insertion', 'Accompagnement transformation des services', 'Observatoire territorial de l\'IA', 'Renforcement de l\'attractivité du territoire'] },
]

const ambitionItems = [
  { tag: 'Français', title: 'Éthique & Souveraineté', description: 'Fondé sur les valeurs françaises d\'éthique, de culture et de souveraineté technologique. Gouvernance multipartite, charte d\'IA responsable, transparence totale.' },
  { tag: 'Humaniste', title: 'Impact sociétal', description: 'Un projet populaire, à retombées économiques concrètes et à fort impact sociétal. L\'IA au service de l\'émancipation individuelle et du progrès collectif.' },
  { tag: 'International', title: 'Soft power français', description: 'Essaimage vers Lyon, Paris, puis Maurice, Sénégal, Montréal… Partage open source des ressources, des contenus et des compétences entre tous les sites du réseau.' },
]

export default function AProposPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <Section className="pt-32 pb-12 bg-gradient-to-b from-[#E5E4DF] to-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">À propos de l'Institut</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                L'IA ne doit pas être<br />
                <em className="not-italic font-light">confisquée</em> par quelques-uns.
              </h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                L'Institut Collectif de l'IA est un projet français, humaniste et ouvert sur le monde. 
                Sa vocation : permettre à toutes et tous de bénéficier concrètement des avancées de l'intelligence artificielle.
              </p>
            </div>
          </FadeIn>
        </Section>

        <div className="w-full h-px bg-border max-w-content mx-auto" />

        {/* Notre conviction */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Notre conviction fondatrice</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">L'IA comme bien commun</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>L'intelligence artificielle n'est pas seulement une rupture technologique. Elle constitue une <strong>transformation profonde de nos sociétés</strong> : elle redessine le travail, l'accès au savoir, la création, les rapports économiques, les équilibres démocratiques et, plus largement, notre manière de vivre ensemble.</p>
                <p>Face à cette mutation, l'Institut défend une conviction forte : l'IA doit devenir un <strong>bien commun</strong>, compréhensible et maîtrisable, permettant à chacun de grandir, de progresser et de tirer parti de cette révolution — au service de l'intérêt général et de l'émancipation individuelle.</p>
              </div>
              <blockquote className="mt-8 p-6 bg-[#264653] text-white rounded-xl italic">
                « L'intelligence artificielle doit être pensée, partagée et transmise collectivement. »
              </blockquote>
            </div>
          </FadeIn>
        </Section>

        {/* Le constat */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Le constat</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Une fracture qui s'installe</h2>
              <div className="space-y-4 text-text-muted leading-relaxed mb-12">
                <p>L'IA progresse à une vitesse inédite, mais son appropriation reste <strong>profondément inégale</strong>. Une majorité de la population ne dispose ni des compétences, ni des repères, ni des outils pour comprendre et utiliser l'IA de manière éclairée. Les PME peinent à en tirer parti. Les acteurs culturels sont exposés sans cadre juridique. Les écoles manquent de ressources.</p>
                <p>Sans réponse collective, la fracture IA creuse durablement les inégalités sociales, économiques et culturelles. L'Institut répond à ces situations par des parcours, des experts et des lieux dédiés.</p>
              </div>
            </div>
          </FadeIn>
          <div className="max-w-5xl mx-auto mt-12">
            <Stagger>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {examples.map((item) => (
                  <StaggerItem key={item.persona}>
                    <div className="p-6 bg-[#E5E4DF] rounded-xl h-full">
                      <p className="font-bold text-[#BF4D43] mb-3">{item.persona}</p>
                      <p className="text-sm text-text-muted">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Le modèle */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Le modèle</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Lieu · Plateforme · Réseau</h2>
              <p className="text-text-muted mb-12">L'Institut est conçu comme une <strong>infrastructure collective</strong> articulée autour de trois dimensions complémentaires. Ensemble, elles forment un tiers de confiance accessible à tous.</p>
            </div>
          </FadeIn>
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-3 gap-8">
                {modelCards.map((item) => (
                  <StaggerItem key={item.num}>
                    <div className="p-8 border border-border bg-white rounded-xl h-full">
                      <p className="text-4xl font-light text-[#264653] mb-4">{item.num}</p>
                      <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Pour qui */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-[#BF4D43] uppercase tracking-widest mb-4">Pour qui</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Cinq publics, des réponses adaptées</h2>
              <p className="text-text-muted mb-12">L'Institut n'est pas un service généraliste. Chaque public dispose de parcours, d'outils et d'experts pensés pour ses besoins spécifiques.</p>
            </div>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publicsCards.map((item) => (
                  <StaggerItem key={item.num}>
                    <div className="p-6 border border-border bg-white rounded-xl h-full">
                      <p className="text-xs text-[#BF4D43] font-medium mb-2">{item.num} / {item.subtitle}</p>
                      <h3 className="font-serif text-lg font-bold mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.items.map((i) => (
                          <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                            <span className="text-[#264653]">•</span>
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Ambition */}
        <Section className="py-20 bg-[#264653]">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-[#F4A261] uppercase tracking-widest mb-4">Notre ambition</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">Un projet français à rayonnement international</h2>
              <p className="text-white/80 mb-12">Le site pilote est Marseille. Vocation : essaimer en France et à l'international, avec une charte commune, une plateforme partagée et des standards identiques dans tous les centres.</p>
            </div>
          </FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {ambitionItems.map((item) => (
                <div key={item.title} className="p-8 bg-[#1a333d] rounded-xl">
                  <span className="inline-block px-3 py-1 bg-[#F4A261] text-[#1a333d] text-xs font-bold rounded-full mb-4">{item.tag}</span>
                  <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="py-20 bg-gradient-to-b from-[#E5E4DF] to-white">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                L'ICIA est un projet <em className="not-italic font-light">collectif</em>.<br />
                Rejoignez l'aventure.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact?subject=partnership">
                  <button className="px-8 py-4 bg-[#BF4D43] text-white font-semibold rounded-lg hover:bg-[#a33d32] transition-colors">
                    Devenir partenaire ➔
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 border-[#264653] text-[#264653] font-semibold rounded-lg hover:bg-[#264653] hover:text-white transition-colors">
                    Nous contacter
                  </button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
