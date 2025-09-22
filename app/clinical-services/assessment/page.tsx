
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function AssessmentServicePage() {
  const features = [
    'Comprehensive psychological testing',
    'Diagnostic evaluations and clarification',
    'Cognitive and neuropsychological assessments',
    'Personality and behavioral assessments',
    'Treatment planning and recommendations',
    'Educational and vocational assessments',
    'Risk assessment and safety planning'
  ]

  const benefits = [
    'Clear understanding of mental health needs',
    'Accurate diagnosis for effective treatment',
    'Personalized treatment recommendations',
    'Improved self-awareness and insight',
    'Better treatment outcomes',
    'Enhanced quality of life',
    'Informed decision-making for care'
  ]

  const process = [
    'Initial consultation and intake',
    'Review of history and symptoms',
    'Administration of standardized tests',
    'Clinical interviews and observations',
    'Data analysis and interpretation',
    'Comprehensive report preparation',
    'Results discussion and planning'
  ]

  return (
    <ServiceDetailLayout
      title="Assessment Service"
      description="Our comprehensive assessment services provide thorough psychological evaluations to understand your mental health needs and develop personalized treatment plans tailored to your unique situation."
      iconName="ClipboardList"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
