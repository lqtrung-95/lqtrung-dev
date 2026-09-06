import Link from 'next/link'
import { headerNavLinks, siteConfig } from '@/lib/site-config'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Container } from '@/components/layout/container'

export function Header() {
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
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav links={headerNavLinks} />
        </div>
      </Container>
    </header>
  )
}
