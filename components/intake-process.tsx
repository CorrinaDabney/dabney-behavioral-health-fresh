
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, FileText, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const intakeSteps = [
  {
    step: 1,
    title: 'Initial Contact',
    description: 'Reach out via phone, email, or our online form',
    icon: FileText,
    details: 'Start your journey by contacting us through your preferred method. We\'re here to answer questions and guide you.',
  },
  {
    step: 2,
    title: 'Complete Intake',
    description: 'Fill out secure, HIPAA-compliant intake forms',
    icon: Heart,
    details: 'Complete your intake paperwork in a safe, confidential environment designed to protect your privacy.',
  },
  {
    step: 3,
    title: 'Begin Treatment',
    description: 'Start your personalized care plan',
    icon: CheckCircle,
    details: 'Begin working with your dedicated therapist on a treatment plan tailored to your unique needs.',
  },
]

export function IntakeProcess() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            How Our Intake Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple and confidential. We've designed our process to be welcoming and stress-free.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {intakeSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.step}
                className={`relative p-6 bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer card-hover ${
                  selectedStep === step.step 
                    ? 'border-green-500 shadow-lg' 
                    : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setSelectedStep(selectedStep === step.step ? null : step.step)}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>

                  {selectedStep === step.step && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        {step.details}
                      </p>
                    </div>
                  )}

                  {step.step < 3 && (
                    <ArrowRight className="w-5 h-5 text-green-400 mx-auto mt-4 hidden lg:block" />
                  )}
                </div>
              </div>
            )
          })}
          </div>
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Ready to take the first step?
            </h3>
            <p className="text-green-700 mb-6">
              Our compassionate team is here to support you on your mental health journey. 
              All consultations are confidential and conducted in a safe, inclusive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <Link href="/schedule">
                  New Patient Forms
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                asChild
              >
                <Link href="/contact">
                  Contact Us First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
