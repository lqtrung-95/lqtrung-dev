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
          'label-mono text-(--fg-muted) uppercase transition-colors duration-150 ease-out hover:text-(--accent)',
          currentPage <= 1 && 'pointer-events-none opacity-40'
        )}
      >
        &larr; Previous
      </Link>
      <span className="label-mono-sm text-(--fg-subtle) uppercase">
        Page {currentPage} / {totalPages}
      </span>
      <Link
        href={nextHref}
        aria-disabled={currentPage >= totalPages}
        className={cn(
          'label-mono text-(--fg-muted) uppercase transition-colors duration-150 ease-out hover:text-(--accent)',
          currentPage >= totalPages && 'pointer-events-none opacity-40'
        )}
      >
        Next &rarr;
      </Link>
    </nav>
  )
}
