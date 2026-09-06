import { Container } from '@/components/layout/container'
import { Hero } from '@/components/home/hero'
import { HighlightBento } from '@/components/home/highlight-bento'
import { RecentPosts } from '@/components/home/recent-posts'

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <HighlightBento />
      <RecentPosts />
    </Container>
  )
}
