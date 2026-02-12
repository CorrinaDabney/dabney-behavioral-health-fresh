"use client"

import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Single composited hero video with person and waterfall background */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/dabney-hero-composited.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for text readability - reduced opacity to keep person visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            <span className="block text-white">Dabney Behavioral Health</span>
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 drop-shadow max-w-2xl mx-auto">
            Compassionate, inclusive mental health care tailored to your unique journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link href="/schedule">
                New Patient Forms
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/clinical-services">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleMute}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Toggle audio"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <button
          onClick={togglePlay}
          className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Toggle video playback"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </section>
  )
}
