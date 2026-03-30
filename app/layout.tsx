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

        {/* UTMify Config & Pixel */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
             __html: `
              window.pixelId = "682dffae44b8147a3883c0f";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);

              window.tiktokPixelId = "65c3e4a682a84c95c83125a5";
              var b = document.createElement("script");
              b.setAttribute("async", "");
              b.setAttribute("defer", "");
              b.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js");
              document.head.appendChild(b);
             `
          }}
        />

        {/* UTMify Passagem */}
        <Script
          id="utmify-passagem"
          strategy="beforeInteractive"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-sck="true"
          data-utmify-prevent-subids="true"
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
