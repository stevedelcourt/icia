'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const offreLinks = [
  { label: 'Diagnostic', href: '/offres/diagnostic' },
  { label: 'Formations', href: '/offres/formations' },
  { label: 'Transformation', href: '/offres/transformation' },
  { label: 'Partenaire', href: '/offres/partenaire' },
]

const acteurLinks = [
  { label: 'Entreprises', href: '/acteurs/entreprises' },
  { label: 'Pouvoirs publics', href: '/acteurs/pouvoirs-publics' },
  { label: 'Education', href: '/acteurs/education' },
  { label: 'Secteurs créatifs', href: '/acteurs/secteurs-creatifs' },
  { label: 'Grand public', href: '/acteurs/citoyens' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-confidentialite' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'CGV', href: '/conditions-utilisation' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <Link href="/">
              <motion.img 
                src="/MariusIA-logo.svg" 
                alt="MARIUS IA" 
                className="h-10 w-auto mb-6 cursor-pointer brightness-0 invert"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <p className="text-base text-gray-400">Institut de l'IA · Mentivis SAS</p>
            <p className="text-base text-gray-400">Campus Cyber.AI, Marseille</p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Offres</p>
              <nav className="space-y-3">
                {offreLinks.map((link) => (
                  <motion.div key={link.href} whileHover={{ x: 6 }}>
                    <Link 
                      href={link.href} 
                      className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Acteurs</p>
              <nav className="space-y-3">
                {acteurLinks.map((link) => (
                  <motion.div key={link.href} whileHover={{ x: 6 }}>
                    <Link 
                      href={link.href} 
                      className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Légal</p>
              <nav className="space-y-3">
                {legalLinks.map((link) => (
                  <motion.div key={link.href} whileHover={{ x: 6 }}>
                    <Link 
                      href={link.href} 
                      className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Institut de l'IA · Mentivis SAS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
