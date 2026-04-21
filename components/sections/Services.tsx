'use client'
import React from 'react'
import { Card } from '@/components/ui/Card'
import { SectionTitle } from '@/components/ui/SectionTitle'
import {
  Globe, Smartphone, Cloud, Shield, Code2, BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    desc: 'Sites e plataformas web modernas, responsivas e otimizadas para conversão, construídas com as melhores tecnologias do mercado.',
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Smartphone,
    title: 'Aplicações Mobile',
    desc: 'Apps iOS e Android nativos e híbridos com interfaces intuitivas e experiências de utilizador excepcionais.',
    color: 'from-blue-500 to-brand-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Cloud,
    title: 'Soluções Cloud',
    desc: 'Infraestrutura escalável na nuvem que garante alta disponibilidade, segurança e performance para o seu negócio.',
    color: 'from-brand-600 to-blue-700',
    bg: 'bg-indigo-50',
  },
  {
    icon: Shield,
    title: 'Cibersegurança',
    desc: 'Protecção avançada dos seus dados e sistemas com soluções de segurança de última geração e monitorização contínua.',
    color: 'from-brand-400 to-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Code2,
    title: 'Software à Medida',
    desc: 'Desenvolvimento de software personalizado que automatiza processos e resolve os desafios específicos do seu negócio.',
    color: 'from-blue-600 to-brand-500',
    bg: 'bg-sky-50',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Digital',
    desc: 'Estratégia e transformação digital completa — analisamos, planeamos e implementamos soluções que fazem crescer o seu negócio.',
    color: 'from-brand-500 to-blue-600',
    bg: 'bg-blue-50',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface-2 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1a5fb415 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute right-0 top-0 w-72 h-72 bg-brand-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="O que fazemos"
          title="Serviços que impulsionam o seu negócio"
          subtitle="Da concepção ao lançamento, entregamos soluções tecnológicas completas que transformam ideias em produtos digitais de sucesso."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                hover
                className="group"
                style={{ animationDelay: `${i * 0.1}s` } as React.CSSProperties}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-md shadow-brand-500/20`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saber mais</span>
                  <span>→</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
