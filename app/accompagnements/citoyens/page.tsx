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
    title: 'Acculturation à l\'IA',
    description: 'Des ateliers ludiques et accessibles pour démystifier l\'intelligence artificielle. Comprendre ce qu\'est l\'IA, comment elle fonctionne et quelles sont ses limites. Aucun prérequis technique, ouvert à tous.',
    items: ['Ateliers découverte (2h)', 'Parcours thématiques progressifs', 'Sessions questions-réponses avec des experts'],
  },
  {
    num: '02',
    title: 'Sécurité et éthique',
    description: 'Apprenez à vous protéger dans un monde où l\'IA est omniprésente. Comprendre les risques liés aux deepfakes, arnaques, désinformation, et protection de vos données personnelles.',
    items: ['Ateliers de sensibilisation aux risques', 'Guides pratiques téléchargeables', 'Ressources vérifiées et à jour'],
  },
  {
    num: '03',
    title: 'Emploi et reconversion',
    description: 'L\'IA transforme le marché du travail. Accompagnement personnalisé pour comprendre ces évolutions, identifier les opportunités et construire un projet professionnel adapté.',
    items: ['Diagnostic compétences', 'Orientation vers les formations', 'Mise en relation avec des employeurs'],
  },
  {
    num: '04',
    title: 'Passerelles vers la formation',
    description: 'L\'ICIA facilite l\'accès aux formations en IA. Orientation, mise en relation avec des organismes partenaires, et suivi personnalisé pour les personnes souhaitant se former aux métiers de l\'IA.',
    items: ['Réseau de partenaires formation', 'Aide aux démarches CPF / financement', 'Suivi personnalisé du parcours'],
  },
]

const processSteps = [
  { num: '01', title: 'Premier contact', description: 'Envoyez-nous un message ou venez directement à l\'accueil du flagship Marseille.' },
  { num: '02', title: 'Échange de 30 min', description: 'Un conseiller évalue vos besoins, votre niveau et vos objectifs pour vous orienter.' },
  { num: '03', title: 'Parcours adapté', description: 'Vous rejoignez les ateliers ou le parcours correspondant à votre profil.' },
  { num: '04', title: 'Suivi & progression', description: 'Un accompagnement continu, à votre rythme, avec des ressources accessibles en ligne.' },
]

const otherPublics = [
  { label: 'Citoyens', href: '/accompagnements/citoyens', active: true },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: false },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: false },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: false },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: false },
]

const accentColor = '#BF4D43'

export default function CitoyensPage() {
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
            <span className="text-slate-dark font-medium">Citoyens</span>
          </div>
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
              {accompagnementNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    item.href === '/accompagnements/citoyens'
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
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(191,77,67,0.15) 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                    <span className="w-8 h-px" style={{ backgroundColor: accentColor }}></span>
                    Grand public
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-dark">
                    Comprendre<br />
                    l'IA, rester<br />
                    <span style={{ color: accentColor }}>en sécurité</span>
                  </h1>
                  <p className="text-lg text-slate-dark/60 max-w-xl mb-8 leading-relaxed">
                    L'ICIA propose des parcours adaptés aux particuliers pour mieux comprendre l'intelligence artificielle, se protéger des risques et développer ses compétences vers l'emploi.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact">
                      <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
                        Être accompagné
                      </Button>
                    </Link>
                    <Link href="#programmes">
                      <Button variant="ghost" className="border border-slate-dark/10 text-slate-dark/60 hover:border-slate-dark/30 hover:text-slate-dark">
                        Découvrir
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="border-l border-border py-16 md:py-24 pl-8 flex flex-col justify-center relative overflow-hidden text-center">
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2 text-slate-dark">
                    <span style={{ color: accentColor }}>1 500</span> à 2 500
                  </div>
                  <p className="text-slate-dark/40 mb-8 max-w-xs mx-auto">personnes accompagnées par an</p>
                  <div className="h-px bg-slate-dark/5 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['Acculturation IA', 'Sécurité numérique', 'Emploi & reconversion', 'Passerelles formation', 'Sans prérequis'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-slate-dark/8 text-slate-dark/40 text-xs hover:border-slate-dark/20 hover:text-slate-dark/60 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
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
              <span style={{ color: accentColor }}>1 500</span>–2 500
            </div>
            <p className="text-slate-dark/50 text-sm">personnes accompagnées par an</p>
          </div>
          <div className="p-8 border-r border-border bg-white">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">4</div>
            <p className="text-slate-dark/50 text-sm">programmes complémentaires</p>
          </div>
          <div className="p-8 bg-white">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>0€</span>
            </div>
            <p className="text-slate-dark/50 text-sm">pour tous les citoyens — accès entièrement gratuit</p>
          </div>
        </div>

        {/* Programmes */}
        <Section id="programmes" className="bg-ivory-light border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-slate-dark/50">
              <span className="w-6 h-px bg-slate-dark/20"></span>
              Nos programmes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-dark">Quatre parcours<br />pour les citoyens</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 border border-border">
              {programmes.map((prog) => (
                <StaggerItem key={prog.num} className="p-8 border-r border-b border-border hover:bg-white transition-colors relative group">
                  <span className="absolute top-6 right-8 text-5xl font-bold text-slate-dark/5 pointer-events-none">{prog.num}</span>
                  <h3 className="text-xl font-bold mb-3 text-slate-dark">{prog.title}</h3>
                  <p className="text-slate-dark/60 text-sm mb-4 leading-relaxed">{prog.description}</p>
                  <ul className="space-y-1 mb-6">
                    {prog.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2 text-slate-dark/60">
                        <span className="font-bold" style={{ color: accentColor }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-slate-dark/10 pb-0.5 hover:border-slate-dark/30 transition-colors group" style={{ color: accentColor }}>
                    Découvrir
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
              Comment ça se passe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-dark">Simple, rapide,<br />sans engagement</h2>
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

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-border">
          <div className="p-8 border-r border-border bg-white text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>1 500</span>–2 500
            </div>
            <p className="text-slate-dark/50 text-sm">personnes accompagnées par an</p>
          </div>
          <div className="p-8 border-r border-border bg-white text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">4</div>
            <p className="text-slate-dark/50 text-sm">programmes complémentaires</p>
          </div>
          <div className="p-8 bg-white text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>0€</span>
            </div>
            <p className="text-slate-dark/50 text-sm">pour tous les citoyens — accès entièrement gratuit</p>
          </div>
        </div>

        {/* CTA */}
        <Section className="bg-ivory-light">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-dark">Prêt à vous lancer ?</h2>
                <p className="text-slate-dark/60 max-w-xl">
                  Que vous soyez curieux, en reconversion ou souhaitant mieux comprendre l'IA au quotidien, l'ICIA a un programme pour vous.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
                  Être accompagné
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
