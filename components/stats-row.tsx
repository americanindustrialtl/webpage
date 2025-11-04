import { BadgeCheck, Calendar, Globe2, Smile } from "lucide-react"

const stats = [
  { icon: Calendar, value: "25+", label: "Años de Experiencia" },
  { icon: Globe2, value: "15", label: "Países Atendidos" },
  { icon: Smile, value: "500+", label: "Clientes Satisfechos" },
  { icon: BadgeCheck, value: "ISO", label: "Certificaciones" },
]

export default function StatsRow() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border bg-card p-6 text-center shadow-sm">
          <div className="size-10 rounded-full mx-auto bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
            <s.icon className="size-5" aria-hidden="true" />
          </div>
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
