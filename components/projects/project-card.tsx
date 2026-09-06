import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { BentoCell } from '@/components/layout/bento-cell'
import { StatusBadge } from '@/components/projects/status-badge'

export function ProjectCard({ project }: { project: Project }) {
  const [status, ...techTags] = project.tags
  const scope = project.category === 'enterprise' ? 'ENTERPRISE' : 'INDEPENDENT'

  const content = (
    <>
      <div className="label-mono-sm flex items-center gap-2 text-(--fg-subtle) uppercase">
        <span>{scope}</span>
        <span aria-hidden>{'//'}</span>
        <StatusBadge status={status} />
      </div>

      {project.imgSrc && (
        <div className="relative mt-4 aspect-video overflow-hidden rounded-md bg-(--bg-subtle)">
          <Image src={project.imgSrc} alt={project.title} fill className="object-cover" />
        </div>
      )}

      <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold text-(--fg)">
        {project.title}
        {project.href && (
          <ArrowUpRight
            aria-hidden
            className="size-4 text-(--fg-subtle) transition-colors duration-150 ease-out group-hover:text-(--accent)"
          />
        )}
      </h3>
      <p className="mt-2 text-sm text-(--fg-muted)">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="label-mono-sm rounded border border-(--border) px-2 py-0.5 text-(--fg-muted) uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  if (project.href) {
    return (
      <BentoCell span={project.span} className="group p-0">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full p-4 sm:p-6"
        >
          {content}
        </a>
      </BentoCell>
    )
  }

  return (
    <BentoCell span={project.span} className="group">
      {content}
    </BentoCell>
  )
}
