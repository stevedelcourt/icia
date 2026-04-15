'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
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
  { label: 'Partenaires', href: '/partenaires' },
]

type NavItem = {
  label: string
  key: string
  hasDropdown?: boolean
  href?: string
}

const navItems: NavItem[] = [
  { label: 'À propos', key: 'apropos', href: '/a-propos' },
  { label: 'Offres', key: 'offres', href: '/offres' },
  { label: 'Accompagnements', key: 'accompagnements', href: '/accompagnements', hasDropdown: true },
  { label: 'Actualités', key: 'actualites', href: '/actualites' },
]

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center h-full">
      <img src="/logo-black.svg" alt="ICIA" className="h-8 w-auto" />
    </Link>
  )
}

const menuVariants: Variants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string>('a-propos')
  const [useMobileMenu, setUseMobileMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkWidth = () => {
      setUseMobileMenu(window.innerWidth < 1150)
    }
    
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  useEffect(() => {
    if (!useMobileMenu) {
      setIsMobileMenuOpen(false)
    }
  }, [useMobileMenu])

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
      className={`fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Logo isScrolled={isScrolled} />
        </div>

        <nav className={`${useMobileMenu ? 'hidden' : 'flex'} items-center gap-10 ml-16`}>
          {navItems.map((item) => (
            <div 
              key={item.key} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.key)}
              onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
            >
              {item.href ? (
                <Link 
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-navy flex items-center gap-1 ${
                    isActive(item.href) 
                      ? 'text-navy underline decoration-navy decoration-2 underline-offset-4' 
                      : 'text-text hover:underline hover:decoration-[#D92A1C] hover:decoration-2 hover:underline-offset-4'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.svg 
                      className="w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: openDropdown === item.key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </Link>
              ) : (
                <button 
                  className="text-base font-medium transition-colors hover:text-navy flex items-center gap-1 cursor-default"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.svg 
                      className="w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: openDropdown === item.key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </button>
              )}
              
              {item.hasDropdown && (
                <AnimatePresence>
                  {openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border border-border shadow-lg"
                    >
                      {item.key === 'apropos' ? aProposItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-base text-text hover:bg-bg hover:underline hover:decoration-[#D92A1C] hover:decoration-2 hover:underline-offset-4 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.label}
                        </Link>
                      )) : accompagnements.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-base text-text hover:bg-bg hover:underline hover:decoration-[#D92A1C] hover:decoration-2 hover:underline-offset-4 transition-colors first:rounded-t-lg last:rounded-b-lg"
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
          <Button href="/contact" variant="primary" size="sm">
            Nous contacter
          </Button>
        </div>

        <button
          className={`${useMobileMenu ? 'block' : 'hidden'} p-2 relative z-[110]`}
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

              <motion.div 
                className="space-y-1"
                variants={menuVariants}
                initial="closed"
                animate="open"
              >
                <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Menu</motion.p>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/a-propos" 
                    className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    À propos de l'institut IA
                  </Link>
                  <div className="pl-4 space-y-2 mt-2">
                    {aProposItems.map((item, i) => (
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
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link 
                    href="/accompagnements" 
                    className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Accompagnements
                  </Link>
                  <div className="pl-4 space-y-2 mt-2">
                    {accompagnements.map((item, i) => (
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
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link href="/actualites" className="block py-3 text-2xl font-bold text-text hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
                    Actualités
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8">
                  <Link href="/contact" className="block">
                    <button 
                      className="w-full py-4 text-xl font-bold text-white rounded-lg bg-accent hover:bg-accent-hover"
                    >
                      Nous contacter
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
