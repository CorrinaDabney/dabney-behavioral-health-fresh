import type { Metadata } from 'next'
import { JotformEmbed } from '@/components/jotform-embed'

export const metadata: Metadata = {
  title: 'Contact - Dabney Behavioral Health',
}

const CONTACT_FORM_URL = 'https://hipaa.jotform.com/262937977492175'
const CONTACT_FORM_HEIGHTS: [number, number, number] = [1900, 1500, 1300]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Send our team a message using the form below.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-100 bg-white shadow-xl overflow-hidden">
            <div className="px-2 py-4 sm:px-6 sm:py-6">
              <JotformEmbed
                src={CONTACT_FORM_URL}
                title="Contact Form"
                heights={CONTACT_FORM_HEIGHTS}
                useReportedHeight
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center mt-8">
            <p className="text-sm text-gray-600">
              Having trouble with the form?{' '}
              <a
                href={CONTACT_FORM_URL}
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
