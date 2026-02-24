import { ButtonHTMLAttributes, forwardRef, ReactNode, CSSProperties } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  arrow?: boolean
  children?: ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-white rounded-md',
  secondary: 'bg-navy text-white rounded-md',
  outline: 'border-2 border-navy text-navy rounded-md',
  ghost: 'text-slate-dark rounded-md',
}

const hoverBg: Record<ButtonVariant, string> = {
  primary: '#001A3A',
  secondary: '#001A3A',
  outline: '#00255D',
  ghost: '#191919',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, arrow = true, className = '', children, style, ...props }, ref) => {
    const baseClasses = `inline-flex items-center justify-center font-semibold whitespace-nowrap select-none transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]}`
    
    const combinedStyle: CSSProperties = {
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      ...style,
    }

    const content = (
      <span className="flex items-center gap-2">
        <span>{children}</span>
        {arrow && <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">➔</span>}
      </span>
    )
    
    if (href) {
      return (
        <Link 
          href={href} 
          className={`group ${baseClasses} ${className}`}
          style={combinedStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = hoverBg[variant]
            if (variant === 'outline' || variant === 'ghost') {
              e.currentTarget.style.color = 'white'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = ''
            if (variant === 'outline' || variant === 'ghost') {
              e.currentTarget.style.color = ''
            }
          }}
        >
          {content}
        </Link>
      )
    }
    
    return (
      <button 
        ref={ref} 
        className={`group ${baseClasses} ${className}`}
        style={combinedStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBg[variant]
          if (variant === 'outline' || variant === 'ghost') {
            e.currentTarget.style.color = 'white'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = ''
          if (variant === 'outline' || variant === 'ghost') {
            e.currentTarget.style.color = ''
          }
        }}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
