import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const accompagnementNav = [
  { label: 'Citoyen', href: '/accompagnements/citoyens' },
  { label: 'Entreprises', href: '/accompagnements/entreprises' },
  { label: 'Écoles & Universités', href: '/accompagnements/education' },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs' },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics' },
]

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
  { label: 'Citoyen', href: '/accompagnements/citoyens', active: false },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: true },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: false },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: false },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: false },
]

const accentColor = '#D4A27F'

export default function EntreprisesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Breadcrumb & Nav */}
        <div className="pt-20 border-b border-border bg-ivory-light">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 text-sm text-slate-dark/50">
            <Link href="/" className="hover:text-slate-dark transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/accompagnements" className="hover:text-slate-dark transition-colors">Accompagnements</Link>
            <span>/</span>
            <span className="text-slate-dark font-medium">Entreprises</span>
          </div>
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
              {accompagnementNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    item.href === '/accompagnements/entreprises'
                      ? 'border-slate-dark text-slate-dark'
                      : 'border-transparent text-slate-dark/50 hover:text-slate-dark hover:border-border'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-ivory-light overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(212,162,127,0.15) 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                    <span className="w-8 h-px" style={{ backgroundColor: accentColor }}></span>
                    Secteur privé
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-dark">
                    Diagnostics,<br />
                    formations<br />
                    et <span style={{ color: accentColor }}>prototypes</span> IA
                  </h1>
                  <p className="text-lg text-slate-dark/60 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les entreprises dans leur transformation par l'intelligence artificielle — diagnostics précis, formations ciblées et POC concrets orientés résultats.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact?subject=diagnostic">
                      <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
                        Demander un diagnostic
                      </Button>
                    </Link>
                    <Link href="#offres">
                      <Button variant="ghost" className="border border-slate-dark/10 text-slate-dark/60 hover:border-slate-dark/30 hover:text-slate-dark">
                        Voir les offres
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-border">
          <div className="p-8 border-r border-border bg-white">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              ~<span style={{ color: accentColor }}>20</span>
            </div>
            <p className="text-slate-dark/50 text-sm">diagnostics réalisés par an</p>
          </div>
          <div className="p-8 border-r border-border bg-white">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>50–80</span>
            </div>
            <p className="text-slate-dark/50 text-sm">personnes formées annuellement</p>
          </div>
          <div className="p-8 bg-white">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>10–15</span>
            </div>
            <p className="text-slate-dark/50 text-sm">prototypes développés par an</p>
          </div>
        </div>

        {/* Offres */}
        <Section id="offres" className="bg-ivory-light border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-slate-dark/50">
              <span className="w-6 h-px bg-slate-dark/20"></span>
              Nos offres
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-dark">Trois niveaux<br />d'accompagnement</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 border border-border">
              {offres.map((offre) => (
                <StaggerItem key={offre.num} className="p-8 border-r border-b border-border hover:bg-white transition-colors relative group">
                  <span className="absolute top-6 right-8 text-5xl font-bold text-slate-dark/5 pointer-events-none">{offre.num}</span>
                  <div className="inline-block px-3 py-1 border text-xs font-bold tracking-widest mb-4" style={{ borderColor: accentColor, color: accentColor, backgroundColor: `${accentColor}10` }}>
                    Étape {offre.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-dark">{offre.title}</h3>
                  <div className="text-2xl font-bold mb-1 text-slate-dark">{offre.price}</div>
                  <p className="text-slate-dark/50 text-sm mb-4">{offre.priceLabel}</p>
                  <p className="text-slate-dark/60 text-sm mb-4 leading-relaxed">{offre.description}</p>
                  <ul className="space-y-1 mb-6">
                    {offre.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2 text-slate-dark/60">
                        <span className="font-bold" style={{ color: accentColor }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?subject=${offre.subject}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-slate-dark/10 pb-0.5 hover:border-slate-dark/30 transition-colors group" style={{ color: accentColor }}>
                    {offre.cta}
                    <span className="transform -translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Process */}
        <Section className="bg-ivory-medium">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-slate-dark/50">
              <span className="w-6 h-px bg-slate-dark/20"></span>
              Notre approche
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-dark">De l'idée au prototype<br />en 6 semaines</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-border">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-border hover:bg-white transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: accentColor }}>{step.num}</span>
                  <h4 className="font-bold mb-2 text-slate-dark">{step.title}</h4>
                  <p className="text-slate-dark/50 text-sm leading-relaxed">{step.description}</p>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Pages Nav */}
        <div className="bg-ivory-light border-y border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
            <div className="flex gap-1 overflow-x-auto">
              <span className="px-4 py-3 text-sm font-medium text-slate-dark/50 whitespace-nowrap">Autres publics</span>
              {otherPublics.map((pub) => (
                <Link
                  key={pub.href}
                  href={pub.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    pub.active
                      ? 'border-slate-dark text-slate-dark'
                      : 'border-transparent text-slate-dark/50 hover:text-slate-dark hover:border-border'
                  }`}
                >
                  {pub.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Section className="bg-ivory-light">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-dark">Démarrez votre transformation</h2>
                <p className="text-slate-dark/60 max-w-xl">
                  Planifiez un diagnostic gratuit de 30 minutes pour évaluer le potentiel de l'IA pour votre entreprise. Sans engagement.
                </p>
              </div>
              <Link href="/contact?subject=diagnostic">
                <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
                  Demander un diagnostic
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
