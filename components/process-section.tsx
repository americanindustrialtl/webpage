import Image from "next/image"

const steps = [
  {
    n: 1,
    title: "Evaluación y Preparación",
    desc: "Inspección detallada y preparación de superficies según estándares NACE.",
  },
  {
    n: 2,
    title: "Aplicación Técnica",
    desc: "Aplicación profesional con equipos especializados y personal certificado.",
  },
  {
    n: 3,
    title: "Control de Calidad",
    desc: "Inspección final y documentación completa del proyecto.",
  },
]

export default function ProcessSection() {
  return (
    <div className="rounded-2xl border bg-card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {"Proceso de Aplicación Certificado"}
          </h2>
          <ol className="space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="relative pl-10">
                <span className="absolute left-0 top-0 size-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                  {s.n}
                </span>
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Image
            src="/images/welding.png"
            width={1200}
            height={800}
            alt="Soldador realizando trabajo especializado con control de calidad"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
