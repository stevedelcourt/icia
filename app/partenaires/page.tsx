import Link from 'next/link'
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
        <Section className="pt-32 pb-12 bg-cream-dark">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="font-serif text-h1 mb-6">
                <TextReveal delay={0.1}>Les partenaires de l'ICIA</TextReveal>
              </h1>
              <ScaleIn delay={0.3}>
                <p className="text-body text-text-muted">
                  L'ICIA remercie ses partenaires qui soutiennent notre mission : rendre l'intelligence 
                  artificielle accessible a tous. Ensemble, nous construisons un ecosysteime innovante 
                  et responsable.
                </p>
              </ScaleIn>
            </div>
          </FadeIn>
        </Section>
        
        <Section className="pb-24" spacing="normal">
          <div className="bg-navy p-8 md:p-12">
            {partners.length > 0 ? (
              <Stagger>
                <div className="flex flex-col gap-6">
                  {partners.map((partner, index) => (
                    <StaggerItem key={index}>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-6 md:p-10 bg-black/30 hover:bg-black/40 transition-all backdrop-blur-sm rounded-xl">
                        {partner.logo && (
                          <div className="w-full md:w-[350px] flex-shrink-0 flex items-center justify-center md:justify-start">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 w-full">
                          <h2 className="font-serif text-[28px] md:text-[32px] mb-3 text-white">{partner.name}</h2>
                          {partner.description && (
                            <p className="text-base text-gray-300 mb-4">{partner.description}</p>
                          )}
                          {partner.website && (
                            <a 
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-navy text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                            >
                              En savoir plus ➔
                            </a>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-muted">
                  Les partenaires seront bientot annonces.
                </p>
              </div>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
