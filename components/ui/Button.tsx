import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white',
        {
          'bg-brand-500 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95':
            variant === 'primary',
          'border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white active:scale-95':
            variant === 'outline',
          'text-brand-600 hover:text-brand-700 hover:bg-brand-500/8':
            variant === 'ghost',
        },
        {
          'text-sm px-4 py-2': size === 'sm',
          'text-base px-6 py-3': size === 'md',
          'text-lg px-8 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
