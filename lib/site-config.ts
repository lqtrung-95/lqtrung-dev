// Typed replacement for the old `data/siteMetadata.js` + `data/headerNavLinks.js`.
// Dead config (analytics/newsletter/comment provider blocks) intentionally
// dropped — none of those providers were wired to a live key.
export const siteConfig = {
  title: 'lqtrung.dev',
  author: 'Trung Le',
  headerTitle: 'lqtrung.dev',
  description: 'Front-End Engineer building fast, accessible web applications.',
  siteUrl: 'https://lqtrung.dev',
  siteRepo: 'https://github.com/lqtrung-95/lqtrung-dev',
  // The previous seoImage pointed at a dead third-party S3 bucket
  // (trungle-storage.s3...). Falls back to a local static asset until a
  // proper generated OG image ships.
  seoImage: '/static/images/avatar-linkedin.jpeg',
  image: '/static/images/avatar-linkedin.jpeg',
  email: 'lqtrung.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/trungle-3195/',
  locale: 'en-US',
  postsPerPage: 5,
} as const

export type NavLink = { href: string; title: string }

export const headerNavLinks: NavLink[] = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]
