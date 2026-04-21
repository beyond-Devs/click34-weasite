'use client'
import React from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Linkedin, Github, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Fundador',
    bio: 'Visionário tecnológico com mais de 8 anos de experiência em desenvolvimento de software e liderança de produtos digitais.',
    initials: 'CS',
    gradient: 'from-brand-500 to-brand-700',
    socials: { linkedin: '#', github: '#' },
  },
  {
    name: 'Ana Pereira',
    role: 'CTO',
    bio: 'Engenheira de software especializada em arquitectura de sistemas escaláveis e cloud computing para empresas africanas.',
    initials: 'AP',
    gradient: 'from-brand-500 to-brand-600',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Miguel Costa',
    role: 'Lead Designer',
    bio: 'Designer de produto com foco em experiências digitais que equilibram estética e funcionalidade para o mercado angolano.',
    initials: 'MC',
    gradient: 'from-brand-600 to-brand-700',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sofia Neto',
    role: 'Dev Full-Stack',
    bio: 'Desenvolvedora apaixonada por criar soluções elegantes e performantes com as tecnologias mais modernas do mercado.',
    initials: 'SN',
    gradient: 'from-brand-400 to-brand-600',
    socials: { linkedin: '#', github: '#' },
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-surface-2 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#161F6412 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Nossa Equipa"
          title="As mentes por trás da inovação"
          subtitle="Uma equipa talentosa e apaixonada, dedicada a transformar o seu negócio através da tecnologia."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.name} hover className="group text-center">
              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/35 transition-shadow duration-300`}
                >
                  {member.initials}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
              </div>

              {/* Info */}
              <h3 className="font-bold text-dark group-hover:text-brand-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-brand-600 text-xs font-semibold uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>

              {/* Socials */}
              <div className="flex items-center justify-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-500/10 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-500/10 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-500/10 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
