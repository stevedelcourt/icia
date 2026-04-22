'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Nos principes', href: '/#piliers', bold: true },
  { label: 'Offres', href: '/#offres', bold: true, children: [
    { label: 'Diagnostic', href: '/diagnostic' },
    { label: 'Formations', href: '/formations' },
    { label: 'Transformation', href: '/transformation' },
    { label: 'Partenaire', href: '/partenaire' },
  ]},
  { label: 'Acteurs', href: '/#acteurs', bold: true, children: [
    { label: 'Entreprises', href: '/entreprises' },
    { label: 'Pouvoirs publics', href: '/pouvoirs-publics' },
    { label: 'Education', href: '/education' },
    { label: 'Industries créatives', href: '/secteurs-creatifs' },
    { label: 'Grand public', href: '/citoyens' },
  ]},
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
  const isActeursPage = acteursPaths.some(p => pathname === p || pathname.startsWith(p))

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

  const handleSubMenuClick = (href: string) => {
    setExpandedMenu(href)
  }

  const handleBackClick = () => {
    setExpandedMenu(null)
  }

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setExpandedMenu(null)
  }

  const currentExpanded = expandedMenu
    ? navLinks.find(l => l.href === expandedMenu)
    : null

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
         Contactez-nous
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
          >
            <div className="relative">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: expandedMenu ? '-100%' : '0%' }}
                transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                className="flex"
              >
                <div className="min-w-full px-4 xs:px-5 sm:px-6 py-4 space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.children ? (
                        <button
                          onClick={() => handleSubMenuClick(link.href)}
                          className={`flex items-center justify-between w-full text-left text-base xs:text-lg py-2 text-white ${link.bold ? 'font-bold' : ''} hover:text-gray-200 transition-colors`}
                        >
                          <span>{link.label}</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`block text-base xs:text-lg py-2 text-white ${link.bold ? 'font-bold' : ''} hover:text-gray-200 transition-colors`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link href="/contact" onClick={closeMenu} className="block text-center py-2.5 mt-3 text-sm text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#111827] transition-colors">
                    Contactez-nous
                  </Link>
                </div>

                {currentExpanded && (
                  <div className="min-w-full px-4 xs:px-5 sm:px-6 py-4 space-y-3">
                    <button
                      onClick={handleBackClick}
                      className="flex items-center gap-2 text-base xs:text-lg py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>{currentExpanded.label}</span>
                    </button>
                    <div className="border-t border-gray-700 pt-3 space-y-2">
                      {currentExpanded.children?.map((child) => {
                        const isActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className={`block text-base xs:text-lg py-2 ${
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
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}