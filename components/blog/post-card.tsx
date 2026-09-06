import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/lib/content'
import { PostMeta } from '@/components/blog/post-meta'
import { TagPill } from '@/components/blog/tag-pill'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group border-b border-(--border) px-2 py-6 transition-colors duration-150 ease-out first:pt-0 last:border-b-0 hover:bg-(--bg-subtle)/50">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <PostMeta date={post.date} readingTime={post.readingTime} />
          <h2 className="mt-2 text-xl font-semibold">
            <Link href={`/blog/${post.slug}`} className="text-(--fg) hover:text-(--accent)">
              {post.title}
            </Link>
          </h2>
          {post.summary && <p className="mt-2 text-(--fg-muted)">{post.summary}</p>}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
        <ArrowRight
          aria-hidden
          className="mt-1 size-4 shrink-0 text-(--fg-subtle) transition-colors duration-150 ease-out group-hover:text-(--accent)"
        />
      </div>
    </article>
  )
}
