'use client'
import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle2, Target, Lightbulb, Users2 } from 'lucide-react'

const pillars = [
  { icon: Target,    label: 'Missão',  text: 'Impulsionar a evolução digital das organizações através de soluções inteligentes, integradas e orientadas por dados, promovendo eficiência operacional, inovação contínua e decisões estratégicas mais rápidas e precisas.' },
  { icon: Lightbulb, label: 'Visão',   text: 'Ser referência em transformação digital e ciência de dados em África, reconhecida pela capacidade de acelerar o crescimento sustentável das empresas e democratizar o acesso à tecnologia.' },
  { icon: Users2,    label: 'Valores', text: 'Inovação contínua, foco no cliente, integridade nos dados, responsabilidade social e excelência técnica em cada solução que entregamos.' },
]

const differentials = [
  'Data Science & Inteligência de Dados',
  'Metodologia W-Agile',
  'Governança Digital',
  'Score de risco e crédito (Score Njima)',
  'Compliance ARSEG e BNA',
  'Plataformas digitais escaláveis',
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="mb-4">
              <Badge>Sobre Nós</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              Transformação Digital com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
                DNA Angolano
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              A Click 3.4 é uma empresa de direito angolano dedicada à Transformação Digital e Ciência
              de Dados. Atuamos na interseção entre tecnologia, dados e estratégia, ajudando organizações
              a modernizar processos, aumentar eficiência operacional e tomar decisões baseadas em
              inteligência analítica.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Capacitamos instituições e mercados através de tecnologia inteligente, ágil e orientada
              a resultados reais — impulsionando a eficiência e a evolução digital com soluções de
              alto impacto, mensuráveis e escaláveis.
            </p>

            {/* Differentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentials.map(d => (
                <div key={d} className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0" />
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.label}
                  className="flex gap-5 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-400/50 hover:shadow-md hover:shadow-brand-500/8 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1 group-hover:text-brand-600 transition-colors">
                      {pillar.label}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              )
            })}

            {/* Stats card */}
            <div className="relative mt-4 p-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-brand-50 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                <pattern id="sm-circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 30 H25 M35 30 H60" stroke="#161F64" strokeWidth="1" fill="none"/>
                  <path d="M30 0 V25 M30 35 V60" stroke="#161F64" strokeWidth="1" fill="none"/>
                  <circle cx="30" cy="30" r="3" fill="none" stroke="#161F64" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#sm-circuit)"/>
              </svg>
              <div className="relative flex items-center gap-4">
                <div className="text-4xl font-bold text-brand-600">3+</div>
                <div>
                  <div className="text-dark font-semibold">Anos no Mercado</div>
                  <div className="text-slate-600 text-sm">Construindo o futuro digital de Angola</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
