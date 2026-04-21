import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  dark?: boolean
}

export function Logo({ size = 'md', className, dark = false }: LogoProps) {
  const sizes = { sm: 32, md: 44, lg: 60 }
  const px = sizes[size]

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg width={px} height={px} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#161F64" />
            <stop offset="100%" stopColor="#151F59" />
          </linearGradient>
        </defs>
        <path
          d="M15 8 L15 72 L35 55 L50 88 L62 83 L47 50 L72 50 Z"
          fill="url(#cursorGrad)"
          stroke="#161F64"
          strokeWidth="1"
        />
        <line x1="30" y1="20" x2="40" y2="20" stroke="#a5b0db" strokeWidth="1.5" opacity="0.7" />
        <line x1="40" y1="20" x2="40" y2="30" stroke="#a5b0db" strokeWidth="1.5" opacity="0.7" />
        <circle cx="40" cy="30" r="2" fill="#a5b0db" opacity="0.9" />
        <line x1="25" y1="35" x2="35" y2="35" stroke="#a5b0db" strokeWidth="1.5" opacity="0.7" />
        <circle cx="25" cy="35" r="2" fill="#a5b0db" opacity="0.9" />
        <line x1="35" y1="45" x2="35" y2="55" stroke="#a5b0db" strokeWidth="1.5" opacity="0.7" />
        <circle cx="35" cy="45" r="2" fill="#a5b0db" opacity="0.9" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-black tracking-wide',
            dark ? 'text-white' : 'text-dark',
            { 'text-xl': size === 'sm', 'text-2xl': size === 'md', 'text-4xl': size === 'lg' }
          )}
          style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}
        >
          Click <span className="text-brand-500">3.4</span>
        </span>
        <span
          className={cn(
            'tracking-widest',
            dark ? 'text-slate-400' : 'text-slate-500',
            { 'text-[9px]': size === 'sm', 'text-[10px]': size === 'md', 'text-sm': size === 'lg' }
          )}
        >
          Tudo ao alcance de um click
        </span>
      </div>
    </div>
  )
}
