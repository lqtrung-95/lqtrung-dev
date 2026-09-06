import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Briefcase, Clock, GraduationCap, Link2 } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { MdxContent } from '@/components/mdx/mdx-content'
import { getAuthorBySlug } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

function StatCell({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
        <Icon className="size-4" aria-hidden />
      </span>
      <p className="label-mono-sm mt-3 text-(--fg-subtle) uppercase">{label}</p>
      <div className="mt-1 text-(--fg)">{children}</div>
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
      <div className="mx-auto max-w-3xl">
        <p className="label-mono mt-8 text-(--accent) uppercase">~/about</p>
        <div className="mt-3 flex items-center gap-4">
          <h1 className="text-3xl font-bold text-(--fg)">About</h1>
          {author.avatar && (
            <Image
              src={author.avatar}
              alt={author.name}
              width={64}
              height={64}
              className="size-16 shrink-0 rounded-full object-cover"
            />
          )}
        </div>

        <div className="surface-card mt-8 grid grid-cols-2 gap-x-6 gap-y-8 p-6 sm:grid-cols-4">
          <StatCell icon={Briefcase} label="Role">
            <p className="font-medium">{author.occupation}</p>
            <p className="text-sm text-(--fg-muted)">{author.company}</p>
          </StatCell>
          <StatCell icon={GraduationCap} label="Education">
            <p className="font-medium">MS, Georgia Tech</p>
            <p className="text-sm text-(--fg-muted)">Artificial Intelligence</p>
          </StatCell>
          <StatCell icon={Clock} label="Experience">
            <p className="font-medium">7+ years</p>
          </StatCell>
          <StatCell icon={Link2} label="Connect">
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
          </StatCell>
        </div>

        <div className="prose dark:prose-invert mt-10 max-w-none">
          <MdxContent code={author.body} />
        </div>
      </div>
    </Container>
  )
}
