import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const paths = ["", "/servicios", "/nosotros", "/contacto", "/productos/durachem-500"]

  const items = paths.map((path) => {
    const url = path === "" ? "/" : path
    return {
      url: baseUrl ? `${baseUrl}${url}` : url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/productos/durachem-500" ? 0.8 : 0.7,
    }
  })

  return items
}
