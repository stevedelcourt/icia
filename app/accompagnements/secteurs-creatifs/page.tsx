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

const accentColor = '#8B7A6B'

export default function SecteursCreatifsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Breadcrumb & Nav */}
        <div className="pt-20 border-b border-white/5 bg-slate-dark">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/accompagnements" className="hover:text-white transition-colors">Accompagnements</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Secteurs créatifs</span>
          </div>
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
              {accompagnementNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    item.href === '/accompagnements/secteurs-creatifs'
                      ? 'border-white/60 text-white'
                      : 'border-transparent text-white/40 hover:text-white hover:border-white/20'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-slate-dark overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(139,122,107,0.2) 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                    <span className="w-8 h-px" style={{ backgroundColor: accentColor }}></span>
                    Industries créatives
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-ivory-light">
                    Créer avec l'IA,<br />
                    sans perdre<br />
                    son <span style={{ color: accentColor }}>identite</span>
                  </h1>
                  <p className="text-lg text-white/50 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les acteurs des industries créatives dans l'adoption de l'IA — ateliers pratiques, protection juridique et laboratoire d'innovation créative.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact?subject=creatifs">
                      <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
                        Nous contacter
                      </Button>
                    </Link>
                    <Link href="#programmes">
                      <Button variant="ghost" className="border border-white/10 text-white/60 hover:border-white/30 hover:text-white">
                        Découvrir
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="border-l border-white/5 py-16 md:py-24 pl-8 flex flex-col justify-center relative overflow-hidden">
                <FadeIn delay={0.1}>
                  <div className="text-5xl md:text-7xl font-bold mb-2 text-ivory-light">
                    <span style={{ color: accentColor }}>6</span> secteurs
                  </div>
                  <p className="text-white/40 mb-8 max-w-xs">couverts par nos programmes dédiés aux industries créatives</p>
                  <div className="h-px bg-white/5 mb-8"></div>
                  <div className="flex flex-wrap gap-2">
                    {['Ateliers créatifs', 'Droit & IA', 'Labo innovation', 'Monétisation', 'Propriété intellectuelle'].map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-white/8 text-white/40 text-xs hover:border-white/20 hover:text-white/60 transition-colors cursor-default">
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
        <div className="border-b border-white/5 bg-slate-medium">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap">
              {sectors.map((sector, i) => (
                <span key={sector} className={`px-4 py-3 text-sm font-medium border-r border-b border-white/5 hover:bg-white/[0.02] hover:text-ivory-light transition-colors cursor-default ${i === sectors.length - 1 ? 'border-r-0' : ''}`}>
                  <span className="w-2 h-2 rounded-full mr-2 inline-block" style={{ backgroundColor: accentColor }}></span>
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-white/5">
          <div className="p-8 border-r border-white/5 bg-slate-medium">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-ivory-light">
              <span style={{ color: accentColor }}>6</span>
            </div>
            <p className="text-white/40 text-sm">secteurs créatifs couverts</p>
          </div>
          <div className="p-8 border-r border-white/5 bg-slate-medium">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-ivory-light">
              <span style={{ color: accentColor }}>4</span>
            </div>
            <p className="text-white/40 text-sm">types d'ateliers disponibles</p>
          </div>
          <div className="p-8 bg-slate-medium">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-ivory-light">
              <span style={{ color: accentColor }}>1</span> labo
            </div>
            <p className="text-white/40 text-sm">dédié à l'innovation créative IA (flagship Marseille)</p>
          </div>
        </div>

        {/* Programmes */}
        <Section id="programmes" className="bg-slate-dark border-t border-white/5">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-white/40">
              <span className="w-6 h-px bg-white/20"></span>
              Secteurs couverts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ivory-light">Les industries créatives<br />face à l'IA</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 border border-white/5">
              {programmes.map((prog) => (
                <StaggerItem key={prog.num} className="p-8 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors relative">
                  <span className="absolute top-6 right-8 text-5xl font-bold text-ivory-light/5 pointer-events-none">{prog.num}</span>
                  <h3 className="text-xl font-bold mb-3 text-ivory-light">{prog.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{prog.description}</p>
                  <ul className="space-y-1 mb-6">
                    {prog.items.map((item) => (
                      <li key={item} className="text-sm flex items-start gap-2 text-white/40">
                        <span className="font-bold" style={{ color: accentColor }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {prog.cta && (
                    <Link href={`/contact?subject=${prog.subject}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-white/10 pb-0.5 hover:border-white/30 transition-colors group" style={{ color: accentColor }}>
                      {prog.cta}
                      <span className="transform -translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Legal Panel */}
        <div className="bg-slate-medium border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-12">
            {legalPanel.map((panel) => (
              <div key={panel.title}>
                <h3 className="text-xl font-bold mb-3 text-ivory-light">{panel.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{panel.description}</p>
                <ul className="space-y-1">
                  {panel.items.map((item) => (
                    <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                      <span className="font-bold" style={{ color: accentColor }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <Section className="bg-slate-medium">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-white/40">
              <span className="w-6 h-px bg-white/20"></span>
              Comment ça marche
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ivory-light">De la découverte<br />à la maîtrise créative</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-4 border border-white/5">
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="p-6 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase block mb-3" style={{ color: accentColor }}>{step.num}</span>
                  <h4 className="font-bold mb-2 text-ivory-light">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Pages Nav */}
        <div className="bg-slate-dark border-y border-white/5 py-4 px-4 md:px-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40 mr-2">Autres publics</span>
          {otherPublics.map((pub) => (
            <Link
              key={pub.href}
              href={pub.href}
              className={`px-3 py-1 text-sm font-medium border transition-colors ${
                pub.active
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'border-white/10 text-white/60 hover:bg-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {pub.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Section className="bg-slate-dark">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-ivory-light">Prêt à explorer l'IA créative ?</h2>
                <p className="text-white/50 max-w-xl">
                  Rejoignez nos ateliers, accédez au laboratoire ou consultez notre équipe pour un accompagnement sur mesure dans votre secteur.
                </p>
              </div>
              <Link href="/contact?subject=creatifs">
                <Button variant="primary" size="lg" style={{ backgroundColor: accentColor, borderColor: accentColor }}>
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
