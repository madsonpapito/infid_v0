"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Anchor, Eye, Shield, Key, Sparkles } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage7PP() {
    return (
        <div className="min-h-screen bg-amber-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Trust Foundation - PP"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Foundation of Loyalty
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Built on <span className="text-amber-600">Unshakeable Trust.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Trust is the oxygen of every relationship. Learn how to cultivate, protect, and restore absolute reliability in your partnership.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH3B"
                            className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Build Unshakeable Trust
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 100% Private and Secure Access
                    </p>
                </div>
            </section>

            {/* Trust Values */}
            <section className="py-20 px-4 md:px-8 bg-amber-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">The 3 Pillars of Reliability</h2>
                        <p className="text-slate-600 mt-4 text-lg">Without trust, the most beautiful relationship is just a house of cards.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-lg transition-all text-center">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <Key className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Radial Transparency</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Learn the "Open Book" methodology that eliminates suspicion and replaces it with deep, calm certainty.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-lg transition-all text-center">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Active Consistency</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Small actions repeated over time create a fortress of reliability. Find out the daily habits that prove you are safe.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-amber-100 hover:shadow-lg transition-all text-center">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <Anchor className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Emotional Anchor</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Be the one person your partner can always count on, especially when the world outside gets chaotic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Restoration Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-900 text-white overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Can Trust Be <span className="text-amber-400">Restored?</span></h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Whether you've suffered a major breach or just felt a gradual erosion of faith, our "Trust Restoration Protocol" provides a step-by-step path back to total confidence.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "The Truth Audit: Clearing the air",
                                    "Verification without Micro-management",
                                    "Setting healthy boundaries that stick",
                                    "The 'Future-Safe' commitment"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-amber-500 p-1 rounded-full"><Check className="w-4 h-4 text-slate-900" /></div>
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl">
                                <div className="text-center space-y-6">
                                    <Sparkles className="w-16 h-16 text-amber-400 mx-auto" />
                                    <h3 className="text-2xl font-bold">The Trust Toolkit</h3>
                                    <p className="text-slate-300">A comprehensive system to safeguard your relationship forever.</p>
                                    <Link
                                        href="https://go.centerpag.com/PPU38CQAH3B"
                                        className="block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-all"
                                    >
                                        I Want This Peace of Mind
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
                    <div className="space-y-6">
                        {[
                            { title: "The Transparency Manifesto", text: "How to share everything without losing your individuality." },
                            { title: "Spotting Intuition vs. Paranoia", text: "Learn to trust your gut while keeping anxiety in check." },
                            { title: "The 3 Stages of Forgiveness", text: "A psychological journey to letting go of past hurts." },
                            { title: "Building a Private World", text: "Creating a bond that no outside force can penetrate." }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400">
                                <h3 className="font-bold text-lg text-amber-900 mb-2">{item.title}</h3>
                                <p className="text-slate-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 md:px-8 bg-amber-500 text-slate-900 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold">Never Doubt Your Partner Again.</h2>
                    <p className="text-amber-950 text-lg md:text-xl font-medium">
                        The peace of mind that comes from total trust is priceless. Give your relationship the foundation it deserves.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH3B"
                            className="bg-slate-900 text-white hover:bg-slate-800 text-lg font-bold py-5 px-12 rounded-xl shadow-2xl transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            Get The Unshakeable Trust Program
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-amber-900 font-bold">
                            <Lock className="w-4 h-4" /> SSL Secure Payment Gateway
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
