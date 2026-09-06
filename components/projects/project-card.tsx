import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { BentoCell } from '@/components/layout/bento-cell'
import { StatusBadge } from '@/components/projects/status-badge'

export function ProjectCard({
  project,
  detailed = false,
}: {
  project: Project
  detailed?: boolean
}) {
  const [status, ...techTags] = project.tags
  const scope = project.category === 'enterprise' ? 'ENTERPRISE' : 'INDEPENDENT'

  const content = (
    <>
      <div className="label-mono-sm flex items-center gap-2 text-(--fg-subtle) uppercase">
        <span>{scope}</span>
        <span aria-hidden>{'//'}</span>
        <StatusBadge status={status} />
        {detailed && project.role && (
          <>
            <span aria-hidden>{'//'}</span>
            <span>{project.role}</span>
          </>
        )}
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
      <p className="mt-2 text-sm text-(--fg-muted)">
        {detailed ? project.longDescription : project.description}
      </p>

      {detailed && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-(--fg-muted)">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden className="text-(--accent)">
                {'>'}
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      )}

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

  // The detailed view (full /projects page) carries highlights + a long
  // description, so card heights vary a lot per project — the compact
  // bento grid's dense packing + shared row tracks were built for short,
  // roughly-uniform tiles and visually overlapped adjacent cards here.
  // Detailed cards render as a plain self-sizing block instead.
  if (detailed) {
    const detailedClassName = cn(
      'surface-card group block h-full p-6',
      !project.href && 'block'
    )
    return project.href ? (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={detailedClassName}
      >
        {content}
      </a>
    ) : (
      <div className={detailedClassName}>{content}</div>
    )
  }

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
