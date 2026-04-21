import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-600 border border-brand-500/20 uppercase tracking-wider',
        className
      )}
    >
      {children}
    </span>
  )
}
