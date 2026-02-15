'use client'

import { useState } from 'react'
import { Button } from './Button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Remplacez FORM_ID par votre ID Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
        <p className="text-green-600 text-sm mt-2">Nous vous répondrons sous 48h.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-700 underline"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Votre message..."
        />
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
      </Button>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  )
}
