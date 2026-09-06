import { posts as allPosts, authors as allAuthors } from '#velite'
import GithubSlugger from 'github-slugger'
import { siteConfig } from '@/lib/site-config'

export type Post = (typeof allPosts)[number]
export type Author = (typeof allAuthors)[number]

/** Published posts sorted newest first. Drafts are hidden in production. */
export function getAllPosts(): Post[] {
  const published =
    process.env.NODE_ENV === 'production' ? allPosts.filter((p) => !p.draft) : allPosts
  return [...published].sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getAdjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  if (index === -1) return {}
  return {
    prev: posts[index + 1],
    next: posts[index - 1],
  }
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return allAuthors.find((a) => a.slug === slug)
}

/** Tag name -> slug map, using the same slugger as the legacy site so
 * existing `/tags/<slug>` URLs are preserved. */
const slugger = new GithubSlugger()

export function tagToSlug(tag: string): string {
  slugger.reset()
  return slugger.slug(tag)
}

export type TagCount = { tag: string; slug: string; count: number }

export function getAllTags(): TagCount[] {
  const counts = new Map<string, { tag: string; count: number }>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const slug = tagToSlug(tag)
      const existing = counts.get(slug)
      if (existing) {
        existing.count += 1
      } else {
        counts.set(slug, { tag, count: 1 })
      }
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count)
}

export function getPostsByTagSlug(tagSlug: string): Post[] {
  return getAllPosts().filter((post) => post.tags.some((tag) => tagToSlug(tag) === tagSlug))
}

export function paginatePosts(page: number, perPage: number = siteConfig.postsPerPage) {
  const posts = getAllPosts()
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage: safePage,
  }
}
