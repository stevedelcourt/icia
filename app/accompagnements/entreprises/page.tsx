import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const offres = [
  {
    num: '01',
    title: 'Diagnostics et audits',
    price: '~10 k€',
    priceLabel: 'Pack diagnostic complet',
    description: 'Analyse approfondie du potentiel IA de votre entreprise. Identification des cas d\'usage à forte valeur ajoutée, évaluation de la maturité numérique et recommandations personnalisées.',
    items: ['Cartographie des processus', 'Benchmark sectoriel', 'Analyse coût / bénéfice', 'Feuille de route stratégique'],
    cta: 'Demander un diagnostic',
    subject: 'diagnostic',
  },
  {
    num: '02',
    title: 'Formations ciblées',
    price: '5 k€',
    priceLabel: 'par personne, intra-entreprise',
    description: 'Formations adaptées à vos équipes, du dirigeant à l\'opérationnel. Comprendre l\'IA pour mieux la piloter, former vos équipes techniques ou sensibiliser l\'ensemble des collaborateurs.',
    items: ['Formation dirigeants (décision IA)', 'Formation équipes opérationnelles', 'Formation développeurs', 'Sensibilisation pour tous'],
    cta: 'Demander un devis',
    subject: 'formation',
  },
  {
    num: '03',
    title: 'Prototypes et POC',
    price: '30–60 k€',
    priceLabel: 'POC sur 4–6 semaines',
    description: 'Développement de preuves de concept pour valider rapidement vos cas d\'usage. Accompagnement de la conception à la mise en production, avec une approche pragmatique.',
    items: ['Identification du cas d\'usage', 'Conception technique', 'Développement itératif', 'Déploiement et suivi'],
    cta: 'Discuter d\'un POC',
    subject: 'poc',
  },
]

const processSteps = [
  { num: '01', title: 'Diagnostic gratuit', description: '30 min pour comprendre votre contexte, vos enjeux et identifier les quick wins.' },
  { num: '02', title: 'Proposition', description: 'Remise d\'une feuille de route personnalisée avec les recommandations et tarifs.' },
  { num: '03', title: 'Exécution', description: 'Déploiement de la formation ou du prototype avec une équipe dédiée ICIA.' },
  { num: '04', title: 'Mesure d\'impact', description: 'Évaluation des résultats et définition de la suite avec votre équipe.' },
]

const otherPublics = [
  { label: 'Citoyens', href: '/accompagnements/citoyens', active: false },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: true },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: false },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: false },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: false },
]

export default function EntreprisesPage() {
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
            <span className="text-text font-medium">Entreprises</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-ink text-off-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-accent-blue text-xs font-semibold tracking-widest uppercase mb-6">
                    <span className="w-8 h-px bg-accent-blue"></span>
                    Secteur privé
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Diagnostics,<br />
                    formations<br />
                    et <span className="text-accent-blue">prototypes</span> IA
                  </h1>
                  <p className="text-lg text-white/55 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les entreprises dans leur transformation par l'intelligence artificielle — diagnostics précis, formations ciblées et POC concrets orientés résultats.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact?subject=diagnostic">
                      <Button variant="primary" size="lg" className="bg-accent-blue hover:bg-blue-600">
                        Demander un diagnostic ➔
                      </Button>
                    </Link>
                    <Link href="#offres">
                      <button className="px-6 py-3 border border-white/20 text-white/60 font-medium text-base hover:border-white/50 hover:text-white transition-all rounded-md">
                        Voir les offres ➔
                      </button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="border-l border-white/10 py-16 md:py-24 pl-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(42,111,255,0.18) 0%, transparent 65%)' }}></div>
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2 text-off-white">
                    <span className="text-accent-blue">30</span> min
                  </div>
                  <p className="text-white/45 mb-8 max-w-xs">diagnostic gratuit pour évaluer le potentiel IA de votre entreprise</p>
                  <div className="h-px bg-white/10 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['Diagnostic & audit', 'Formations équipes', 'Prototypes IA', 'Feuille de route', 'POC 4–6 semaines'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-white/12 text-white/40 text-xs hover:border-accent-blue hover:text-accent-blue transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Offres */}
        <Section id="offres" className="bg-white border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Nos offres
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Trois niveaux<br />d'accompagnement</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 border border-border">
              {offres.map((offre) => (
                <StaggerItem key={offre.num} className="p-8 border-r border-b border-border hover:bg-off-white transition-colors relative">
                  <span className="absolute top-6 right-8 text-5xl font-bold text-black/03 pointer-events-none">{offre.num}</span>
                  <div className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold tracking-widest mb-4">
                    Étape {offre.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{offre.title}</h3>
                  <div className="text-2xl font-bold mb-1">{offre.price}</div>
                  <p className="text-muted text-sm mb-4">{offre.priceLabel}</p>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{offre.description}</p>
                  <ul className="space-y-1 mb-6">
                    {offre.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2">
                        <span className="text-accent-blue font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?subject=${offre.subject}`} className="inline-flex items-center gap-2 text-accent-blue text-xs font-bold tracking-widest uppercase border-b border-accent-blue/30 pb-0.5 hover:border-accent-blue transition-colors">
                    {offre.cta} ➔
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-white/10">
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              ~<span className="text-accent-blue">20</span>
            </div>
            <p className="text-white/45 text-sm">diagnostics réalisés par an</p>
          </div>
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-blue">50–80</span>
            </div>
            <p className="text-white/45 text-sm">personnes formées annuellement</p>
          </div>
          <div className="p-8 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-blue">10–15</span>
            </div>
            <p className="text-white/45 text-sm">prototypes développés par an</p>
          </div>
        </div>

        {/* Process */}
        <Section className="bg-warm-mid">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Notre approche
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">De l'idée au prototype<br />en 6 semaines</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-border">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-border hover:bg-white/50 transition-colors">
                  <span className="text-accent-blue text-xs font-bold tracking-widest uppercase block mb-3">{step.num}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Démarrez votre transformation</h2>
                <p className="text-muted max-w-xl">
                  Planifiez un diagnostic gratuit de 30 minutes pour évaluer le potentiel de l'IA pour votre entreprise. Sans engagement.
                </p>
              </div>
              <Link href="/contact?subject=diagnostic">
                <Button variant="primary" size="lg" className="bg-ink hover:bg-accent-blue">
                  Demander un diagnostic ➔
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
