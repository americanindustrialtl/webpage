import { CheckCircle2, Factory, Shield, Wrench, Users } from "lucide-react"

const services = [
  {
    title: "Revestimiento Anticorrosivo",
    icon: Shield,
    bullets: ["Epóxico de alta resistencia", "Poliuretano especializado", "Sistemas multicapa"],
  },
  {
    title: "Tanques Industriales",
    icon: Factory,
    bullets: ["Petroquímicos", "Agua potable", "Químicos industriales"],
  },
  {
    title: "Mantenimiento Preventivo",
    icon: Wrench,
    bullets: ["Inspección especializada", "Reparaciones menores", "Reportes técnicos"],
  },
  {
    title: "Consultoría Técnica",
    icon: Users,
    bullets: ["Análisis de condiciones", "Especificaciones técnicas", "Capacitación"],
  },
]

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <article key={s.title} className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
            <s.icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="font-semibold mb-2">{s.title}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
