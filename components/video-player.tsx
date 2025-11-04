"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "./ui/button"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  lazy?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  title,
  className = "",
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  lazy = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(!lazy)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [lazy])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  return (
    <div className={`relative group ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-xl"
        poster={poster}
        muted={isMuted}
        loop={loop}
        playsInline
        preload={lazy ? "none" : "metadata"}
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
        aria-label={title}
      >
        {shouldLoad && (
          <>
            <source src={`${src}.webm`} type="video/webm" />
            <source src={`${src}.mp4`} type="video/mp4" />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* Loading State */}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Custom Controls */}
      {controls && isLoaded && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlay}
              className="bg-white/90 hover:bg-white border-0 shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
              className="bg-white/90 hover:bg-white border-0 shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white border-0 shadow-lg size-16"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  )
}
