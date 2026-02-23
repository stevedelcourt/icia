'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const examples = [
  { persona: 'Citoyen', description: 'Un demandeur d\'emploi ne sait pas comment tirer profit de l\'IA pour renforcer sa désirabilité sur le marché du travail.', href: '/accompagnements/citoyens' },
  { persona: 'PME / TPE', description: 'Une petite entreprise n\'ose pas adopter l\'IA par peur des enjeux RGPD ou de ne pas voir le retour sur investissement.', href: '/accompagnements/entreprises' },
  { persona: 'Industrie créative', description: 'Un producteur de cinéma subit l\'IA sans cadre juridique ni espace pour expérimenter et sécuriser ses pratiques.', href: '/accompagnements/secteurs-creatifs' },
  { persona: 'Éducation', description: 'Une école veut intégrer l\'IA dans ses programmes mais manque d\'experts, de contenus à jour et d\'infrastructure.', href: '/accompagnements/education' },
]

const modelCards = [
  { num: '01', title: 'Un lieu physique', description: 'Un espace identifié de 600 à 1 200 m² avec salle d\'accueil, salles de formation (20-30 personnes), laboratoire IA (GPU, serveurs), espace dédié aux industries créatives et zone de rencontres. Un repère concret dans le territoire.' },
  { num: '02', title: 'Une plateforme numérique', description: 'Un environnement en ligne ouvert proposant inscription et orientation, parcours de formation, bibliothèque de ressources, badges et micro-certifications. Accessible à tout moment, identique sur tous les sites du réseau.' },
  { num: '03', title: 'Un réseau humain', description: 'Une communauté structurée d\'entreprises membres, d\'écoles partenaires et d\'experts référencés. Les ressources et compétences sont partagées entre tous les sites, dans un esprit open source et de mutualisation.' },
]

const colorMap: Record<string, string> = {
  'accent': '#BF4D43',
  'accent-blue': '#61AAF2',
  'accent-green': '#2a9e62',
  'accent-purple': '#7c4dff',
  'accent-teal': '#008b8b',
}

const publicsCards = [
  { num: '01', subtitle: 'Grand public', title: 'Citoyens et actifs', items: ['Ateliers d\'acculturation (2h à ½ journée)', 'Parcours emploi et reconversion', 'Micro-certifications et badges métiers', 'Passerelles vers la formation qualifiante'], href: '/accompagnements/citoyens', color: 'accent' },
  { num: '02', subtitle: 'Entreprises', title: 'PME, TPE et grandes organisations', items: ['Diagnostic de maturité IA (10 k€)', 'Audit RGPD, PI, sécurité', 'Formations ciblées par métier (5 k€/pers.)', 'Prototypes et POC en 4-6 semaines'], href: '/accompagnements/entreprises', color: 'accent-blue' },
  { num: '03', subtitle: 'Éducation', title: 'Écoles et universités', items: ['Bibliothèque de contenus pédagogiques', 'Experts intervenants pour les cursus', 'Certifications RNCP et micro-certifications', 'Travaux pratiques en laboratoire'], href: '/accompagnements/education', color: 'accent-green' },
  { num: '04', subtitle: 'Industries créatives', title: 'Créateurs et acteurs culturels', items: ['Ateliers IA appliquée (écriture, image, son)', 'Sécurisation juridique (droits d\'auteur, PI)', 'Laboratoire créatif d\'expérimentation', 'Écosystème créateurs / studios / droit'], href: '/accompagnements/secteurs-creatifs', color: 'accent-purple' },
  { num: '05', subtitle: 'Pouvoirs publics', title: 'Institutions et territoires', items: ['Programmes d\'IA inclusive et d\'insertion', 'Accompagnement transformation des services', 'Observatoire territorial de l\'IA', 'Renforcement de l\'attractivité du territoire'], href: '/accompagnements/pouvoirs-publics', color: 'accent-teal' },
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
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          <style jsx>{`
            section {
              background-image: 
                linear-gradient(115deg, #D92A1C, #002456),
                radial-gradient(90% 100% at 50% 0%, #002456, #191919),
                radial-gradient(100% 100% at 80% 0%, #D92A1C, #191919),
                radial-gradient(150% 210% at 100% 0%, #002456, #191919),
                radial-gradient(100% 100% at 100% 30%, #D92A1C, #002456),
                linear-gradient(60deg, #D92A1C, #002456);
              background-size: 400% 400%;
              animation: gradient 12s ease infinite;
            }
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              33% { background-position: 50% 50%; }
              66% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          
          <FadeIn>
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-left relative z-10" style={{ marginLeft: '10%' }}>
              <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-4">À propos de l'Institut</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                L'IA ne doit pas être<br />
                <em className="not-italic font-light text-white">confisquée</em> par quelques-uns.
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                L'Institut Collectif de l'IA est un projet français, humaniste et ouvert sur le monde. 
                Sa vocation : permettre à toutes et tous de bénéficier concrètement des avancées de l'intelligence artificielle.
              </p>
            </div>
          </FadeIn>
        </section>

        <div className="w-full h-px bg-border max-w-content mx-auto" />

        {/* Notre conviction */}
        <Section className="py-20">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Notre conviction fondatrice</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">L'IA comme bien commun</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>L'intelligence artificielle n'est pas seulement une rupture technologique. Elle constitue une <strong>transformation profonde de nos sociétés</strong> : elle redessine le travail, l'accès au savoir, la création, les rapports économiques, les équilibres démocratiques et, plus largement, notre manière de vivre ensemble.</p>
                <p>Face à cette mutation, l'Institut défend une conviction forte : l'IA doit devenir un <strong>bien commun</strong>, compréhensible et maîtrisable, permettant à chacun de grandir, de progresser et de tirer parti de cette révolution — au service de l'intérêt général et de l'émancipation individuelle.</p>
              </div>
              <blockquote className="mt-12 relative">
                <span className="absolute -top-4 left-0 text-6xl text-book-cloth/30 leading-none">"</span>
                <h2 className="font-serif text-2xl md:text-3xl italic text-slate-dark pl-8 pr-4 leading-relaxed">
                  L'intelligence artificielle doit être pensée, partagée et transmise collectivement.
                </h2>
              </blockquote>
            </div>
          </FadeIn>
        </Section>

        {/* Le constat */}
        <Section className="py-20 bg-white">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Le constat</p>
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
                    <Link href={item.href} className="block p-6 bg-[#E5E4DF] rounded-xl h-full hover:bg-[#ddd9d0] transition-colors">
                      <p className="font-bold text-accent mb-3">{item.persona}</p>
                      <p className="text-sm text-text-muted">{item.description}</p>
                    </Link>
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
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Le modèle</p>
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
                      <p className="text-4xl font-light text-slate-dark mb-4">{item.num}</p>
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
              <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Pour qui</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Cinq publics, des réponses adaptées</h2>
              <p className="text-text-muted mb-12">L'Institut n'est pas un service généraliste. Chaque public dispose de parcours, d'outils et d'experts pensés pour ses besoins spécifiques.</p>
            </div>
          </FadeIn>
          <div className="max-w-6xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publicsCards.map((item) => {
                  const accentColor = colorMap[item.color] || colorMap['accent']
                  return (
                  <StaggerItem key={item.num}>
                    <Link href={item.href} className="group block p-6 border border-border bg-white rounded-xl h-full hover:shadow-lg transition-all" style={{ borderColor: 'transparent' }}>
                      <div 
                        className="p-6 rounded-xl h-full transition-all duration-300 group-hover:shadow-lg"
                        style={{ 
                          borderLeft: `4px solid ${accentColor}`,
                          background: 'white'
                        }}
                      >
                        <p className="text-xs font-medium mb-2" style={{ color: accentColor }}>{item.num} / {item.subtitle}</p>
                        <h3 className="font-serif text-lg font-bold mb-4">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.items.map((i) => (
                            <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                              <span style={{ color: accentColor }}>•</span>
                              {i}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm font-semibold" style={{ color: accentColor }}>
                          <span className="group-hover:mr-2 transition-all duration-300">Découvrir</span>
                          <span className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">➔</span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                  )
                })}
              </div>
            </Stagger>
          </div>
        </Section>

        {/* Ambition */}
        <Section className="py-20 bg-ivory-light">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-kraft uppercase tracking-widest mb-4">Notre ambition</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-slate-dark">Un projet français à rayonnement international</h2>
              <p className="text-slate-dark/60 mb-12 max-w-2xl mx-auto">Le site pilote est Marseille. Vocation : essaimer en France et à l'international, avec une charte commune, une plateforme partagée et des standards identiques dans tous les centres.</p>
            </div>
          </FadeIn>
          <div className="max-w-5xl mx-auto">
            <Stagger>
              <div className="grid md:grid-cols-3 gap-6">
                {ambitionItems.map((item, index) => (
                  <StaggerItem key={item.title}>
                    <div className="p-6 border border-border bg-white rounded-xl h-full hover:shadow-lg transition-all">
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-4" style={{ 
                        backgroundColor: index === 0 ? '#BF4D43' : index === 1 ? '#7A9E7E' : '#61AAF2',
                        color: 'white'
                      }}>{item.tag}</span>
                      <h3 className="font-serif text-xl font-bold mb-3 text-slate-dark">{item.title}</h3>
                      <p className="text-slate-dark/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
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
                <Button href="/contact?subject=partnership" size="lg" arrow={false}>
                  Devenir partenaire ➔
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Nous contacter
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
