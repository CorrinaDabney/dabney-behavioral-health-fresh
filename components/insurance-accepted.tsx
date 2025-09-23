
import { Shield, Heart, Users, Award } from 'lucide-react'

const insuranceProviders = [
  { 
    name: 'Blue Cross Blue Shield', 
    description: 'Comprehensive coverage',
    icon: Shield
  },
  { 
    name: 'Aetna', 
    description: 'Quality care network',
    icon: Heart
  },
  { 
    name: 'Cigna', 
    description: 'Health partnership',
    icon: Users
  },
  { 
    name: 'United Healthcare', 
    description: 'Trusted provider',
    icon: Award
  },
  { 
    name: 'Medicaid', 
    description: 'State assistance program',
    icon: Heart
  },
  { 
    name: 'Medicare', 
    description: 'Federal health insurance',
    icon: Shield
  },
]

export function InsuranceAccepted() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Insurance We Accept
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            We work with most major insurance providers to make mental health care accessible and affordable for everyone
          </p>
        </div>

        <div className="insurance-grid">
          {insuranceProviders.map((provider) => {
            const IconComponent = provider.icon
            return (
              <div
                key={provider.name}
                className="insurance-card group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {provider.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-700 mb-4">
            Don't see your insurance listed? Contact us to verify coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17736516809"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Call (773) 651-6809
            </a>
            <a
              href="/schedule"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              New Patient Forms
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
