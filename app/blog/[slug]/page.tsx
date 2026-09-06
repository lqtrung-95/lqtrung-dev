import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { PostMeta } from '@/components/blog/post-meta'
import { TagPill } from '@/components/blog/tag-pill'
import { Toc } from '@/components/blog/toc'
import { MdxContent } from '@/components/mdx/mdx-content'
import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/content'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <Container>
      <div className="grid grid-cols-1 gap-10 py-8 xl:grid-cols-[1fr_16rem]">
        <article className="min-w-0">
          <header>
            <h1 className="font-(family-name:--font-sans-display) text-3xl font-bold text-(--fg) sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4">
              <PostMeta date={post.date} readingTime={post.readingTime} />
            </div>
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            )}
          </header>

          <div className="prose dark:prose-invert mt-10 max-w-none">
            <MdxContent code={post.body} />
          </div>

          {(prev || next) && (
            <nav className="mt-16 flex justify-between border-t border-(--border) pt-6 text-sm">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="text-(--fg-muted) hover:text-(--fg)">
                  &larr; {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="text-right text-(--fg-muted) hover:text-(--fg)"
                >
                  {next.title} &rarr;
                </Link>
              )}
            </nav>
          )}
        </article>

        <aside className="sticky top-24 hidden self-start xl:block">
          <Toc items={post.toc} />
        </aside>
      </div>
    </Container>
  )
}
