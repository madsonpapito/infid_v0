"use client"

import { useEffect } from "react"
import { Search, Loader2 } from "lucide-react"

export default function Step1() {
  // O EasyTracker intercepta cliques em elementos com a classe 'easyt-next-page'
  // No caso de acesso direto ou redundância, redirecionamos para a oferta
  const trackerUrl = "https://etr.tindercheck.xyz/trk/offer/1"

  useEffect(() => {
    // Pequeno delay para garantir que o tracker carregue se necessário
    const timer = setTimeout(() => {
      window.location.href = trackerUrl + window.location.search
    }, 1500)
    return () => clearTimeout(timer)
  }, [trackerUrl])

  return (
    <div className="min-h-screen bg-[#060b19] flex flex-col items-center justify-center p-4 text-white">
      <div className="w-full max-w-md text-center space-y-8 animate-in fade-in duration-700">
        <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Search className="w-10 h-10 text-cyan-400" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Iniciando Varredura...
          </h1>
          <p className="text-slate-400 text-sm">
            Conectando aos bancos de dados de redes sociais de forma anônima.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Protocolo de segurança ativo
          </p>
        </div>

        {/* Link estático para o crawler do EasyTracker validar a oferta */}
        <div className="opacity-0 pointer-events-none absolute bottom-0">
          <a href={trackerUrl} className="easyt-next-page">
            EasyTracker Activation Link
          </a>
        </div>
      </div>
    </div>
  )
}
