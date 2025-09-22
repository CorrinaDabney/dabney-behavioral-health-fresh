
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function IndividualTherapyPage() {
  const features = [
    'Personalized treatment plans',
    'Various therapeutic modalities (CBT, DBT, etc.)',
    'Goal-oriented therapy sessions',
    'Trauma-informed care approaches',
    'LGBTQ+ affirming therapy',
    'Anxiety and depression treatment',
    'Life transitions and adjustment support'
  ]

  const benefits = [
    'Individualized attention and care',
    'Confidential therapeutic relationship',
    'Customized treatment approach',
    'Flexible pacing and progress',
    'Deep personal insight development',
    'Improved coping strategies',
    'Enhanced emotional regulation'
  ]

  const process = [
    'Initial assessment and intake',
    'Treatment goal development',
    'Therapeutic modality selection',
    'Regular therapy sessions',
    'Progress monitoring and adjustment',
    'Skill building and practice',
    'Maintenance and relapse prevention'
  ]

  return (
    <ServiceDetailLayout
      title="Individual Therapy"
      description="One-on-one therapeutic sessions tailored to your specific needs, goals, and preferred therapeutic approach, providing personalized care in a confidential and supportive environment."
      iconName="User"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
