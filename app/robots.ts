import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl()
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design"], // keep reference page out of search
    },
    sitemap: baseUrl ? `${baseUrl}/sitemap.xml` : "/sitemap.xml",
  }
}
