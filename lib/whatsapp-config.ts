// WhatsApp configuration and utilities

export const whatsappConfig = {
  // Your WhatsApp business phone number (international format, no + or spaces)
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "1234567890",

  // Default messages for different pages
  messages: {
    default: "Hola, me gustaría solicitar información sobre sus servicios de revestimiento industrial.",
    servicios: "Hola, quisiera conocer más sobre sus servicios de revestimiento industrial.",
    productos: "Hola, me interesa obtener información sobre sus productos de revestimiento.",
    cotizacion: "Hola, me gustaría solicitar una cotización para un proyecto de revestimiento industrial.",
    soporte: "Hola, necesito asistencia técnica con un proyecto de revestimiento.",
  },

  // Format phone number for WhatsApp (remove all non-numeric characters)
  formatPhone: (phone: string): string => {
    return phone.replace(/[\s\-+()]/g, "")
  },

  // Generate WhatsApp URL
  generateUrl: (phone: string, message: string): string => {
    const formattedPhone = whatsappConfig.formatPhone(phone)
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`
  },
}

export default whatsappConfig
