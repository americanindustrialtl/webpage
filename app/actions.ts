"use server"

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

  // In a real app, send to your CRM/email provider here
  // Example payload:
  const payload = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    country: formData.get("country"),
    tank: formData.get("tank"),
    desc: formData.get("desc"),
    submittedAt: new Date().toISOString(),
  }

  console.log("New lead:", payload)

  // Return message for UI
  return { ok: true, message: "¡Gracias! Hemos recibido su solicitud. Nos pondremos en contacto en 24 horas." }
}
