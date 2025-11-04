// Utility functions for video optimization

export interface VideoConfig {
  src: string
  poster?: string
  title: string
  lazy?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

// Preload critical videos
export function preloadVideo(src: string) {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "video"
  link.href = src
  document.head.appendChild(link)
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Get optimal video format based on browser support
export function getOptimalVideoFormat(baseSrc: string): string {
  const video = document.createElement("video")

  if (video.canPlayType('video/webm; codecs="vp9"')) {
    return `${baseSrc}.webm`
  }

  return `${baseSrc}.mp4`
}

// Video lazy loading with Intersection Observer
export function createVideoObserver(callback: (entry: IntersectionObserverEntry) => void): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback)
    },
    {
      threshold: 0.1,
      rootMargin: "50px 0px",
    },
  )
}
