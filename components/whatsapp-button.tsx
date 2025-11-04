"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  position?: "bottom-right" | "bottom-left"
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola, me gustaría solicitar información sobre sus servicios de revestimiento industrial.",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Format phone number (remove spaces, dashes, and plus sign)
  const formattedPhone = phoneNumber.replace(/[\s\-+]/g, "")

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message)

  // WhatsApp URL (works for both web and mobile)
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`

  const positionClasses = {
    "bottom-right": "right-4 md:right-6",
    "bottom-left": "left-4 md:left-6",
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 md:bottom-6 ${positionClasses[position]} z-50 group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contactar por WhatsApp"
      >
        {/* Main Button */}
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

          {/* Button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center size-14 md:size-16 group-hover:scale-110">
            <MessageCircle className="size-6 md:size-7" />
          </div>

          {/* Notification Badge (Optional) */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">
            1
          </div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute ${position === "bottom-right" ? "right-full mr-3" : "left-full ml-3"} bottom-0 mb-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          } pointer-events-none`}
        >
          <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap shadow-xl">
            {"¿Necesitas ayuda? Escríbenos"}
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${position === "bottom-right" ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
            >
              <div
                className={`border-8 border-transparent ${position === "bottom-right" ? "border-l-gray-900" : "border-r-gray-900"}`}
              ></div>
            </div>
          </div>
        </div>
      </a>

      {/* Mobile-friendly style adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .animate-ping {
            animation-duration: 2s;
          }
        }
      `}</style>
    </>
  )
}
