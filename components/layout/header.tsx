import Link from 'next/link'
import { headerNavLinks, siteConfig } from '@/lib/site-config'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Container } from '@/components/layout/container'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--border) bg-(--bg)/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-(family-name:--font-sans-display) text-lg font-semibold text-(--fg)">
          {siteConfig.headerTitle}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--fg-muted) transition-colors hover:text-(--fg)"
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
