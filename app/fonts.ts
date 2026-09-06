import { Geist, Inter, JetBrains_Mono } from 'next/font/google'

// Headings / UI chrome
export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

// Body copy
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Code blocks
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
