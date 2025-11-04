"use server"

import { sendContactEmail, sendConfirmationEmail } from "@/lib/email"

export async function submitLead(prevState: any, formData: FormData) {
  // Basic spam check: ignore if honeypot field was filled.
  if ((formData.get("website") as string)?.trim()) {
    return { ok: false, message: "Solicitud bloqueada por verificación automática." }
  }

  // Minimal required validation
  const required = ["name", "email", "phone", "desc"]
  for (const key of required) {
    if (!formData.get(key)) {
      return { ok: false, message: "Por favor complete los campos obligatorios." }
    }
  }

  // Email validation
  const email = formData.get("email") as string
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { ok: false, message: "Por favor ingrese un email válido." }
  }

  // Prepare email data
  const emailData = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: email,
    phone: formData.get("phone") as string,
    country: formData.get("country") as string,
    tank: formData.get("tank") as string,
    desc: formData.get("desc") as string,
  }

  try {
    // Send email to your Gmail
    const result = await sendContactEmail(emailData)

    if (!result.success) {
      return {
        ok: false,
        message: "Hubo un error al enviar su solicitud. Por favor intente nuevamente o contáctenos directamente.",
      }
    }

    // Send confirmation email to client (optional)
    await sendConfirmationEmail(emailData.email, emailData.name)

    // Log for backup (optional)
    console.log("New lead:", {
      ...emailData,
      submittedAt: new Date().toISOString(),
    })

    return {
      ok: true,
      message: "¡Gracias! Hemos recibido su solicitud. Nos pondremos en contacto en 24 horas.",
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return {
      ok: false,
      message: "Error al procesar su solicitud. Por favor intente nuevamente.",
    }
  }
}
