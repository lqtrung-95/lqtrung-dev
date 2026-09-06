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

export function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    const text = extractText(props.children)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — no-op, button stays inert
    }
  }

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy code'}
        className="absolute top-2 right-2 z-10 rounded-md border border-(--border) bg-(--bg-elevated) p-1.5 text-(--fg-muted) opacity-0 transition-opacity group-hover:opacity-100 hover:text-(--fg) focus-visible:opacity-100"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>
      <pre {...props} />
    </div>
  )
}
