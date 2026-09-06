'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// Matches Velite's `s.toc()` output shape: a nested tree of heading nodes.
export type TocNode = { title: string; url: string; items: TocNode[] }

type FlatTocItem = { title: string; url: string; depth: number }

function flatten(nodes: TocNode[], depth = 1): FlatTocItem[] {
  return nodes.flatMap((node) => [
    { title: node.title, url: node.url, depth },
    ...flatten(node.items, depth + 1),
  ])
}

export function Toc({ items }: { items: TocNode[] }) {
  const flatItems = flatten(items)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headingIds = flatItems.map((item) => item.url.replace('#', ''))
    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- flatItems is derived from items each render; re-running on items changing is what we want
  }, [items])

  if (flatItems.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="hidden xl:block">
      <p className="mb-3 text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">
        On this page
      </p>
      <ul className="space-y-2 border-l border-(--border) text-sm">
        {flatItems.map((item) => {
          const id = item.url.replace('#', '')
          const isActive = id === activeId
          return (
            <li key={item.url} style={{ paddingLeft: `${(item.depth - 1) * 0.75 + 0.75}rem` }}>
              <a
                href={item.url}
                className={cn(
                  '-ml-px block border-l-2 pl-3 transition-colors',
                  isActive
                    ? 'border-(--accent) text-(--accent)'
                    : 'border-transparent text-(--fg-muted) hover:text-(--fg)'
                )}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
