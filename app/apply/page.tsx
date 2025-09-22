
export default function ApplyPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Employment Application
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Ready to join our compassionate team? Fill out the application below and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* Jotform Embed */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Application Form
              </h2>
              <p className="text-gray-600">
                Please provide your information and qualifications below. All information is confidential and secure.
              </p>
            </div>

            {/* Jotform iframe */}
            <div className="w-full min-h-[800px]">
              <iframe 
                src="https://form.jotform.com/252377462365160"
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: 'none' }}
                title="Employment Application Form"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Equal Opportunity Employer</h3>
          <p className="text-green-100 leading-relaxed">
            Dabney Behavioral Health is an equal opportunity employer committed to diversity and inclusion. 
            All qualified applicants are considered for employment without regard to race, color, religion, 
            sex, sexual orientation, gender identity, national origin, age, disability, or veteran status.
          </p>
        </div>
      </section>
    </div>
  )
}
