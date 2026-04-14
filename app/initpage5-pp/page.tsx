"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Heart, Eye, HandMetal, Sparkles, Moon } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage5PP() {
    return (
        <div className="min-h-screen bg-purple-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Emotional Intimacy - PP"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Emotional Intelligence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Beyond the Surface. <span className="text-purple-600">Deepen Your Bond.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Reconnect with your partner on a soul level. Learn how to navigate emotions and build a lasting intimate connection that transcends daily stress.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH33"
                            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Reconnect Your Hearts
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 100% Confidential Access
                    </p>
                </div>
            </section>

            {/* Intimacy Pillars */}
            <section className="py-20 px-4 md:px-8 bg-purple-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">The Anatomy of Intimacy</h2>
                        <p className="text-slate-600 mt-4 text-lg">Intimacy is not just physical attraction – it's being "fully known" by your partner.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Vulnerability as Strength</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Learn why dropping your guard is the most powerful thing you can do to invite your partner back into your inner world.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Emotional Safety</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Build a psychological bridge that allows both of you to express needs without fear of rejection or judgment.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Moon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sensory Connection</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Reclaim the magic of small moments. Discover how touch, eye contact, and presence can reignite the flame instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Section */}
            <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 text-white relative shadow-2xl">
                    <div className="absolute -top-10 -right-10 opacity-20 transform rotate-12">
                        <Sparkles className="w-64 h-64 text-purple-300" />
                    </div>
                    <div className="relative z-10 text-center space-y-8">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block text-sm font-bold uppercase tracking-widest">
                            The Intimacy Blueprint
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
                            Transform Disconnection Into Deep Devotion.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Breaking the "Roommate Syndrome" and rediscovering desire.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">The 4-step emotional check-in routine for high-performing couples.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Identifying and healing "Intimacy Blocks" from the past.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Daily rituals that keep your connection unshakeable.</p>
                            </div>
                        </div>
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH33"
                            className="inline-block bg-white text-purple-900 hover:bg-slate-100 text-lg font-bold py-4 px-12 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Yes! I Want a Deeper Connection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Program Content */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">What You Will Master</h2>
                    <div className="space-y-6">
                        {[
                            { title: "The Mirror Technique", text: "How to sense and respond to your partner's unspoken needs." },
                            { title: "Intimacy Mapping", text: "A personalized guide to what makes your partner feel safe and loved." },
                            { title: "Neuro-Bonding", text: "The science of long-term attraction and how to trigger it daily." },
                            { title: "The Reset Protocol", text: "How to come back together after an emotional drift." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-purple-100 shadow-sm">
                                <HandMetal className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Reconnect Today.</h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        Don't let another day pass in distance. Reclaim the love and intimacy that brought you together in the first place.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH33"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            Get Immediate Access to the Intimacy Blueprint
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Lock className="w-4 h-4" /> Guaranteed Secure Checkout
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
