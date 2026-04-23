'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

const expertises = [
  {
    title: 'Audit IA et conformité AI Act',
    description: "Cartographie des usages et des risques. Analyse de la maturité organisationnelle. Évaluation de la conformité réglementaire. Préparation aux obligations de l'AI Act européen."
  },
  {
    title: 'Formation et acculturation des équipes',
    description: 'Programmes sur mesure par métier, par secteur, par niveau de maturité. Sensibilisation, montée en compétences, formation des formateurs.'
  },
  {
    title: 'Pilotage de la transformation IA',
    description: 'Gouvernance, sélection et encadrement des prestataires, suivi des résultats sur la durée. Un accompagnement structuré qui ne disparaît pas après la première livrable.'
  },
  {
    title: 'Veille et conseil en continu',
    description: 'Suivi réglementaire, alertes AI Act, relecture de projets, conseil ponctuel. Un expert disponible au bon moment, pas seulement au démarrage.'
  },
]

export default function ExpertisesPage() {
  return (
    <>
      <Header />
      <main className="pt-36 pb-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">Expertises</p>
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-[1.1] mb-6">
                Ce que nous<br className="hidden sm:block" /> savons faire !
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto md:mx-0">
                Une expertise construite sur le terrain, mobilisable selon vos besoins.
              </p>
            </div>
            <div className="w-full md:w-[400px] flex-shrink-0">
              <img src="/images/worker.webp" alt="Expert" className="w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-4">Compétences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {expertises.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-8 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/contact" className="inline-block px-10 py-4 text-lg text-white bg-black hover:bg-white hover:text-black transition-all duration-200">
              Discuter de votre projet
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}