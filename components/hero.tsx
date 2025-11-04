import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { CheckCircle2, MapPin, Shield } from "lucide-react"

export default function Hero() {
  const bullets = ["Certificaciones internacionales", "+25 años de experiencia", "Garantía extendida"]
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 bg-blue-50 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-2 text-sm text-blue-700">
            <MapPin className="h-4 w-4" />
            <span>{"Sirviendo Latinoamérica"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {"Sistemas de Revestimiento "}
            <span className="block">
              {"Industrial de "}
              <span className="text-blue-600">{"Tanques"}</span>
            </span>
          </h1>
          <p className="text-muted-foreground mt-4">
            {
              "Protección avanzada para tanques industriales con tecnología americana de vanguardia. Soluciones confiables para toda Latinoamérica."
            }
          </p>

          <ul className="mt-5 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contacto">{"Solicitar Cotización"}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/servicios">{"Ver Servicios"}</Link>
            </Button>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-2xl border bg-white p-3 shadow-lg">
            <Image
              src="/images/technician.png"
              width={1200}
              height={800}
              alt="Técnico monitoreando sistemas industriales"
              className="rounded-xl object-cover w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-6">
            <div className="rounded-xl bg-blue-600 text-white shadow-lg px-5 py-4 flex items-center gap-3">
              <Shield className="h-5 w-5" />
              <div>
                <div className="font-semibold">{"500+"}</div>
                <div className="text-sm text-blue-100">{"Tanques Protegidos"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
