import { cn } from '@/lib/utils'

// Derived from the project's own first tag (`Production` | `Completed` |
// `In Progress`) — no invented statuses. Presentation maps the real value
// onto the terminal-style bracket label + pip described by the design spec.
type ProjectStatus = 'Production' | 'Completed' | 'In Progress'

const statusMap: Record<ProjectStatus, { label: string; pip: string; live: boolean }> = {
  Production: { label: 'LIVE', pip: 'bg-(--accent)', live: true },
  'In Progress': { label: 'IN PROGRESS', pip: 'bg-(--accent)', live: false },
  Completed: { label: 'COMPLETED', pip: 'bg-(--fg-subtle)', live: false },
}

export function StatusBadge({ status }: { status: string }) {
  const entry = statusMap[status as ProjectStatus]
  if (!entry) return null

  return (
    <span className="label-mono-sm inline-flex items-center gap-1.5 rounded border border-(--border) bg-(--bg-subtle) px-2 py-0.5 text-(--fg-muted) uppercase">
      <span
        aria-hidden
        className={cn('size-1.5 rounded-full', entry.pip, entry.live && 'status-pip-live')}
      />
      {entry.label}
    </span>
  )
}
