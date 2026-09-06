import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work.',
}

export default function ProjectsPage() {
  const enterprise = projects.filter((p) => p.category === 'enterprise')
  const personal = projects.filter((p) => p.category === 'personal')

  return (
    <Container>
      <p className="label-mono mt-8 text-(--accent) uppercase">~/projects</p>
      <h1 className="mt-3 text-3xl font-bold text-(--fg)">Projects</h1>
      <p className="mt-3 max-w-2xl text-(--fg-muted)">
        Enterprise platforms at Binance and Zalo, alongside independent products and tools.
      </p>

      <section className="mt-12">
        <h2 className="label-mono text-(--fg-subtle) uppercase">
          Enterprise scale <span aria-hidden>{'// '}{enterprise.length}</span>
        </h2>
        <div className="mt-4 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {enterprise.map((project) => (
            <ProjectCard key={project.title} project={project} detailed />
          ))}
        </div>
      </section>

      <section className="mt-12 mb-16">
        <h2 className="label-mono text-(--fg-subtle) uppercase">
          Independent products <span aria-hidden>{'// '}{personal.length}</span>
        </h2>
        <div className="mt-4 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {personal.map((project) => (
            <ProjectCard key={project.title} project={project} detailed />
          ))}
        </div>
      </section>
    </Container>
  )
}
