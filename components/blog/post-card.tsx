import Link from 'next/link'
import type { Post } from '@/lib/content'
import { PostMeta } from '@/components/blog/post-meta'
import { TagPill } from '@/components/blog/tag-pill'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="-mx-4 rounded-lg border-b border-(--border) px-4 py-8 transition-colors duration-200 ease-out first:pt-0 last:border-b-0 hover:bg-(--bg-subtle) sm:-mx-6 sm:px-6">
      <PostMeta date={post.date} readingTime={post.readingTime} />
      <h2 className="mt-2 font-(family-name:--font-sans-display) text-xl font-semibold">
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
    </article>
  )
}
