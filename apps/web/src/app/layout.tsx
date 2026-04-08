import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Hollows — Auto-Generated Empty States for Your UI',
  description: 'Hollows scans your real UI, detects data-dependent sections, and generates contextual empty states — with illustrations, copy, and CTAs — that stay in sync with your actual layout.',
  openGraph: {
    title: 'Hollows — Auto-Generated Empty States for Your UI',
    description: 'Empty states. Automatically generated.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-0 lg:ml-[280px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
