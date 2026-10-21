
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Clinical Services', href: '/clinical-services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pathways Referral (CCSO)', href: '/pathways' },
  { name: 'Employment', href: '/employment' },
  { name: 'Staff', href: '/staff' },
  { name: 'Telehealth', href: '/telehealth' },
  { name: 'Internship/Practicum', href: '/internship' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80"
    )}>
      <div className="max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/assets/Logo_For_Web_Optimized.png"
                alt="Dabney Behavioral Health Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl xl:text-lg min-[1536px]:text-xl min-[1920px]:text-2xl font-bold text-green-800 leading-tight whitespace-nowrap">
                Dabney Behavioral Health
              </h1>
              <p className="text-base xl:text-sm min-[1536px]:text-base min-[1920px]:text-lg text-black leading-tight">
                Understanding Me
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 justify-center items-center space-x-0.5 min-[1536px]:space-x-1 min-[1920px]:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-1.5 min-[1536px]:px-2 min-[1700px]:px-2.5 min-[1920px]:px-3 py-2 text-[13px] min-[1536px]:text-[15px] min-[1700px]:text-base min-[1920px]:text-lg font-medium text-gray-700 rounded-lg whitespace-nowrap hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="ml-1 min-[1920px]:ml-3 xl:h-9 xl:px-3 xl:text-sm min-[1700px]:h-10 min-[1700px]:text-base min-[1920px]:h-11 min-[1920px]:px-6 bg-green-600 hover:bg-green-700 whitespace-nowrap"
            >
              <Link href="/schedule">
                New Patient Forms
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-lg font-medium text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Link href="/schedule">
                    New Patient Forms
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
