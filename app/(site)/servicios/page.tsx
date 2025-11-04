import type { Metadata } from "next"
import ServicesGrid from "@/components/services-grid"
import ProcessSection from "@/components/process-section"

export const metadata: Metadata = {
  title: "Servicios de Revestimiento y Mantenimiento Industrial | American Industrial",
  description:
    "Servicios especializados de revestimiento anticorrosivo, mantenimiento de tanques industriales e inspección técnica para México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador.",
  keywords: [
    "servicios revestimiento industrial",
    "mantenimiento tanques México",
    "anticorrosivo Colombia",
    "inspección técnica Brasil",
    "consultoría industrial Argentina",
    "protección tanques Chile",
    "revestimiento especializado Perú",
    "servicios industriales Ecuador",
    "NACE certificado",
    "ISO compliance",
  ],
  openGraph: {
    title: "Servicios Industriales Especializados - Latinoamérica",
    description:
      "Revestimiento anticorrosivo, mantenimiento preventivo e inspección especializada para toda Latinoamérica.",
    images: ["/og/services.png"],
  },
  alternates: { canonical: "/servicios" },
}

export default function ServiciosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{"Servicios"}</h1>
      <p className="text-muted-foreground max-w-3xl mb-10">
        {
          "Soluciones de protección y mantenimiento para tanques industriales, diseñadas para entornos de alta exigencia en toda Latinoamérica."
        }
      </p>
      <ServicesGrid />
      <div className="mt-12">
        <ProcessSection />
      </div>
    </div>
  )
}
