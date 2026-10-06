import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notice of Privacy Practices - Dabney Behavioral Health',
  description:
    'How medical and mental health information about you may be used and shared, and how you can get access to this information.',
}

// DRAFT for Dr. Dabney's review. Source: COMPASS_Draft_Texts_For_Dr_Dabney.docx, section 1
// (HIPAA 45 CFR 164.520; 42 CFR Part 2 as amended 2024).
// Remove the yellow DRAFT banner and every highlighted [bracket] only after Dr. Dabney approves.
function Tbd({ children }: { children: React.ReactNode }) {
  return <span className="bg-yellow-200 px-1">{children}</span>
}

const h2 = 'text-2xl font-semibold text-green-900 mt-8 mb-3 border-b border-gray-200 pb-1'

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <div className="pt-20">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-gray-700">
        <div className="bg-yellow-50 border border-yellow-400 rounded-md px-4 py-3 mb-6">
          <strong>DRAFT for Dr. Dabney&apos;s review. Not yet in effect.</strong> Highlighted{' '}
          <Tbd>[brackets]</Tbd> need an answer before this page is published.
        </div>

        <h1 className="text-4xl font-bold text-green-900 mb-2">Notice of Privacy Practices</h1>
        <p className="mb-4">
          Dabney Behavioral Health <Tbd>[confirm legal name]</Tbd> (Illinois) and Dabney Behavioral
          Health California
          <br />
          Effective date: <Tbd>[October 13, 2026, or the go-live date]</Tbd>
        </p>

        <p className="font-bold uppercase text-sm mb-4">
          This notice describes how medical and mental health information about you may be used and
          shared, and how you can get access to this information. Please review it carefully.
        </p>

        <h2 className={h2}>Our duties</h2>
        <p className="mb-4">
          We are required by law to keep your health information private, to give you this notice of our
          legal duties and privacy practices, to follow the notice currently in effect, and to tell you
          if there is a breach of your unsecured health information.
        </p>

        <h2 className={h2}>How we may use and share your information without your written permission</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Treatment.</strong> We share information among the clinicians, supervisors and staff
            who care for you, and with other providers involved in your care.
          </li>
          <li>
            <strong>Payment.</strong> We share information with your health plan (including Medicaid and
            Medi-Cal) to bill and get paid, for example to confirm coverage or get a prior authorization.
          </li>
          <li>
            <strong>Health care operations.</strong> We use information to run our practice: quality
            reviews, supervision, training, audits and compliance checks.
          </li>
          <li>
            <strong>Business associates.</strong> We share information with companies that help us, such
            as our electronic health record and secure file services. They must sign an agreement to
            protect it.
          </li>
          <li>
            <strong>When the law requires or allows it:</strong> to report suspected abuse or neglect of
            a child, older adult or person with a disability; to prevent a serious threat to your health
            or safety or someone else&apos;s; for public health activities; to health oversight agencies
            (such as audits and licensing); in response to a court order; to law enforcement in limited
            cases; to coroners and medical examiners; for workers&apos; compensation; and for specialized
            government functions.
          </li>
        </ul>

        <h2 className={h2}>Uses that need your written permission</h2>
        <p className="mb-4">
          We need your written authorization to share psychotherapy notes, to use your information for
          marketing, or to sell it. We do not sell health information. You may take back (revoke) a
          permission in writing at any time, except for what we already did in reliance on it. We do not
          use your information for fundraising.
        </p>

        <h2 className={h2}>Stronger protections for mental health records</h2>
        <p className="mb-4">
          Illinois&apos; Mental Health and Developmental Disabilities Confidentiality Act, and in
          California the Confidentiality of Medical Information Act, give extra protection to mental
          health records. When state law is stricter than HIPAA, we follow the stricter rule. In many
          cases this means we ask for your written consent before sharing, even where HIPAA would not
          require it.
        </p>

        <h2 className={h2}>Substance use disorder records</h2>
        <p className="mb-4">
          If we keep records about substance use disorder treatment that are protected by federal law (42
          CFR Part 2), we will not use or share them in a civil, criminal, administrative or legislative
          proceeding against you unless you give written consent, or a court orders it after notice to
          you and a chance to be heard. A court order must be accompanied by a subpoena or similar legal
          requirement.{' '}
          <Tbd>
            [Confirm whether DBHHC keeps any Part 2 records; counsel to confirm this section meets the
            2024 Part 2 rule.]
          </Tbd>
        </p>

        <h2 className={h2}>Your rights</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>See and get a copy</strong> of your records, on paper or electronically. We may
            charge a reasonable, cost-based fee.
          </li>
          <li>
            <strong>Ask us to correct</strong> information you believe is wrong or incomplete. We will
            answer in writing within 60 days.
          </li>
          <li>
            <strong>Ask for confidential communication,</strong> for example calls only to a certain
            phone number or mail to a different address. We will agree to reasonable requests.
          </li>
          <li>
            <strong>Ask us to limit</strong> what we use or share. We are not required to agree, except
            that we must agree not to share with your health plan a service you paid for in full out of
            pocket, if you ask.
          </li>
          <li>
            <strong>Get a list</strong> of certain times we shared your information in the last six
            years (an accounting of disclosures).
          </li>
          <li>
            <strong>Get a paper copy</strong> of this notice at any time, even if you agreed to get it
            electronically.
          </li>
          <li>
            <strong>Choose someone to act for you,</strong> such as a legal guardian or someone with
            medical power of attorney.
          </li>
          <li>
            <strong>File a complaint</strong> if you think your rights were violated. Contact us (below)
            or the U.S. Department of Health and Human Services, Office for Civil Rights, at{' '}
            <a
              href="https://www.hhs.gov/ocr/complaints"
              className="text-green-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hhs.gov/ocr/complaints
            </a>{' '}
            or 1-800-368-1019. We will not retaliate against you for filing a complaint.
          </li>
        </ul>

        <h2 className={h2}>Minors</h2>
        <p className="mb-4">
          For clients under 18, a parent or legal guardian usually makes these choices. Under Illinois
          law, a client 12 to 17 has certain rights of their own over their mental health records, and a
          parent&apos;s access may be limited if the teen objects and the clinician agrees access is not
          in the teen&apos;s best interest.{' '}
          <Tbd>
            [Counsel to confirm wording; add California minor-consent language for the California
            office.]
          </Tbd>
        </p>

        <h2 className={h2}>Changes to this notice</h2>
        <p className="mb-4">
          We can change this notice, and the changes will apply to all information we have. The new
          notice will be posted on this website, in our patient portal, and available on request.
        </p>

        <h2 className={h2}>Contact our Privacy Officials</h2>
        <p className="mb-4">
          Corrina <Tbd>[last name]</Tbd> and Derrick Wilson
          <br />
          Email:{' '}
          <a href="mailto:privacy@dbhhc.org" className="text-green-700 underline">
            privacy@dbhhc.org
          </a>
          <br />
          Illinois: 845 West 69th Street, Chicago, IL 60621 · (773) 651-6809
          <br />
          California: 626 W. Lancaster Blvd. 70, Lancaster, CA 93534 · (661) 220-8413{' '}
          <Tbd>[confirm: the Privacy Notice page and California footer use (661) 220-9977]</Tbd>
          <br />
          Website privacy notice:{' '}
          <Link href="/privacy" className="text-green-700 underline">
            Privacy Notice
          </Link>
        </p>
      </section>
    </div>
  )
}
