
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
  { name: 'Contact/Referral', href: '/contact' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/assets/Logo_For_Web_Optimized.png"
                alt="Dabney Behavioral Health Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-green-800 leading-tight whitespace-nowrap">
                Dabney Behavioral Health
              </h1>
              <p className="text-lg text-black leading-tight">
                Understanding Me
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="ml-4 bg-green-600 hover:bg-green-700"
            >
              <Link href="/schedule">
                Schedule Consultation
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
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
          <div className="md:hidden py-4 border-t border-gray-200">
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
                    Schedule Consultation
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
