'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

interface FormData {
  firstName: string
  lastName: string
  organization: string
  email: string
  phone: string
  profile: string
  subject: string
  message: string
  newsletter: boolean
  privacyConsent: boolean
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    profile: '',
    subject: '',
    message: '',
    newsletter: false,
    privacyConsent: false,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xreapvbn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.organization}`,
          email: formData.email,
          phone: formData.phone,
          profile: formData.profile,
          subject: formData.subject,
          message: formData.message,
          newsletter: formData.newsletter
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          organization: '',
          email: '',
          phone: '',
          profile: '',
          subject: '',
          message: '',
          newsletter: false,
          privacyConsent: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <Section className="pt-40 pb-12">
          <div className="max-w-xl">
            <h1 className="font-serif text-h1 mb-6">
              Contactez-nous
            </h1>
            <p className="text-body text-text-muted">
              Vous avez un projet, une question, une idee de partenariat ? L'equipe de l'Institut Collectif de l'IA est a votre ecoute.
            </p>
          </div>
        </Section>
        
        <Section className="pb-24" narrow>
          {submitStatus === 'success' ? (
            <div className="max-w-xl mx-auto text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                ✓
              </div>
              <h2 className="font-serif text-h2 mb-4">Merci pour votre message !</h2>
              <p className="text-text-muted mb-2">
                Nous avons bien recu votre demande et nous vous repondrons dans les plus brefs delais, generalement sous 48 heures.
              </p>
              <p className="text-text-muted mb-8">
                A tres bientot.
              </p>
              <Link href="/" className="text-accent hover:text-accent-hover underline underline-offset-4">
                Retour a l'accueil ➔
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">Nom et prénom *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    minLength={2}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">Organisation (facultatif)</label>
                  <input 
                    type="text" 
                    id="organization" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise, école, collectivité..."
                    className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.fr"
                    className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Téléphone (facultatif)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="profile" className="block text-sm font-medium mb-2">Vous êtes *</label>
                <select 
                  id="profile" 
                  name="profile"
                  required
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                >
                  <option value="">Sélectionner...</option>
                  <option value="citoyen">Citoyen / en recherche d'emploi</option>
                  <option value="entreprise">Entreprise</option>
                  <option value="education">École / université / organisme de formation</option>
                  <option value="creatif">Acteur ou actrice des secteurs créatifs</option>
                  <option value="public">Collectivité / service public</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet *</label>
                <select 
                  id="subject" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors"
                >
                  <option value="">Sélectionner un sujet...</option>
                  <option value="info">Demande d'information</option>
                  <option value="diagnostic">Diagnostic / audit IA</option>
                  <option value="formation">Programme de formation</option>
                  <option value="partnership">Collaboration / partenariat</option>
                  <option value="thinktank">Think Tank / recherche</option>
                  <option value="reseau">Adhesion au reseau</option>
                  <option value="atelier">Reservation atelier / laboratoire</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Votre message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  required
                  minLength={20}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Decrivez votre projet, votre besoin ou votre question..."
                  className="w-full px-4 py-3 border border-border bg-white focus:border-accent outline-none transition-colors resize-none"
                />
              </div>
              
              <div>
                <label className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 accent-accent"
                  />
                  <span className="text-sm text-text-muted">Je souhaite recevoir la newsletter de l'ICIA</span>
                </label>
              </div>
              
              <div>
                <label className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-1 accent-accent"
                  />
                  <span className="text-sm text-text-muted">J'accepte que mes donnees soient traitees selon la <Link href="/politique-confidentialite" className="text-accent hover:text-accent-hover underline">Politique de confidentialite</Link>. *</span>
                </label>
              </div>
              
              <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </Button>
            </form>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}
