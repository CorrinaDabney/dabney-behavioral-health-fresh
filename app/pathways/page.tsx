import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Pathways to Success - Dabney Behavioral Health',
}

const PATHWAYS_REFERRAL_URL = 'https://form.jotform.com/262875131791059'

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
                Dabney Behavioral Health will contact you within 24-48 hours of receiving the form to process your referral. You can also reach us at (773) 651-6809 with any questions or additional information.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8" asChild>
                <a href={PATHWAYS_REFERRAL_URL} target="_blank" rel="noopener noreferrer">
                  Open the Pathways to Success Referral Form
                </a>
              </Button>
              <p className="text-sm text-gray-600">
                This form is not monitored 24/7. If this is an emergency, call <strong>911</strong> or call or text <strong>988</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
