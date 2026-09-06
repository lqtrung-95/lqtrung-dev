import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 [grid-auto-flow:dense] md:grid-cols-4 md:auto-rows-[minmax(11rem,auto)]',
        className
      )}
    >
      {children}
    </div>
  )
}
