'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#bdf5ab] flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-[150px] md:text-[200px] font-bold text-gray-300 leading-none">404</h1>
        
        <p className="text-3xl md:text-4xl font-bold text-black mb-4">
          Oups. Cette page s&apos;est envolée.
        </p>
        
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          On a cherch&apos; partout... Elle a peut-être été mangée par un algorithme mutant 🦕
        </p>

        <div className="flex gap-4">
          <Link 
            href="/"
            className="px-8 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-4 border-2 border-black text-black text-lg hover:bg-black hover:text-white transition-colors"
          >
            On vous aide ?
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Erreur的人类 — L&apos;IA fait parfois des siennes. On comprend.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}