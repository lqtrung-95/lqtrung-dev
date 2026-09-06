'use client'

import { useState, type ComponentPropsWithoutRef, type ReactElement, type ReactNode } from 'react'
import { Check, Copy } from 'lucide-react'

// Recursively flattens the highlighted-code React tree back into plain text
// for the clipboard, so the copied string matches the original source
// (including newlines) rather than the syntax-highlighted markup.
function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as ReactElement<{ children?: ReactNode }>).props.children)
  }
  return ''
}

// rehype-pretty-code annotates the rendered <pre> with the fenced code's
// language (e.g. ```ts -> data-language="ts"); surfaced in the pane header
// as a real, source-derived label rather than an invented one.
type PreProps = ComponentPropsWithoutRef<'pre'> & { 'data-language'?: string }

export function Pre({ children, ...rest }: PreProps) {
  const [copied, setCopied] = useState(false)
  const language = rest['data-language']

  async function handleCopy() {
    const text = extractText(children)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — no-op, button stays inert
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-(--border)">
      <div className="label-mono-sm flex items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-3 py-2 text-(--fg-subtle)">
        <span className="lowercase">~/trung-le{language ? `/snippet.${language}` : '/snippet'}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy code'}
          className="cursor-pointer rounded p-1 text-(--fg-muted) transition-colors duration-150 ease-out hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>
      <pre {...rest} className="!m-0 !rounded-none !border-0">
        {children}
      </pre>
    </div>
  )
}
