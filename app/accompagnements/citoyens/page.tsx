import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

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

export default function CitoyensPage() {
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
            <span className="text-text font-medium">Citoyens</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-ink text-off-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
                    <span className="w-8 h-px bg-accent"></span>
                    Grand public
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Comprendre<br />
                    l'IA, rester<br />
                    <span className="text-accent">en sécurité</span>
                  </h1>
                  <p className="text-lg text-white/55 max-w-xl mb-8 leading-relaxed">
                    L'ICIA propose des parcours adaptés aux particuliers pour mieux comprendre l'intelligence artificielle, se protéger des risques et développer ses compétences vers l'emploi.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact">
                      <Button variant="primary" size="lg">
                        Être accompagné ➔
                      </Button>
                    </Link>
                    <Link href="#programmes">
                      <button className="px-6 py-3 border border-white/20 text-white/60 font-medium text-base hover:border-white/50 hover:text-white transition-all rounded-md">
                        Découvrir ➔
                      </button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="border-l border-white/10 py-16 md:py-24 pl-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-accent/20 to-transparent pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(232,75,26,0.18) 0%, transparent 65%)' }}></div>
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2">
                    <span className="text-accent">1 500</span> à 2 500
                  </div>
                  <p className="text-white/45 mb-8 max-w-xs">personnes accompagnées par an</p>
                  <div className="h-px bg-white/10 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['Acculturation IA', 'Sécurité numérique', 'Emploi & reconversion', 'Passerelles formation', 'Sans prérequis'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-white/12 text-white/40 text-xs hover:border-accent hover:text-accent transition-colors cursor-default">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Quatre parcours<br />pour les citoyens</h2>
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
                        <span className="text-accent font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase border-b border-accent/30 pb-0.5 hover:border-accent transition-colors">
                    Découvrir ➔
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
              <span className="text-accent">1 500</span>–2 500
            </div>
            <p className="text-white/45 text-sm">personnes accompagnées par an</p>
          </div>
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">4</div>
            <p className="text-white/45 text-sm">programmes complémentaires</p>
          </div>
          <div className="p-8 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent">0€</span>
            </div>
            <p className="text-white/45 text-sm">pour tous les citoyens — accès entièrement gratuit</p>
          </div>
        </div>

        {/* Process */}
        <Section className="bg-warm-mid">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Comment ça se passe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Simple, rapide,<br />sans engagement</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-border">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-border hover:bg-white/50 transition-colors">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">{step.num}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Prêt à vous lancer ?</h2>
                <p className="text-muted max-w-xl">
                  Que vous soyez curieux, en reconversion ou souhaitant mieux comprendre l'IA au quotidien, l'ICIA a un programme pour vous.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Être accompagné ➔
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
