import { Container } from '@/components/layout/container'
import { Hero } from '@/components/home/hero'
import { HighlightBento } from '@/components/home/highlight-bento'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { RecentPosts } from '@/components/home/recent-posts'

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <HighlightBento />
      <FeaturedProjects />
      <RecentPosts />
    </Container>
  )
}
