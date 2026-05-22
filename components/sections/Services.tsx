'use client'
import React from 'react'
import { Card } from '@/components/ui/Card'
import { SectionTitle } from '@/components/ui/SectionTitle'
import {
  Brain, Code2, Shield, BarChart3, Cloud, Smartphone,
} from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Data Science & Analytics',
    desc: 'Desenvolvemos modelos avançados de análise de dados, scoring e previsão de comportamento: modelos preditivos, Score Njima, Business Intelligence e dashboards executivos.',
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento de Software',
    desc: 'Criamos soluções digitais escaláveis e integradas — arquitectura de sistemas modernos, microsserviços, APIs de integração e plataformas digitais personalizadas.',
    color: 'from-brand-400 to-brand-500',
    bg: 'bg-brand-50',
  },
  {
    icon: Shield,
    title: 'Compliance & Risco',
    desc: 'Apoiamos organizações na conformidade regulatória: alinhamento com normas ARSEG e BNA, políticas digitais, gestão de risco operacional e auditoria tecnológica.',
    color: 'from-brand-600 to-brand-700',
    bg: 'bg-brand-50',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Digital',
    desc: 'Estratégia e transformação digital orientada por dados — analisamos, planeamos e implementamos soluções que aceleram a evolução digital da sua organização.',
    color: 'from-brand-400 to-brand-600',
    bg: 'bg-brand-50',
  },
  {
    icon: Cloud,
    title: 'Soluções Cloud',
    desc: 'Infraestrutura escalável na nuvem com alta disponibilidade, segurança e performance, desenhada para suportar o crescimento acelerado do seu negócio.',
    color: 'from-brand-600 to-brand-500',
    bg: 'bg-brand-50',
  },
  {
    icon: Smartphone,
    title: 'Aplicações Mobile',
    desc: 'Apps iOS e Android nativos e híbridos com interfaces intuitivas, integração com sistemas de pagamento e experiências de utilizador excepcionais.',
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-surface-2 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#161F6415 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute right-0 top-0 w-72 h-72 bg-brand-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Serviços & Consultoria"
          title="Soluções de alto impacto para a sua organização"
          subtitle="Transformamos dados em decisões estratégicas, modernizamos processos e estruturamos sistemas tecnológicos seguros, escaláveis e orientados a resultados reais."
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
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">
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
