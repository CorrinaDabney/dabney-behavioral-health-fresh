
import { Button } from '@/components/ui/button'
import { ArrowLeft, Play } from 'lucide-react'
import Link from 'next/link'

interface ServiceDetailLayoutProps {
  title: string
  description: string
  iconName: string
  features: string[]
  benefits: string[]
  process: string[]
  videoPlaceholder?: boolean
  children?: React.ReactNode
}

const getIcon = (iconName: string) => {
  const icons = {
    'ClipboardList': require('lucide-react').ClipboardList,
    'Heart': require('lucide-react').Heart,
    'Users': require('lucide-react').Users,
    'User': require('lucide-react').User,
    'Pill': require('lucide-react').Pill,
    'Monitor': require('lucide-react').Monitor,
  }
  return icons[iconName as keyof typeof icons] || icons.ClipboardList
}

export function ServiceDetailLayout({
  title,
  description,
  iconName,
  features,
  benefits,
  process,
  videoPlaceholder = true,
  children
}: ServiceDetailLayoutProps) {
  const IconComponent = getIcon(iconName)
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/clinical-services"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Clinical Services
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 mx-auto">
              <IconComponent className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-green-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {videoPlaceholder && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Learn More About {title}
            </h2>
            <div className="relative aspect-video bg-green-100 rounded-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-green-600 ml-1" />
                  </div>
                  <p className="text-green-700 font-medium">
                    Video content will be embedded here
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    YouTube video support ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What We Offer */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Process</h3>
              <ol className="space-y-3">
                {process.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Take the first step toward better mental health with our {title.toLowerCase()} services.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-green-50"
            asChild
          >
            <Link href="/schedule">
              New Patient Forms
            </Link>
          </Button>
        </div>
      </section>

      {children}
    </div>
  )
}
