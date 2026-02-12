"use client"

import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'

export function HeroVideo() {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null)
  const speakerVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    // Start both videos
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch(console.error)
    }
    if (speakerVideoRef.current) {
      speakerVideoRef.current.play().catch(console.error)
    }
  }, [])

  const togglePlay = () => {
    if (backgroundVideoRef.current && speakerVideoRef.current) {
      if (isPlaying) {
        backgroundVideoRef.current.pause()
        speakerVideoRef.current.pause()
      } else {
        backgroundVideoRef.current.play()
        speakerVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (speakerVideoRef.current) {
      speakerVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Waterfall */}
      <video
        ref={backgroundVideoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/waterfall-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Speaker Video - with white background removed using mix-blend-mode */}
      <div className="absolute right-0 bottom-0 w-[40%] h-[80%] flex items-end justify-end pointer-events-none">
        <video
          ref={speakerVideoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="h-full w-auto object-contain"
          style={{ 
            mixBlendMode: 'multiply',
            filter: 'contrast(1.1) brightness(1.05)'
          }}
        >
          <source src="/assets/dabney-speaker.mp4" type="video/mp4" />
        </video>
      </div>

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
