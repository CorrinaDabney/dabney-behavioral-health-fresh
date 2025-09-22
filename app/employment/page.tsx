
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'

const positions = [
  {
    title: 'Licensed Mental Health Therapist',
    type: 'Full-time / Part-time',
    requirements: [
      'Master\'s degree in Psychology, Social Work, or related field',
      'Valid state licensure (LCSW, LPC, LMFT)',
      'Experience with diverse populations',
      'LGBTQ+ affirming approach preferred'
    ]
  },
  {
    title: 'Psychiatric Nurse Practitioner',
    type: 'Full-time / Part-time',
    requirements: [
      'Master\'s degree in Psychiatric Mental Health',
      'Valid nurse practitioner license',
      'Experience in medication management',
      'Collaborative approach to treatment'
    ]
  },
  {
    title: 'Administrative Assistant',
    type: 'Full-time',
    requirements: [
      'High school diploma or equivalent',
      'Strong organizational skills',
      'Experience with healthcare administration preferred',
      'Excellent communication skills'
    ]
  },
]

export default function EmploymentPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Be part of a compassionate team dedicated to providing inclusive, 
            high-quality mental health care in our community.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Explore our open positions and find the right fit for your career goals.
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {position.type}
                    </p>
                  </div>
                  <Button
                    className="bg-green-600 hover:bg-green-700 mt-4 md:mt-0"
                    asChild
                  >
                    <Link href="/apply">
                      Apply Now
                    </Link>
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              We make our application process straightforward and respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">Complete our online application form with your details and qualifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">We review applications and reach out to qualified candidates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600 text-sm">Meet with our team to discuss the role and your qualifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
              <p className="text-gray-600 text-sm">Join our team with comprehensive onboarding and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection showViewServices={false} />
    </div>
  )
}
