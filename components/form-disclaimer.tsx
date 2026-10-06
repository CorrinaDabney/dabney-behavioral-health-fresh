import Link from 'next/link'

// Checklist C-2: same wording on both sites, next to every form button.
export function FormDisclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm text-gray-600 leading-relaxed max-w-xl ${className}`}>
      These forms are secure and go directly to Dabney Behavioral Health. They are{' '}
      <strong>not monitored 24/7</strong>. If this is an emergency, call <strong>911</strong> or
      call/text <strong>988</strong>. See our{' '}
      <Link href="/privacy" className="text-green-700 underline">
        Privacy Notice
      </Link>
      .
    </p>
  )
}
