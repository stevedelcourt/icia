import { HTMLAttributes, ElementType } from 'react'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'muted'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: ElementType
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'font-serif text-h1',
  h2: 'font-serif text-h2',
  h3: 'font-serif text-h3',
  body: 'text-body',
  muted: 'text-body text-text-muted',
}

export function Typography({ 
  variant = 'body', 
  as: Component = 'p', 
  className = '', 
  children, 
  ...props 
}: TypographyProps) {
  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}
