import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { getAllTags } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Browse posts by topic.',
}

export default function TagsPage() {
  const tags = getAllTags()
  return (
    <Container>
      <p className="label-mono mt-8 text-(--accent) uppercase">~/tags</p>
      <h1 className="mt-3 text-3xl font-bold text-(--fg)">Tags</h1>
      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map(({ tag, slug, count }) => (
          <Link
            key={slug}
            href={`/tags/${slug}`}
            className="label-mono rounded border border-(--border) px-3 py-1 text-(--fg-muted) uppercase transition-colors duration-150 ease-out hover:border-(--accent) hover:text-(--accent)"
          >
            {tag} <span className="text-(--fg-subtle)">({count})</span>
          </Link>
        ))}
      </div>
    </Container>
  )
}
