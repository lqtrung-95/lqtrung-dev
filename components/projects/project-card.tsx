import Image from 'next/image'
import type { Project } from '@/data/projects'
import { BentoCell } from '@/components/layout/bento-cell'

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {project.imgSrc && (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-(--bg-subtle)">
          <Image src={project.imgSrc} alt={project.title} fill className="object-cover" />
        </div>
      )}
      <h3 className="font-(family-name:--font-sans-display) text-lg font-semibold text-(--fg)">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-(--fg-muted)">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-(--border) px-2.5 py-0.5 text-xs text-(--fg-muted)"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  if (project.href) {
    return (
      <BentoCell span={project.span} className="p-0">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full p-6"
        >
          {content}
        </a>
      </BentoCell>
    )
  }

  return <BentoCell span={project.span}>{content}</BentoCell>
}
