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
  interactive = false,
  className,
  children,
}: {
  span?: BentoSpan
  /** Adds a color/shadow hover treatment for cells that wrap a link — never a
   * transform, so neighboring cells never reflow (see motion rules). */
  interactive?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'scroll-reveal rounded-(--radius-card) border border-(--border) bg-(--bg-elevated) p-6',
        interactive &&
          'transition-[border-color,box-shadow] duration-200 ease-out hover:border-(--accent)/50 hover:shadow-[0_16px_40px_-24px_var(--accent)]',
        spanClasses[span],
        className
      )}
    >
      {children}
    </div>
  )
}
