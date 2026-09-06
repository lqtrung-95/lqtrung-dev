import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { BentoSpan } from '@/data/projects'

// Static lookup map — Tailwind v4 cannot see dynamically interpolated class
// name strings (e.g. `md:col-span-${n}`), so every span variant must be a
// literal, statically-analyzable class here.
const spanClasses: Record<BentoSpan, string> = {
  featured: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-2',
  small: 'md:col-span-1',
}

export function BentoCell({
  span = 'small',
  className,
  children,
}: {
  span?: BentoSpan
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'surface-card scroll-reveal p-4 sm:p-6',
        spanClasses[span],
        className
      )}
    >
      {children}
    </div>
  )
}
