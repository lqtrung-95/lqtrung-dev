// Typed replacement for `data/projectsData.js`.
//
// Real project data, ported verbatim from `pages/projects.js` (companyProjects
// + personalProjects) in the previous site — including `role`,
// `longDescription`, and `highlights`, which an earlier pass dropped when
// only `description`/`tags` were carried over. Not invented.
export type BentoSpan = 'featured' | 'medium' | 'small'

export type ProjectCategory = 'enterprise' | 'personal'

export type Project = {
  title: string
  description: string
  longDescription: string
  role: string
  highlights: string[]
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
    longDescription:
      'Binance Pay is a contactless, borderless, and secure cryptocurrency payment technology designed by Binance. It allows users to send and receive crypto payments instantly with zero fees, supporting multiple cryptocurrencies and providing a seamless payment experience for both merchants and consumers.',
    role: 'Frontend Developer',
    highlights: [
      'Zero-fee cryptocurrency transactions',
      'Multi-currency support',
      'Enterprise-grade security protocols',
      'Instant payment processing',
      'Global merchant integration',
    ],
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
    longDescription:
      'ZNS is a comprehensive notification service that enables businesses to send professional customer care messages through Zalo. The service features diverse notification templates with logos, images, parameters, and interactive elements like call buttons, website links, star ratings, and quick payment options. All templates undergo approval processes to ensure professional quality and platform integrity.',
    role: 'Frontend Developer',
    highlights: [
      'Server-to-server API architecture',
      'Template approval system with 2-3 day review cycle',
      'Interactive notification elements (call, payment, rating)',
      'Quality scoring system with rewards/penalties',
      'Enterprise dashboard for spending and operations management',
    ],
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
    longDescription:
      'Comprehensive identity verification system handling both individual (KYC) and business (KYB) verification processes. Features automated document verification, biometric authentication, risk scoring, and regulatory compliance across multiple jurisdictions.',
    role: 'Frontend Developer',
    highlights: [
      'Automated document verification',
      'Biometric authentication integration',
      'Multi-jurisdiction compliance',
      'Risk assessment algorithms',
      'Real-time verification processing',
    ],
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
    longDescription:
      'Built with Next.js, TypeScript, and Supabase. Effortful helps you stay focused and build consistent habits with lightweight coaching and clear progress over time.',
    role: 'Solo Developer',
    highlights: [
      'Pomodoro focus sessions with streak and goal tracking',
      'AI-powered insights and coaching',
      'Subscription billing via Polar',
    ],
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
    longDescription:
      'FrontEnd Coach is a full-stack frontend interview coaching platform that delivers streaming mock interviews, senior-level answer evaluation, CV-grounded question generation, and technical weak-area coaching. It combines AI-powered practice, analytics, and spaced repetition study workflows for frontend interview readiness.',
    role: 'Solo Developer',
    highlights: [
      'Streaming mock interviews with follow-up questions and timed mode',
      'Six-dimension scoring plus senior-level rewrite feedback',
      'CV upload, parsing, and grounded interview generation',
      'Weak-area coaching with dashboards, drill recommendations, and trend analytics',
      'Spaced repetition study plan with 250+ questions and public learning resources',
    ],
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
    longDescription:
      'Magic Console Logger is a VSCode extension designed to streamline the debugging process by automatically generating contextual console.log statements. It intelligently detects function context, variable names, and provides customizable logging templates with keyboard shortcuts for maximum developer efficiency.',
    role: 'Solo Developer',
    highlights: [
      'Context-aware console.log generation with function detection',
      'Keyboard shortcuts for rapid log insertion and management',
      'Bulk operations: comment, uncomment, and delete all logs',
      'Smart variable name and value logging format',
      'Support for JavaScript, TypeScript, and React (JSX/TSX)',
    ],
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
    longDescription:
      'A client-side QR code generator that prioritizes user privacy by processing all data locally without server-side storage. Users can customize QR codes with custom colors and logos, making it perfect for business cards, event sharing, and secure information transfer.',
    role: 'Solo Developer',
    highlights: [
      'Zero server-side data storage for maximum privacy',
      'Custom color and logo integration',
      'Support for links, text, and contact information',
      'Instant generation and sharing capabilities',
      'Responsive design for all devices',
    ],
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
    longDescription:
      'An educational game designed to make learning English idioms and sayings fun and engaging. Players decode emoji sequences to reveal popular expressions, improving their understanding of English language nuances while having fun.',
    role: 'Solo Developer',
    highlights: [
      'Extensive library of English idioms and sayings',
      'Progressive difficulty levels',
      'Hint system for learning assistance',
      'Score tracking and achievements',
      'Mobile-responsive gameplay',
    ],
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
    longDescription:
      'A modern take on traditional tarot reading, combining ancient wisdom with artificial intelligence. The app provides detailed, contextual interpretations of tarot spreads, helping users gain insights and reflection through AI-enhanced readings.',
    role: 'Solo Developer',
    highlights: [
      'OpenAI GPT integration for intelligent interpretations',
      'Multiple tarot spread layouts',
      'Personalized reading contexts',
      'Beautiful card animations and UI',
      'Reading history and insights tracking',
    ],
    tags: ['In Progress', 'OpenAI API', 'AI Integration', 'Natural Language Processing'],
    span: 'small',
    featured: false,
    category: 'personal',
  },
  {
    title: 'Shot Mate',
    description:
      'Mobile photography assistant app that guides users through poses and compositions to capture stunning photos with professional-quality results.',
    longDescription:
      'A comprehensive mobile photography tool that helps users take better photos by providing guided poses, composition tips, and real-time feedback. Perfect for social media content creation, portrait photography, and improving overall photography skills.',
    role: 'Solo Developer',
    highlights: [
      'Real-time pose guidance and suggestions',
      'Composition rule overlays and tips',
      'Photo quality analysis and feedback',
      'Social media optimization features',
      'Cross-platform mobile compatibility',
    ],
    tags: ['In Progress', 'Mobile Development', 'Computer Vision', 'React Native'],
    span: 'small',
    featured: false,
    category: 'personal',
  },
]
