import { Linkedin, Mail, Rss } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Container } from '@/components/layout/container'

const socialLinks = [
  { href: siteConfig.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
  { href: `mailto:${siteConfig.email}`, label: 'Email', icon: Mail, external: false },
  { href: '/feed.xml', label: 'RSS feed', icon: Rss, external: false },
] as const

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-(--border)">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-(--fg-muted) sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.author}
        </p>
        <div className="flex items-center gap-1">
          {socialLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex size-9 items-center justify-center rounded-md text-(--fg-muted) transition-colors duration-200 ease-out hover:bg-(--bg-subtle) hover:text-(--accent)"
            >
              <Icon className="size-4" aria-hidden />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
