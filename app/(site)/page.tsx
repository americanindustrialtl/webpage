import type { Metadata } from "next"
import Hero from "@/components/hero"
import ServicesGrid from "@/components/services-grid"
import ProcessSection from "@/components/process-section"
import StatsRow from "@/components/stats-row"
import MissionBanner from "@/components/mission-banner"

export const metadata: Metadata = {
  title: "Sistemas de Revestimiento Industrial de Tanques | American Industrial",
  description:
    "Líderes en protección anticorrosiva para tanques industriales en México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador. Tecnología americana certificada.",
  keywords: [
    "revestimiento de tanques",
    "anticorrosivo México",
    "tanques industriales Colombia",
    "mantenimiento industrial Brasil",
    "consultoría técnica Chile",
    "protección tanques Argentina",
    "revestimiento Perú",
    "sistemas industriales Ecuador",
    "NACE",
    "ISO",
    "Latinoamérica",
  ],
  openGraph: {
    title: "Sistemas de Revestimiento Industrial de Tanques - Latinoamérica",
    description:
      "Protección avanzada para tanques industriales con tecnología americana certificada. Sirviendo México, Colombia, Brasil, Argentina, Chile, Perú y Ecuador.",
    images: ["/og/home.png"],
    locale: "es",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "American Industrial - Tank Lining Systems",
    url: "https://american-industrial.example",
    logo: "/icon.png",
    sameAs: ["https://american-industrial.example"],
    areaServed: ["Mexico", "Colombia", "Brasil", "Argentina", "Chile", "Perú", "Ecuador"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
        availableLanguage: ["es", "en"],
        areaServed: "Latin America",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{"Nuestros Servicios Especializados"}</h2>
            <p className="text-muted-foreground mt-3">
              {
                "Ofrecemos soluciones integrales de revestimiento industrial con tecnología americana para proteger sus activos más valiosos."
              }
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <ProcessSection />
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <MissionBanner />
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <StatsRow />
        </div>
      </section>
    </>
  )
}
