import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import { BentoCell } from '@/components/layout/bento-cell'
import { StatusBadge } from '@/components/projects/status-badge'
import { getProjectCategoryIcon } from '@/components/projects/get-project-category-icon'

export function ProjectCard({ project }: { project: Project }) {
  // First tag is always the status (Production / Completed / In Progress) —
  // separate it from the tech-stack tags so the two read as distinct
  // categories instead of one flat pill row.
  const [status, ...techTags] = project.tags

  const content = (
    <>
      {project.imgSrc && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-(--bg-subtle)">
          <Image src={project.imgSrc} alt={project.title} fill className="object-cover" />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {getProjectCategoryIcon(project.tags, 'size-4 shrink-0 text-(--fg-subtle)')}
          <h3 className="font-(family-name:--font-sans-display) text-lg font-semibold text-(--fg)">
            {project.title}
          </h3>
        </div>
        {project.href && (
          <ExternalLink
            className="size-4 shrink-0 text-(--fg-subtle) opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
            aria-hidden
          />
        )}
      </div>
      <p className="mt-2 text-sm text-(--fg-muted)">{project.description}</p>
      {status && (
        <div className="mt-4">
          <StatusBadge status={status} />
        </div>
      )}
      {techTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border) px-2.5 py-0.5 text-xs text-(--fg-muted)"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  )

  if (project.href) {
    return (
      <BentoCell span={project.span} interactive className="p-0">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full rounded-(--radius-card) p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)"
        >
          {content}
        </a>
      </BentoCell>
    )
  }

  return <BentoCell span={project.span}>{content}</BentoCell>
}
