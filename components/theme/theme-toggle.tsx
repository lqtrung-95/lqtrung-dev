'use client'

import { useTheme } from '@/components/theme/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // `theme` stays undefined until ThemeProvider's mount effect reads the
  // class the pre-hydration script already applied — render an inert
  // placeholder until then so this never mismatches the server render.
  if (theme === undefined) {
    return <Button variant="ghost" size="icon" aria-hidden className="invisible" />
  }

  const isDark = theme === 'dark'

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
