import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
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
  primary: 'bg-navy text-white hover:bg-[#001A3A] transition-colors duration-200 rounded-md cursor-pointer',
  secondary: 'bg-navy text-white hover:bg-[#001A3A] transition-colors duration-200 rounded-md cursor-pointer',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 rounded-md cursor-pointer',
  ghost: 'text-slate-dark hover:bg-slate-dark/10 transition-colors duration-200 rounded-md cursor-pointer',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, arrow = true, className = '', children, ...props }, ref) => {
    const baseClasses = `inline-flex items-center justify-center font-semibold transition-all duration-300 whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]}`
    
    const content = (
      <>
        <span>{children}</span>
        {arrow && (
          <span className="transition-transform duration-300 group-hover:translate-x-1"> -&gt;</span>
        )}
      </>
    )
    
    if (href) {
      return (
        <Link href={href} className={`group ${baseClasses} ${className}`}>
          {content}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={`group ${baseClasses} ${className}`} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
