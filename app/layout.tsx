import type React from "react"
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
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "utn9owtst6");
            `
          }}
        />

        {/* UTMify Config */}
        <Script id="pixel-config" strategy="beforeInteractive">
          {`
            window.pixelId = "682dffae44b8147a3883c0f";
            window.tiktokPixelId = "65c3e4a682a84c95c83125a5";
          `}
        </Script>

        {/* Load Tracking Pixels */}
        <Script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js" strategy="afterInteractive" />
        <Script src="https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js" strategy="afterInteractive" />

        {/* UTMify Passagem */}
        <Script 
          src="https://cdn.utmify.com.br/scripts/utms/latest.js" 
          data-utmify-prevent-sck="true" 
          data-utmify-prevent-subids="true" 
          strategy="afterInteractive" 
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
  generator: "v0.app",
}
