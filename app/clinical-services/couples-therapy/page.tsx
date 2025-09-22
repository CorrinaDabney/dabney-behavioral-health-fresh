
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function CouplesTherapyPage() {
  const features = [
    'Communication skills training',
    'Conflict resolution strategies',
    'Intimacy and connection building',
    'Trust rebuilding techniques',
    'Pre-marital counseling',
    'Relationship enrichment programs',
    'LGBTQ+ affirming approaches'
  ]

  const benefits = [
    'Improved communication patterns',
    'Stronger emotional connection',
    'Better conflict management',
    'Enhanced intimacy and trust',
    'Deeper understanding of partner',
    'Renewed relationship satisfaction',
    'Healthier relationship dynamics'
  ]

  const process = [
    'Initial couples assessment',
    'Identification of relationship goals',
    'Communication pattern analysis',
    'Skill-building exercises',
    'Homework and practice assignments',
    'Progress monitoring and adjustment',
    'Maintenance and follow-up'
  ]

  return (
    <ServiceDetailLayout
      title="Couples Therapy"
      description="Strengthen your relationship through evidence-based approaches that improve communication, deepen connection, and build lasting intimacy in a supportive and inclusive environment."
      iconName="Heart"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
