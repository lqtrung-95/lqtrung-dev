import Link from 'next/link'
import { projects } from '@/data/projects'
import { BentoGrid } from '@/components/layout/bento-grid'
import { ProjectCard } from '@/components/projects/project-card'

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-8">
      <div className="flex items-baseline justify-between">
        <h2 className="font-(family-name:--font-sans-display) text-2xl font-semibold text-(--fg)">
          Selected work
        </h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-(--accent) hover:text-(--accent-hover)"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="mt-6">
        <BentoGrid>
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
