"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

function ResultsRedirectContent() {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const queryString = searchParams.toString()
    const targetUrl = queryString 
      ? `https://go.plataformafortpay.com.br/oavin?${queryString}` 
      : "https://go.plataformafortpay.com.br/oavin"
    
    // Pequeno atraso para garantir que o redirecionamento ocorra após o mount
    const timer = setTimeout(() => {
      window.location.href = targetUrl
    }, 500)

    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 animate-pulse">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-rose-500 animate-spin mx-auto" />
          <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full"></div>
        </div>
        
        <h1 className="text-xl font-bold uppercase tracking-widest">
          Acessando Dossiê Confidencial...
        </h1>
        
        <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
          Sua conexão segura está sendo estabelecida. Você será redirecionado para o checkout em instantes.
        </p>
      </div>

      {/* Fallback Meta Refresh */}
      <noscript>
        <meta httpEquiv="refresh" content="3;url=https://go.plataformafortpay.com.br/oavin" />
      </noscript>
    </div>
  )
}

export default function ResultsRedirectPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
      </div>
    }>
      <ResultsRedirectContent />
    </Suspense>
  )
}
