'use client'
import React, { useState } from 'react'
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react'

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  image: string          
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'Portal Corporativo Angola',
    description:
      'Plataforma web corporativa com gestão de conteúdos, área de clientes e integração com sistemas de pagamento angolanos.',
    category: 'Desenvolvimento Web',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    image: '',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'App de Delivery Luanda',
    description:
      'Aplicação mobile para encomendas e entregas em Luanda, com rastreamento em tempo real e sistema de pagamento integrado.',
    category: 'Aplicação Mobile',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    image: '',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'Sistema ERP Industrial',
    description:
      'Software de gestão empresarial personalizado para empresa industrial angolana, cobrindo stock, RH e financeiro.',
    category: 'Software à Medida',
    tags: ['React', 'Django', 'PostgreSQL'],
    image: '',
    liveUrl: '#',
  },
  {
    title: 'Plataforma E-commerce',
    description:
      'Loja online completa com catálogo de produtos, checkout seguro e dashboard de gestão de vendas para retalhista.',
    category: 'Desenvolvimento Web',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    image: '',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Painel de análise de dados em tempo real com visualizações interativas e relatórios automáticos para executivos.',
    category: 'Consultoria Digital',
    tags: ['React', 'D3.js', 'Python'],
    image: '',
    liveUrl: '#',
  },
  {
    title: 'Sistema de Segurança',
    description:
      'Solução de cibersegurança com monitorização contínua, alertas automáticos e relatórios de compliance para banco.',
    category: 'Cibersegurança',
    tags: ['Python', 'Elasticsearch', 'Docker'],
    image: '',
    repoUrl: '#',
  },
]

const CATEGORIES = ['Todos', ...Array.from(new Set(PROJECTS.map(p => p.category)))]

const COVERS = [
  'linear-gradient(135deg, #151F59 0%, #2a3a9e 100%)',
  'linear-gradient(135deg, #161F64 0%, #0e4fa3 100%)',
  'linear-gradient(135deg, #151F59 0%, #000000 100%)',
  'linear-gradient(135deg, #000000 0%, #161F64 100%)',
  'linear-gradient(135deg, #1a2875 0%, #0d3b8a 100%)',
  'linear-gradient(135deg, #161F64 0%, #151F59 60%, #000000 100%)',
]

function CircuitOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.12 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="proj-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 H32 M48 40 H80" stroke="#fff" strokeWidth="0.8" fill="none" />
          <path d="M40 0 V32 M40 48 V80" stroke="#fff" strokeWidth="0.8" fill="none" />
          <path d="M32 40 Q40 40 40 32" stroke="#fff" strokeWidth="0.8" fill="none" />
          <circle cx="40" cy="40" r="3" fill="none" stroke="#fff" strokeWidth="0.8" />
          <circle cx="0" cy="40" r="1.5" fill="#fff" />
          <circle cx="80" cy="40" r="1.5" fill="#fff" />
          <circle cx="40" cy="0" r="1.5" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#proj-circuit)" />
    </svg>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="py-24 bg-white relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(21,31,89,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(21,31,89,.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    >
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21,31,89,.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22,31,100,.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4"
            style={{
              background: 'rgba(21,31,89,.08)',
              color: '#151F59',
              border: '1px solid rgba(21,31,89,.18)',
            }}
          >
            <Layers size={11} />
            Projectos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: '#000000' }}
          >
            O nosso{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #151F59, #161F64)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              portfólio
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções reais entregues a clientes reais. Cada projecto é uma história de
            transformação digital com impacto mensurável.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => {
            const isActive = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg, #151F59, #161F64)',
                        color: '#ffffff',
                        boxShadow: '0 4px 16px rgba(21,31,89,.3)',
                      }
                    : {
                        background: 'transparent',
                        color: '#151F59',
                        border: '1.5px solid rgba(21,31,89,.25)',
                      }
                }
                onMouseEnter={e => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(21,31,89,.07)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  }
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm mb-4">
            Tem um projecto em mente? Vamos conversar.
          </p>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #151F59 0%, #161F64 100%)',
              boxShadow: '0 8px 28px rgba(21,31,89,.35)',
            }}
          >
            Iniciar um Projecto <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  const coverStyle = project.image
    ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: COVERS[index % COVERS.length] }

  return (
    <article
      className="rounded-2xl overflow-hidden bg-white transition-all duration-300 flex flex-col"
      style={{
        border: hovered ? '1.5px solid rgba(21,31,89,.35)' : '1.5px solid #e2e8f0',
        boxShadow: hovered
          ? '0 20px 50px rgba(21,31,89,.15), 0 4px 16px rgba(0,0,0,.06)'
          : '0 2px 8px rgba(0,0,0,.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden" style={coverStyle}>
        <CircuitOverlay />

        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full"
              style={{ background: 'rgba(255,255,255,.2)', color: '#fff', border: '1px solid rgba(255,255,255,.3)', backdropFilter: 'blur(6px)' }}
            >
              ⭐ Destaque
            </span>
          </div>
        )}

        <div
          className="absolute inset-0 flex items-center justify-center gap-3 z-10 transition-all duration-300"
          style={{
            background: 'rgba(0,0,0,.55)',
            opacity: hovered ? 1 : 0,
            backdropFilter: hovered ? 'blur(2px)' : 'none',
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #151F59, #161F64)', boxShadow: '0 4px 14px rgba(21,31,89,.5)' }}
            >
              <ExternalLink size={14} /> Ver Projecto
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '1px solid rgba(255,255,255,.3)', backdropFilter: 'blur(4px)' }}
            >
              <Github size={14} /> Código
            </a>
          )}
        </div>

        <div className="absolute bottom-3 right-3 z-10">
          <span
            className="px-2.5 py-1 text-[10px] font-semibold rounded-full"
            style={{ background: 'rgba(0,0,0,.5)', color: '#fff', backdropFilter: 'blur(6px)' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-base mb-2 transition-colors duration-200"
          style={{ color: hovered ? '#151F59' : '#000000', fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem' }}
        >
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-semibold rounded-full"
              style={{
                background: 'rgba(21,31,89,.07)',
                color: '#151F59',
                border: '1px solid rgba(21,31,89,.15)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}