import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Durachem 500 Series - Soluciones de Revestimiento Industrial",
  description: "Descubra las características y beneficios de Durachem 500 Series para revestimiento industrial.",
}

const Durachem500Page = () => {
  return (
    <div className="min-h-screen bg-blue-50/30">
      <div className="relative">
        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
          <h1 className="text-3xl font-bold mb-4">Durachem 500 Series</h1>
          <p className="text-lg mb-8">
            Durachem 500 Series es una solución de revestimiento industrial de alta calidad diseñada para resistir a las
            condiciones más difíciles.
          </p>
          {/* Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-4">Resistencia Química Superior</h2>
              <p className="text-base">
                Durachem 500 Series está formulado para resistir a una amplia gama de productos químicos, lo que lo hace
                ideal para aplicaciones industriales.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-4">Durabilidad Extrema</h2>
              <p className="text-base">
                Con una vida útil de hasta 10 años, Durachem 500 Series ofrece una durabilidad excepcional que reduce
                los costos de mantenimiento a largo plazo.
              </p>
            </div>
            {/* Add more key features here */}
          </div>

          {/* Chemical Resistance Section */}
          <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 bg-blue-700 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Resistencia a Ácidos</h2>
                </div>
                <p className="text-base">
                  Durachem 500 Series resistirá a una variedad de ácidos, incluyendo ácidos sulfúricos y ácidos
                  cítricos.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 bg-blue-700 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Resistencia a Alcalinos</h2>
                </div>
                <p className="text-base">
                  También es resistente a una amplia gama de productos alcalinos, garantizando la integridad de su
                  revestimiento.
                </p>
              </div>
              {/* Add more chemical resistance features here */}
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 border-b border-gray-200">Característica</th>
                  <th className="p-4 border-b border-gray-200">Durachem 500 Series</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Resistencia Química</td>
                  <td className="p-4">Excelente</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Durabilidad</td>
                  <td className="p-4">Hasta 10 años</td>
                </tr>
                {/* Add more table rows here */}
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesita Durachem 500 Series para su proyecto?</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Nuestro equipo técnico especializado puede ayudarle a determinar si Durachem 500 Series es la solución
                adecuada para sus necesidades específicas de revestimiento industrial en cualquier país de
                Latinoamérica.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                Contactar a un Asesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Durachem500Page
