'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const accompagnements = [
  { label: 'Citoyens', href: '/accompagnements/citoyens' },
  { label: 'Entreprises', href: '/accompagnements/entreprises' },
  { label: 'Ecoles et Universites', href: '/accompagnements/education' },
  { label: 'Secteurs creatifs', href: '/accompagnements/secteurs-creatifs' },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics' },
]

const navItems = [
  { label: 'Accompagnements', href: '/accompagnements', hasDropdown: true },
  { label: 'Think Tank IA', href: '/think-tank' },
  { label: 'Reseau et Lieu', href: '/reseau-lieu' },
  { label: 'Plateforme', href: '/plateforme-numerique' },
  { label: 'Actualites', href: '/actualites' },
]

function Logo({ isScrolled }: { isScrolled: boolean }) {
  const fullText = "INSTITUT COLLECTIF /A"
  const shortText = "IC/A"

  return (
    <Link href="/" className="flex items-center">
      <motion.div
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        variants={{
          initial: {
            display: "block"
          },
          scrolled: {
            display: "block"
          }
        }}
        className="font-serif font-extrabold text-lg md:text-xl tracking-wide text-black"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={isScrolled ? { opacity: 0, display: "none" } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden xl:inline"
        >
          {fullText}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, display: "none" }}
          animate={isScrolled ? { opacity: 1, display: "inline" } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="xl:hidden"
        >
          {shortText}
        </motion.span>
      </motion.div>
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <Logo isScrolled={isScrolled} />

        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.href} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
              <Link 
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                  isActive(item.href) ? 'text-accent underline underline-offset-4' : 'text-text hover:underline hover:underline-offset-4'
                }`}
                onClick={() => item.hasDropdown && setIsDropdownOpen(!isDropdownOpen)}
              >
                {item.label}
                {item.hasDropdown && (
                  <motion.svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
              </Link>
              
              {item.hasDropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-border shadow-lg"
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {accompagnements.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-base text-text hover:bg-bg transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Nous contacter
            </Button>
          </Link>
        </div>

        <button
          className="xl:hidden p-2"
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
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {accompagnements.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`py-3 px-4 text-base font-medium transition-colors hover:bg-accent/5 ${
                    isActive(item.href) ? 'text-accent bg-accent/5' : 'text-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {navItems.filter(item => !item.hasDropdown).map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`py-3 px-4 text-base font-medium transition-colors hover:bg-accent/5 ${
                    isActive(item.href) ? 'text-accent bg-accent/5' : 'text-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2">
                <Button variant="primary" className="w-full">
                  Nous contacter
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
