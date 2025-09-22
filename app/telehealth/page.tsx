
import { Button } from '@/components/ui/button'
import { Monitor, Shield, Clock, Users, CheckCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'

const telehealthFeatures = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your privacy is protected with enterprise-grade security and encryption'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Extended hours including evening and weekend appointments'
  },
  {
    icon: Monitor,
    title: 'Easy to Use',
    description: 'Simple, user-friendly platform that works on any device'
  },
  {
    icon: Users,
    title: 'All Services Available',
    description: 'Individual, couples, family therapy, and medication management'
  },
]

const requirements = [
  'Reliable internet connection (broadband recommended)',
  'Computer, tablet, or smartphone with camera and microphone',
  'Quiet, private space for your sessions',
  'Backup contact method (phone number)',
]

const gettingStartedSteps = [
  {
    step: 1,
    title: 'Schedule Your Session',
    description: 'Book your telehealth appointment through our secure portal'
  },
  {
    step: 2,
    title: 'Test Your Technology',
    description: 'We\'ll help you test your connection before your first session'
  },
  {
    step: 3,
    title: 'Join Your Session',
    description: 'Click the secure link to connect with your therapist'
  },
  {
    step: 4,
    title: 'Continue Your Care',
    description: 'Maintain consistent treatment from the comfort of home'
  },
]

export default function TelehealthPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 mx-auto">
            <Monitor className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Access high-quality mental health care from the comfort and privacy of your own home 
            through our secure, HIPAA-compliant telehealth platform.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 px-8 py-4"
            asChild
          >
            <Link href="https://www.therapyportal.com/p/dabneybhhc/" target="_blank">
              Access Patient Portal <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Telehealth Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the same quality care with added convenience, accessibility, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {telehealthFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-100 card-hover"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Make sure you have everything you need for a smooth telehealth experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              What You'll Need:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">
                Need Help with Setup?
              </h4>
              <p className="text-green-700 mb-4">
                Our team provides technical support to ensure you're comfortable with the platform before your first session.
              </p>
              <div className="text-center">
                <p className="text-green-900 font-semibold mb-1">Mr. Derrick Wilson</p>
                <a 
                  href="tel:7732994191"
                  className="text-green-600 hover:text-green-700 font-medium text-lg"
                >
                  (773) 299-4191
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-gray-600">
              Follow these easy steps to begin your telehealth journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gettingStartedSteps.map((step) => (
              <div
                key={step.step}
                className="text-center p-6 rounded-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours and Availability */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Extended Telehealth Hours
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer extended hours for telehealth services to fit your schedule.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Weekday Hours
                </h3>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="text-2xl font-bold text-green-600">7 AM - 9 PM</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Weekend Hours
                </h3>
                <p className="text-gray-600 mb-2">Saturday - Sunday</p>
                <p className="text-lg font-semibold text-green-600">By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection variant="telehealth" showViewServices={false} />
    </div>
  )
}
