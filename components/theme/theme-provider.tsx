'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextValue = { theme: Theme | undefined; setTheme: (theme: Theme) => void }

const ThemeContext = createContext<ThemeContextValue>({ theme: undefined, setTheme: () => {} })

const STORAGE_KEY = 'theme'

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Server and first client render both know nothing about the stored
  // preference — `theme` stays undefined until this effect runs, mirroring
  // the `.light` class the pre-hydration script (see theme-script.tsx)
  // already applied to `<html>`. Consumers (ThemeToggle) render an inert
  // placeholder while undefined, so this never causes a hydration mismatch.
  const [theme, setThemeState] = useState<Theme | undefined>(undefined)

  useEffect(() => {
    // Reads DOM state the pre-hydration script already applied (see
    // theme-script.tsx) — there is no React state to derive this from
    // until after mount, so a one-time setState here is the correct
    // exception to the "no setState in effect" rule, not a workaround.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(document.documentElement.classList.contains('light') ? 'light' : 'dark')
  }, [])

  const setTheme = (next: Theme) => {
    document.documentElement.classList.toggle('light', next === 'light')
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable (private mode, disabled storage) — theme
      // still applies for this session via the class toggle above.
    }
    setThemeState(next)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
