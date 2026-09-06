import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Briefcase, Clock, GraduationCap, Linkedin, Mail, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { MdxContent } from '@/components/mdx/mdx-content'
import { getAuthorBySlug } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Trung Le.',
}

type Fact = { icon: LucideIcon; label: string; value: string; detail?: string }

export default function AboutPage() {
  const author = getAuthorBySlug('default')
  if (!author) notFound()

  const facts: Fact[] = []
  if (author.occupation) {
    facts.push({ icon: Briefcase, label: 'Role', value: author.occupation, detail: author.company })
  }
  facts.push({ icon: GraduationCap, label: 'Education', value: 'MS, Georgia Tech' })
  facts.push({ icon: Clock, label: 'Experience', value: '7+ years' })

  return (
    <Container>
      <h1 className="mt-8 font-(family-name:--font-sans-display) text-3xl font-bold text-(--fg) sm:text-4xl">
        About
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,260px)_1fr] md:gap-16">
        <aside className="scroll-reveal md:sticky md:top-24 md:self-start">
          <Image
            src={author.avatar ?? siteConfig.image}
            alt={author.name}
            width={200}
            height={200}
            className="size-32 rounded-full object-cover ring-1 ring-(--border) sm:size-40"
          />

          <dl className="mt-8 space-y-6">
            {facts.map(({ icon: Icon, label, value, detail }) => (
              <div key={label} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-medium text-(--fg)">{value}</dd>
                  {detail && <dd className="text-sm text-(--fg-muted)">{detail}</dd>}
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 border-t border-(--border) pt-6 text-sm">
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-(--fg-muted) transition-colors hover:text-(--accent)"
              >
                <Linkedin className="size-4" aria-hidden />
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-(--fg-muted) transition-colors hover:text-(--accent)"
            >
              <Mail className="size-4" aria-hidden />
              Email
            </a>
          </div>
        </aside>

        <div className="prose dark:prose-invert scroll-reveal max-w-none">
          <MdxContent code={author.body} />
        </div>
      </div>
    </Container>
  )
}
