import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { PostList } from '@/components/blog/post-list'
import { getAllTags, getPostsByTagSlug } from '@/lib/content'

export async function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const { tag } = await params
  const match = getAllTags().find((t) => t.slug === tag)
  if (!match) return {}
  return { title: `${match.tag} — Tags` }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const match = getAllTags().find((t) => t.slug === tagSlug)
  if (!match) notFound()

  const posts = getPostsByTagSlug(tagSlug)

  return (
    <Container>
      <h1 className="mt-8 font-(family-name:--font-sans-display) text-3xl font-bold text-(--fg)">
        #{match.tag}
      </h1>
      <PostList posts={posts} />
    </Container>
  )
}
