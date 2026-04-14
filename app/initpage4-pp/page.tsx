"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, MessageSquare, Volume2, Ear, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage4PP() {
    return (
        <div className="min-h-screen bg-blue-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Communication - PP"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Effective Communication
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Stop Arguing. <span className="text-blue-600">Start Connecting.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Master the art of communication and learn how to speak your partner's love language with precision and empathy.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH2U"
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Unlock Effective Communication
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Secure and Private Portal
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 md:px-8 bg-blue-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Why Communication Fails</h2>
                        <p className="text-slate-600 mt-4 text-lg">Most couples aren't fighting about the dishes – they're fighting because they feel unheard.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Volume2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Tone & Nuance</h3>
                            <p className="text-slate-600 leading-relaxed">
                                It's not just what you say, but how you say it. Learn the subtle shifts in tone that prevent defensiveness and open hearts.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Ear className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Active Auditing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Most people listen to reply. Learn the techniques of listening to understand, a skill that transforms tension into trust.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The 5 Love Languages</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Stop giving what you want to receive. Discover how to provide exactly what your partner needs to feel truly loved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Detail Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <MessageSquare className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">The "No-Fight" Framework</h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Imagine a relationship where even the most difficult topics can be discussed calmly, clearly, and without a single raised voice.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "De-escalation trigger words",
                                    "How to express needs without blame",
                                    "The 'I' statement revolution",
                                    "Breaking the silence cycle"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-blue-500 text-white p-1 rounded-full">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Program Modules</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Module 1: The Psychology of Dialogue", desc: "Why we misinterpret each other and how to stop." },
                            { title: "Module 2: The Love Language Deep Dive", desc: "Expert assessment tools for you and your partner." },
                            { title: "Module 3: Conflict to Connection", desc: "Step-by-step guides for surviving tough talks." },
                            { title: "Module 4: Digital Communication", desc: "How to avoid toxic habits in texts and social media." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                                <h3 className="font-bold text-lg text-blue-700">{item.title}</h3>
                                <p className="text-slate-600 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-700 to-indigo-900 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">End the Misunderstanding.</h2>
                    <p className="text-blue-100 text-lg md:text-xl">
                        Join thousands of couples who have saved their marriages by simply changing the way they speak.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH2U"
                            className="bg-white text-blue-700 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            Yes! Give Me Better Communication
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-blue-200 opacity-90">
                            <Lock className="w-4 h-4" /> Instant Digital Access
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
