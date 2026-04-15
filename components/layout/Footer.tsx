import Link from 'next/link'

const mainLinks = [
  { label: 'Offres', href: '/offres' },
  { label: 'Acteurs', href: '/acteurs' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-confidentialite' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'CGV', href: '/conditions-utilisation' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <img src="/logo-black-arch.svg" alt="ICIA" className="h-8 w-auto mb-4" />
            <p className="text-sm text-[#666666]">Institut de l'IA · Mentivis SAS</p>
            <p className="text-sm text-[#666666]">Campus Cyber.AI, Marseille</p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#666666] mb-4">Navigation</p>
              <nav className="space-y-2">
                {mainLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-[#666666] hover:text-[#00255D] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-[#666666] mb-4">Légal</p>
              <nav className="space-y-2">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-[#666666] hover:text-[#00255D] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#E5E5E5] text-center">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Institut de l'IA · Mentivis SAS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
