
import Link from 'next/link'
import { Facebook, Linkedin, X, Video, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Dabney-Behavioral-Health-61578769814686/',
    icon: Facebook,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@dabney.behavioral.health?_t=ZP-8zCoxUzy2Xf&_r=1',
    icon: Video,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dr-corey-dabney-68253a57/',
    icon: Linkedin,
  },
  {
    name: 'X',
    href: 'https://x.com/dbhc_il?s=21',
    icon: X,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
  },
]

const hoursOfOperation = [
  { day: 'Monday', office: '9 am to 5 pm', telehealth: '7 am to 9 pm' },
  { day: 'Tuesday', office: '9 am to 5 pm', telehealth: '7 am to 9 pm' },
  { day: 'Wednesday', office: '9 am to 5 pm', telehealth: '7 am to 9 pm' },
  { day: 'Thursday', office: '9 am to 5 pm', telehealth: '7 am to 9 pm' },
  { day: 'Friday', office: '9 am to 5 pm', telehealth: '7 am to 9 pm' },
  { day: 'Saturday', office: 'Office Closed', telehealth: 'Telehealth By appointment' },
  { day: 'Sunday', office: 'Office Closed', telehealth: 'Telehealth By appointment' },
]

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-100">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-100">
                    845 West 69th Street<br />
                    Chicago, Illinois 60621
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                <Link
                  href="tel:+17736516809"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  (773) 651-6809
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                <Link
                  href="mailto:info@dbhhc.org"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  info@dbhhc.org
                </Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-green-100 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:text-white transition-colors"
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-green-100">Hours of Operation</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {hoursOfOperation.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex flex-col space-y-1 p-3 bg-green-800/50 rounded-lg"
                >
                  <div className="font-medium text-green-100">{schedule.day}</div>
                  <div className="text-sm text-green-200">
                    <div>Office Hours: {schedule.office}</div>
                    <div>Telehealth: {schedule.telehealth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-green-200">
              © 2024 Dabney Behavioral Health. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/clinical-services" className="text-green-200 hover:text-white transition-colors">
                Clinical Services
              </Link>
              <Link href="/staff" className="text-green-200 hover:text-white transition-colors">
                Staff
              </Link>
              <Link href="/telehealth" className="text-green-200 hover:text-white transition-colors">
                Telehealth
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
