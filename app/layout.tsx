import type { Metadata } from 'next'
import 'katex/dist/katex.min.css'
import './globals.css'
import { geist, jetbrainsMono } from '@/app/fonts'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeScript } from '@/components/theme/theme-script'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeScript />
        <ThemeProvider>
          <div className="flex flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
