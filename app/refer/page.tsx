import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

// Go-Live item C-4: short forwarding address for the Quick Referral form.
// Nothing on the site links here yet. The website buttons are switched to /refer on go-live day (G-3).
// If the form ever moves, only the link below changes; the /refer address stays the same.
const QUICK_REFERRAL_FORM_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=aQivVXGwc0KgaFzi9Z1tHaLYGdbT87FApq-Aumy5dWJUOTVXT1FJNjBOV0dEQTRBUkRYUEZQSkMxUy4u'

export const metadata: Metadata = {
  title: 'Referral - Dabney Behavioral Health',
  robots: { index: false, follow: false },
}

export default function ReferPage() {
  redirect(QUICK_REFERRAL_FORM_URL)
}
