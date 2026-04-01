"use client"

import { CheckCircle2, ChevronRight, MessageSquare, Instagram, MapPin } from "lucide-react"
import Link from "next/link"

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f172a] rounded-2xl border border-slate-700/50 p-8 shadow-2xl text-center space-y-8 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-emerald-500 shadow-[0_0_20px_#10b981]"></div>
        
        <div className="flex justify-center">
          <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/20 animate-in zoom-in duration-500">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold uppercase tracking-tight">Access Granted</h1>
          <p className="text-slate-400 text-sm">
            Your investigation report is being finalized and will be linked to your payment email shortly.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 border-y border-slate-800 py-6">
          <div className="flex flex-col items-center gap-1 opacity-50">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-[10px] uppercase font-bold">Chats</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-50">
            <Instagram className="w-5 h-5 text-rose-500" />
            <span className="text-[10px] uppercase font-bold">Social</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-50">
            <MapPin className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] uppercase font-bold">GPS</span>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            href="https://go.plataformafortpay.com.br/oavin"
            className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1120] font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            REFRESH DASHBOARD <ChevronRight className="w-4 h-4" />
          </Link>
          <p className="text-[10px] text-slate-500 font-mono italic">
            Check your email (including spam) for login credentials.
          </p>
        </div>
      </div>
      
      <p className="mt-8 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
        © 2026 Infidelity Find • Secure Connection
      </p>
    </div>
  )
}
