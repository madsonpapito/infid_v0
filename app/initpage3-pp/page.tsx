"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Heart, Star, Users, Sparkles, Anchor } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage3PP() {
    return (
        <div className="min-h-screen bg-rose-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - 5 Pillars - PP"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Relationship Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        The Secret to a <span className="text-rose-600">Love That Lasts</span> <br className="hidden md:block" />
                        A Lifetime.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Discover the 5 fundamental pillars that transform fragile connections into unshakeable, lifelong partnerships.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH2O"
                            className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Get The 5 Pillars Guide Now
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 100% Safe and Private Access
                    </p>
                </div>
            </section>

            {/* The Pillars Grid */}
            <section className="py-20 px-4 md:px-8 bg-rose-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">The 5 Pillars of Success</h2>
                        <p className="text-slate-600 mt-4 text-lg">Foundation is everything. Without these, even the strongest love can fade.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Anchor className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Absolute Transparency</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Beyond just honesty. Learn how to create a "safe space" where both partners can share their deepest fears and desires without judgment.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mutual Admiration</h3>
                            <p className="text-slate-600 leading-relaxed">
                                How to keep the "spark" alive by actively looking for greatness in your partner every single day.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Joint Growth</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A relationship either grows or dies. Discover how to align your personal goals so you grow together, not apart.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Section: Intimacy */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 bg-rose-100 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-purple-400/20"></div>
                         <Heart className="w-32 h-32 text-rose-500 opacity-80" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Intimacy Beyond the Physical</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            True connection happens when two souls feel completely seen and accepted. We'll show you how to rebuild intimacy from the ground up, even if you've felt distant for years.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Emotional vulnerability techniques",
                                "Reigniting the honeymoon phase",
                                "The art of non-sexual touch",
                                "Deepening the soul connection"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-rose-100 text-rose-600 p-1 rounded-full">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Breakdown Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
                    <h2 className="text-3xl font-bold text-center mb-10">What's Inside the Program?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "The Core Foundation: Building the Base",
                            "Truth-Speaking: The Communication Blueprint",
                            "Emotional Armor: Protecting Your Bond",
                            "The Intimacy Reset: Reconnecting Your Hearts",
                            "Future-Proofing: Staying Together Forever",
                            "Bonus: The Daily Gratitude Challenge"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-rose-50/30 rounded-xl">
                                <div className="bg-rose-100 text-rose-600 p-1 rounded-full mt-0.5">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <p className="text-slate-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-rose-600 to-rose-800 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Invest in Your Happiness.</h2>
                    <p className="text-rose-100 text-lg md:text-xl">
                        Your relationship is the most important investment you'll ever make. Secure your future together today.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH2O"
                            className="bg-white text-rose-700 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            Yes! I Want a Stronger Relationship
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-rose-200 opacity-90">
                            <Lock className="w-4 h-4" /> Secure Payment Guaranteed
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
