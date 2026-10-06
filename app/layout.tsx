
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TestBanner } from '@/components/test-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dabney Behavioral Health - Compassionate Mental Health Care',
  description: 'Professional mental health services including assessment, therapy, and telehealth. LGBTQ+ inclusive, compassionate care in a safe environment.',
  keywords: 'mental health, behavioral health, therapy, counseling, LGBTQ+, telehealth, Chicago',
  // PREVIEW ONLY: keep the test site out of search engines
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased pt-8",
        inter.className
      )}>
        {/* PREVIEW ONLY: moves the fixed header down so the TEST SITE bar fits above it */}
        <style>{`header.fixed{top:2rem !important}`}</style>
        <TestBanner />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
