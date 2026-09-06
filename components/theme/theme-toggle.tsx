'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  // next-themes returns `undefined` for resolvedTheme until after mount (no
  // theme cookie/localStorage read yet on the server) — used directly as the
  // hydration guard instead of a separate mounted-state + effect.
  if (resolvedTheme === undefined) {
    return <Button variant="ghost" size="icon" aria-hidden className="invisible" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
