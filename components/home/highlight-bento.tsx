import { Briefcase, Clock, GraduationCap, Target, type LucideIcon } from 'lucide-react'
import { BentoGrid } from '@/components/layout/bento-grid'
import { BentoCell } from '@/components/layout/bento-cell'
import type { BentoSpan } from '@/data/projects'

type Stat = {
  icon: LucideIcon
  label: string
  value: string
  detail?: string
  span: BentoSpan
}

const stats: Stat[] = [
  {
    icon: Briefcase,
    label: 'Role',
    value: 'Frontend Engineer @ Binance',
    detail: 'Building mission-critical financial applications.',
    span: 'medium',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'MS @ Georgia Tech',
    detail: 'Specializing in Artificial Intelligence.',
    span: 'medium',
  },
  {
    icon: Clock,
    label: 'Experience',
    value: '7+ years',
    span: 'small',
  },
  {
    icon: Target,
    label: 'Focus',
    value: 'Performance & a11y',
    span: 'small',
  },
]

export function HighlightBento() {
  return (
    <section className="py-8">
      <BentoGrid>
        {stats.map(({ icon: Icon, label, value, detail, span }) => (
          <BentoCell key={label} span={span}>
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-(--accent)/10 text-(--accent)">
                <Icon className="size-4" aria-hidden />
              </span>
              <p className="label-mono-sm text-(--fg-subtle) uppercase">{label}</p>
            </div>
            <p className="mt-3 text-lg font-medium text-(--fg)">{value}</p>
            {detail && <p className="mt-1 text-sm text-(--fg-muted)">{detail}</p>}
          </BentoCell>
        ))}
      </BentoGrid>
    </section>
  )
}
