'use client'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-light"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-blue-50/60" />
        {/* Radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-brand-400/12 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/5 w-[250px] h-[250px] rounded-full bg-brand-300/10 blur-[70px]" />
      </div>

      {/* Circuit pattern - subtle on light bg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H40 M60 50 H100" stroke="#1a5fb4" strokeWidth="0.9" fill="none"/>
              <path d="M50 0 V40 M50 60 V100" stroke="#1a5fb4" strokeWidth="0.9" fill="none"/>
              <path d="M40 50 Q50 50 50 40" stroke="#1a5fb4" strokeWidth="0.9" fill="none"/>
              <circle cx="50" cy="50" r="3" fill="none" stroke="#1a5fb4" strokeWidth="0.9"/>
              <circle cx="0" cy="50" r="1.5" fill="#1a5fb4"/>
              <circle cx="100" cy="50" r="1.5" fill="#1a5fb4"/>
              <circle cx="50" cy="0" r="1.5" fill="#1a5fb4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brand-400/35"
            style={{
              top: `${[15, 70, 30, 85, 50, 20][i]}%`,
              left: `${[10, 85, 92, 15, 78, 55][i]}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="flex justify-center mb-8"
          style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}
        >
          <Badge>
            <Zap size={12} className="text-brand-500" />
            Inovação Tecnológica em Angola
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1]"
          style={{ animation: 'fadeUp 0.6s ease 0.25s both' }}
        >
          Transforme sua{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
              visão
            </span>
          </span>{' '}
          em realidade com a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
            Click 3.4
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 0.6s ease 0.4s both' }}
        >
          Inovação em tecnologia para impulsionar seu negócio. Soluções digitais de ponta que
          conectam, automatizam e escalam o seu sucesso.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: 'fadeUp 0.6s ease 0.55s both' }}
        >
          <Button size="lg" onClick={() => scrollTo('#services')}>
            Explorar Serviços
            <ArrowRight size={20} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')}>
            Fale Connosco
          </Button>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          style={{ animation: 'fadeUp 0.6s ease 0.7s both' }}
        >
          {[
            { value: '50+', label: 'Clientes' },
            { value: '3+', label: 'Anos de Experiência' },
            { value: '99%', label: 'Satisfação' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      {/* <button
        onClick={() => scrollTo('#services')}
        className="absolute mt-10 bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-brand-500 transition-colors"
        style={{ animation: 'float 2s ease-in-out infinite' }}
      >
        <ChevronDown size={32} />
      </button> */}
    </section>
  )
}
