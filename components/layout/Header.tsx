'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const accompagnements = [
  { label: 'Citoyens', href: '/accompagnements/citoyens' },
  { label: 'Entreprises', href: '/accompagnements/entreprises' },
  { label: 'Écoles et Universités', href: '/accompagnements/education' },
  { label: 'Secteurs créatifs', href: '/accompagnements/secteurs-creatifs' },
  { label: 'Pouvoirs publics', href: '/accompagnements/pouvoirs-publics' },
]

const aProposItems = [
  { label: 'Réseau et Lieu', href: '/reseau-lieu' },
  { label: 'Plateforme', href: '/plateforme-numerique' },
  { label: 'Think Tank IA', href: '/think-tank' },
]

const navItems = [
  { label: 'A propos de l\'institut IA', href: '/a-propos', hasDropdown: true },
  { label: 'Accompagnements', href: '/accompagnements', hasDropdown: true },
  { label: 'Actualites', href: '/actualites' },
]

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center h-full">
      {isScrolled ? (
        <img src="/logo-black.svg" alt="ICIA" className="h-8 w-auto" />
      ) : (
        <span className="font-serif font-extrabold text-xl md:text-2xl tracking-wide text-black whitespace-nowrap">
          INSTITUT COLLECTIF DE L'<span className="text-[#BF4D43]">IA</span>
        </span>
      )}
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string>('/a-propos')
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
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="hidden xl:block w-[300px] flex-shrink-0">
          <Logo isScrolled={isScrolled} />
        </div>
        <div className="xl:hidden flex items-center">
          <Logo isScrolled={isScrolled} />
        </div>

        <nav className="hidden xl:flex items-center gap-10">
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bg xl:hidden overflow-y-auto"
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

              {navItems.map((item) => (
                <div key={item.href} className="mb-6">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === item.href ? null : item.href)}
                        className="flex items-center justify-between w-full py-3 text-3xl font-bold text-text border-b border-border"
                      >
                        {item.label}
                        <motion.svg 
                          className="w-6 h-6" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: mobileOpenSubmenu === item.href ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileOpenSubmenu === item.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-4">
                              {(item.href === '/a-propos' ? aProposItems : accompagnements).map((subItem) => (
                                <Link 
                                  key={subItem.href} 
                                  href={subItem.href}
                                  className="block py-3 text-xl font-medium text-text-muted border-b border-border/50"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className="block py-3 text-3xl font-bold text-text border-b border-border"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link href="/contact" className="mt-4 block">
                <button 
                  className="w-full py-4 text-xl font-bold text-white rounded-lg"
                  style={{ backgroundColor: '#CC785C' }}
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
