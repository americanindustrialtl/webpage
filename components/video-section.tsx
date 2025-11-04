import VideoPlayer from "./video-player"

interface VideoSectionProps {
  title: string
  description: string
  videoSrc: string
  posterSrc?: string
  reverse?: boolean
}

export default function VideoSection({ title, description, videoSrc, posterSrc, reverse = false }: VideoSectionProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
      <div className={reverse ? "lg:col-start-2" : ""}>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className={reverse ? "lg:col-start-1" : ""}>
        <div className="relative">
          <VideoPlayer
            src={videoSrc}
            poster={posterSrc}
            title={title}
            className="aspect-video shadow-2xl"
            lazy={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  )
}
