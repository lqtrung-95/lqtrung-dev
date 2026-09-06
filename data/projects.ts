// Typed replacement for `data/projectsData.js`.
//
// Real project data, ported verbatim from `pages/projects.js` (companyProjects
// + personalProjects) in the previous site — not invented.
export type BentoSpan = 'featured' | 'medium' | 'small'

export type ProjectCategory = 'enterprise' | 'personal'

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
  imgSrc?: string
  span: BentoSpan
  featured: boolean
  category: ProjectCategory
}

export const projects: Project[] = [
  {
    title: 'Binance Pay',
    description:
      'Cryptocurrency payment solution enabling seamless digital asset transactions. A comprehensive payment gateway supporting multiple cryptocurrencies with enterprise-grade security.',
    tags: ['Production', 'Cryptocurrency', 'Payment Gateway', 'Blockchain', 'FinTech'],
    href: 'https://pay.binance.com/en',
    span: 'featured',
    featured: true,
    category: 'enterprise',
  },
  {
    title: 'Zalo Notification Service (ZNS)',
    description:
      'Enterprise notification service for customer care messages delivered to phone numbers on Zalo platform. Built with server-to-server API architecture for Official Account solutions.',
    tags: ['Production', 'API Integration', 'Notification Systems', 'Enterprise Solutions'],
    href: 'https://zalo.cloud/zns/guidelines/intro',
    span: 'medium',
    featured: false,
    category: 'enterprise',
  },
  {
    title: 'Binance KYC/KYB',
    description:
      'Know Your Customer and Know Your Business verification system for regulatory compliance. Automated identity verification with document processing and risk assessment.',
    tags: ['Production', 'Identity Verification', 'Compliance', 'Machine Learning'],
    href: 'https://www.binance.com/en/support/faq/detail/360015552032',
    span: 'medium',
    featured: false,
    category: 'enterprise',
  },
  {
    title: 'Effortful',
    description:
      'Full-stack productivity SaaS at effortful.app — Pomodoro focus sessions, streak and goal tracking, AI-powered insights, and subscription billing via Polar.',
    tags: ['Production', 'Next.js', 'TypeScript', 'Supabase', 'AI'],
    href: 'https://effortful.app',
    span: 'medium',
    featured: false,
    category: 'personal',
  },
  {
    title: 'FrontEnd Coach',
    description:
      'Full-stack AI interview coach for frontend engineers with mock interviews, structured feedback, weaknesses tracking, and focused study plans.',
    tags: ['Production', 'Next.js', 'TypeScript', 'Supabase', 'AI'],
    href: 'https://frontendcoach.app/',
    span: 'medium',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Magic Console Logger',
    description:
      'A VSCode extension that supercharges debugging workflows with intelligent console.log generation, context-aware variable logging, and seamless developer productivity features.',
    tags: ['Completed', 'VSCode Extension', 'TypeScript', 'Developer Tools'],
    href: 'https://marketplace.visualstudio.com/items?itemName=trunglq.magic-console-logger',
    span: 'small',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Any-2-QR',
    description:
      'Privacy-focused QR code generator that converts any link, text, or contact information into customizable QR codes with personal branding options.',
    tags: ['Completed', 'JavaScript', 'Client-Side Processing', 'Privacy'],
    href: 'https://any-2-qr.vercel.app/',
    span: 'small',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Emoji Charades',
    description:
      'Interactive word game that challenges players to decode emoji clues and discover hidden English idioms and common sayings.',
    tags: ['Completed', 'React', 'Game Development', 'Educational Technology'],
    href: 'https://emoji-charades.vercel.app/',
    span: 'small',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Tarot Insight',
    description:
      'AI-powered tarot reading application that provides personalized interpretations using OpenAI API for meaningful and contextual card readings.',
    tags: ['In Progress', 'OpenAI API', 'AI Integration', 'Natural Language Processing'],
    span: 'small',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Shot Mate',
    description:
      'Mobile photography assistant app that guides users through poses and compositions to capture stunning photos with professional-quality results.',
    tags: ['In Progress', 'Mobile Development', 'Computer Vision', 'React Native'],
    span: 'small',
    featured: false,
    category: 'personal',
  },
]
