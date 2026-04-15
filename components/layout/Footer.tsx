import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo-black-arch.svg" alt="ICIA" className="h-5 w-auto" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            {['offres', 'accompagnements', 'actualites', 'contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item}`}
                className="text-xs text-[#666666] hover:text-[#00255D] transition-colors uppercase tracking-wider"
              >
                {item.replace('-', ' ')}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#E5E5E5] text-center">
          <p className="text-xs text-[#666666]">
            Campus Cyber.AI, Marseille · Mentivis SAS
          </p>
        </div>
      </div>
    </footer>
  )
}
