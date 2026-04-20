'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Piliers', href: '/#piliers' },
  { label: 'Offres', href: '/#offres' },
  { label: 'Acteurs', href: '/#acteurs' },
  { label: 'Contact', href: '/#contact' },
]

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = isHomePage ? window.scrollY > 500 : false
      setIsScrolled(shouldScroll)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-14 w-[250px] overflow-hidden">
        <motion.img
          src="/MariusIA-logo.svg"
          alt="MARIUS IA"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-auto object-contain"
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/MariusIA-logo-retract.svg"
          alt="MIA"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-auto object-contain"
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
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
          ? (isScrolled ? '#ebe9e6' : '#aebddb')
          : 'white',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/contact"
          className="hidden lg:inline-block px-6 py-2.5 text-sm font-medium text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
        >
          Planifier un échange
        </Link>

        <button
          className="lg:hidden p-2"
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
                  className="block text-lg py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="block text-center py-4 mt-4 text-lg text-black border-2 border-black">
                Planifier un échange
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}