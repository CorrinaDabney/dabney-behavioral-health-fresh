import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Dabney Behavioral Health',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-green-700">
            Our contact form is coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
