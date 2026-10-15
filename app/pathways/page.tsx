import type { Metadata } from 'next'
import { FormDisclaimer } from '@/components/form-disclaimer'
import { PATHWAYS_REFERRAL_URL } from '@/lib/form-links'

export const metadata: Metadata = {
  title: 'Pathways to Success - Dabney Behavioral Health',
}

export default function PathwaysPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Pathways to Success
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Refer a youth to Dabney Behavioral Health through Pathways to Success.
          </p>
        </div>
      </section>

      {/* Referral form link */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pathways to Success Referral Form
              </h2>
              <p className="text-gray-600">
                Dabney Behavioral Health will contact you within 24-48 hours of receiving the form to process your referral.
                You can also reach us at (773) 651-6809 with any questions or additional information.
              </p>
            </div>

            {/* Jotform embed */}
            <div className="w-full min-h-[900px]">
              <iframe
                src={PATHWAYS_REFERRAL_URL}
                width="100%"
                height="900"
                frameBorder="0"
                style={{ border: 'none' }}
                title="Pathways to Success Referral Form"
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center gap-4 text-center mt-6">
              <p className="text-sm text-gray-600">
                Having trouble with the form?{' '}
                <a
                  href={PATHWAYS_REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline"
                >
                  Open it in a new tab
                </a>
                .
              </p>
              <FormDisclaimer />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
