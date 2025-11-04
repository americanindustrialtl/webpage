import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Referencias de diseño (no index)",
  robots: { index: false, follow: false },
}

export default function DesignRefs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-bold">{"Referencias de diseño"}</h1>
      <p className="text-muted-foreground">{"Imágenes adjuntas como referencia visual."}</p>
      <div className="grid md:grid-cols-2 gap-6">
        <Image src="/reference/hero.png" width={1500} height={740} alt="Referencia: Hero" className="rounded-lg border" />
        <Image src="/reference/services.png" width={1500} height={740} alt="Referencia: Servicios" className="rounded-lg border" />
        <Image src="/reference/about.png" width={1500} height={740} alt="Referencia: Nosotros" className="rounded-lg border" />
        <Image src="/reference/mission.png" width={1500} height={740} alt="Referencia: Misión + Contacto título" className="rounded-lg border" />
        <Image src="/reference/contact.png" width={1500} height={740} alt="Referencia: Contacto" className="rounded-lg border" />
        <Image src="/reference/footer.png" width={1500} height={740} alt="Referencia: Footer" className="rounded-lg border" />
      </div>
    </div>
  )
}
