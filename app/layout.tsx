import type React from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-[#0B1120]">
      <head>
        <GoogleTagManager gtmId="GTM-WQ3KMTB3" />

        {/* EasyTracker */}
        <Script
          src="https://etr.tindercheck.xyz/assets/easyt.js"
          strategy="beforeInteractive"
          async
        />
        
        <Script
          type="text/javascript"
          src="https://app.monetizze.com.br/upsell_incorporado.php"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-[#0B1120]">{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Infidelity Finder - Exposed Hidden Profiles",
  description: "Check if your partner is hiding something on social media and dating apps.",
  generator: "v0.app",
}
