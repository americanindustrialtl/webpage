import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"

// API endpoint to upload PDF via web interface (optional)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("pdf") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "File must be a PDF" }, { status: 400 })
    }

    const blob = await put("durachem-500-datasheet.pdf", file, {
      access: "public",
      contentType: "application/pdf",
    })

    return NextResponse.json({
      success: true,
      url: blob.url,
      message: "PDF uploaded successfully",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
