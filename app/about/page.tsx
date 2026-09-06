import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Briefcase, Clock, GraduationCap, Link2 } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { BentoGrid } from '@/components/layout/bento-grid'
import { BentoCell } from '@/components/layout/bento-cell'
import { MdxContent } from '@/components/mdx/mdx-content'
import { getAuthorBySlug } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

function StatIcon({ icon: Icon }: { icon: typeof Briefcase }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
      <Icon className="size-4" aria-hidden />
    </span>
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

      <div className="mt-8">
        <BentoGrid>
          <BentoCell span="small">
            <div className="flex items-center gap-3">
              <StatIcon icon={Briefcase} />
              <p className="label-mono-sm text-(--fg-subtle) uppercase">Role</p>
            </div>
            <p className="mt-3 font-medium text-(--fg)">{author.occupation}</p>
            <p className="text-sm text-(--fg-muted)">{author.company}</p>
          </BentoCell>
          <BentoCell span="small">
            <div className="flex items-center gap-3">
              <StatIcon icon={GraduationCap} />
              <p className="label-mono-sm text-(--fg-subtle) uppercase">Education</p>
            </div>
            <p className="mt-3 font-medium text-(--fg)">MS, Georgia Tech</p>
          </BentoCell>
          <BentoCell span="small">
            <div className="flex items-center gap-3">
              <StatIcon icon={Clock} />
              <p className="label-mono-sm text-(--fg-subtle) uppercase">Experience</p>
            </div>
            <p className="mt-3 font-medium text-(--fg)">7+ years</p>
          </BentoCell>
          <BentoCell span="small">
            <div className="flex items-center gap-3">
              <StatIcon icon={Link2} />
              <p className="label-mono-sm text-(--fg-subtle) uppercase">Connect</p>
            </div>
            <div className="mt-3 flex flex-col gap-1 text-sm">
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
          </BentoCell>
        </BentoGrid>
      </div>

      <div className="prose dark:prose-invert mt-12 max-w-none">
        <MdxContent code={author.body} />
      </div>
    </Container>
  )
}
