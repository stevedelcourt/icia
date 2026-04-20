'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    entreprise: '',
    secteur: '',
    effectif: '',
    priorite: '',
    consent: false,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          entreprise: formData.entreprise,
          secteur: formData.secteur,
          effectif: formData.effectif,
          priorite: formData.priorite,
          consent: formData.consent
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
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
      <main className="pt-36 pb-24">
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
              <h2 className="text-3xl font-serif text-black mb-4">Merci !</h2>
              <p className="text-gray-500 mb-8">
                Nous avons bien reçu votre demande. Nous vous repondons sous 48h.
              </p>
              <Link href="/" className="text-base text-black hover:underline transition-colors duration-200">
                Retour a l'accueil
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Contact</p>
              <h1 className="text-3xl md:text-4xl font-serif text-black mb-8">
                Commencons par un premier coup de sonde editorial, voyons ensuite.
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-500 mb-2">Prenom</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-500 mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-500 mb-2">E-mail</label>
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
                  <label htmlFor="entreprise" className="block text-sm text-gray-500 mb-2">Entreprise</label>
                  <input 
                    type="text" 
                    id="entreprise" 
                    name="entreprise"
                    required
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="secteur" className="block text-sm text-gray-500 mb-2">Secteur d'activite</label>
                  <select 
                    id="secteur" 
                    name="secteur"
                    required
                    value={formData.secteur}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  >
                    <option value="">Choisissez une valeur</option>
                    <option value="pmi-eti">PME / ETI</option>
                    <option value="collectivite">Collectivite / Service public</option>
                    <option value="education">Education / Formation</option>
                    <option value="creatif">Secteurs creatifs</option>
                    <option value="citoyen">Particulier / Demandeur d'emploi</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="effectif" className="block text-sm text-gray-500 mb-2">Nombre d'effectifs</label>
                  <select 
                    id="effectif" 
                    name="effectif"
                    required
                    value={formData.effectif}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  >
                    <option value="">Choisissez une valeur</option>
                    <option value="1-10">1 a 10</option>
                    <option value="11-50">11 a 50</option>
                    <option value="51-250">51 a 250</option>
                    <option value="251-1000">251 a 1000</option>
                    <option value="1000+">Plus de 1000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="priorite" className="block text-sm text-gray-500 mb-2">Quelle est votre priorite</label>
                  <select 
                    id="priorite" 
                    name="priorite"
                    required
                    value={formData.priorite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white focus:border-black outline-none transition-colors duration-200"
                  >
                    <option value="">Choisissez une valeur</option>
                    <option value="comprendre">Comprendre l'AI Act et mes obligations</option>
                    <option value="diagnostic">Faire un diagnostic IA</option>
                    <option value="formation">Former mes equipes</option>
                    <option value="transformation">Transformer mon organisation</option>
                    <option value="partenaire">Avoir un partenaire IA</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-500">
                      J'accepte de recevoir des informations et des offres de Wearethewords, conformement a la politique de confidentialite.
                    </span>
                  </label>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer votre demande'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
