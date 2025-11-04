import type React from "react"
import type { Metadata } from "next"
import { inter, robotoMono } from "../styles/fonts"
import "./globals.css"
import { getSiteUrl } from "@/lib/site"
import WhatsAppButton from "@/components/whatsapp-button"

function getSafeMetadataBase() {
  try {
    const url =
      process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
        ? process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"
    if (!/^https?:\/\//i.test(url)) return undefined
    return new URL(url)
  } catch {
    return undefined
  }
}

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: getSafeMetadataBase(),
  title: {
    default: "American Industrial | Tank Lining Systems",
    template: "%s | American Industrial",
  },
  description: "Líderes en protección anticorrosiva para tanques industriales en Latinoamérica.",
  openGraph: {
    type: "website",
    locale: "es",
    url: siteUrl,
    siteName: "American Industrial - Tank Lining Systems",
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-dvh antialiased">
        {children}
        <WhatsAppButton
          phoneNumber="+13477947390"
          message="Hola, me gustaría solicitar información sobre sus servicios de revestimiento industrial."
          position="bottom-right"
        />
      </body>
    </html>
  )
}
