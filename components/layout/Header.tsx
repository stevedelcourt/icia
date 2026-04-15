'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Offres', href: '/offres' },
  { label: 'Accompagnements', href: '/accompagnements' },
  { label: 'Actualités', href: '/actualites' },
]

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link href="/" className="flex items-center">
      <div className="relative overflow-hidden" style={{ width: isScrolled ? '36px' : '160px', height: '32px', transition: 'width 0.3s ease' }}>
        <img 
          src="/logo-black.svg" 
          alt="ICIA" 
          className="absolute left-0 top-0 h-full w-auto"
          style={{ width: '160px', maxWidth: 'none' }}
        />
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 h-full flex items-center"
            >
              <svg viewBox="0 0 40 45" className="h-full w-auto">
                <path d="M20 0L40 45H0L20 0Z" fill="#00255D"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) 
                  ? 'text-[#00255D] underline underline-offset-4' 
                  : 'text-[#666666] hover:text-[#00255D]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/contact"
          className="hidden md:inline-block px-5 py-2.5 text-sm font-medium text-white bg-[#00255D] rounded-full hover:bg-[#001A3A] transition-colors"
        >
          Contact
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
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
            className="md:hidden bg-white border-t"
          >
            <nav className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-lg font-medium py-2 ${
                    isActive(item.href) ? 'text-[#00255D]' : 'text-[#666666]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="block text-center py-3 mt-4 text-white bg-[#00255D] rounded-full font-medium"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
