'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/49558612/9181c8cf-5f81-4459-af6b-81c8c3e69f91', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: formData.name.split(' ')[0] },
            { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') || formData.name },
            { name: 'email', value: formData.email },
            { name: 'company', value: formData.organisation },
            { name: 'message', value: formData.message },
          ],
          context: {
            pageUri: 'https://mariusia.com/contact',
            pageName: 'Contact'
          }
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
      } else {
        const errorText = await response.text()
        console.error('HubSpot error:', response.status, errorText)
        setErrorMessage(`Erreur ${response.status}: ${errorText}`)
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('HubSpot exception:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-36 pb-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-2xl mx-auto px-8">
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-gray-200 flex items-center justify-center text-2xl text-gray-400">
                ✓
              </div>
              <h2 className="text-3xl text-black mb-4">Message envoyé !</h2>
              <p className="text-gray-500 mb-8">
                Nous avons bien reçu votre demande. Nous vous répondrons dans les 48h.
              </p>
              <Link href="/" className="text-base text-black hover:underline transition-colors duration-200">
                Retour à l&apos;accueil
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Contact</p>
              <h1 className="text-3xl md:text-4xl text-black mb-4">
                Un projet, une question, une urgence réglementaire.
              </h1>
              <p className="text-lg text-gray-500 mb-10">
                Nous répondons dans les 48 heures.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-500 mb-2">Votre nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-500 mb-2">Votre adresse email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="organisation" className="block text-sm text-gray-500 mb-2">Votre organisation</label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    required
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-500 mb-2">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-500">
                    J&apos;accepte de recevoir des informations de Marius IA, conformément à la politique de confidentialité.
                  </label>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </motion.div>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center">
                    {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'}
                  </p>
                )}
              </form>

              <div className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="text-xl font-bold text-black mb-4">Campus Cyber.AI Euromed Marseille</h2>
                <div className="w-full h-[300px] border border-gray-200 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=5.3650%2C43.2950%2C5.3850%2C43.3050&layer=mapnik&marker=43.3000%2C5.3750"
                    style={{ border: 0 }}
                    title="Campus Cyber.AI Euromed Marseille"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <a 
                    href="https://campuscyber.fr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    campuscyber.fr
                  </a>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}