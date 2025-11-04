// Server-only helper to compute the public site URL in all Vercel environments.
// Priority: NEXT_PUBLIC_SITE_URL (set this in Production) -> VERCEL_URL (Preview/Prod) -> localhost.
export function getSiteUrl(): string {
  const fromEnv = (process.env.NEXT_PUBLIC_SITE_URL || "").trim()
  if (fromEnv) return normalizeUrl(fromEnv)

  const vercelUrl = (process.env.VERCEL_URL || "").trim()
  if (vercelUrl) return normalizeUrl(`https://${vercelUrl}`)

  // In local/preview without envs, return empty to allow relative URLs without throwing
  return ""
}

function normalizeUrl(url: string) {
  // Add protocol if missing
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`
  }
  // Remove trailing slash
  return url.replace(/\/+$/, "")
}
