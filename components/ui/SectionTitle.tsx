import React from 'react'
import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ badge, title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {badge && (
        <div className={cn('mb-4', centered && 'flex justify-center')}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
