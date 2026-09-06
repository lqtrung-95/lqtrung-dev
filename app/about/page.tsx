import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Briefcase, Clock, GraduationCap, Link2 } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { MdxContent } from '@/components/mdx/mdx-content'
import { getAuthorBySlug } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

function StatRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-start gap-3 border-b border-(--border) py-4 first:pt-0 last:border-b-0 last:pb-0">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="label-mono-sm text-(--fg-subtle) uppercase">{label}</p>
        <div className="mt-1 text-(--fg)">{children}</div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'About Trung Le.',
}

export default function AboutPage() {
  const author = getAuthorBySlug('default')
  if (!author) notFound()

  return (
    <Container>
      <p className="label-mono mt-8 text-(--accent) uppercase">~/about</p>
      <h1 className="mt-3 text-3xl font-bold text-(--fg)">About</h1>

      <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_320px]">
        <div className="prose dark:prose-invert lg:order-1">
          <MdxContent code={author.body} />
        </div>

        <aside className="lg:order-2 lg:sticky lg:top-24 lg:self-start">
          {author.avatar && (
            <Image
              src={author.avatar}
              alt={author.name}
              width={320}
              height={320}
              className="aspect-square w-full rounded-(--radius-lg) object-cover"
            />
          )}

          <div className="surface-card mt-6 p-6">
            <StatRow icon={Briefcase} label="Role">
              <p className="font-medium">{author.occupation}</p>
              <p className="text-sm text-(--fg-muted)">{author.company}</p>
            </StatRow>
            <StatRow icon={GraduationCap} label="Education">
              <p className="font-medium">MS, Georgia Tech</p>
              <p className="text-sm text-(--fg-muted)">Artificial Intelligence</p>
            </StatRow>
            <StatRow icon={Clock} label="Experience">
              <p className="font-medium">7+ years</p>
            </StatRow>
            <StatRow icon={Link2} label="Connect">
              <div className="flex flex-col gap-1">
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--accent) transition-colors duration-150 ease-out hover:text-(--accent-hover)"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-(--accent) transition-colors duration-150 ease-out hover:text-(--accent-hover)"
                >
                  Email
                </a>
              </div>
            </StatRow>
          </div>
        </aside>
      </div>
    </Container>
  )
}
