'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Offres', href: '/#offres', bold: true, children: [
    { label: 'Diagnostic', href: '/diagnostic' },
    { label: 'Formations', href: '/formations' },
    { label: 'Transformation', href: '/transformation' },
    { label: 'Partenaire', href: '/partenaire' },
  ]},
  { label: 'Pour qui ?', href: '/#acteurs', bold: true, children: [
    { label: 'Entreprises', href: '/entreprises' },
    { label: 'Collectivités et administrations', href: '/pouvoirs-publics' },
    { label: 'Écoles, CFA, Universités', href: '/education' },
    { label: 'Industries créatives', href: '/secteurs-creatifs' },
    { label: 'Grand public', href: '/citoyens' },
  ]},
  { label: 'À propos', href: '/a-propos/', bold: true },
  { label: 'Nos principes', href: '/#piliers', bold: true },
]

function Logo() {
  return (
    <Link href="https://www.mariusia.com/#" className="flex items-center">
      <div className="h-14 w-[160px] xs:w-[200px] sm:w-[250px]">
        <img
          src="/MariusIA-logo.svg"
          alt="MARIUS IA"
          className="h-14 xs:h-16 sm:h-20 w-auto object-contain brightness-0"
        />
      </div>
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const acteursPaths = ['/entreprises', '/pouvoirs-publics', '/education', '/secteurs-creatifs', '/citoyen']
  const isActeursPage = acteursPaths.some(p => pathname === p || pathname.startsWith(p)) || pathname === '/a-propos'

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 20)
      } else {
        setIsScrolled(window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setExpandedMenu(null)
  }, [pathname])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setExpandedMenu(null)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-2 xs:py-3' : 'py-3 xs:py-5'
      }`}
      style={{ 
        backgroundColor: isHomePage 
          ? (isScrolled ? '#ffffff' : '#aebddb')
          : (isActeursPage ? (isScrolled ? '#ffffff' : '#bdf5ab') : 'white'),
      }}
    >
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/contact"
          className="hidden lg:inline-block px-5 py-1.5 xs:px-6 xs:py-2 text-sm font-medium text-[#00255D] border-2 border-[#00255D] hover:bg-[#00255D] hover:text-white transition-all duration-200"
        >
         Contactez Marius IA !
        </Link>

        <button
          className="lg:hidden p-1.5 xs:p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 xs:w-7 h-6 xs:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#111827] border-t w-full overflow-hidden"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="px-4 xs:px-5 sm:px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedMenu(expandedMenu === link.href ? null : link.href)
                        }}
                        className={`flex items-center justify-between w-full text-left text-base xs:text-lg py-3 text-white ${link.bold ? 'font-bold' : ''} hover:text-gray-200 transition-colors active:bg-gray-800 rounded`}
                      >
                        <span>{link.label}</span>
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedMenu === link.href ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expandedMenu === link.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1 border-l-2 border-gray-700 ml-2">
                              {link.children.map((child) => {
                                const isActive = pathname === child.href
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      closeMenu()
                                    }}
                                    className={`block text-base xs:text-lg py-3 ${
                                      isActive
                                        ? 'text-white underline decoration-[#D92A1C] underline-offset-4'
                                        : 'text-gray-300 hover:text-white'
                                    } transition-colors`}
                                  >
                                    {child.label}
                                  </Link>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block text-base xs:text-lg py-3 text-white ${link.bold ? 'font-bold' : ''} hover:text-gray-200 transition-colors`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                onClick={closeMenu} 
                className="block text-center py-2.5 mt-4 text-sm text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#111827] transition-colors"
              >
                Contactez Marius IA !
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}