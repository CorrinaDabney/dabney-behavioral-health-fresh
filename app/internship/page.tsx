
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  Users, 
  FileText, 
  CheckCircle, 
  BookOpen,
  Heart,
  Video,
  ExternalLink,
  X
} from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'

const programHighlights = [
  {
    icon: GraduationCap,
    title: 'Multiple Degree Levels',
    description: 'Programs for undergraduate, master\'s, and doctoral level students in counseling, psychology, marriage and family therapy, and social work.'
  },
  {
    icon: MapPin,
    title: 'Diverse Locations',
    description: 'Gain experience at our facility, public school partnerships, community centers, and client residences.'
  },
  {
    icon: Users,
    title: 'Comprehensive Training',
    description: 'Learn patient intake, treatment planning, therapeutic techniques, ethical standards, and research methods.'
  },
  {
    icon: Heart,
    title: 'Real-World Impact',
    description: 'Work directly with individuals, couples, families, and provide crisis support services in the community.'
  }
]

const requirements = [
  'Student\'s academic institution must be regionally or nationally accredited',
  'Must have a cumulative Grade Point Average of GPA 3.0 or higher on a 4-point scale',
  'Must be able to pass Local and National Criminal Background checks, including Illinois Sex Offender Registry',
  'Must pass Motor Vehicle Records and Child Protection history checks',
  'Must provide additional information required by local public schools or partner affiliates'
]

const serviceAreas = [
  {
    title: 'Mental Health Counseling',
    description: 'Individual, couples, and family therapy sessions'
  },
  {
    title: 'In-School Therapeutic Services',
    description: 'Supporting children and emerging adults in educational settings'
  },
  {
    title: 'In-Home Therapy',
    description: 'Community support services in client residences'
  },
  {
    title: 'Crisis Support Services',
    description: 'Emergency mental health support for patients and families'
  }
]

const startDates = [
  { season: 'Winter', month: 'November' },
  { season: 'Spring', month: 'March' },
  { season: 'Summer', month: 'July' },
  { season: 'Fall', month: 'August' }
]

export default function InternshipPage() {
  const [videoUrl, setVideoUrl] = useState('')
  const [showVideo, setShowVideo] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)

  const handleVideoSubmit = () => {
    if (videoUrl.trim()) {
      // Convert YouTube URLs to embed format
      let embedUrl = videoUrl
      const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
      if (youtubeMatch) {
        embedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}`
      }
      setVideoUrl(embedUrl)
      setShowVideo(true)
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-6">
            Internship & Practicum Program
          </h1>
          <p className="text-xl text-green-700 mb-8">
            Fostering positive social change with a passion for serving humanity. 
            Complete your academic journey while gaining real-world clinical experience.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Overview Video
            </h2>
            <p className="text-gray-600 mb-6">
              Watch our program overview or add a YouTube video to learn more about our internship opportunities.
            </p>
          </div>

          {!showVideo ? (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Video className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add a Video</h3>
              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Enter YouTube URL or video embed link..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button
                  onClick={handleVideoSubmit}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Add Video
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Internship Program Video"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowVideo(false)}
                  className="mr-2"
                >
                  Change Video
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(videoUrl, '_blank')}
                >
                  Open in New Tab <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive program is designed to help current and future clinicians complete their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 card-hover text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 text-green-600 mr-2" />
                Service Areas
              </h2>
              <div className="space-y-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Dates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-green-600 mr-2" />
                Program Start Dates
              </h2>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-green-700 mb-4 font-medium">
                  Applications accepted year-round! New internships start:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {startDates.map((date, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <div className="font-semibold text-gray-900">{date.season}</div>
                      <div className="text-green-600 text-sm">{date.month}</div>
                    </div>
                  ))}
                </div>
                <p className="text-green-600 text-sm mt-4 text-center">
                  Students are encouraged to apply early
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Qualifications & Requirements
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Apply
          </h2>
          <div className="bg-green-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Submit by clicking apply now
              </h3>
              <p className="text-green-700">
                All 3 items must be attached to your email for consideration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cover Letter & Resume</h4>
                <p className="text-gray-600 text-sm">Your professional background and motivation</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Academic Transcripts</h4>
                <p className="text-gray-600 text-sm">Unofficial copy showing your academic performance</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Degree Requirements</h4>
                <p className="text-gray-600 text-sm">Your institution's requirements for your program</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 px-8 py-4"
                onClick={() => setShowApplicationModal(true)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p><strong>Paid Internships:</strong> DBHHC offers paid internship and practicum opportunities.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p><strong>Equal Opportunity:</strong> We prohibit discrimination based on age, race, sex, religion, national origin, marital status, sexual orientation, or disability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection showViewServices={false} />

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Internship/Practicum Application
              </h3>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-[600px] overflow-auto">
              <iframe
                src="https://form.jotform.com/252379303634155"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="auto"
                title="Internship Application Form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
