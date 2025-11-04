import { put } from "@vercel/blob"

// Upload the DURACHEM 500 PDF to Vercel Blob
export async function uploadDurachem500PDF(pdfBuffer: ArrayBuffer) {
  try {
    const blob = await put("durachem-500-datasheet.pdf", pdfBuffer, {
      access: "public",
      contentType: "application/pdf",
    })

    console.log("PDF uploaded successfully:", blob.url)
    return blob.url
  } catch (error) {
    console.error("Failed to upload PDF:", error)
    throw error
  }
}

// Get the PDF URL from Blob Storage
export function getDurachem500PDFUrl(): string {
  return "https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica"
}

// Optional: Function to get download URL with proper headers
export function getDurachem500DownloadUrl(): string {
  const baseUrl = "https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica"

  // Add download parameter to force download instead of opening in browser
  return `${baseUrl}?download=1`
}
