import { BentoGrid } from '@/components/layout/bento-grid'
import { BentoCell } from '@/components/layout/bento-cell'

export function HighlightBento() {
  return (
    <section className="py-8">
      <BentoGrid>
        <BentoCell span="medium">
          <p className="text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">Role</p>
          <p className="mt-2 text-lg font-medium text-(--fg)">Frontend Engineer @ Binance</p>
          <p className="mt-1 text-sm text-(--fg-muted)">
            Building mission-critical financial applications.
          </p>
        </BentoCell>
        <BentoCell span="medium">
          <p className="text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">
            Education
          </p>
          <p className="mt-2 text-lg font-medium text-(--fg)">MS @ Georgia Tech</p>
          <p className="mt-1 text-sm text-(--fg-muted)">Specializing in Interactive Intelligence.</p>
        </BentoCell>
        <BentoCell span="small">
          <p className="text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">
            Experience
          </p>
          <p className="mt-2 text-lg font-medium text-(--fg)">7+ years</p>
        </BentoCell>
        <BentoCell span="small">
          <p className="text-xs font-semibold tracking-wide text-(--fg-subtle) uppercase">Focus</p>
          <p className="mt-2 text-lg font-medium text-(--fg)">Performance &amp; a11y</p>
        </BentoCell>
      </BentoGrid>
    </section>
  )
}
