import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { Container } from '@/components/layout/container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-(--border) bg-(--bg-subtle)">
      <Container className="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <p className="label-mono-sm text-(--fg-subtle) uppercase">
          &copy; {year} {siteConfig.author}
        </p>
        <div className="label-mono flex items-center gap-5 text-(--fg-muted)">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 ease-out hover:text-(--accent)"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors duration-150 ease-out hover:text-(--accent)"
          >
            Email
          </a>
          <Link
            href="/feed.xml"
            className="transition-colors duration-150 ease-out hover:text-(--accent)"
          >
            RSS
          </Link>
        </div>
      </Container>
    </footer>
  )
}
