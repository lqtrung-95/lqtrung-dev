import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="label-mono text-(--accent) uppercase">Error 404</p>
      <h1 className="mt-3 text-3xl font-bold text-(--fg)">Page not found</h1>
      <p className="mt-3 max-w-md text-(--fg-muted)">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back home</Link>
      </Button>
    </Container>
  )
}
