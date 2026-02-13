import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800 rounded-md',
  secondary: 'border-2 border-black text-black hover:bg-black hover:text-white rounded-md',
  ghost: 'text-black hover:bg-black/10 rounded-md',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    const baseClasses = `inline-flex items-center justify-center font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]}`
    
    if (href) {
      return (
        <Link href={href} className={`${baseClasses} ${className}`}>
          {children}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
