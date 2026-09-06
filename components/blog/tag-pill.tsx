import Link from 'next/link'
import { tagToSlug } from '@/lib/content'

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${tagToSlug(tag)}`}
      className="label-mono-sm rounded border border-(--border) px-2 py-0.5 text-(--fg-muted) uppercase transition-colors duration-150 ease-out hover:border-(--accent) hover:text-(--accent)"
    >
      {tag}
    </Link>
  )
}
