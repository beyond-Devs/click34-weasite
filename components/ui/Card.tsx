import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  style?: React.CSSProperties
}

export function Card({ children, className, hover = false, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        'rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/60 p-6',
        hover && 'transition-all duration-300 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
