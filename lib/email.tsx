// Email utility functions
import { Resend } from "resend"

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone: string
  country?: string
  tank?: string
  desc: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Nueva Solicitud de Cotización</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1f2937; margin-top: 0;">Información del Cliente</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Nombre:</strong>
            <p style="margin: 5px 0; color: #1f2937;">${data.name}</p>
          </div>
          
          ${
            data.company
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Empresa:</strong>
            <p style="margin: 5px 0; color: #1f2937;">${data.company}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Email:</strong>
            <p style="margin: 5px 0; color: #1f2937;">
              <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Teléfono:</strong>
            <p style="margin: 5px 0; color: #1f2937;">${data.phone}</p>
          </div>
          
          ${
            data.country
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">País:</strong>
            <p style="margin: 5px 0; color: #1f2937;">${data.country}</p>
          </div>
          `
              : ""
          }
          
          ${
            data.tank
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Tipo de Tanque:</strong>
            <p style="margin: 5px 0; color: #1f2937;">${data.tank}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563;">Descripción del Proyecto:</strong>
            <p style="margin: 5px 0; color: #1f2937; white-space: pre-wrap;">${data.desc}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Enviado desde: American Industrial - Tank Lining Systems<br>
              Fecha: ${new Date().toLocaleString("es", { timeZone: "America/Mexico_City" })}
            </p>
          </div>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: "American Industrial <onboarding@resend.dev>", // Resend verified domain
      to: process.env.CONTACT_EMAIL || "your-email@gmail.com",
      replyTo: data.email, // Client's email for easy reply
      subject: `Nueva Cotización: ${data.name} - ${data.company || "Sin empresa"}`,
      html: emailContent,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// Send confirmation email to the client
export async function sendConfirmationEmail(clientEmail: string, clientName: string) {
  try {
    const confirmationContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">¡Gracias por Contactarnos!</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <p style="color: #1f2937; font-size: 16px;">Hola ${clientName},</p>
          
          <p style="color: #1f2937; line-height: 1.6;">
            Hemos recibido su solicitud de cotización y nuestro equipo técnico la está revisando.
          </p>
          
          <p style="color: #1f2937; line-height: 1.6;">
            Nos pondremos en contacto con usted en las próximas <strong>24 horas</strong> para 
            discutir los detalles de su proyecto y brindarle una cotización personalizada.
          </p>
          
          <div style="background: white; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
            <p style="color: #1f2937; margin: 0; line-height: 1.6;">
              <strong>¿Necesita asistencia inmediata?</strong><br>
              Contáctenos directamente:<br>
              📞 +1 (555) 123-4567<br>
              📧 info@aitls.com
            </p>
          </div>
          
          <p style="color: #1f2937; line-height: 1.6;">
            Saludos cordiales,<br>
            <strong>El Equipo de American Industrial</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              American Industrial - Tank Lining Systems<br>
              Sirviendo Latinoamérica con tecnología americana certificada
            </p>
          </div>
        </div>
      </div>
    `

    await resend.emails.send({
      from: "American Industrial <onboarding@resend.dev>",
      to: clientEmail,
      subject: "Confirmación de Solicitud - American Industrial",
      html: confirmationContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    return { success: false }
  }
}
