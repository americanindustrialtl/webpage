import type { Metadata } from "next"
import Image from "next/image"
import StatsRow from "@/components/stats-row"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros - Líderes en Revestimiento Industrial | American Industrial",
  description:
    "Más de 25 años brindando protección industrial con estándares internacionales. Sirviendo México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador con tecnología americana certificada.",
  keywords: [
    "empresa revestimiento industrial",
    "25 años experiencia",
    "tecnología americana",
    "Latinoamérica industrial",
    "México Colombia Brasil",
    "Argentina Chile Perú Ecuador",
    "estándares internacionales",
    "protección industrial certificada",
  ],
  openGraph: {
    title: "25 Años de Experiencia en Revestimiento Industrial - Latinoamérica",
    description:
      "Empresa líder con más de 25 años sirviendo al mercado latinoamericano con tecnología americana certificada.",
    images: ["/og/about.png"],
  },
  alternates: { canonical: "/nosotros" },
}

export default function NosotrosPage() {
  const bullets = [
    "Tecnología americana certificada",
    "Personal técnico especializado",
    "Soporte post-venta garantizado",
    "Presencia consolidada en 7 países latinoamericanos",
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {"Líderes en Protección Industrial para Latinoamérica"}
          </h1>
          <p className="text-muted-foreground mb-4">
            {
              "American Industrial Tank Lining Systems es una empresa especializada en soluciones de revestimiento industrial con más de 25 años de experiencia sirviendo al mercado de México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador."
            }
          </p>
          <p className="text-muted-foreground mb-6">
            {
              "Nuestro compromiso es brindar tecnología de vanguardia adaptada a las necesidades de la industria latinoamericana, garantizando la máxima protección y durabilidad de sus activos industriales."
            }
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="rounded-xl border bg-white p-2 shadow-sm">
            <Image
              src="/images/warehouse.png"
              width={1200}
              height={800}
              alt="Almacén industrial mostrando estándares de calidad certificados"
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
            <div className="px-4 py-3">
              <p className="font-semibold">{"Calidad Certificada"}</p>
              <p className="text-sm text-muted-foreground">{"Estándares Internacionales"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <StatsRow />
      </div>
    </div>
  )
}
