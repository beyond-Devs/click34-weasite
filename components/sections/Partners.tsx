'use client'
import React from 'react'
import { Award, Globe2, MapPin } from 'lucide-react'

const partners = [
  {
    name: 'Google Hustle Academy',
    logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
    description: 'Certificação em empreendedorismo digital e inovação tecnológica em África.',
    type: 'Certificação',
    color: '#4285F4',
  },
  {
    name: 'AfCFTA',
    logo: null,
    initials: 'AfCFTA',
    description: 'Programa de Inclusão Digital e Empreendedorismo — Secretariado da Área de Livre Comércio Continental Africana.',
    type: 'Certificação',
    color: '#006633',
  },
  {
    name: 'Mercado do Mundial',
    logo: null,
    initials: 'MM',
    description: 'Mercado Municipal do Mundial — Cacuaco, Luanda. Gestão 100% digital com Wenzy Core.',
    type: 'Parceiro Operacional',
    color: '#151F59',
  },
  {
    name: 'Mercado da Mabunda',
    logo: null,
    initials: 'MB',
    description: 'Mercado da Mabunda — Samba, Luanda. Integrado no ecossistema Wenzy com inclusão financeira activa.',
    type: 'Parceiro Operacional',
    color: '#151F59',
  },
  {
    name: 'Mercado do Prenda',
    logo: null,
    initials: 'MP',
    description: 'Mercado do Prenda — Maianga, Luanda. Organização digital e emissão de fichas em tempo real.',
    type: 'Parceiro Operacional',
    color: '#151F59',
  },
]

const typeIcon: Record<string, React.ReactNode> = {
  'Certificação':          <Award size={11} />,
  'Parceiro Operacional':  <MapPin size={11} />,
}

export function Partners() {
  return (
    <section
      id="partners"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#F6F7FB',
        backgroundImage:
          'linear-gradient(rgba(21,31,89,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(21,31,89,.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      {/* Blobs decorativos */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21,31,89,.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21,31,89,.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4"
            style={{
              background: 'rgba(21,31,89,.08)',
              color: '#151F59',
              border: '1px solid rgba(21,31,89,.18)',
            }}
          >
            <Globe2 size={11} />
            Parceiros & Reconhecimentos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: '#000000' }}
          >
            Quem confia no{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #151F59, #161F64)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ecossistema Wenzy
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Certificações internacionais e parcerias operacionais que validam o impacto
            da Click 3.4 na transformação digital do comércio em Angola.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,.05)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1.5px solid rgba(21,31,89,.30)'
                el.style.boxShadow = '0 16px 40px rgba(21,31,89,.12)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1.5px solid #e2e8f0'
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,.05)'
              }}
            >
              {/* Logo / Initials */}
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 56, height: 56,
                    background: p.logo ? '#fff' : p.color,
                    border: p.logo ? `2px solid ${p.color}30` : 'none',
                    flexShrink: 0,
                  }}
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{ width: 36, height: 'auto', objectFit: 'contain' }}
                    />
                  ) : (
                    <span
                      style={{
                        color: '#fff',
                        fontWeight: 800,
                        fontSize: p.initials && p.initials.length > 2 ? 9 : 13,
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        padding: '0 4px',
                      }}
                    >
                      {p.initials}
                    </span>
                  )}
                </div>

                {/* Badge tipo */}
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                  style={{
                    background: `${p.color}12`,
                    color: p.color,
                    border: `1px solid ${p.color}22`,
                  }}
                >
                  {typeIcon[p.type]}
                  {p.type}
                </span>
              </div>

              {/* Nome */}
              <div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: '#0F1623' }}>
                  {p.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé com link para Wenzy */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Conheça mais sobre o ecossistema de impacto da Click 3.4
          </p>
          <a
            href="https://wenzy.ao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #151F59 0%, #161F64 100%)',
              boxShadow: '0 8px 24px rgba(21,31,89,.30)',
            }}
          >
            <Globe2 size={15} />
            Visitar wenzy.ao
          </a>
        </div>
      </div>
    </section>
  )
}
