import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const sectors = ['Musique & audio', 'Arts visuels & design', 'Cinéma & audiovisuel', 'Jeux vidéo', 'Édition & presse', 'Architecture & mode']

const programmes = [
  {
    num: '01',
    title: 'Ateliers créatifs IA',
    description: 'Des ateliers pratiques pour explorer les outils de génération IA dans votre discipline. Apprendre à utiliser l\'IA comme outil d\'amplification de votre créativité, pas de substitution.',
    items: ['Atelier génération d\'images (DALL-E, Midjourney…)', 'Atelier composition musicale assistée', 'Atelier écriture et narration augmentée', 'Sessions par secteur créatif'],
    cta: 'S\'inscrire à un atelier',
    subject: 'atelier-creatif',
  },
  {
    num: '02',
    title: 'Sécurité juridique',
    description: 'Comprendre et naviguer dans le cadre légal de l\'IA créative : droit d\'auteur, propriété intellectuelle, licences, et protection de vos créations face aux modèles génératifs.',
    items: ['Conférences droit de l\'IA & créativité', 'Guides pratiques par secteur', 'Consultations avec des juristes spécialisés', 'Veille réglementaire (AI Act…)'],
    cta: 'Consulter un expert',
    subject: 'juridique',
  },
  {
    num: '03',
    title: 'Laboratoire d\'innovation',
    description: 'Un espace dédié pour tester, prototyper et expérimenter avec les derniers outils d\'IA créative. Accès aux équipements et accompagnement technique pour vos projets créatifs.',
    items: ['Accès au labo IA (flagship Marseille)', 'Accompagnement technique dédié', 'Sessions de prototypage intensif', 'Résidences artistes & IA'],
    cta: 'Réserver un accès',
    subject: 'laboratoire',
  },
  {
    num: '04',
    title: 'Monétisation & nouveaux modèles',
    description: 'Explorer les nouveaux modèles économiques offerts par l\'IA aux créateurs : licences, collaborations humain-IA, et nouvelles formes de rémunération dans l\'économie créative augmentée.',
    items: ['Ateliers business model créatif', 'Réseau d\'entreprises partenaires', 'Mise en relation créateurs / marques', 'Veille économique sectorielle'],
  },
]

const legalPanel = [
  {
    title: 'L\'IA et le droit d\'auteur',
    description: 'Le cadre juridique de l\'IA créative évolue rapidement. L\'ICIA assure une veille constante et produit des ressources accessibles pour que les créateurs comprennent leurs droits et obligations.',
    items: ['AI Act européen et ses implications pour les créateurs', 'Droits sur les œuvres générées par IA', 'Protection des œuvres humaines face aux IA', 'Contrats et licences dans l\'économie IA'],
  },
  {
    title: 'Notre positionnement',
    description: 'L\'ICIA défend une vision de l\'IA comme outil au service de la créativité humaine — non comme son remplacement. Nos programmes sont pensés pour augmenter les créateurs, pas les supplanter.',
    items: ['L\'humain reste auteur et décisionnaire', 'Transparence sur l\'usage des outils IA', 'Respect de la diversité créative', 'Dialogue avec les organisations professionnelles'],
  },
]

const processSteps = [
  { num: '01', title: 'Atelier découverte', description: '2h pour explorer les outils IA dans votre discipline créative spécifique.' },
  { num: '02', title: 'Cadrage juridique', description: 'Comprendre vos droits et obligations avant d\'utiliser l\'IA dans vos créations professionnelles.' },
  { num: '03', title: 'Projet en labo', description: 'Accès au laboratoire pour concrétiser un projet créatif augmenté avec l\'IA.' },
  { num: '04', title: 'Réseau & visibilité', description: 'Intégration dans le réseau ICIA et opportunités de mise en avant de vos créations.' },
]

const otherPublics = [
  { label: 'Citoyens', href: '/accompagnements/citoyens', active: false },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: false },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: false },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: true },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: false },
]

export default function SecteursCreatifsPage() {
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
            <span className="text-text font-medium">Secteurs créatifs</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-ink text-off-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-accent-purple text-xs font-semibold tracking-widest uppercase mb-6">
                    <span className="w-8 h-px bg-accent-purple"></span>
                    Industries créatives
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Créer avec l'IA,<br />
                    sans perdre<br />
                    son <span className="text-accent-purple">identite</span>
                  </h1>
                  <p className="text-lg text-white/55 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les acteurs des industries créatives dans l'adoption de l'IA — ateliers pratiques, protection juridique et laboratoire d'innovation créative.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact?subject=creatifs">
                      <Button variant="primary" size="lg" className="bg-accent-purple hover:bg-purple-700">
                        Nous contacter ➔
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
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(124,77,255,0.18) 0%, transparent 65%)' }}></div>
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2 text-off-white">
                    <span className="text-accent-purple">6</span> secteurs
                  </div>
                  <p className="text-white/45 mb-8 max-w-xs">couverts par nos programmes dédiés aux industries créatives</p>
                  <div className="h-px bg-white/10 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['Ateliers créatifs', 'Droit & IA', 'Labo innovation', 'Monétisation', 'Propriété intellectuelle'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-white/12 text-white/40 text-xs hover:border-accent-purple hover:text-accent-purple transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors strip */}
        <div className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap">
              {sectors.map((sector, i) => (
                <span key={sector} className={`px-4 py-3 text-sm font-medium border-r border-b border-border hover:bg-accent-purple hover:text-white transition-colors cursor-default ${i === sectors.length - 1 ? 'border-r-0' : ''}`}>
                  <span className="w-2 h-2 rounded-full bg-accent-purple mr-2 inline-block"></span>
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Programmes */}
        <Section id="programmes" className="bg-white border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Secteurs couverts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Les industries créatives<br />face à l'IA</h2>
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
                        <span className="text-accent-purple font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {prog.cta && (
                    <Link href={`/contact?subject=${prog.subject}`} className="inline-flex items-center gap-2 text-accent-purple text-xs font-bold tracking-widest uppercase border-b border-accent-purple/30 pb-0.5 hover:border-accent-purple transition-colors">
                      {prog.cta} ➔
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Legal Panel */}
        <div className="bg-ink border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-12">
            {legalPanel.map((panel) => (
              <div key={panel.title}>
                <h3 className="text-xl font-bold mb-3 text-off-white">{panel.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{panel.description}</p>
                <ul className="space-y-1">
                  {panel.items.map((item) => (
                    <li key={item} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="text-accent-purple font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-white/10">
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-purple">6</span>
            </div>
            <p className="text-white/45 text-sm">secteurs créatifs couverts</p>
          </div>
          <div className="p-8 border-r border-white/10 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-purple">4</span>
            </div>
            <p className="text-white/45 text-sm">types d'ateliers disponibles</p>
          </div>
          <div className="p-8 bg-ink">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-off-white">
              <span className="text-accent-purple">1</span> labo
            </div>
            <p className="text-white/45 text-sm">dédié à l'innovation créative IA (flagship Marseille)</p>
          </div>
        </div>

        {/* Process */}
        <Section className="bg-warm-mid">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-muted text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-muted"></span>
              Comment ça marche
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">De la découverte<br />à la maîtrise créative</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-border">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-border hover:bg-white/50 transition-colors">
                  <span className="text-accent-purple text-xs font-bold tracking-widest uppercase block mb-3">{step.num}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Prêt à explorer l'IA créative ?</h2>
                <p className="text-muted max-w-xl">
                  Rejoignez nos ateliers, accédez au laboratoire ou consultez notre équipe pour un accompagnement sur mesure dans votre secteur.
                </p>
              </div>
              <Link href="/contact?subject=creatifs">
                <Button variant="primary" size="lg" className="bg-ink hover:bg-accent-purple">
                  Nous contacter ➔
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
