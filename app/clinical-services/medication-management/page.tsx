
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function MedicationManagementPage() {
  const features = [
    'Comprehensive medication evaluation',
    'Dosage optimization and adjustment',
    'Side effect monitoring and management',
    'Treatment coordination with therapists',
    'Medication education and counseling',
    'Regular follow-up appointments',
    'Alternative treatment considerations'
  ]

  const benefits = [
    'Optimized medication effectiveness',
    'Minimized side effects',
    'Improved symptom management',
    'Enhanced treatment outcomes',
    'Better quality of life',
    'Coordinated comprehensive care',
    'Informed medication decisions'
  ]

  const process = [
    'Initial psychiatric evaluation',
    'Medical history and assessment',
    'Medication selection and initiation',
    'Regular monitoring appointments',
    'Dosage adjustments as needed',
    'Side effect management',
    'Ongoing optimization and maintenance'
  ]

  return (
    <ServiceDetailLayout
      title="Medication Management"
      description="Expert psychiatric medication management to optimize your mental health treatment alongside therapy, ensuring safe and effective pharmaceutical interventions tailored to your needs."
      iconName="Pill"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
