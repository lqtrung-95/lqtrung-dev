# lqtrung.dev

Portfolio + blog, rebuilt on Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 +
[Velite](https://velite.js.org) + Shiki + KaTeX.

## Stack

- **Next.js 16** (App Router, RSC-first) + React 19 + TypeScript (strict)
- **Tailwind CSS v4** — CSS-first `@theme` tokens in `app/globals.css`, no `tailwind.config.js`
- **Velite** — compiles `data/blog/**/*.{md,mdx}` to typed content at build time (`.velite/`, gitignored)
- **Shiki** (via `rehype-pretty-code`) — build-time syntax highlighting, zero client JS
- **KaTeX** (via `remark-math` + `rehype-katex`) — math rendering
- **Radix primitives** (dialog, dropdown-menu) — hand-rolled wrappers in `components/ui/`
- **next-themes** — dark-first theme toggle, no flash of wrong theme

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Runs Velite in watch mode + `next dev` concurrently |
| `npm run build` | `velite --clean` then `next build`; fails the build on content schema errors |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |

## Content

- Blog posts live in `data/blog/**/*.{md,mdx}` — the filename (minus extension) is the
  `/blog/<slug>` URL; do not rename existing files without an accompanying redirect.
- Author bio: `data/authors/default.md`.
- Projects: `data/projects.ts` — **currently placeholder content** (see the `TODO` comments in
  that file); the bento grid UI on `/projects` is real, the project entries are not.

## Known gaps (tracked for a follow-up phase)

- No search yet (⌘K / Fuse.js) — deliberately deferred.
- No RSS/sitemap/redirects yet — deliberately deferred.
- No production deploy/cutover yet — deliberately deferred.
