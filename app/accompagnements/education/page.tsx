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

const programme = [
  {
    num: '01',
    title: 'Bibliothèque pédagogique',
    description: 'Une ressource complète et libre d\'accès pour intégrer l\'histoire de l\'IA dans tous les niveaux — du primaire à l\'université. Séquences pédagogiques prêtes à l\'emploi.',
    items: ['Séquences pédagogiques clé en main', 'Exercices et mises en situation', 'Ressources différenciées par niveau', 'Mises à jour régulières'],
    cta: 'Accéder à la bibliothèque',
    subject: 'education',
  },
  {
    num: '02',
    title: 'Formation des formateurs',
    description: 'Accompagnement dédié aux enseignants et formateurs pour maîtriser les concepts de l\'IA et les intégrer dans leurs pratiques pédagogiques, quel que soit le niveau scolaire.',
    items: ['Ateliers d\'initiation à l\'IA (2 jours)', 'Formation à l\'usage pédagogique des outils IA', 'Communauté d\'enseignants', 'Ressources exclusives formateurs'],
    cta: 'Former vos équipes',
    subject: 'formation-formateurs',
  },
  {
    num: '03',
    title: 'Certifications',
    description: 'Des certifications officielles pour les élèves et étudiants, reconnaissables par les employeurs. Un standard commun pour valider les compétences en IA dans le parcours éducatif.',
    items: ['Certification socle IA (lycée)', 'Certification avancée (supérieur)', 'Badges numériques partageables', 'Reconnaissance employeurs partenaires'],
  },
  {
    num: '04',
    title: 'Accréditation institutionnelle',
    description: 'Accompagnement des établissements pour obtenir une accréditation ICIA, gage de qualité dans l\'histoire de l\'IA. Un label reconnu au niveau national.',
    items: ['Audit du programme existant', 'Feuille de route pédagogique', 'Label ICIA Éducation', 'Mise en réseau avec d\'autres établissements'],
    cta: 'Demander une accréditation',
    subject: 'accreditation',
  },
]

const ressources = [
  { label: 'Guide', title: 'Guide pédagogique IA', description: '160 pages pour comprendre comment intégrer l\'IA dans vos programmes, avec des exemples concrets par matière.' },
  { label: 'Outil', title: 'Fiches activités prêtes', description: '50+ fiches d\'activities pédagogiques adaptées du primaire au supérieur, utilisables immédiatement.' },
  { label: 'Formation', title: 'Module formateurs (2j)', description: 'Programme intensif de 2 jours pour former vos enseignants à l\'IA — théorie, pratique et pédagogie.' },
]

const processSteps = [
  { num: '01', title: 'Audit pédagogique', description: 'Évaluation des programmes, des ressources existantes et des besoins de votre établissement.' },
  { num: '02', title: 'Plan d\'intégration', description: 'Co-construction d\'une feuille de route adaptée à votre calendrier académique.' },
  { num: '03', title: 'Déploiement', description: 'Formation des formateurs, mise à disposition des ressources et accompagnement terrain.' },
  { num: '04', title: 'Accréditation', description: 'Évaluation finale et remise du label ICIA Éducation si les critères sont atteints.' },
]

const otherPublics = [
  { label: 'Citoyen', href: '/accompagnements/citoyens', active: false },
  { label: 'Entreprises', href: '/accompagnements/entreprises', active: false },
  { label: 'Écoles & Universités', href: '/accompagnements/education', active: true },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs', active: false },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics', active: false },
]

const accentColor = '#023D87'

export default function EducationPage() {
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
            <span className="text-slate-dark font-medium">Écoles & Universités</span>
          </div>
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex gap-1 overflow-x-auto pb-0 -mb-px">
              {accompagnementNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    item.href === '/accompagnements/education'
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
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(122,158,126,0.15) 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="py-16 md:py-24 pr-8">
                <FadeIn>
                  <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                    <span className="w-8 h-px" style={{ backgroundColor: accentColor }}></span>
                    Éducation
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-slate-dark">
                    Former<br />
                    les formateurs<br />
                    de <span style={{ color: accentColor }}>demain</span>
                  </h1>
                  <p className="text-lg text-slate-dark/60 max-w-xl mb-8 leading-relaxed">
                    L'ICIA accompagne les établissements d'enseignement dans l'intégration de l'IA : bibliothèque pédagogique, formation des enseignants, certifications et parcours accrédités.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button href="/contact?subject=education" variant="primary" size="lg">
                      Nous contacter
                    </Button>
                    <Button href="#programmes" variant="ghost">
                      Découvrir
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="grid md:grid-cols-3 border-b border-border">
          <div className="p-8 border-r border-border bg-white text-center">
            <div className="text-4xl md:text-5xl font-stats mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>3</span>
            </div>
            <p className="text-slate-dark/50 text-sm">niveaux couverts : primaire, secondaire, supérieur</p>
          </div>
          <div className="p-8 border-r border-border bg-white text-center">
            <div className="text-4xl md:text-5xl font-stats mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>50+</span>
            </div>
            <p className="text-slate-dark/50 text-sm">fiches activités dans la bibliothèque</p>
          </div>
          <div className="p-8 bg-white text-center">
            <div className="text-4xl md:text-5xl font-stats mb-2 text-slate-dark">
              <span style={{ color: accentColor }}>2</span> certifs
            </div>
            <p className="text-slate-dark/50 text-sm">reconnues par les employeurs partenaires</p>
          </div>
        </div>

        {/* Programmes */}
        <Section id="programmes" className="bg-ivory-light border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-slate-dark/50">
              <span className="w-6 h-px bg-slate-dark/20"></span>
              Nos programmes
            </div>
            <h2 className="text-3xl md:text-4xl mb-12 text-slate-dark">Quatre axes pour<br />l'éducation</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 border border-border">
              {programme.map((prog) => (
                <StaggerItem key={prog.num} className="p-8 border-r border-b border-border hover:bg-white transition-colors relative">
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
                  {prog.cta && (
                    <Link href={`/contact?subject=${prog.subject}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-slate-dark/10 pb-0.5 hover:border-slate-dark/30 transition-colors group" style={{ color: accentColor }}>
                      {prog.cta}
                      <span className="transform -translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Ressources */}
        <Section className="bg-ivory-medium border-t border-border">
          <FadeIn>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase mb-4 text-slate-dark/50">
              <span className="w-6 h-px bg-slate-dark/20"></span>
              Ressources clés
            </div>
            <h2 className="text-3xl md:text-4xl mb-12 text-slate-dark">Ce que vous recevez<br />dès le premier contact</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-4">
              {ressources.map((res) => (
                <StaggerItem key={res.title} className="p-6 bg-white border border-border hover:border-slate-dark/20 hover:shadow-md transition-all relative group">
                  <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: accentColor }}></div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: accentColor }}>{res.label}</div>
                  <h3 className="font-bold mb-2 text-slate-dark">{res.title}</h3>
                  <p className="text-slate-dark/50 text-sm leading-relaxed">{res.description}</p>
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
              Mise en œuvre
            </div>
            <h2 className="text-3xl md:text-4xl mb-12 text-slate-dark">Un accompagnement<br />sur mesure pour votre établissement</h2>
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
                <h2 className="text-3xl md:text-4xl mb-3 text-slate-dark">Votre établissement prend le virage IA ?</h2>
                <p className="text-slate-dark/60 max-w-xl">
                  Discutons de vos besoins pédagogiques et construisons ensemble un programme adapté à vos élèves et enseignants.
                </p>
              </div>
              <Button href="/contact?subject=education" variant="primary" size="lg">
                  Nous contacter
                </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
