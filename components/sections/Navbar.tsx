'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logotipo from '@/assets/Logo_blue.png'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '../ui/Logo'

const navLinks = [
  { label: 'Início',       href: '#hero' },
  { label: 'Serviços',     href: '#services' },
  { label: 'Sobre',        href: '#about' },
  { label: 'Equipa',       href: '#team' },
  { label: 'Testemunhos',  href: '#testimonials' },
  { label: 'Contacto',     href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    // Intersection Observer for Scroll Spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section becomes active
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections that have an ID corresponding to nav links
    navLinks.forEach((link) => {
      const id = link.href.substring(1)
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    setActive(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm shadow-slate-200/80'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        <button onClick={() => scrollTo('#hero')} className="flex items-center">
          <Image 
            src={Logotipo}
            alt="Click 3.4 Logo"
            width={110}
            height={30}
            className="h-10 w-auto object-contain"
            priority
          />
        </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  active === link.href
                    ? 'text-brand-600 bg-brand-500/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => scrollTo('#contact')}>
              Fale Connosco
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 p-2"
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-slate-200 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                'text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium',
                active === link.href
                  ? 'text-brand-600 bg-brand-500/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              )}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <Button className="w-full" onClick={() => scrollTo('#contact')}>
              Fale Connosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
