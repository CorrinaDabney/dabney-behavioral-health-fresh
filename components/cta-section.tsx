
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Puzzle, ExternalLink } from 'lucide-react'

interface CTASectionProps {
  showViewServices?: boolean
  variant?: 'default' | 'telehealth'
}

export function CTASection({ showViewServices = true, variant = 'default' }: CTASectionProps) {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
          Ready to start putting the pieces back together?
          <Puzzle className="w-12 h-12 text-green-300" />
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards better mental health. Our compassionate team is here to support you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {variant === 'telehealth' ? (
            <>
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 text-lg"
                asChild
              >
                <Link href="https://www.therapyportal.com/p/dabneybhhc/" target="_blank">
                  Access Patient Portal <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-green-900 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/schedule">
                  New Patient Forms
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/schedule">
                  New Patient Forms
                </Link>
              </Button>
              {showViewServices && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white border-2 text-white bg-transparent hover:bg-white hover:text-green-900 px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/clinical-services">
                    View Our Services
                  </Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
