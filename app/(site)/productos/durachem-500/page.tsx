import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Download,
  CheckCircle2,
  Shield,
  Zap,
  Droplets,
  Thermometer,
  Award,
  Clock,
  Beaker,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Durachem 500 Series - Poliurea Premium para Tanques Industriales | American Industrial",
  description:
    "Sistema elastomérico de poliurea pura, cero VOCs, 100% sólidos. Resistencia química superior para tanques industriales. Disponible en México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador.",
  keywords: [
    "Durachem 500 Series",
    "poliurea tanques industriales",
    "revestimiento cero VOCs México",
    "poliurea Colombia Brasil",
    "sistema elastomérico Argentina",
    "protección química Chile Perú",
    "tanques industriales Ecuador",
    "resistencia química ASTM D543",
    "100% sólidos",
    "curado rápido industrial",
    "Latinoamérica",
  ],
  openGraph: {
    title: "Durachem 500 Series - Revestimiento Poliurea Premium para Latinoamérica",
    description:
      "Sistema de poliurea pura de alto rendimiento con resistencia química excepcional. Disponible en toda Latinoamérica.",
    images: ["/og/durachem-500.png"],
  },
  alternates: { canonical: "/productos/durachem-500" },
}

const keyFeatures = [
  {
    icon: Shield,
    title: "Cero VOCs",
    description: "100% sólidos, sin compuestos orgánicos volátiles",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Curado Rápido",
    description: "Tiempo de gel: 2-5 segundos, libre de pegajosidad: 5-10 segundos",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Droplets,
    title: "Resistencia Química",
    description: "Probado contra más de 35 químicos según ASTM D543",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Thermometer,
    title: "Amplio Rango Térmico",
    description: "Aplicación entre 140°F-160°F para óptimo rendimiento",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
]

const physicalProperties = [
  { property: "Dureza Shore D", value: "63 ± 1", standard: "ASTM D2240" },
  { property: "Resistencia a la Tracción", value: "3,250 psi", standard: "ASTM D412" },
  { property: "Elongación", value: "148%", standard: "ASTM D412" },
  { property: "Resistencia al Desgarro", value: "708 pli", standard: "ASTM D624" },
  { property: "Módulo de Flexión", value: "0.055 msi", standard: "ASTM D790" },
  { property: "Resistencia al Impacto", value: "320 in. lbs", standard: "ASTM D2794" },
]

const certifications = [
  {
    title: "FDA 21CFR 175.300(c)",
    description: "Contacto con alimentos Tipo I",
    icon: Award,
  },
  {
    title: "NSF/ANSI 61 Sección 5",
    description: "Componentes de sistemas de agua potable",
    icon: Droplets,
  },
  {
    title: "FMVSS 302",
    description: "Inflamabilidad de materiales interiores",
    icon: Shield,
  },
]

const technicalSpecs = [
  { label: "Proporción de Mezcla", value: "1A:1B por volumen" },
  { label: "Tiempo de Gel", value: "2 a 5 segundos" },
  { label: "Densidad Lado A", value: "9.6 ± 0.2 lbs/gal" },
  { label: "Densidad Lado B", value: "8.30 ± 0.2 lbs/gal" },
  { label: "Viscosidad A", value: "1000 ± 200 cP" },
  { label: "Viscosidad B", value: "450 ± 150 cP" },
]

const applicationParams = [
  { label: "Calentador Bloque Iso A", value: "140°F - 160°F" },
  { label: "Calentador Bloque Resina B", value: "140°F - 160°F" },
  { label: "Mangueras (Iso y Poliol)", value: "140°F - 160°F" },
  { label: "Presión Hidráulica", value: "2,000 - 2,500 psi mínimo" },
  { label: "Preacondicionamiento", value: "70°F a 90°F antes de aplicación" },
]

export default function Durachem500Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Breadcrumb */}
      

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full w-fit">
              <Shield className="h-4 w-4" />
              <span>Tecnología AmTech Coatings</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Durachem 500
                <span className="block text-blue-600">Series</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Sistema elastomérico de poliurea pura de dos componentes, alto rendimiento, cero VOCs y 100% sólidos
                para protección superior de tanques industriales en toda Latinoamérica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 bg-transparent">
                <a
                  href="https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Ficha Técnica
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 px-2 py-2">
              <Image
                src="/images/durachem-500-application.png"
                width={600}
                height={400}
                alt="Aplicación de Durachem 500 Series en tanque industrial"
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología avanzada diseñada para ofrecer la máxima protección y durabilidad
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`size-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="size-7" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Especificaciones Técnicas</h2>
            <p className="text-xl text-gray-600">Datos técnicos precisos para aplicación profesional</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Specs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Beaker className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Composición</h3>
              </div>
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-700">{spec.label}:</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Parameters */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                  <Thermometer className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Parámetros de Aplicación</h3>
              </div>
              <div className="space-y-4">
                {applicationParams.map((param, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-700">{param.label}:</span>
                    <span className="text-gray-900 font-semibold">{param.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Properties Table */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Propiedades Físicas</h2>
          <p className="text-xl text-gray-600">Rendimiento probado según estándares internacionales</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="text-left p-6 font-bold text-lg">Propiedad</th>
                  <th className="text-left p-6 font-bold text-lg">Valor</th>
                  <th className="text-left p-6 font-bold text-lg">Estándar</th>
                </tr>
              </thead>
              <tbody>
                {physicalProperties.map((prop, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-900">{prop.property}</td>
                    <td className="p-6 font-bold text-blue-600 text-lg">{prop.value}</td>
                    <td className="p-6 text-gray-600">{prop.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certificaciones y Cumplimiento</h2>
            <p className="text-xl text-gray-600">Cumple con los más altos estándares de calidad y seguridad</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="size-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="size-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chemical Resistance */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Beaker className="size-6" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold">Resistencia Química Probada</h3>
              </div>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Durachem 500 Series ha sido probado contra más de 35 químicos diferentes según el estándar ASTM D543
                para inmersión en fluidos durante 7 días.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Ácidos y Bases</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Ácido Acético</li>
                  <li>• Ácido Clorhídrico</li>
                  <li>• Ácido Nítrico</li>
                  <li>• Hidróxido de Sodio</li>
                  <li>• Amoníaco</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Combustibles</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Diesel</li>
                  <li>• Queroseno</li>
                  <li>• Aceite Automotriz</li>
                  <li>• Petróleo Crudo</li>
                  <li>• Gasolina</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-200">Otros</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Agua de Mar</li>
                  <li>• Soluciones Salinas</li>
                  <li>• Productos Alimenticios</li>
                  <li>• Cloruro de Calcio</li>
                  <li>• Sulfatos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage and Safety */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Almacenamiento y Seguridad</h2>
            <p className="text-xl text-gray-600">Información esencial para el manejo seguro del producto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Almacenamiento</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vida útil: 12 meses desde la fecha de fabricación</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Temperatura de almacenamiento: 60°F a 100°F</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Evitar condiciones de alta humedad</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mantener sellado herméticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Almacenar tambores sobre pallets</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Seguridad y Manejo</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consultar Hojas de Datos de Seguridad (SDS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Usar equipo de protección personal adecuado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limpiar equipo inmediatamente después del uso</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Usar limpiadores grado uretano ambientalmente seguros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Seguir regulaciones locales para disposición</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesita Durachem 500 Series para su proyecto?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo técnico especializado puede ayudarle a determinar si Durachem 500 Series es la solución
              adecuada para sus necesidades específicas de revestimiento industrial en cualquier país de Latinoamérica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/contacto">Consulta Técnica Gratuita</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold"
              >
                <a
                  href="https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Ficha Completa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
