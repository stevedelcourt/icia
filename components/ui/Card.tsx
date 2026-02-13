import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <div 
      className={`bg-white border border-border p-8 ${hover ? 'hover:border-accent transition-colors' : ''} ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}
