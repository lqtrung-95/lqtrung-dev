import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-10 py-16 sm:py-24 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="label-mono text-(--accent) uppercase">
          <span aria-hidden>~/trung-le $</span> whoami
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-(--fg) sm:text-5xl">
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
      </div>
      <Image
        src="/static/images/avatar-linkedin.jpeg"
        alt="Trung Le"
        width={160}
        height={160}
        priority
        className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-(--border) sm:h-40 sm:w-40"
      />
    </section>
  )
}
