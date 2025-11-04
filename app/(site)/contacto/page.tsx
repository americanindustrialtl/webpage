import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contáctanos - Cotización Gratuita | American Industrial",
  description:
    "Solicite una cotización gratuita para su proyecto de revestimiento industrial. Servicio técnico especializado para México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador.",
  keywords: [
    "cotización revestimiento industrial",
    "contacto técnico especializado",
    "servicio México Colombia Brasil",
    "soporte Argentina Chile Perú Ecuador",
    "consulta gratuita tanques industriales",
    "asesoría técnica Latinoamérica",
    "respuesta 24 horas",
  ],
  openGraph: {
    title: "Contacto - Asesoría Técnica Gratuita en Latinoamérica",
    description:
      "Solicite una cotización o hable con nuestro equipo técnico. Respuesta garantizada en menos de 24 horas.",
    images: ["/og/contact.png"],
  },
  alternates: { canonical: "/contacto" },
}

export default function ContactoPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contáctanos - American Industrial",
    url: "https://american-industrial.example/contacto",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "sales",
      areaServed: ["Mexico", "Colombia", "Brasil", "Argentina", "Chile", "Peru", "Ecuador"],
      availableLanguage: ["es", "en"],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{"Contáctanos Hoy"}</h1>
          <p className="text-muted-foreground">
            {
              "Estamos listos para evaluar sus necesidades y brindarle la mejor solución de revestimiento industrial para su proyecto en cualquier país de Latinoamérica."
            }
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold mb-3">{"Contacto Directo"}</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>{"Línea Principal: +1 (555) 123-4567"}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>{"Emergencias 24/7: +1 (555) 987-6543"}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>{"Ventas: sales@aitls.com"}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>{"Soporte Técnico: support@aitls.com"}</span>
                </p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold mb-3">{"Oficinas Regionales"}</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>{"México — Ciudad de México, CDMX"}</li>
                <li>{"Colombia — Bogotá, Cundinamarca"}</li>
                <li>{"Brasil — São Paulo"}</li>
                <li>{"Argentina — Buenos Aires"}</li>
                <li>{"Chile — Santiago"}</li>
                <li>{"Perú — Lima"}</li>
                <li>{"Ecuador — Quito"}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
