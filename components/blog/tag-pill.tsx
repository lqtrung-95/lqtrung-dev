import Link from 'next/link'
import { tagToSlug } from '@/lib/content'

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${tagToSlug(tag)}`}
      className="rounded-full border border-(--border) px-2.5 py-0.5 text-xs font-medium text-(--fg-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
    >
      {tag}
    </Link>
  )
}
