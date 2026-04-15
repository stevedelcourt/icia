import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const programs = [
  { title: 'IA par métiers', desc: 'Managers, commerciaux, RH, finance, support client, logistique', duration: '1 jour' },
  { title: 'IA & Sécurité', desc: 'Risques, données personnelles, arnaques, RGPD, bonnes pratiques', duration: '1/2 journée' },
  { title: 'IA & Esprit critique', desc: 'Comprendre les LLM, biais, hallucinations, limites des outils', duration: '1/2 journée' },
  { title: 'Modules écoles/CFA', desc: 'Cours structurés, TD, cas pratiques pour établissements', duration: 'Sur mesure' },
  { title: 'Parcours emploi IA', desc: 'Socle numérique + IA métier + badge de compétences', duration: '3-5 jours' },
  { title: 'Formation formateurs', desc: 'Former les équipes internes ou intervenants partenaires', duration: '2 jours' },
]

export default function FormationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <Link href="/offres" className="text-white/60 hover:text-white mb-6 inline-block">
                ← Nos offres
              </Link>
              <div className="inline-block px-3 py-1 bg-rouge text-white text-xs font-bold rounded-full mb-4">
                OFFRE 02
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Formations & Acculturation
              </h1>
              <p className="text-xl text-rouge font-medium mb-6">Volume & Financement OPCO</p>
              <p className="text-3xl font-bold text-white mb-2">2 000 – 5 000 € HT / jour</p>
              <p className="text-white/70">Intra-entreprise · Financement OPCO possible</p>
            </FadeIn>
          </div>
        </section>

        {/* Promesse */}
        <Section className="bg-cream">
          <FadeIn>
            <blockquote className="bg-white p-8 rounded-2xl border-l-4 border-rouge max-w-3xl">
              <p className="text-2xl font-serif text-navy italic leading-relaxed">
                Vos équipes utilisent déjà l'IA, souvent sans le savoir, parfois sans sécurité. 
                On fait en sorte qu'elles le fassent bien, dans un cadre sécurisé.
              </p>
            </blockquote>
          </FadeIn>
        </Section>

        {/* Catalogue */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-8">Catalogue de programmes</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programs.map((prog) => (
                <StaggerItem key={prog.title}>
                  <div className="bg-cream p-6 rounded-xl h-full">
                    <h3 className="font-bold text-navy mb-2">{prog.title}</h3>
                    <p className="text-sm text-text-muted mb-3">{prog.desc}</p>
                    <span className="text-xs font-bold text-rouge">{prog.duration}</span>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Exemple */}
        <Section className="bg-cream border-t border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-serif text-navy mb-6">
                  Exemple : CFA BTP Marseille (120 apprentis)
                </h2>
                <p className="text-text-muted mb-6">
                  Un CFA BTP veut intégrer l'IA dans ses formations sans savoir comment. 
                  Les formateurs ne connaissent pas les outils. Les apprentis utilisent déjà l'IA pour leurs devoirs.
                </p>
                <p className="text-2xl font-bold text-rouge mb-2">12 000 – 18 000 € HT</p>
                <p className="text-text-muted mb-6">Ingénierie pédagogique + formation formateurs</p>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="font-bold text-green-700 mb-1">Financement possible</p>
                  <p className="text-sm text-green-600">
                    100% finançable OPCO BTP · CPF pour parcours individuels · Qualiopi requis
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h3 className="font-bold text-navy mb-4">Déroulement</h3>
              <div className="space-y-4">
                {[
                  { phase: 'Phase 1', action: 'Audit de la maquette pédagogique existante (2 jours)' },
                  { phase: 'Phase 2', action: 'Co-construction de 3 modules IA métier : métrés augmentés, IA & sécurité chantier, reporting' },
                  { phase: 'Phase 3', action: 'Formation des formateurs (2 jours)' },
                  { phase: 'Phase 4', action: 'Livraison des supports + badges de compétences associés' },
                  { phase: 'Phase 5', action: 'Accompagnement sur 3 mois à la mise en place' },
                ].map((step) => (
                  <div key={step.phase} className="flex gap-4 p-4 bg-white rounded-lg">
                    <span className="text-sm font-bold text-rouge whitespace-nowrap">{step.phase}</span>
                    <span className="text-text-muted">{step.action}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Pour qui */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-6">Pour qui ?</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'DRH / Directors formation', desc: 'Former les équipes en interne' },
                { title: 'Écoles / CFA', desc: 'Modules pédagogiques clés en main' },
                { title: 'Grand public', desc: 'Ateliers acculturation, parcours emploi' },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-cream p-6 rounded-xl h-full">
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* CTA */}
        <Section className="bg-navy">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-4">
                Former vos équipes à l'IA
              </h2>
              <p className="text-white/70 mb-8">
                Programme adapté à vos besoins, finançable OPCO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=formation" variant="primary" size="lg" className="!bg-rouge !text-white">
                  Demander un devis
                </Button>
                <Button href="/offres" variant="outline" size="lg" className="!text-white !border-white">
                  Voir autres offres
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
