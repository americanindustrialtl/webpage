import type { ReactNode } from "react"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Analytics } from "@vercel/analytics/next"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1 bg-white">{children}</main>
      <SiteFooter />
      <Analytics />
    </div>
  )
}
