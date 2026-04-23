'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const offreLinks = [
  { label: 'Diagnostic', href: '/diagnostic' },
  { label: 'Formations', href: '/formations' },
  { label: 'Transformation', href: '/transformation' },
  { label: 'Partenaire', href: '/partenaire' },
]

const acteurLinks = [
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Collectivités et administrations', href: '/pouvoirs-publics' },
  { label: 'Écoles, CFA, Universités', href: '/education' },
  { label: 'Industries créatives', href: '/secteurs-creatifs' },
  { label: 'Grand public', href: '/citoyens' },
]

const openCookiePanel = () => {
  const checkAndOpen = (retries: number) => {
    const win = window as unknown as { tarteaucitron?: { userInterface: { openPanel: () => void } } }
    if (win.tarteaucitron) {
      win.tarteaucitron.userInterface.openPanel()
    } else if (retries > 0) {
      setTimeout(() => checkAndOpen(retries - 1), 100)
    } else {
      alert('Chargement en cours...')
    }
  }
  checkAndOpen(10)
}

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-confidentialite' },
  { label: 'Gestion des cookies', onClick: openCookiePanel },
  { label: 'CGV', href: '/conditions-utilisation' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
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
            <p className="text-base text-gray-400">Les architectes de l'IA by <a href="https://mentivis.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Mentivis</a></p>
            <p className="text-base text-gray-400">Campus <a href="https://campuscyber.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Cyber.AI</a>, Marseille</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
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
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Pour qui ?</p>
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
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">À propos</p>
              <nav className="space-y-3">
                <motion.div whileHover={{ x: 6 }}>
                  <Link 
                    href="/a-propos" 
                    className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Qui sommes-nous
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 6 }}>
                  <Link 
                    href="/expertises" 
                    className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Expertises
                  </Link>
                </motion.div>
              </nav>
            </div>
            
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Légal</p>
              <nav className="space-y-3">
                {legalLinks.map((link) => (
                  <motion.div key={link.label} whileHover={{ x: 6 }}>
                    {link.onClick ? (
                      <button 
                        onClick={link.onClick}
                        className="block text-base text-gray-400 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="block text-base text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Marius IA · Mentivis. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
