import type { Metadata } from 'next'
import { Inter, Playfair_Display, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-body-serif' })

export const metadata: Metadata = {
  title: 'Dabney Behavioral Health - Compassionate Mental Health Care',
  description: 'Professional mental health services including assessment, therapy, and telehealth. LGBTQ+ inclusive, compassionate care in a safe environment.',
  keywords: 'mental health, behavioral health, therapy, counseling, LGBTQ+, telehealth, Chicago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className,
        playfair.variable,
        sourceSerif.variable
      )}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
