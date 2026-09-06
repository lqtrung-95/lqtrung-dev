import { defineConfig, s } from 'velite'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import readingTime from 'reading-time'

// Languages actually present in the 48-post corpus. Restricting Shiki's
// bundled grammars keeps `velite build` fast.
const codeLanguages = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'json',
  'bash',
  'shell',
  'sh',
  'css',
  'html',
  'sql',
  'yaml',
  'markdown',
  'diff',
  'plaintext',
  'text',
  'python',
  'go',
  'graphql',
]

const posts = s
  .object({
    title: s.string(),
    date: s.isodate(),
    summary: s.string().optional(),
    tags: s.array(s.string()).default([]),
    draft: s.boolean().default(false),
    images: s.array(s.string()).default([]),
    canonicalUrl: s.string().nullish(),
    authors: s.array(s.string()).default(['default']),
    slug: s.path().transform((p) => p.split('/').pop()!),
    toc: s.toc(),
    metadata: s.metadata(),
    excerpt: s.excerpt(),
    body: s.mdx(),
  })
  .transform((data) => ({
    ...data,
    readingTime: readingTime(data.metadata.readingTime.toString()).text,
  }))

const authors = s.object({
  name: s.string(),
  avatar: s.string().optional(),
  occupation: s.string().optional(),
  company: s.string().optional(),
  email: s.string().optional(),
  linkedin: s.string().optional(),
  slug: s.path().transform((p) => p.split('/').pop()!),
  metadata: s.metadata(),
  body: s.mdx(),
})

export default defineConfig({
  root: 'data',
  output: {
    data: '.velite',
    assets: 'public/static/velite',
    base: '/static/velite/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'blog/**/*.{md,mdx}',
      schema: posts,
    },
    authors: {
      name: 'Author',
      pattern: 'authors/*.md',
      schema: authors,
    },
  },
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: { light: 'github-light', dark: 'github-dark-dimmed' },
          keepBackground: false,
          onVisitLine(node: { children: unknown[] }) {
            // Prevent empty lines from collapsing in the highlighted grid
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          defaultLang: {
            block: 'plaintext',
            inline: 'plaintext',
          },
          bypassInlineCode: true,
          langs: codeLanguages,
        },
      ],
    ],
  },
})
