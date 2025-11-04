export default function MissionBanner() {
  return (
    <div className="rounded-2xl bg-blue-600 text-white px-6 py-10 text-center shadow-sm">
      <h3 className="text-2xl md:text-3xl font-semibold mb-3">{"Nuestra Misión"}</h3>
      <p className="max-w-3xl mx-auto text-blue-100">
        {
          "Proteger los activos industriales más críticos de Latinoamérica mediante tecnología americana de revestimiento de vanguardia, brindando soluciones confiables, duraderas y adaptadas a cada necesidad específica."
        }
      </p>
    </div>
  )
}
