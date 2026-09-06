import Link from 'next/link'
import { getAllPosts } from '@/lib/content'
import { PostList } from '@/components/blog/post-list'

export function RecentPosts() {
  const posts = getAllPosts().slice(0, 3)
  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-(--fg)">Recent posts</h2>
        <Link
          href="/blog"
          className="label-mono text-(--accent) uppercase transition-colors duration-150 ease-out hover:text-(--accent-hover)"
        >
          View all &rarr;
        </Link>
      </div>
      <PostList posts={posts} />
    </section>
  )
}
