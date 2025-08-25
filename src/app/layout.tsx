import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AuthProvider } from '@/context/useAuth'

import './globals.css'
import { PageTransition } from '@/components/ui/PageTranslation'
export const metadata: Metadata = {
  title: 'Biota Nutri - Growing sustainable futures together',
  description: 'Advanced nutrient calculation and management for sustainable agriculture',
  generator: 'Biota Nutri',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <AuthProvider>
          <div className="animated-background" />
          <PageTransition>
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
          </PageTransition>
        </AuthProvider>
      </body>
    </html>
  )
}
