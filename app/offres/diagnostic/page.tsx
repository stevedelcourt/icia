import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

export default function DiagnosticPage() {
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
                OFFRE 01
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Diagnostic IA & AI Act
              </h1>
              <p className="text-xl text-rouge font-medium mb-6">Porte d'entrée universelle</p>
              <p className="text-3xl font-bold text-white mb-2">8 000 – 12 000 € HT</p>
              <p className="text-white/70">En 4 à 6 semaines</p>
            </FadeIn>
          </div>
        </section>

        {/* Promesse */}
        <Section className="bg-cream">
          <FadeIn>
            <blockquote className="bg-white p-8 rounded-2xl border-l-4 border-rouge max-w-3xl">
              <p className="text-2xl font-serif text-navy italic leading-relaxed">
                En 4 à 6 semaines, vous savez exactement où vous en êtes, où vous pouvez aller, 
                et ce que l'AI Act vous impose concrètement — avec une feuille de route prête à exécuter.
              </p>
            </blockquote>
          </FadeIn>
        </Section>

        {/* Ce que vous recevez */}
        <Section className="bg-white">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-8">Ce que vous recevez</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Cartographie des usages IA', desc: 'Outils, données et processus actuels cartographiés' },
                { title: 'Mesure de maturité IA', desc: 'Gouvernance, culture, compétences, infrastructure' },
                { title: 'Analyse risques AI Act', desc: 'Classification, obligations haut risque, GPAI, RGPD' },
                { title: 'Cas d\'usage prioritaires', desc: '3-5 cas identifiés avec estimation ROI' },
                { title: 'Feuille de route 12 mois', desc: 'Quick wins + chantiers structurants' },
                { title: 'Restitution CODIR', desc: 'Rapport exécutif présenté en comité de direction' },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-cream p-6 rounded-xl">
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Exemple */}
        <Section className="bg-white border-t border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-serif text-navy mb-6">
                  Exemple : PME logistique 80 personnes (Marseille)
                </h2>
                <p className="text-text-muted mb-6">
                  Un transporteur régional utilise ChatGPT en informel, sans politique IA, 
                  inquiet du RGPD et de la concurrence. Objectif : structurer une approche IA sans risque.
                </p>
                <p className="text-2xl font-bold text-rouge mb-2">9 500 € HT</p>
                <p className="text-text-muted mb-6">5-6 jours consultants</p>
                <div className="bg-rouge/10 p-4 rounded-xl">
                  <p className="font-bold text-rouge mb-1">Levier d'achat</p>
                  <p className="text-sm text-text-muted">
                    AI Act en vigueur août 2026 — urgence réglementaire = achat immédiat. 
                    Ticket décidable par CEO/DAF seul.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h3 className="font-bold text-navy mb-4">Déroulement</h3>
              <div className="space-y-4">
                {[
                  { phase: 'J1-J3', action: 'Interviews : dirigeant, DAF, responsable opérations, DSI' },
                  { phase: 'J4-J10', action: 'Analyse des données, outils en place, cartographie risques AI Act' },
                  { phase: 'J11-J15', action: 'Formalisation cas d\'usage : optimisations tournées, service client IA, reporting auto' },
                  { phase: 'J15-J18', action: 'Rédaction feuille de route + rapport de conformité' },
                  { phase: 'J20', action: 'Restitution CODIR — Décision de lancement offre 03' },
                ].map((step) => (
                  <div key={step.phase} className="flex gap-4 p-4 bg-cream rounded-lg">
                    <span className="text-sm font-bold text-rouge whitespace-nowrap">{step.phase}</span>
                    <span className="text-text-muted">{step.action}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Pour qui */}
        <Section className="bg-cream">
          <FadeIn>
            <h2 className="text-2xl font-serif text-navy mb-6">Pour qui ?</h2>
          </FadeIn>
          <Stagger>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'PME / ETI', desc: 'Dirigeants, DAF, directeurs opérationnels', pain: 'Pas de DSI IA interne, peur RGPD, AI Act méconnu' },
                { title: 'Collectivités', desc: 'Métropoles, communes, conseils régionaux', pain: 'Modernisation services, PRIAM, éthique' },
                { title: 'Établissements publics', desc: 'Organismes publics, hôpitaux, universités', pain: 'Souveraineté, transparence, formation agents' },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="bg-white p-6 rounded-xl h-full">
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted mb-3">{item.desc}</p>
                    <p className="text-xs text-rouge">↳ {item.pain}</p>
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
                Prêt à structurer votre approche IA ?
              </h2>
              <p className="text-white/70 mb-8">
                Diagnostic gratuit de 30 minutes pour évaluer votre situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact?subject=diagnostic" variant="primary" size="lg" className="!bg-rouge !text-white">
                  Demander un diagnostic
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
