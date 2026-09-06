import Link from 'next/link'
import { headerNavLinks, siteConfig } from '@/lib/site-config'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Container } from '@/components/layout/container'
import { SearchDialog } from '@/components/search/search-dialog'
import { getAllPosts } from '@/lib/content'

export function Header() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    tags: post.tags,
  }))

  return (
    <header className="sticky top-0 z-40 border-b border-(--border) bg-(--nav-bg) backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="label-mono flex items-baseline gap-1 text-(--fg)">
          <span className="text-(--accent)">~/</span>
          <span>{siteConfig.headerTitle}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label-mono text-(--fg-muted) transition-colors duration-150 ease-out hover:text-(--accent)"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SearchDialog posts={posts} />
          <ThemeToggle />
          <MobileNav links={headerNavLinks} />
        </div>
      </Container>
    </header>
  )
}
