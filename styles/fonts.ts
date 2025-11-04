import { Inter, Roboto_Mono } from 'next/font/google'

// Define variable fonts once, then re-use across the app [^1]
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})
