import { CheckCircle2, Clock, Rocket, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

// Semantic status coding without introducing a second brand color: the
// single teal accent marks "live" work, filled neutral marks "done", and a
// dashed neutral outline marks "in flight" — hue stays fixed, weight/icon
// carries the meaning.
const STATUS_CONFIG: Record<string, { icon: LucideIcon; className: string }> = {
  Production: {
    icon: Rocket,
    className: 'border-(--accent)/40 bg-(--accent)/10 text-(--accent)',
  },
  Completed: {
    icon: CheckCircle2,
    className: 'border-(--border) bg-(--fg)/5 text-(--fg-muted)',
  },
  'In Progress': {
    icon: Clock,
    className: 'border-dashed border-(--border) text-(--fg-subtle)',
  },
}

const DEFAULT_CONFIG = { icon: Clock, className: 'border-(--border) text-(--fg-muted)' }

export function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIG[status] ?? DEFAULT_CONFIG
  const Icon = config.icon

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        config.className
      )}
    >
      <Icon className="size-3.5" aria-hidden />
      {status}
    </span>
  )
}
