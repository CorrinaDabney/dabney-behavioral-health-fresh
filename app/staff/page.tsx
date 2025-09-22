
import { Phone, Mail, User } from 'lucide-react'
import { CTASection } from '@/components/cta-section'

const staffMembers = [
  {
    name: 'Dr. Corey Dabney',
    title: 'Ph.D., MBA, LPHA - Clinical Director',
    phone: '(773) 651-6809',
    email: null,
    description: 'Clinical Director with extensive experience in behavioral health and mental wellness.'
  },
  {
    name: 'Dr. Cynthia Dabney',
    title: 'MBA, QMHP',
    phone: '(773) 651-6809',
    email: null,
    description: 'Qualified Mental Health Professional specializing in comprehensive care approaches.'
  },
  {
    name: 'Ms. Jennifer Hayden',
    title: 'QMHP – Clinical Supervisor',
    phone: '(773) 885-1303',
    email: 'jennifer.hayden@dbhhc.org',
    description: 'Clinical Supervisor overseeing therapeutic services and staff development.'
  },
  {
    name: 'Mr. Derrick Wilson',
    title: 'MHP - Quality Assurance Supervisor',
    phone: '(773) 299-4191',
    email: 'derrick.wilson@dbhhc.org',
    description: 'Quality Assurance Supervisor ensuring excellence in service delivery.'
  },
  {
    name: 'Mrs. Delia Delgado',
    title: 'Administrative Liaison',
    phone: '(773) 939-2863',
    email: 'delia.delgado@dbhhc.org',
    description: 'Administrative Liaison coordinating patient care and office operations.'
  },
  {
    name: 'Ms. Lisa Radford',
    title: 'MHP - Mental Health Coordinator',
    phone: '(773) 299-4190',
    email: 'lisa.radford@dbhhc.org',
    description: 'Mental Health Coordinator facilitating comprehensive treatment planning.'
  },
]

export default function StaffPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Our Compassionate Team
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Meet our dedicated professionals who are committed to providing exceptional, 
            inclusive mental health care in a safe and supportive environment.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 card-hover"
              >
                {/* Avatar Placeholder */}
                <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 mx-auto">
                  <User className="w-10 h-10 text-green-600" />
                </div>

                {/* Staff Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Phone className="w-4 h-4 text-green-600" />
                      <a 
                        href={`tel:${member.phone.replace(/\D/g, '')}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                    
                    {member.email && (
                      <div className="flex items-center justify-center space-x-2 text-gray-700">
                        <Mail className="w-4 h-4 text-green-600" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="hover:text-green-600 transition-colors text-sm"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            What Makes Our Team Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Diverse Expertise
              </h3>
              <p className="text-gray-600">
                Our team brings together diverse backgrounds, specialties, and approaches to provide comprehensive care that meets your unique needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Inclusive Environment
              </h3>
              <p className="text-gray-600">
                We're committed to creating a welcoming space for all individuals, including LGBTQ+ clients and people from all backgrounds.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Collaborative Care
              </h3>
              <p className="text-gray-600">
                Our team works together to ensure coordinated, comprehensive treatment that addresses all aspects of your mental health journey.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ongoing Training
              </h3>
              <p className="text-gray-600">
                We stay current with the latest evidence-based practices and continue our education to provide you with the best possible care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection />
    </div>
  )
}
