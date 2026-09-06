import * as runtime from 'react/jsx-runtime'
import { mdxComponents } from '@/components/mdx/mdx-components'

// Velite compiles MDX to a function body at build time (`s.mdx()`). This
// evaluates that pre-compiled, first-party, build-time-only function body —
// no runtime/remote MDX evaluation, no `dangerouslySetInnerHTML`.
const sharedRuntime = { Fragment: runtime.Fragment, jsx: runtime.jsx, jsxs: runtime.jsxs }

function evaluateMdx(code: string) {
  // `code` is a JS function body Velite compiled at build time from trusted,
  // first-party MDX in this repo — never user input or a remote fetch.
  const fn = new Function(code)
  return fn({ ...sharedRuntime }).default
}

export function MdxContent({ code }: { code: string }) {
  // This is a Server Component rendered once per build/request from static
  // MDX content — it holds no client state, so the "component created during
  // render" lint concern (which targets client components that lose state
  // across re-renders) does not apply here. Compiling per-post MDX to a
  // component at render time is the standard Velite/MDX integration pattern.
  /* eslint-disable react-hooks/static-components -- see comment above; RSC, no client state to reset */
  const Component = evaluateMdx(code)
  return <Component components={mdxComponents} />
  /* eslint-enable react-hooks/static-components */
}
