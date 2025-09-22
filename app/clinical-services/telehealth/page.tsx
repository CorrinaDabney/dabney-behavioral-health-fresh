
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function TelehealthServicesPage() {
  const features = [
    'HIPAA-compliant secure video sessions',
    'Flexible scheduling options',
    'All therapy services available remotely',
    'Easy-to-use technology platform',
    'Technical support provided',
    'Extended hours availability',
    'Accessible from home or private location'
  ]

  const benefits = [
    'Convenient access from anywhere',
    'Reduced travel time and costs',
    'Comfortable familiar environment',
    'Increased scheduling flexibility',
    'Continuity of care during travel',
    'Reduced barriers to treatment',
    'Enhanced privacy and comfort'
  ]

  const process = [
    'Technology setup and testing',
    'Platform orientation session',
    'Secure session scheduling',
    'Pre-session preparation',
    'Virtual therapy sessions',
    'Technical support as needed',
    'Ongoing remote care coordination'
  ]

  return (
    <ServiceDetailLayout
      title="Telehealth Services"
      description="Access quality mental health care from the comfort of your home through our secure, HIPAA-compliant telehealth platform, providing the same professional care with added convenience."
      iconName="Monitor"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
