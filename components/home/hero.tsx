import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-12 py-20 sm:py-28 md:flex-row md:items-center md:justify-between md:gap-16">
      <div className="scroll-reveal max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-(--accent) uppercase">
          Hi, I&apos;m Trung
        </p>
        <h1 className="mt-4 font-(family-name:--font-sans-display) text-4xl font-bold tracking-tight text-(--fg) sm:text-5xl md:text-6xl">
          Frontend Engineer building fast, accessible web applications.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-(--fg-muted)">
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
      </div>
      <div className="scroll-reveal relative shrink-0">
        {/* Soft accent-tinted glow — the single teal reused as depth, not a
         * second color, so the avatar reads as considered rather than
         * bolted on. */}
        <div aria-hidden className="absolute -inset-6 -z-10 rounded-full bg-(--accent)/20 blur-2xl" />
        <Image
          src="/static/images/avatar-linkedin.jpeg"
          alt="Trung Le"
          width={176}
          height={176}
          priority
          className="size-36 rounded-full object-cover ring-1 ring-(--border) sm:size-44"
        />
      </div>
    </section>
  )
}
