import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { PostList } from '@/components/blog/post-list'
import { Pagination } from '@/components/blog/pagination'
import { paginatePosts, getAllPosts } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export async function generateStaticParams() {
  const totalPages = Math.max(1, Math.ceil(getAllPosts().length / siteConfig.postsPerPage))
  // Page 1 is served at /blog; static params start at page 2.
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }))
}

export default async function BlogPagePage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const pageNumber = Number(page)
  if (!Number.isInteger(pageNumber) || pageNumber < 2) {
    notFound()
  }

  const { posts, totalPages, currentPage } = paginatePosts(pageNumber)
  if (pageNumber > totalPages) {
    notFound()
  }

  return (
    <Container>
      <h1 className="mt-8 font-(family-name:--font-sans-display) text-3xl font-bold text-(--fg)">
        Blog
      </h1>
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Container>
  )
}
