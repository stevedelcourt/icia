'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Nos principes', href: '/#piliers' },
  { label: 'Offres', href: '/#offres' },
  { label: 'Acteurs', href: '/#acteurs' },
]

function Logo() {
  return (
    <Link href="https://www.mariusia.com/#" className="flex items-center">
      <div className="h-14 w-[250px]">
        <img
          src="/MariusIA-logo.svg"
          alt="MARIUS IA"
          className="h-20 w-auto object-contain"
        />
      </div>
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
  }, [pathname])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-3' : 'py-5'
      }`}
      style={{ 
        backgroundColor: isHomePage 
          ? (isScrolled ? '#ffffff' : '#aebddb')
          : (isActeursPage ? (isScrolled ? '#ffffff' : '#bdf5ab') : 'white'),
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
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
          className="hidden lg:inline-block px-6 py-2.5 text-sm font-medium text-[#00255D] border-2 border-[#00255D] hover:bg-[#00255D] hover:text-white transition-all duration-200"
        >
         Contactez-nous
        </Link>

        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="p-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-center py-4 mt-4 text-lg text-black border-2 border-black">
                Contactez-nous
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}