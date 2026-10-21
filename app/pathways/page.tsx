import type { Metadata } from 'next'
import { JotformEmbed } from '@/components/jotform-embed'

export const metadata: Metadata = {
  title: 'Pathways to Success - Dabney Behavioral Health',
}

const PATHWAYS_REFERRAL_URL = 'https://form.jotform.com/262875131791059'

export default function PathwaysPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            Referrals
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Pathways to Success
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Refer a youth to Dabney Behavioral Health through Pathways to Success.
          </p>
        </div>
      </section>

      {/* Referral form */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-100 bg-white shadow-xl overflow-hidden">
            <div className="bg-green-900 px-6 py-6 sm:px-10 text-center">
              <h2 className="text-2xl font-bold text-white">
                Pathways to Success Referral Form
              </h2>
            </div>

            <div className="px-2 py-4 sm:px-6 sm:py-6">
              <JotformEmbed src={PATHWAYS_REFERRAL_URL} title="Pathways to Success Referral Form" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center mt-8">
            <p className="text-sm text-gray-600">
              Having trouble with the form?{' '}
              <a
                href={PATHWAYS_REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline font-medium"
              >
                Open it in a new tab
              </a>
              .
            </p>
            <p className="text-sm text-gray-600">
              This form is not monitored 24/7. If this is an emergency, call <strong>911</strong> or call or text <strong>988</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
