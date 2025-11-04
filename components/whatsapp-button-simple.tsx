"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonSimpleProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButtonSimple({
  phoneNumber,
  message = "Hola, me gustaría obtener más información.",
}: WhatsAppButtonSimpleProps) {
  const formattedPhone = phoneNumber.replace(/[\s\-+]/g, "")
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center size-14 md:size-16 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-6 md:size-7" />
      <span className="sr-only">Contactar por WhatsApp</span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </a>
  )
}
