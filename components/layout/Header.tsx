'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const accompagnements = [
  { label: 'Les programmes', href: '/accompagnements' },
  { label: 'Citoyens', href: '/accompagnements/citoyen' },
  { label: 'Entreprises', href: '/accompagnements/entreprises' },
  { label: 'Écoles et Universités', href: '/accompagnements/education' },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs' },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics' },
]

const aProposItems = [
  { label: 'Notre conviction', href: '/a-propos' },
  { label: 'Réseau et Lieu', href: '/reseau-lieu' },
  { label: 'Plateforme', href: '/plateforme-numerique' },
  { label: 'Think Tank IA', href: '/think-tank' },
  { label: 'Partenaires', href: '/partenaires' },
]

const navItems = [
  { label: 'A propos de l\'institut IA', href: '/a-propos', hasDropdown: true },
  { label: 'Accompagnements', href: '/accompagnements', hasDropdown: true },
  { label: 'Actualites', href: '/actualites' },
]

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center h-full">
      <img src="/logo-black.svg" alt="ICIA" className="h-8 w-auto" />
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string>('a-propos')
  const [useMobileMenu, setUseMobileMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkSpacing = () => {
      if (logoRef.current && navRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect()
        const navRect = navRef.current.getBoundingClientRect()
        const distance = navRect.left - logoRect.right
        setUseMobileMenu(distance < 100)
      }
    }
    checkSpacing()
    window.addEventListener('resize', checkSpacing)
    return () => window.removeEventListener('resize', checkSpacing)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname, useMobileMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
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
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div ref={logoRef} className="flex-shrink-0">
          <Logo isScrolled={isScrolled} />
        </div>

        <nav ref={navRef} className={`${useMobileMenu ? 'hidden' : 'flex'} items-center gap-10 ml-16`}>
          {navItems.map((item) => (
            <div 
              key={item.href} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.href)}
              onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
            >
              <Link 
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                  isActive(item.href) ? 'text-accent underline underline-offset-4' : 'text-text hover:underline hover:underline-offset-4'
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <motion.svg 
                    className="w-3 h-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                )}
              </Link>
              
              {item.hasDropdown && (
                <AnimatePresence>
                  {openDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-border shadow-lg"
                    >
                      {item.href === '/a-propos' ? aProposItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-base text-text hover:bg-bg transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.label}
                        </Link>
                      )) : accompagnements.map((subItem) => (
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

        <div className={`${useMobileMenu ? 'hidden' : 'block'}`}>
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Nous contacter
            </Button>
          </Link>
        </div>

        <button
          className={`${useMobileMenu ? 'block' : 'hidden'} p-2`}
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
        {isMobileMenuOpen && useMobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bg overflow-y-auto"
          >
            <div className="p-6 pt-24">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2"
                aria-label="Fermer le menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Menu</p>
                
                {/* À propos submenu */}
                <button 
                  onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === 'a-propos' ? '' : 'a-propos')}
                  className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4 w-full text-left flex items-center justify-between"
                >
                  À propos de l'institut IA
                  <svg className={`w-6 h-6 transform transition-transform ${mobileOpenSubmenu === 'a-propos' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOpenSubmenu === 'a-propos' && (
                  <div className="pl-4 space-y-2">
                    {aProposItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className="block py-2 text-lg text-text-muted hover:text-text hover:underline underline-offset-4 transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  )}

                {/* Accompagnements submenu */}
                <button 
                  onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === 'accompagnements' ? '' : 'accompagnements')}
                  className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4 w-full text-left flex items-center justify-between"
                >
                  Accompagnements
                  <svg className={`w-6 h-6 transform transition-transform ${mobileOpenSubmenu === 'accompagnements' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOpenSubmenu === 'accompagnements' && (
                  <div className="pl-4 space-y-2">
                    {accompagnements.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className="block py-2 text-lg text-text-muted hover:text-text hover:underline underline-offset-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link href="/actualites" className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
                  Actualités
                </Link>
              </div>

              <Link href="/contact" className="mt-8 block">
                <button 
                  className="w-full py-4 text-xl font-bold text-white rounded-lg"
                  style={{ backgroundColor: '#BF4D43' }}
                >
                  Nous contacter
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
