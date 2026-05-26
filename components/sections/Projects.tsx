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
    title: 'Wenzy — Ecossistema de Inclusão Financeira',
    description:
      'Principal produto de impacto da Click 3.4. O Wenzy cria mecanismos que permitem estruturar a informalidade económica, convertendo atividades não formalizadas em ativos financeiros rastreáveis e integráveis no sistema económico formal.',
    category: 'Data Science & Analytics',
    tags: ['Inclusão Financeira', 'Data Science', 'Score Njima'],
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80',
    liveUrl: 'https://wenzy.ao',
    featured: true,
  },
  {
    title: 'Score Njima — Crédito & Risco',
    description:
      'Modelo preditivo de scoring de risco e crédito desenvolvido para o contexto angolano, permitindo análise de comportamento financeiro e acesso a serviços de crédito para populações sub-bancarizadas.',
    category: 'Data Science & Analytics',
    tags: ['Machine Learning', 'Python', 'Risk Scoring'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    featured: true,
  },
  {
    title: 'Plataforma de Formalização Económica',
    description:
      'Sistema que permite a formalização progressiva de atividades económicas informais, com geração de histórico financeiro confiável e integração com sistemas de pagamento.',
    category: 'Desenvolvimento de Software',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1687422808384-c896d0efd4ab?w=600&q=80',
    liveUrl: '#',
  },
  {
    title: 'Dashboard Executivo BI',
    description:
      'Painel de Business Intelligence em tempo real com visualizações interativas, relatórios automáticos e análise preditiva para tomada de decisão estratégica em organizações angolanas.',
    category: 'Data Science & Analytics',
    tags: ['React', 'D3.js', 'Python'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    liveUrl: '#',
  },
  {
    title: 'Sistema de Compliance Digital',
    description:
      'Solução de governança digital alinhada com as normas ARSEG e BNA, com estruturação de políticas digitais, gestão de risco operacional e auditoria tecnológica para instituições financeiras.',
    category: 'Compliance & Risco',
    tags: ['Compliance', 'ARSEG', 'BNA'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    liveUrl: '#',
  },
  {
    title: 'Arquitectura de Microsserviços',
    description:
      'Desenvolvimento de plataforma digital com arquitectura de microsserviços e APIs de integração para organização industrial angolana, cobrindo operações, stock e gestão financeira.',
    category: 'Desenvolvimento de Software',
    tags: ['Microsserviços', 'Docker', 'REST API'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    liveUrl: '#',
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
              ecossistema
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Projectos reais com impacto mensurável. Da inclusão financeira à governança digital,
            cada solução é construída para transformar o contexto africano.
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