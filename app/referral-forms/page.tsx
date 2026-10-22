import type { Metadata } from 'next'
import Link from 'next/link'
import {
  UserPlus,
  Users,
  HeartHandshake,
  Mail,
  ArrowRight,
  Clock,
  Lock,
  Heart,
  Phone,
  MessageCircle,
  Handshake,
  Briefcase,
} from 'lucide-react'
import { REFERRAL_HERO } from '@/lib/referral-images'

export const metadata: Metadata = {
  title: 'Referral & Forms - Dabney Behavioral Health',
}

const display = 'font-[family-name:var(--font-display)]'
const serif = 'font-[family-name:var(--font-body-serif)]'

function Lotus({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M24 3c3 4 4 9 0 15-4-6-3-11 0-15Z" />
      <path d="M24 18c-5-1-9-5-9-10 5 0 8 4 9 10Z" />
      <path d="M24 18c5-1 9-5 9-10-5 0-8 4-9 10Z" />
      <path d="M24 18c-7 2-13-1-16-6 6-1 11 1 16 6Z" />
      <path d="M24 18c7 2 13-1 16-6-6-1-11 1-16 6Z" />
    </svg>
  )
}

function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${dark ? 'text-amber-200' : 'text-green-700/60'}`}>
      <span className="h-px w-16 bg-current opacity-70" />
      <Lotus className="h-5 w-10" />
      <span className="h-px w-16 bg-current opacity-70" />
    </div>
  )
}

type InfoRow = { icon: typeof Clock; text: string; round?: boolean }

const cards: {
  title: string
  eyebrow: string
  icon: typeof Clock
  tint: string
  description: string
  rows?: InfoRow[]
  about?: { title: string; text: string }
  cta: string
  href: string
}[] = [
  {
    title: 'New Patient Form',
    eyebrow: 'Become a patient',
    icon: UserPlus,
    tint: 'from-green-800 to-emerald-600',
    description:
      'This comprehensive and secure form is the first and most important step in beginning your care with us. Completing it thoroughly allows us to prepare for your first appointment and tailor our services to your specific needs.',
    rows: [
      { icon: Clock, text: 'Please set aside 45 to 60 minutes to complete this paperwork.' },
      { icon: Lock, text: 'Your information is kept strictly confidential and secure.' },
      { icon: Heart, text: 'We appreciate you taking the time to complete this, and we look forward to meeting with you.' },
    ],
    cta: 'Open New Patient Form',
    href: '/schedule',
  },
  {
    title: 'Pathways Referral (CCSO)',
    eyebrow: 'For care coordinators',
    icon: Users,
    tint: 'from-teal-800 to-green-600',
    description:
      'For Pathways to Success care coordinators. Dabney Behavioral Health will contact you and the family within 24 to 48 hours.',
    about: {
      title: 'About Pathways to Success',
      text: 'Pathways to Success is an Illinois Medicaid program designed for youth under age 21 who have complex behavioral health needs. Care Coordination and Support Organizations (CCSOs) serve as regional hubs that manage intensive, community-based care, helping children stay safely in their homes and communities.',
    },
    cta: 'Open Pathways Referral Form',
    href: '/pathways',
  },
  {
    title: 'Referral Form',
    eyebrow: 'Refer a client or loved one',
    icon: HeartHandshake,
    tint: 'from-green-900 to-lime-700',
    description:
      'Refer yourself, your child, a family member, or a client. This form takes about 3 minutes. Our intake team will call within 1 to 2 business days.',
    rows: [
      { icon: Clock, text: 'Takes about 3 minutes to complete.' },
      { icon: Phone, text: 'Our intake team will contact you within 1 to 2 business days.' },
      { icon: Lock, text: 'Your information is confidential and protected under HIPAA.' },
    ],
    cta: 'Open Referral Form',
    href: '/referral',
  },
  {
    title: 'Contact Form',
    eyebrow: 'Business inquiries',
    icon: Mail,
    tint: 'from-emerald-900 to-teal-600',
    description:
      'Have a question about our services, business partnerships, professional inquiries, or collaboration opportunities? Contact our team here.',
    rows: [
      { icon: MessageCircle, text: 'General questions', round: true },
      { icon: Handshake, text: 'Partnership opportunities', round: true },
      { icon: Briefcase, text: 'Professional inquiries', round: true },
    ],
    cta: 'Open Contact Form',
    href: '/contact',
  },
]

export default function ReferralFormsPage() {
  return (
    <div className="pt-20 bg-[#f6f4ec]">
      {/* Banner */}
      <section className="relative overflow-hidden bg-green-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={REFERRAL_HERO}
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[130%] max-w-none object-cover object-left"
        >
          <source src="/assets/dabney-hero-final.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/55" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-white">
          <h1 className={`${display} text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg`}>
            Referral &amp; Forms
          </h1>
          <div className="my-3">
            <Divider dark />
          </div>
          <p className={`${serif} text-lg sm:text-xl leading-snug drop-shadow max-w-3xl mx-auto`}>
            Choose the form that best fits your needs. Each form is secure, confidential, and helps us provide the right support for you or your loved one.
          </p>
        </div>
      </section>

      {/* Form cards */}
      <section className="py-4">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-xl border border-[#e7e2d0] bg-[#fbf9f1] shadow-sm"
                >
                  <div className={`h-[93px] w-full bg-gradient-to-br ${card.tint}`} />
                  <div className="relative z-10 -mt-9 flex justify-center">
                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-green-900 ring-4 ring-[#fbf9f1]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
                    <h2 className={`${display} text-center text-2xl xl:text-[26px] font-bold leading-tight text-gray-900`}>
                      {card.title}
                    </h2>
                    <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-green-800">
                      {card.eyebrow}
                    </p>
                    <div className="my-3">
                      <Divider />
                    </div>
                    <p className={`${serif} text-[17px] leading-snug text-gray-800`}>{card.description}</p>

                    {card.rows && (
                      <ul className="mt-4 space-y-2 rounded-lg bg-[#e9f0df] p-3">
                        {card.rows.map((row) => {
                          const RowIcon = row.icon
                          return (
                            <li key={row.text} className="flex items-center gap-3">
                              <span
                                className={
                                  row.round
                                    ? 'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#d6e5c8]'
                                    : 'flex h-9 w-9 flex-shrink-0 items-center justify-center'
                                }
                              >
                                <RowIcon className="h-6 w-6 text-green-900" />
                              </span>
                              <span className={`${serif} text-sm leading-snug text-gray-800`}>{row.text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    )}

                    {card.about && (
                      <div className="mt-4 rounded-lg bg-[#e9f0df] p-4">
                        <h3 className={`${serif} text-base font-semibold text-gray-900`}>{card.about.title}</h3>
                        <p className={`${serif} mt-1 text-sm leading-snug text-gray-700`}>{card.about.text}</p>
                      </div>
                    )}

                    <div className="mt-auto pt-5">
                      <Link
                        href={card.href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Crisis support */}
      <section className="pb-8 pt-2">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-7">
          <div className="flex flex-col gap-6 rounded-2xl border border-red-100 bg-[#fde9e7] p-5 sm:p-6 lg:flex-row lg:items-center">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-5xl font-bold text-white">
              !
            </div>
            <div className="flex-1">
              <h2 className={`${display} text-xl sm:text-2xl font-bold uppercase tracking-wide text-red-700`}>
                For crisis support or emergencies
              </h2>
              <p className={`${serif} mt-1 text-lg leading-snug text-gray-800`}>
                Our forms are not monitored 24/7. If you are experiencing an emergency, call{' '}
                <strong className={`${display} text-red-700`}>911</strong>. For mental health crisis support, call or text{' '}
                <strong className={`${display} text-red-700`}>988</strong> (Suicide &amp; Crisis Lifeline).
              </p>
            </div>
            <div className="hidden lg:block h-16 w-px bg-red-200" />
            <div className="space-y-3 text-gray-800">
              <p className={`${serif} flex items-center gap-3 text-lg`}>
                <Phone className="h-7 w-7 text-red-600" />
                <span>
                  Call <strong className={`${display} text-3xl text-red-700`}>911</strong> for emergencies
                </span>
              </p>
              <p className={`${serif} flex items-center gap-3 text-lg`}>
                <MessageCircle className="h-7 w-7 text-red-600" />
                <span>
                  Call or text <strong className={`${display} text-3xl text-red-700`}>988</strong> for crisis support
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
