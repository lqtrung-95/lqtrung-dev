import { Geist, JetBrains_Mono } from 'next/font/google'

// Headlines and body copy (Terminal Precision uses a single sans family)
export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

// Metadata labels, terminal micro-accents, and code blocks
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
