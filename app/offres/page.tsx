import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/FadeIn'

const offers = [
  {
    num: '01',
    title: 'Diagnostic IA & AI Act',
    tagline: 'Porte d\'entrée universelle',
    price: '8 000 – 12 000 €',
    duration: '4-6 semaines',
    description: 'En 4 à 6 semaines, vous savez exactement où vous en êtes, où vous pouvez aller, et ce que l\'AI Act vous impose concrètement — avec une feuille de route prête à exécuter.',
    deliverables: [
      'Cartographie des usages IA actuels',
      'Mesure de maturité IA (gouvernance, culture, compétences)',
      'Analyse risques AI Act (classification, obligations haut risque, GPAI)',
      'Identification de 3-5 cas d\'usage prioritaires avec estimation ROI',
      'Feuille de route 12 mois (quick wins + chantiers structurants)',
      'Restitution comité de direction avec rapport exécutif',
    ],
    href: '/offres/diagnostic',
    example: {
      title: 'Exemple : PME logistique 80 personnes (Marseille)',
      content: 'Un transporteur régional utilise ChatGPT en informel, sans politique IA, inquiet du RGPD. Objectif : structurer une approche IA sans risque.',
      timeline: [
        { phase: 'J1-J3', action: 'Interviews dirigeant, DAF, responsable opérations' },
        { phase: 'J4-J10', action: 'Analyse données, outils en place, cartographie risques AI Act' },
        { phase: 'J11-J15', action: 'Formalisation cas d\'usage (optimisation tournées, service client IA)' },
        { phase: 'J15-J18', action: 'Rédaction feuille de route + rapport conformité' },
        { phase: 'J20', action: 'Restitution CODIR' },
      ],
      price: '9 500 € HT · 5-6 jours consultants',
      lever: 'AI Act août 2026 : urgence réglementaire = achat immédiat',
    },
  },
  {
    num: '02',
    title: 'Formations & Acculturation',
    tagline: 'Volume & Financement OPCO',
    price: '2 000 – 5 000 € / jour',
    duration: 'Intra-entreprise',
    description: 'Vos équipes utilisent déjà l\'IA, souvent sans le savoir, parfois sans sécurité. On fait en sorte qu\'elles le fassent bien, dans un cadre sécurisé.',
    deliverables: [
      'IA par métiers (managers, commerciaux, RH, finance)',
      'IA & Sécurité (RGPD, données personnelles, arnaques)',
      'IA & Esprit critique (LLM, biais, hallucinations)',
      'Modules écoles/CFA sur mesure',
      'Parcours emploi IA (badges de compétences)',
      'Formation de formateurs',
    ],
    href: '/offres/formations',
    example: {
      title: 'Exemple : CFA BTP Marseille (120 apprentis)',
      content: 'Un CFA BTP veut intégrer l\'IA dans ses formations sans savoir comment. Les formateurs ne connaissent pas les outils.',
      timeline: [
        { phase: 'Phase 1', action: 'Audit maquette pédagogique existante (2 jours)' },
        { phase: 'Phase 2', action: 'Co-construction 3 modules IA métier' },
        { phase: 'Phase 3', action: 'Formation des formateurs (2 jours)' },
        { phase: 'Phase 4', action: 'Livraison supports + badges compétences' },
        { phase: 'Phase 5', action: 'Accompagnement 3 mois mise en place' },
      ],
      price: '12 000 – 18 000 € HT',
      lever: '100% finançable OPCO BTP · CPF pour parcours individuels',
    },
  },
  {
    num: '03',
    title: 'Programme Transformation IA',
    tagline: 'Accompagnement 6-12 mois',
    price: '30 000 – 80 000 €',
    duration: '6-12 mois',
    description: 'On vous aide à faire passer l\'IA de l\'expérimentation à la pratique quotidienne — sans casser votre organisation, sans dépendre d\'un seul prestataire, avec des résultats mesurables.',
    deliverables: [
      'Gouvernance IA (comité IA, charte d\'usage, référent interne)',
      'Plan de compétences (cartographie besoins par rôle)',
      'Change management (communication, ateliers, coaching)',
      'Conformité AI Act + RGPD',
      'Pilotage partenaires techniques (Mentivis arbitre, contrôle)',
      'Jalons mesure d\'impact trimestriels',
    ],
    href: '/offres/transformation',
    example: {
      title: 'Exemple : ETI services 350 personnes',
      content: 'Une ETI de services a réalisé un diagnostic. 3 cas d\'usage prioritaires identifiés : automatisation support client, IA prospection, génération rapports.',
      timeline: [
        { phase: 'M1-M2', action: 'Mise en place gouvernance IA, charte, formation CODIR' },
        { phase: 'M2-M4', action: 'Déploiement support client IA (pilotage Mentivis)' },
        { phase: 'M4-M6', action: 'Formation équipes commerciales, déploiement IA prospection' },
        { phase: 'M6-M8', action: 'Automatisation reporting, mesure impact' },
        { phase: 'M9', action: 'Bilan, ROI mesuré, feuille de route phase 2' },
      ],
      price: '50 000 – 70 000 € HT (9 mois)',
      lever: 'Chaque diagnostic → mission prolongation en abonnement',
    },
  },
  {
    num: '04',
    title: 'Partenaire IA Mensuel',
    tagline: 'Abonnement',
    price: '1 000 – 3 000 € / mois',
    duration: 'Abonnement',
    description: 'Un partenaire indépendant pour vous aider à décider sur l\'IA, en continu — veille, conseil, arbitrage, alerte réglementaire.',
    deliverables: null,
    href: '/offres/partenaire',
    levels: [
      {
        name: 'Essentiel',
        price: '1 000 € HT/mois',
        features: ['Veille réglementaire IA personnalisée', '2h office hours/mois', 'Alertes AI Act'],
      },
      {
        name: 'Stratégique',
        price: '2 000 € HT/mois',
        features: ['Tout Essentiel', 'Relecture projets IA', 'Revue prestataires techniques', '4h office hours/mois'],
      },
      {
        name: 'Dirigeant',
        price: '3 000 € HT/mois',
        features: ['Tout Stratégique', '1 comité IA/trimestre', 'Accès événements Institut', 'Priorité diagnostics'],
      },
    ],
  },
]

const accentColor = '#00255D'

export default function OffresPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <FadeIn>
              <p className="text-sm font-medium text-rouge uppercase tracking-widest mb-4">Nos offres</p>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                De la porte d'entrée à l'accompagnement long
              </h1>
              <p className="text-xl text-white/70 max-w-2xl">
                Quatre offres complémentaires pour répondre à chaque étape de votre transformation IA.
                De l'audit initial au partenariat continu.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Tableau comparatif */}
        <Section className="bg-cream">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-serif text-navy mb-8 text-center">Vue d'ensemble</h2>
          </FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 text-left">Offre</th>
                  <th className="p-4 text-left">Pour qui</th>
                  <th className="p-4 text-left">Ce que vous recevez</th>
                  <th className="p-4 text-right">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold">01 · Diagnostic IA & AI Act</td>
                  <td className="p-4 text-text-muted">PME, ETI, Collectivités</td>
                  <td className="p-4 text-text-muted">Maturité IA + Risques AI Act + Feuille de route 12 mois</td>
                  <td className="p-4 text-right font-bold">8 000 – 12 000 €</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold">02 · Formations & Acculturation</td>
                  <td className="p-4 text-text-muted">DRH, Écoles, Grand public</td>
                  <td className="p-4 text-text-muted">Programmes par métier + Modules écoles + Ateliers</td>
                  <td className="p-4 text-right font-bold">2 000 – 5 000 € / jour · OPCO</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold">03 · Transformation IA</td>
                  <td className="p-4 text-text-muted">PME, ETI, Collectivités</td>
                  <td className="p-4 text-text-muted">Gouvernance + Change management + Pilotage partenaires</td>
                  <td className="p-4 text-right font-bold">30 000 – 80 000 €</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">04 · Partenaire IA mensuel</td>
                  <td className="p-4 text-text-muted">Dirigeants, DSI, DRH</td>
                  <td className="p-4 text-text-muted">Conseil continu + Veille + Comité IA trimestriel</td>
                  <td className="p-4 text-right font-bold">1 000 – 3 000 € / mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Détail des offres 01-03 */}
        {offers.slice(0, 3).map((offer) => {
          if (!offer.example) return null
          return (
            <Section key={offer.num} className="bg-white border-t border-border">
              <div className="grid lg:grid-cols-2 gap-12">
                <FadeIn>
                  <div className="inline-block px-3 py-1 bg-rouge/10 text-rouge text-xs font-bold rounded-full mb-4">
                    OFFRE {offer.num}
                  </div>
                  <h2 className="text-3xl font-serif text-navy mb-2">{offer.title}</h2>
                  <p className="text-lg text-rouge font-medium mb-4">{offer.tagline}</p>
                  <p className="text-3xl font-bold text-navy mb-2">{offer.price}</p>
                  <p className="text-text-muted mb-6">{offer.duration}</p>
                  <p className="text-text-muted mb-8 leading-relaxed">{offer.description}</p>
                  
                  <h3 className="font-bold text-navy mb-4">Ce que vous recevez :</h3>
                  <ul className="space-y-2 mb-8">
                    {offer.deliverables?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-rouge font-bold">—</span>
                        <span className="text-text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <Button href={offer.href} variant="primary" size="lg" className="!bg-rouge !text-white">
                      En savoir plus
                    </Button>
                    <Button href="/contact" variant="outline" size="lg">
                      Demander un devis
                    </Button>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="bg-cream p-8 rounded-2xl">
                    <h3 className="font-bold text-navy mb-4">{offer.example.title}</h3>
                    <p className="text-text-muted mb-6">{offer.example.content}</p>
                    
                    <div className="space-y-3 mb-6">
                      {offer.example.timeline.map((step) => (
                        <div key={step.phase} className="flex gap-4">
                          <span className="text-xs font-bold text-rouge whitespace-nowrap">{step.phase}</span>
                          <span className="text-sm text-text-muted">{step.action}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="font-bold text-navy mb-1">{offer.example.price}</p>
                      <p className="text-sm text-text-muted">{offer.example.lever}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </Section>
          )
        })}

        {/* OFFRE 04 - Abonnement */}
        <Section className="bg-cream border-t border-border">
          <FadeIn>
            <div className="inline-block px-3 py-1 bg-rouge/10 text-rouge text-xs font-bold rounded-full mb-4">
              OFFRE 04
            </div>
            <h2 className="text-3xl font-serif text-navy mb-2">Partenaire IA Mensuel</h2>
            <p className="text-lg text-rouge font-medium mb-4">Abonnement</p>
            <p className="text-xl text-text-muted mb-8 max-w-2xl">
              Un partenaire indépendant pour vous aider à décider sur l'IA, en continu — veille, conseil, arbitrage, alerte réglementaire.
              <span className="block mt-2 font-semibold text-navy">Votre numéro à appeler quand l'IA touche vos sujets.</span>
            </p>
          </FadeIn>
          
          <Stagger>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {offers[3].levels?.map((level) => (
                <StaggerItem key={level.name}>
                  <div className="bg-white p-6 rounded-xl border border-border h-full">
                    <h3 className="text-xl font-bold text-navy mb-2">{level.name}</h3>
                    <p className="text-2xl font-bold text-rouge mb-4">{level.price}</p>
                    <ul className="space-y-2">
                      {level.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="text-rouge">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
          
          <FadeIn>
            <div className="bg-navy text-white p-6 rounded-xl">
              <p className="font-bold mb-2">Modèle économique : 20 clients abonnés = 40 000 – 60 000 € / mois de revenus récurrents</p>
              <p className="text-white/70 text-sm">Zéro dépendance : 100% conseil pur, aucune sous-traitance technique requise — marge maximale</p>
            </div>
          </FadeIn>
        </Section>

        {/* CTA */}
        <Section className="bg-white">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-navy mb-4">Besoin d'un diagnostic personnalisé ?</h2>
              <p className="text-text-muted mb-8">Discutez de votre situation avec nos experts.</p>
              <Button href="/contact?subject=diagnostic" variant="primary" size="lg" className="!bg-rouge !text-white">
                Prendre rendez-vous
              </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
