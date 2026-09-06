import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <p className="text-sm font-medium text-(--accent)">Hi, I&apos;m Trung</p>
      <h1 className="mt-3 font-(family-name:--font-sans-display) text-4xl font-bold tracking-tight text-(--fg) sm:text-5xl">
        Frontend Engineer building fast, accessible web applications.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-(--fg-muted)">
        Frontend Engineer at Binance and graduate student at Georgia Tech, with 7+ years of
        experience delivering scalable products used by millions of users.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/projects">View projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/about">About me</Link>
        </Button>
      </div>
    </section>
  )
}
