'use client'
import React from 'react'
import Image from 'next/image'
import Logotipo from '@/assets/Logotipo.png'
import { Phone, Mail, MapPin, Heart, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  Serviços: ['Data Science & Analytics', 'Desenvolvimento de Software', 'Compliance & Risco', 'Consultoria Digital', 'Soluções Cloud'],
  Empresa:  ['Sobre Nós', 'Projectos', 'Testemunhos', 'Contacto'],
}

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-brand-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empresa angolana especializada em Transformação Digital e Ciência de Dados.
              Capacitamos organizações através de tecnologia inteligente, ágil e orientada
              a resultados reais.
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
            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/click-3-4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-900/40 hover:bg-brand-500 transition-colors text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/click3.4_ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-900/40 hover:bg-brand-500 transition-colors text-slate-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
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

        <div className="mt-12 pt-6 border-t border-brand-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
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
