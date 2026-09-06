import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { BentoGrid } from '@/components/layout/bento-grid'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work.',
}

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="mt-8 font-(family-name:--font-sans-display) text-3xl font-bold text-(--fg)">
        Projects
      </h1>
      <p className="mt-3 max-w-2xl text-(--fg-muted)">
        Enterprise platforms at Binance and Zalo, alongside independent products and tools.
      </p>
      <div className="mt-10">
        <BentoGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </BentoGrid>
      </div>
    </Container>
  )
}
