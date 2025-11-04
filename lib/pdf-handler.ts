import { put } from "@vercel/blob"

// Upload PDF to Vercel Blob (run this once)
export async function uploadPDF() {
  const file = new File(
    [
      /* your PDF buffer */
    ],
    "durachem-500-datasheet.pdf",
    {
      type: "application/pdf",
    },
  )

  const blob = await put("durachem-500-datasheet.pdf", file, {
    access: "public",
  })

  return blob.url // Use this URL for downloads
}
