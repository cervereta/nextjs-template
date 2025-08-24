import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }