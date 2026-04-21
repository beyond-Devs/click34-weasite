'use client'
import React, { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'António Lopes',
    company: 'Distribuidora Angolana Lda',
    role: 'Director Geral',
    text: 'A Click 3.4 transformou completamente a nossa gestão interna. O sistema que desenvolveram reduziu o nosso tempo de processamento em 70%. Equipa profissional e sempre disponível.',
    rating: 5,
    initials: 'AL',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    name: 'Maria João Santos',
    company: 'MJ Consultores',
    role: 'CEO',
    text: 'Precisávamos de uma plataforma digital urgentemente. A Click 3.4 entregou em tempo recorde com uma qualidade excepcional. O nosso site triplicou o número de clientes online!',
    rating: 5,
    initials: 'MJ',
    gradient: 'from-blue-500 to-brand-600',
  },
  {
    name: 'Rui Fernandes',
    company: 'TechStart Angola',
    role: 'Fundador',
    text: 'Como startup, precisávamos de um parceiro tecnológico de confiança. A Click 3.4 não foi apenas um fornecedor — foram verdadeiros parceiros no nosso crescimento. Recomendo sem hesitar.',
    rating: 5,
    initials: 'RF',
    gradient: 'from-brand-600 to-blue-700',
  },
  {
    name: 'Celeste Martins',
    company: 'Clínica Digital Luanda',
    role: 'Directora Clínica',
    text: 'A aplicação mobile que desenvolveram para os nossos pacientes é simplesmente excelente. Intuitiva, rápida e confiável. A equipa é super responsiva e atenciosa.',
    rating: 5,
    initials: 'CM',
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    name: 'Bruno Carvalho',
    company: 'Exporta Angola',
    role: 'Director Comercial',
    text: 'A plataforma de e-commerce que a Click 3.4 criou para nós aumentou as nossas vendas em 200% no primeiro trimestre. Investimento que valeu cada kwanza!',
    rating: 5,
    initials: 'BC',
    gradient: 'from-blue-600 to-brand-500',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(testimonials.length - perPage, c + 1))

  const visible = testimonials.slice(current, current + perPage)

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-72 h-72 bg-blue-400/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testemunhos"
          title="O que os nossos clientes dizem"
          subtitle="A confiança dos nossos clientes é o nosso maior troféu. Veja o impacto real das nossas soluções."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((t) => (
            <Card key={t.name + current} hover className="relative">
              {/* Quote icon */}
              <Quote
                size={36}
                className="absolute top-5 right-5 text-brand-200"
                fill="currentColor"
              />

              <Stars count={t.rating} />
              <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-3 rounded-full border border-slate-200 text-slate-500 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.slice(0, testimonials.length - perPage + 1).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-brand-500' : 'w-2 h-2 bg-slate-300 hover:bg-brand-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= testimonials.length - perPage}
            className="p-3 rounded-full border border-slate-200 text-slate-500 hover:border-brand-400 hover:text-brand-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
