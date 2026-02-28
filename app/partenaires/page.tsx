import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { FadeIn, Stagger, StaggerItem, TextReveal, ScaleIn } from '@/components/ui/FadeIn'
import fs from 'fs'
import path from 'path'

interface Partner {
  name: string
  description: string
  logo: string
  website: string
}

function getPartners(): Partner[] {
  try {
    const partnersPath = path.join(process.cwd(), 'public', 'partners.json')
    if (fs.existsSync(partnersPath)) {
      const data = fs.readFileSync(partnersPath, 'utf-8')
      return JSON.parse(data)
    }
  } catch {}
  return []
}

export default function PartenairesPage() {
  const partners = getPartners()

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-16">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>Les partenaires de l'ICIA</TextReveal>
              </h1>
              <p className="text-body text-text-muted">
                L'ICIA remercie ses partenaires qui soutiennent notre mission : rendre l'intelligence 
                artificielle accessible a tous. Ensemble, nous construisons un avenir ou l'IA beneficie 
                a l'ensemble de la societe.
              </p>
            </div>
          </FadeIn>
        </Section>

        {partners.length > 0 ? (
          <Section className="pb-24">
            <Stagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <StaggerItem key={index}>
                    <div className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all text-center">
                      {partner.logo && (
                        <div className="mb-4 flex justify-center">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={200}
                            height={100}
                            className="h-20 w-auto object-contain"
                            unoptimized={partner.logo.startsWith('http')}
                          />
                        </div>
                      )}
                      <h3 className="font-serif text-xl mb-2">{partner.name}</h3>
                      {partner.description && (
                        <p className="text-sm text-text-muted">{partner.description}</p>
                      )}
                      {partner.website && (
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent text-sm hover:underline mt-4 inline-block"
                        >
                          Visiter le site
                        </a>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </Section>
        ) : (
          <Section className="pb-24">
            <div className="max-w-3xl mx-auto text-center py-12">
              <p className="text-text-muted">Les partenaires seront bientot annonces.</p>
            </div>
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}
