import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { Container } from '@/components/layout/container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-(--border)">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-(--fg-muted) sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.author}
        </p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-(--fg)">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-(--fg)">
            Email
          </a>
          <Link href="/feed.xml" className="hover:text-(--fg)">
            RSS
          </Link>
        </div>
      </Container>
    </footer>
  )
}
