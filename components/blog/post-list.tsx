import type { Post } from '@/lib/content'
import { PostCard } from '@/components/blog/post-card'

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="py-8 text-(--fg-muted)">No posts yet.</p>
  }
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
