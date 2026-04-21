'use client'
import React from 'react'
import Image from 'next/image'
import Logotipo from '@/assets/Logotipo.png'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  Serviços: ['Desenvolvimento Web', 'Aplicações Mobile', 'Soluções Cloud', 'Cibersegurança', 'Software à Medida'],
  Empresa:  ['Sobre Nós', 'Equipa', 'Testemunhos', 'Contacto'],
}

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Transformamos a sua visão digital em realidade. Soluções tecnológicas inovadoras
              para impulsionar negócios em Angola e além fronteiras.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+244942745062" className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm">
                <Phone size={14} className="text-brand-500" /> 942 745 062
              </a>
              <a href="mailto:click3.4ao@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-brand-400 transition-colors text-sm">
                <Mail size={14} className="text-brand-500" /> click3.4ao@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={14} className="text-brand-500" /> Luanda, Angola
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#' + (title === 'Empresa' ? link.toLowerCase().replace(/\s/g, '-') : 'services'))}
                      className="text-slate-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Click 3.4. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-brand-500 fill-brand-500 mx-0.5" /> em Angola
          </p>
        </div>
      </div>
    </footer>
  )
}
