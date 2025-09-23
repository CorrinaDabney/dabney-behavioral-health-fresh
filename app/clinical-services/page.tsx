
import { Button } from '@/components/ui/button'
import { 
  ClipboardList, 
  Heart, 
  Users, 
  User, 
  Pill, 
  Monitor,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'

const services = [
  {
    slug: 'assessment',
    title: 'Assessment Service',
    description: 'Comprehensive psychological evaluations to understand your mental health needs and develop personalized treatment plans.',
    icon: ClipboardList,
    features: [
      'Comprehensive psychological testing',
      'Diagnostic evaluations',
      'Treatment planning',
      'Cognitive assessments'
    ]
  },
  {
    slug: 'couples-therapy',
    title: 'Couples Therapy',
    description: 'Strengthen your relationship through evidence-based approaches that improve communication and deepen connection.',
    icon: Heart,
    features: [
      'Communication skills training',
      'Conflict resolution',
      'Intimacy building',
      'Relationship enrichment'
    ]
  },
  {
    slug: 'family-therapy',
    title: 'Family Therapy',
    description: 'Heal family dynamics and build stronger bonds through systemic approaches that address the whole family system.',
    icon: Users,
    features: [
      'Family system assessment',
      'Improved communication',
      'Conflict mediation',
      'Behavioral interventions'
    ]
  },
  {
    slug: 'group-therapy',
    title: 'Group Therapy',
    description: 'Find support and connection with others who share similar experiences in our professionally facilitated group sessions.',
    icon: Users,
    features: [
      'Peer support networks',
      'Shared experiences',
      'Social skills development',
      'Cost-effective treatment'
    ]
  },
  {
    slug: 'individual-therapy',
    title: 'Individual Therapy',
    description: 'One-on-one therapeutic sessions tailored to your specific needs, goals, and preferred therapeutic approach.',
    icon: User,
    features: [
      'Personalized treatment plans',
      'Various therapeutic modalities',
      'Goal-oriented sessions',
      'Confidential environment'
    ]
  },
  {
    slug: 'medication-management',
    title: 'Medication Management',
    description: 'Expert psychiatric medication management to optimize your mental health treatment alongside therapy.',
    icon: Pill,
    features: [
      'Medication evaluation',
      'Dosage optimization',
      'Side effect monitoring',
      'Treatment coordination'
    ]
  },
  {
    slug: 'telehealth',
    title: 'Telehealth Services',
    description: 'Access quality mental health care from the comfort of your home through our secure telehealth platform.',
    icon: Monitor,
    features: [
      'Secure video sessions',
      'Flexible scheduling',
      'Remote accessibility',
      'HIPAA compliant platform'
    ]
  },
]

export default function ClinicalServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
              Clinical Services
            </h1>
            <p className="text-xl text-green-700 mb-8">
              Comprehensive mental health services designed to support your unique journey toward healing and growth.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8 py-4"
              asChild
            >
              <Link href="/schedule">
                New Patient Forms
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl border border-gray-200 p-6 card-hover group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/clinical-services/${service.slug}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  )
}
