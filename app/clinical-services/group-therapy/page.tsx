
import { ServiceDetailLayout } from '@/components/service-detail-layout'

export default function GroupTherapyPage() {
  const features = [
    'Professionally facilitated groups',
    'Peer support networks',
    'Shared experience processing',
    'Social skills development',
    'Process and psychoeducational groups',
    'LGBTQ+ affirming groups',
    'Specialized topic groups'
  ]

  const benefits = [
    'Reduced isolation and loneliness',
    'Learning from others\' experiences',
    'Cost-effective treatment option',
    'Enhanced social connections',
    'Increased self-awareness',
    'Mutual support and encouragement',
    'Practice of new skills in safe environment'
  ]

  const process = [
    'Initial individual screening',
    'Group matching and placement',
    'Orientation to group process',
    'Regular group participation',
    'Skill practice and feedback',
    'Progress monitoring',
    'Transition planning'
  ]

  return (
    <ServiceDetailLayout
      title="Group Therapy"
      description="Find support and connection with others who share similar experiences in our professionally facilitated group sessions, creating a community of healing and growth."
      iconName="Users"
      features={features}
      benefits={benefits}
      process={process}
    />
  )
}
