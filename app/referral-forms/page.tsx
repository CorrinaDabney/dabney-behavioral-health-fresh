import type { Metadata } from 'next'
import Link from 'next/link'
import { UserPlus, Users, HeartHandshake, Mail, ArrowRight, AlertCircle, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referral & Forms - Dabney Behavioral Health',
}

const forms = [
  {
    title: 'New Patient Form',
    eyebrow: 'Become a patient',
    icon: UserPlus,
    description:
      'This form is the first step in beginning your care with us. Completing it thoroughly allows us to prepare for your first appointment and tailor our services to your needs.',
    notes: [
      'Please set aside time to complete this paperwork.',
      'Your information is kept confidential.',
    ],
    cta: 'Open New Patient Form',
    href: '/schedule',
  },
  {
    title: 'Pathways Referral (CCSO)',
    eyebrow: 'For care coordinators',
    icon: Users,
    description:
      'For Pathways to Success care coordinators. Dabney Behavioral Health will contact you and the family within 24 to 48 hours.',
    notes: [
      'Pathways to Success services: Intensive Home-Based, Therapeutic Mentoring, Family Peer Support, and Respite.',
    ],
    cta: 'Open Pathways Form',
    href: '/pathways',
  },
  {
    title: 'Referral Form',
    eyebrow: 'Refer a client or loved one',
    icon: HeartHandshake,
    description:
      'Refer yourself, your child, a family member, or a client. Our team will follow up after we receive your referral.',
    notes: [
      'Takes only a few minutes to complete.',
    ],
    cta: 'Open Referral Form',
    href: '/referral',
  },
  {
    title: 'Contact Form',
    eyebrow: 'Business inquiries',
    icon: Mail,
    description:
      'Have a question about our services, business partnerships, professional inquiries, or collaboration opportunities? Contact our team here.',
    notes: [
      'General questions, partnership opportunities, and professional inquiries.',
    ],
    cta: 'Open Contact Form',
    href: '/contact',
  },
]

export default function ReferralFormsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-green-100 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Referral &amp; Forms
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Choose the form that best fits your needs. Each form helps us provide the right support for you or your loved one.
          </p>
        </div>
      </section>

      {/* Form cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {forms.map((form) => {
              const Icon = form.icon
              return (
                <div
                  key={form.title}
                  className="flex flex-col rounded-2xl border border-green-100 bg-green-50/40 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-900 rounded-full mx-auto mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-900 text-center">{form.title}</h2>
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-600 text-center mt-1 mb-4">
                    {form.eyebrow}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">{form.description}</p>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {form.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={form.href}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-900 px-4 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
                  >
                    {form.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Crisis support */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-red-50 border border-red-100 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:items-center">
            <AlertCircle className="w-14 h-14 text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-red-700 uppercase tracking-wide">
                For crisis support or emergencies
              </h2>
              <p className="text-gray-800 mt-1">
                Our forms are not monitored 24/7. If you are experiencing an emergency, call <strong className="text-red-700">911</strong>.
                For mental health crisis support, call or text <strong className="text-red-700">988</strong> (Suicide &amp; Crisis Lifeline).
              </p>
            </div>
            <div className="space-y-2 text-gray-800">
              <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-red-600" /> Call <strong className="text-red-700 text-xl">911</strong> for emergencies</p>
              <p className="flex items-center gap-2"><MessageCircle className="w-5 h-5 text-red-600" /> Call or text <strong className="text-red-700 text-xl">988</strong> for crisis support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
