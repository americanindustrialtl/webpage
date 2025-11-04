import { uploadDurachem500PDF } from "../lib/pdf-storage"

// Script to upload the PDF - run this once after deployment
async function uploadPDF() {
  try {
    // You'll need to provide the PDF buffer here
    // Option 1: Read from a local file
    // const fs = require('fs')
    // const pdfBuffer = fs.readFileSync('./durachem-500-datasheet.pdf')

    // Option 2: Fetch from the existing URL if you have it
    const response = await fetch(process.env.DURACHEM_500_PDF_URL || "")
    if (!response.ok) throw new Error("Failed to fetch PDF")
    const pdfBuffer = await response.arrayBuffer()

    const blobUrl = await uploadDurachem500PDF(pdfBuffer)
    console.log("✅ PDF uploaded successfully!")
    console.log("🔗 Blob URL:", blobUrl)
    console.log("📝 Set DURACHEM_500_PDF_URL to:", blobUrl)
  } catch (error) {
    console.error("❌ Upload failed:", error)
  }
}

// Run the upload
uploadPDF()
