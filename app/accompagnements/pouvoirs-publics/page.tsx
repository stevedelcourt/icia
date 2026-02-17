import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const accompagnementNav = [
  { label: 'Citoyens', href: '/accompagnements/citoyens' },
  { label: 'Entreprises', href: '/accompagnements/entreprises' },
  { label: 'Écoles & Universités', href: '/accompagnements/education' },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs' },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics' },
]

const programmes = [
  {
    num: '01',
    title: 'Programmes d\'IA inclusive',
    description: 'Lutter contre la fracture numérique et garantir que chacun puisse bénéficier des avancées de l\'IA. Programmes de sensibilisation et accompagnements pour les publics éloignés du numérique.',
    items: ['Ateliers dans les territoires (QPV, zones rurales)', 'Formations pour agents publics', 'Accompagnement des associations locales', 'Accessibilité des services IA', 'Inclusion des personnes âgées'],
    cta: 'En savoir plus',
    subject: 'inclusion',
  },
  {
    num: '02',
    title: 'Remobilisation professionnelle',
    description: 'Accompagner les agents publics et demandeurs d\'emploi vers les métiers de l\'IA. Diagnostics de compétences, formations certifiantes et mise en relation avec les employeurs du territoire.',
    items: ['Bilan de compétences IA', 'Parcours de formation certifiante', 'Certification professionnelle reconnue', 'Partenariats employeurs locaux', 'Suivi post-formation individualisé'],
  },
  {
    num: '03',
    title: 'Transformation des services publics',
    description: 'Aider les administrations à identifier les cas d\'usage de l\'IA pour améliorer les services aux citoyens. Efficacité administrative, simplification des démarches et qualité du service.',
    items: ['Diagnostic des processus administratifs', 'Identification et priorisation des cas d\'usage', 'Accompagnement au changement', 'Formation des agents à l\'IA', 'Éthique, transparence et évaluation d\'impact'],
    cta: 'Planifier un diagnostic',
    subject: 'services-publics',
  },
  {
    num: '04',
    title: 'Observatoire territorial',
    description: 'Un observatoire pour suivre l\'adoption de l\'IA dans les territoires français. Données, analyses et recommandations pour aider les décideurs à piloter la transformation numérique.',
    items: ['50+ indicateurs suivis en continu', '13 régions couvertes', '4 rapports annuels publiés', 'Tableaux de bord personnalisés par territoire'],
    cta: 'Accéder à l\'observatoire',
    subject: 'observatoire',
  },
]

const processSteps = [
  { num: '01', title: 'Cadrage territorial', description: 'Comprendre vos spécificités, vos publics et les enjeux propres à votre territoire.' },
  { num: '02', title: 'Plan d\'action', description: 'Co-construction d\'une feuille de route adaptée à vos contraintes budgétaires et calendaires.' },
  { num: '03', title: 'Déploiement', description: 'Mise en œuvre des programmes sur le terrain avec nos équipes dédiées aux territoires.' },
  { num: '04', title: 'Reporting & pilotage', description: 'Tableaux de bord et rapports réguliers pour suivre l\'impact et ajuster les actions.' },
]

const otherPublics = [
  { label: 'Citoyens', href: '/accompagnements/citoyens', active: false },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: false },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: false },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: false },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: true },
]

export default function PouvoirsPublicsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="pt-20 bg-bg border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-text transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/accompagnements" className="hover:text-text transition-colors">Accompagnements</Link>
            <span>/</span>
            <span className="text-text font-medium">Pouvoirs publics</span>
          </div>
          {/* Navigation tabs */}
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
              {accompagnementNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    item.href === '/accompagnements/pouvoirs-publics'
                      ? 'border-accent-teal text-accent-teal'
                      : 'border-transparent text-muted hover:text-text hover:border-border'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-ink text-off-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-accent-teal text-xs font-semibold tracking-widest uppercase mb-6">
                    <span className="w-8 h-px bg-accent-teal"></span>
                    Secteur public
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Inclusion,<br />
                    transformation<br />
                    et <span className="text-accent-teal">pilotage</span><br />
                    territorial
                  </h1>
                  <p className="text-lg text-white/55 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les collectivités, administrations et établissements publics dans la compréhension et le déploiement de l'IA au service des citoyens et des agents.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact?subject=partnership&target=publics">
                      <Button variant="primary" size="lg" className="bg-accent-teal hover:bg-teal-700">
                        Discuter de votre projet
                      </Button>
                    </Link>
                    <Link href="#programmes">
                      <Button variant="ghost" className="border border-white/20 text-white/60 hover:border-white/50 hover:text-white">
                        Découvrir
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="border-l border-white/10 py-16 md:py-24 pl-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,139,139,0.18) 0%, transparent 65%)' }}></div>
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2 text-off-white">
                    <span className="text-accent-teal">13</span>
                  </div>
                  <p className="text-white/45 mb-8 max-w-xs">régions couvertes par l'observatoire territorial ICIA</p>
                  <div className="h-px bg-white/10 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['IA inclusive', 'Services publics', 'Observatoire territorial', 'Formation agents', 'Collectivités'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-white/12 text-white/40 text-xs hover:border-accent-teal hover:text-accent-teal transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <Section id="programmes" className="bg-white border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Nos programmes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Quatre axes pour<br />les pouvoirs publics</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 border border-border">
              {programmes.map((prog) => (
                <StaggerItem key={prog.num} className="p-8 border-r border-b border-border hover:bg-off-white transition-colors relative">
                  <span className="absolute top-6 right-8 text-5xl font-bold text-black/03 pointer-events-none">{prog.num}</span>
                  <h3 className="text-xl font-bold mb-3">{prog.title}</h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{prog.description}</p>
                  <ul className="space-y-1 mb-6">
                    {prog.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2">
                        <span className="text-accent-teal font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {prog.cta && (
                    <Link href={`/contact?subject=${prog.subject}`} className="inline-flex items-center gap-2 text-accent-teal text-xs font-bold tracking-widest uppercase border-b border-accent-teal/30 pb-0.5 hover:border-accent-teal transition-colors group">
                      {prog.cta}
                      <span className="transform -translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">➔</span>
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Observatoire */}
        <div className="bg-ink border-t-4 border-accent-teal">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-3 text-accent-teal/80 text-xs font-semibold tracking-widest uppercase mb-4">
                  <span className="w-6 h-px bg-accent-teal/80"></span>
                  Observatoire territorial
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-off-white">Le pouls de l'IA<br />dans les territoires</h2>
                <p className="text-white/45 leading-relaxed max-w-md">
                  Un outil de pilotage unique pour les décideurs publics : suivi de l'adoption de l'IA, identification des inégalités territoriales et recommandations personnalisées.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px bg-white/10">
                <div className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-off-white">
                    <span className="text-accent-teal">50</span>+
                  </div>
                  <p className="text-white/40 text-sm">indicateurs suivis en continu</p>
                </div>
                <div className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-off-white">
                    <span className="text-accent-teal">13</span>
                  </div>
                  <p className="text-white/40 text-sm">régions françaises couvertes</p>
                </div>
                <div className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-off-white">
                    <span className="text-accent-teal">4</span>
                  </div>
                  <p className="text-white/40 text-sm">rapports annuels publiés</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 border-b border-white/10">
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-teal">4</span>
            </div>
            <p className="text-white/45 text-sm">programmes complémentaires</p>
          </div>
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-teal">13</span>
            </div>
            <p className="text-white/45 text-sm">régions dans l'observatoire</p>
          </div>
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-teal">50+</span>
            </div>
            <p className="text-white/45 text-sm">indicateurs territoriaux</p>
          </div>
          <div className="p-8 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-teal">0€</span>
            </div>
            <p className="text-white/45 text-sm">pour les collectivités éligibles</p>
          </div>
        </div>

        {/* Process */}
        <Section className="bg-warm-mid">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Notre approche
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Un accompagnement<br />respectueux de vos contraintes</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-border">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-border hover:bg-white/50 transition-colors">
                  <span className="text-accent-teal text-xs font-bold tracking-widest uppercase block mb-3">{step.num}</span>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Pages Nav */}
        <div className="bg-bg border-y border-border py-4 px-4 md:px-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mr-2">Autres publics</span>
          {otherPublics.map((pub) => (
            <Link
              key={pub.href}
              href={pub.href}
              className={`px-3 py-1 text-sm font-medium border transition-colors ${
                pub.active
                  ? 'bg-ink text-off-white border-ink'
                  : 'border-border text-text hover:bg-ink hover:text-off-white hover:border-ink'
              }`}
            >
              {pub.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Section className="bg-bg">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Parlons de votre projet</h2>
                <p className="text-muted max-w-xl">
                  Vous êtes élu, directeur d'administration ou responsable de service public ? Discutons de votre projet d'IA et de la façon dont l'ICIA peut vous accompagner.
                </p>
              </div>
              <Link href="/contact?subject=partnership&target=publics">
                <Button variant="primary" size="lg" className="bg-ink hover:bg-accent-teal">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
