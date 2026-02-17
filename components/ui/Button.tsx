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
  primary: 'bg-accent text-white hover:bg-accent-hover rounded-md',
  secondary: 'border-2 border-black text-black hover:bg-black hover:text-white rounded-md',
  ghost: 'text-black hover:bg-black/10 rounded-md',
}

function SlideArrow() {
  return (
    <span className="inline-flex items-center overflow-hidden ml-2">
      <span className="transform transition-transform duration-300 group-hover:translate-x-2">➔</span>
    </span>
  )
}

function processChildren(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return (
      <span className="group">
        {children}
        <SlideArrow />
      </span>
    )
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => processChildren(child))
  }
  if (typeof children === 'object' && children !== null) {
    return children
  }
  return children
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-300 group ${sizeClasses[size]} ${variantClasses[variant]}`
    
    const content = (
      <span className="flex items-center">
        {typeof children === 'string' ? (
          <>
            <span className="group-hover:mr-2 transition-all duration-300">{children}</span>
            <span className="transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">➔</span>
          </>
        ) : (
          children
        )}
      </span>
    )
    
    if (href) {
      return (
        <Link href={href} className={`${baseClasses} ${className}`}>
          {content}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={`${baseClasses} ${className}`} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
