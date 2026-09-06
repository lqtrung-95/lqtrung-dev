'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { Search } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export type SearchablePost = {
  slug: string
  title: string
  summary?: string
  tags: string[]
}

export function SearchDialog({ posts }: { posts: SearchablePost[] }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function onOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setQuery('')
  }

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'summary', 'tags'],
        threshold: 0.35,
      }),
    [posts]
  )

  const results = query.trim()
    ? fuse.search(query).map((result) => result.item).slice(0, 8)
    : posts.slice(0, 8)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search posts"
        className="label-mono flex items-center gap-2 rounded-md border border-(--border) px-3 py-1.5 text-(--fg-muted) transition-colors duration-150 ease-out hover:border-(--border-strong) hover:text-(--fg)"
      >
        <Search className="size-3.5" aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <span className="hidden text-(--fg-subtle) sm:inline">&#8984;K</span>
      </button>
      <DialogContent variant="center">
        <DialogTitle className="sr-only">Search posts</DialogTitle>
        <div className="flex items-center gap-3 border-b border-(--border) px-4 py-3">
          <Search className="size-4 shrink-0 text-(--fg-subtle)" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts..."
            className="w-full bg-transparent text-(--fg) placeholder:text-(--fg-subtle) focus:outline-none"
          />
        </div>
        <ul className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-(--fg-muted)">No posts found.</li>
          )}
          {results.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => onOpenChange(false)}
                className="block rounded-md px-3 py-2 transition-colors duration-150 ease-out hover:bg-(--bg-subtle)"
              >
                <p className="text-sm font-medium text-(--fg)">{post.title}</p>
                {post.summary && (
                  <p className="mt-0.5 line-clamp-1 text-xs text-(--fg-muted)">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
