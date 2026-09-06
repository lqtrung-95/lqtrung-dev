import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const prevHref = currentPage <= 2 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextHref = `/blog/page/${currentPage + 1}`

  return (
    <nav className="mt-10 flex items-center justify-between" aria-label="Pagination">
      <Link
        href={prevHref}
        aria-disabled={currentPage <= 1}
        className={cn(
          'text-sm font-medium text-(--fg-muted) hover:text-(--fg)',
          currentPage <= 1 && 'pointer-events-none opacity-40'
        )}
      >
        &larr; Previous
      </Link>
      <span className="text-sm text-(--fg-subtle)">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={nextHref}
        aria-disabled={currentPage >= totalPages}
        className={cn(
          'text-sm font-medium text-(--fg-muted) hover:text-(--fg)',
          currentPage >= totalPages && 'pointer-events-none opacity-40'
        )}
      >
        Next &rarr;
      </Link>
    </nav>
  )
}
