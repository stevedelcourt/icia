'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Offres', href: '/offres' },
  { label: 'Acteurs', href: '/acteurs' },
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
      <div className="relative h-10 w-[160px]">
        <motion.img
          src="/logo-black-arch.svg"
          alt="ICIA"
          className="absolute inset-0 h-full w-auto object-contain"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.95 : 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.img
          src="/logo-black-short.svg"
          alt="ICIA"
          className="absolute inset-0 h-full w-auto object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-sm py-3' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                isActive(item.href) 
                  ? 'text-[#00255D]' 
                  : 'text-[#666666] hover:text-[#00255D]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link 
          href="/contact"
          className="hidden lg:inline-block px-6 py-2.5 text-sm text-[#00255D] border border-[#00255D] hover:bg-[#00255D] hover:text-white transition-colors"
        >
          Contact
        </Link>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <nav className="p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-base py-2 ${isActive(item.href) ? 'text-[#00255D]' : 'text-[#666666]'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="block text-center py-3 mt-4 text-[#00255D] border border-[#00255D]">
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
