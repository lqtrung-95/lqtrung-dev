import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { PostList } from '@/components/blog/post-list'
import { Pagination } from '@/components/blog/pagination'
import { paginatePosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on front-end engineering, algorithms, and system design.',
}

export default function BlogIndexPage() {
  const { posts, totalPages, currentPage } = paginatePosts(1)
  return (
    <Container>
      <p className="label-mono mt-8 text-(--accent) uppercase">~/blog</p>
      <h1 className="mt-3 text-3xl font-bold text-(--fg)">Blog</h1>
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Container>
  )
}
