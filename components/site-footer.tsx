import Link from "next/link"
import { Mail, MapPin, Phone, Shield } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1220] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Shield className="size-4 text-white" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{"American Industrial"}</div>
              <div className="text-xs text-white/70">{"Tank Lining Systems"}</div>
            </div>
          </div>
          <p className="text-white/70 text-sm max-w-md">
            {
              "Líderes en soluciones de revestimiento industrial para Latinoamérica. Tecnología americana certificada con más de 25 años de experiencia."
            }
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-white/80" />
              <span>{"+1 (555) 123-4567"}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-white/80" />
              <span>{"info@aitls.com"}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-white/80" />
              <span>{"Sirviendo toda Latinoamérica"}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">{"Servicios"}</h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>{"Revestimiento Anticorrosivo"}</li>
            <li>{"Tanques Industriales"}</li>
            <li>{"Mantenimiento Preventivo"}</li>
            <li>{"Consultoría Técnica"}</li>
            <li>{"Inspección Especializada"}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">{"Mercados"}</h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>{"México"}</li>
            <li>{"Colombia"}</li>
            <li>{"Brasil"}</li>
            <li>{"Argentina"}</li>
            <li>{"Chile"}</li>
            <li>{"Perú"}</li>
            <li>{"Ecuador"}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            {"© 2025 American Industrial Tank Lining Systems. Todos los derechos reservados."}
          </p>
          <nav className="flex items-center gap-4 text-xs">
            <Link href="#" className="text-white/70 hover:text-white">
              {"Política de Privacidad"}
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              {"Términos de Servicio"}
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              {"Certificaciones"}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
