import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export default function TransformationPage() {
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
                OFFRE 03
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Programme Transformation IA
              </h1>
              <p className="text-xl text-rouge font-medium mb-6">Accompagnement 6-12 mois</p>
              <p className="text-3xl font-bold text-white mb-2">30 000 – 80 000 € HT</p>
              <p className="text-white/70">Sur 6 à 12 mois</p>
            </FadeIn>
          </div>
        </section>

        {/* Promesse */}
        <Section className="bg-cream">
          <FadeIn>
            <blockquote className="bg-white p-8 rounded-2xl border-l-4 border-rouge max-w-3xl">
              <p className="text-2xl font-serif text-navy italic leading-relaxed">
                On vous aide à faire passer l'IA de l'expérimentation à la pratique quotidienne — 
                sans casser votre organisation, sans dépendre d'un seul prestataire, 
                avec des résultats mesurables tous les 3 mois.
              </p>
            </blockquote>
          </FadeIn>
        </Section>

        {/* Ce que Mentivis apporte */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-8">Ce que Mentivis apporte</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Gouvernance IA', desc: 'Création du comité IA, charte d\'usage, référent interne formé' },
                { title: 'Plan de compétences', desc: 'Cartographie des besoins par rôle, parcours de montée en compétences' },
                { title: 'Change management', desc: 'Communication interne, ateliers d\'adhésion, coaching managers' },
                { title: 'Conformité AI Act + RGPD', desc: 'Mise en cohérence des usages avec les obligations légales' },
                { title: 'Pilotage partenaires techniques', desc: 'Mentivis arbitre, contrôle, valide (Flowt ou autres)' },
                { title: 'Jalons mesure d\'impact', desc: 'KPI définis en amont, restitution CODIR trimestrielle' },
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

        {/* Exemple */}
        <Section className="bg-cream border-t border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-serif text-navy mb-6">
                  Exemple : ETI services 350 personnes
                </h2>
                <p className="text-text-muted mb-6">
                  Une ETI de services aux entreprises a réalisé un diagnostic. 3 cas d'usage prioritaires identifiés : 
                  automatisation support client, IA dans la prospection commerciale, génération de rapports. 
                  La direction veut déployer sans risque sur 9 mois.
                </p>
                <p className="text-2xl font-bold text-rouge mb-2">50 000 – 70 000 € HT</p>
                <p className="text-text-muted mb-6">9 mois, 3-4 jours/mois</p>
                <div className="bg-rouge/10 p-4 rounded-xl">
                  <p className="font-bold text-rouge mb-1">Levier de revenus</p>
                  <p className="text-sm text-text-muted">
                    Chaque diagnostic mené ici → Chaque mission se prolonge en abonnement (offre 04)
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h3 className="font-bold text-navy mb-4">Déroulement sur 9 mois</h3>
              <div className="space-y-4">
                {[
                  { phase: 'M1-M2', action: 'Mise en place gouvernance IA, charte, formation CODIR' },
                  { phase: 'M2-M4', action: 'Déploiement support client IA avec Flowt sous pilotage Mentivis' },
                  { phase: 'M4-M6', action: 'Formation équipes commerciales, déploiement IA prospection' },
                  { phase: 'M6-M8', action: 'Automatisation reporting, mesure d\'impact, ajustement' },
                  { phase: 'M9', action: 'Bilan, ROI mesuré, feuille de route phase 2' },
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

        {/* Différence avec offre 01 */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-6">Différence avec le diagnostic (offre 01) ?</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-6 rounded-xl">
              <h3 className="font-bold text-navy mb-3">Offre 01 - Diagnostic</h3>
              <p className="text-text-muted text-sm">
                Vous donne la vision et la feuille de route. 
                Vous repartirez avec un rapport et des recommandations.
              </p>
            </div>
            <div className="bg-rouge/10 p-6 rounded-xl border border-rouge/20">
              <h3 className="font-bold text-rouge mb-3">Offre 03 - Transformation</h3>
              <p className="text-text-muted text-sm">
                Nous prenons en charge la mise en œuvre. 
                Vous avez un interlocuteur unique qui pilote tout.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-navy">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white mb-4">
                Passer de l'expérimentation à la pratique
              </h2>
              <p className="text-white/70 mb-8">
                Discutons de votre transformation IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=transformation" variant="primary" size="lg" className="!bg-rouge !text-white">
                  Lancer une transformation
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
