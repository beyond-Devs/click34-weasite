'use client'
import React, { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '942 745 062',
    href: 'tel:+244942745062',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'click3.4ao@gmail.com',
    href: 'mailto:click3.4ao@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Luanda, Angola',
    href: '#',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-surface-2 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1a5fb414 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[250px] bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Contacto"
          title="Vamos trabalhar juntos?"
          subtitle="Tem um projecto em mente? Entre em contacto connosco e transformemos a sua ideia em realidade."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fale connosco</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Estamos disponíveis para discutir o seu projecto, responder a dúvidas ou simplesmente
                apresentar as nossas soluções. Entre em contacto!
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contactInfo.map(info => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-400/50 hover:shadow-md hover:shadow-brand-500/8 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/20 flex-shrink-0 group-hover:shadow-brand-500/35 transition-shadow">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-slate-900 font-medium text-sm group-hover:text-brand-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Working hours */}
            <div className="p-5 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-blue-50">
              <h4 className="text-slate-900 font-semibold mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Segunda - Sexta</span>
                  <span className="text-brand-600 font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sábado</span>
                  <span className="text-brand-600 font-medium">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Domingo</span>
                  <span className="text-slate-400">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-emerald-200 bg-emerald-50">
                <CheckCircle size={56} className="text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600">
                  Obrigado pelo contacto. Responderemos em breve.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }) }}
                  className="mt-6 text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                      Nome *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="O seu nome"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                      E-mail *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-400/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                      Empresa
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-400/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Seleccione...</option>
                      <option value="web">Desenvolvimento Web</option>
                      <option value="mobile">Aplicação Mobile</option>
                      <option value="cloud">Soluções Cloud</option>
                      <option value="software">Software à Medida</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva o seu projecto ou necessidade..."
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-400/20 transition-all resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
