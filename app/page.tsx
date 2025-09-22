
import { HeroVideo } from '@/components/hero-video'
import { InsuranceAccepted } from '@/components/insurance-accepted'
import { IntakeProcess } from '@/components/intake-process'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Heart, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We provide warm, empathetic support in a judgment-free environment'
  },
  {
    icon: 'pride-flag',
    title: 'LGBTQ+ Inclusive',
    description: 'Affirming care that celebrates diversity and individual identity'
  },
  {
    icon: Shield,
    title: 'Safe Space',
    description: 'Your privacy and security are our highest priorities'
  },
  {
    icon: Sparkles,
    title: 'Personalized Treatment',
    description: 'Tailored approaches that fit your unique needs and goals'
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video */}
      <HeroVideo />

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              Why Choose Dabney Behavioral Health
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in providing compassionate, inclusive mental health care that honors your unique journey and supports your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="text-center group card-hover p-6 rounded-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                    {value.icon === 'pride-flag' ? (
                      <div className="w-12 h-8 rounded overflow-hidden">
                        <Image
                          src="https://cdn.abacus.ai/images/40c439da-622c-4389-bd2c-15f5f0d120b4.png"
                          alt="Progress Pride Flag"
                          width={48}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <IconComponent className="w-8 h-8 text-green-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <InsuranceAccepted />

      {/* Intake Process Section */}
      <IntakeProcess />

      {/* Call to Action Section */}
      <CTASection />
    </>
  )
}
