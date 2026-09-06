import { Code2, Smartphone, Sparkles } from 'lucide-react'

// Keyword match against a project's existing tags — no new data field, just
// a presentation-layer classification of tags that are already real.
// Returns a rendered icon element (rather than a component reference) so it
// can be inlined directly without tripping the "no components created
// during render" lint rule.
const MOBILE_TAGS = new Set(['Mobile Development', 'React Native'])
const AI_TAGS = new Set([
  'AI',
  'OpenAI API',
  'AI Integration',
  'Machine Learning',
  'Natural Language Processing',
])

export function getProjectCategoryIcon(tags: string[], className?: string) {
  if (tags.some((tag) => MOBILE_TAGS.has(tag))) {
    return <Smartphone className={className} aria-hidden />
  }
  if (tags.some((tag) => AI_TAGS.has(tag))) {
    return <Sparkles className={className} aria-hidden />
  }
  return <Code2 className={className} aria-hidden />
}
