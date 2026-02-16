import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export default function OrganisationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-32 pb-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-h1 mb-4 text-center">
              Organisation
            </h1>
            <p className="text-body text-text-muted text-center mb-12">
              Le système solaire ICIA
            </p>
            
            <div className="w-full overflow-x-auto">
              <img 
                src="/organisation-schema.svg" 
                alt="Organisation ICIA - Système solaire" 
                className="w-full min-w-[900px]"
                style={{ minHeight: '550px' }}
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
