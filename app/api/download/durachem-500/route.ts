import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Track the download (optional analytics)
    console.log("DURACHEM 500 datasheet download requested at:", new Date().toISOString())

    // Use the specific blob storage URL
    const pdfUrl = "https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica"

    // Redirect to the blob URL for direct download
    return NextResponse.redirect(pdfUrl)
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ error: "Download failed" }, { status: 500 })
  }
}
