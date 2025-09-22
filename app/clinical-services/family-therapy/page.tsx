
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function FamilyTherapyPage() {
  const features = [
    'Family system assessment and analysis',
    'Improved communication strategies',
    'Conflict mediation and resolution',
    'Behavioral intervention programs',
    'Parenting skills development',
    'Adolescent and child therapy integration',
    'Multi-generational family work'
  ]

  const benefits = [
    'Stronger family bonds and connections',
    'Better communication among members',
    'Reduced family conflict and tension',
    'Improved problem-solving skills',
    'Enhanced emotional support system',
    'Healthier family dynamics',
    'Increased family resilience'
  ]

  const process = [
    'Family assessment and history taking',
    'Identification of family patterns',
    'Goal setting with all members',
    'Family communication exercises',
    'Conflict resolution training',
    'Behavioral modification strategies',
    'Progress review and maintenance'
  ]

  return (
    <ServiceDetailLayout
      title="Family Therapy"
      description="Heal family dynamics and build stronger bonds through systemic approaches that address the whole family system, promoting understanding, communication, and healthy relationships."
      iconName="Users"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
