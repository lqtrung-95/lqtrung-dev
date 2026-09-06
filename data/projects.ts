// Typed replacement for `data/projectsData.js`.
//
// TODO: replace with real project details. The two entries below are
// placeholder starter content carried over from the previous site
// ("E-commerce Website", "Task Management App") — no real project names,
// clients, or metrics have been supplied yet. Layout/bento UI is real;
// only the data is a stand-in.
export type BentoSpan = 'featured' | 'medium' | 'small'

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
  imgSrc?: string
  span: BentoSpan
  featured: boolean
}

export const projects: Project[] = [
  {
    // TODO: replace with real project details
    title: 'Placeholder Featured Project',
    description:
      'This is placeholder content. Replace with a real project summary, the problem it solved, and the measurable outcome.',
    tags: ['TODO'],
    span: 'featured',
    featured: true,
  },
  {
    // TODO: replace with real project details
    title: 'Placeholder Project Two',
    description: 'Placeholder content — swap in a real project description.',
    tags: ['TODO'],
    span: 'medium',
    featured: false,
  },
  {
    // TODO: replace with real project details
    title: 'Placeholder Project Three',
    description: 'Placeholder content — swap in a real project description.',
    tags: ['TODO'],
    span: 'small',
    featured: false,
  },
]
