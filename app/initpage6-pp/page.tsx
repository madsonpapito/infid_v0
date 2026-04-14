"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Scale, MessageCircle, Ear, Wind, Zap } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage6PP() {
    return (
        <div className="min-h-screen bg-emerald-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Conflict Resolution - PP"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Master Conflict
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Friction Is <span className="text-emerald-600">Growth In Disguise.</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mt-2">Learn to Argue Better.</h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Turn every disagreement into an opportunity for deeper understanding. Discover the proven techniques to resolve conflicts without hurting the one you love.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH37"
                            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Start Resolving Conflicts Today
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 100% Safe and Discrete Purchase
                    </p>
                </div>
            </section>

            {/* Core Strategies */}
            <section className="py-20 px-4 md:px-8 bg-emerald-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">The Peacekeeper's Toolkit</h2>
                        <p className="text-slate-600 mt-4 text-lg">Peace isn't the absence of conflict; it's the ability to handle it with grace.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Strategy 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Wind className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The 2-Minute Cool-Off</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Learn the exact physiological trigger that stops "emotional flooding" and prevents you from saying words you'll regret forever.
                            </p>
                        </div>

                        {/* Strategy 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Ear className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Deep Validation</h3>
                            <p className="text-slate-600 leading-relaxed">
                                You don't have to agree to understand. Discover how to validate your partner's feelings so they instantly feel heard and calm.
                            </p>
                        </div>

                        {/* Strategy 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">The Fairness Contract</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Establish "Rules of Engagement" that keep arguments productive and focused on solutions, not on winning or losing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Methodology Section */}
            <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
                <div className="max-w-4xl mx-auto bg-slate-100 rounded-[2.5rem] p-8 md:p-16 border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3">
                            <div className="bg-emerald-100 text-emerald-600 p-8 rounded-3xl aspect-square flex items-center justify-center">
                                <Zap className="w-20 h-20" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-800">Stop the Toxic Cycle.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Constant bickering drains the energy from your life. Our "Conflict Reset" protocol teaches you how to break the repetitive cycles of blame and defensiveness for good.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Identifying your 'Conflict Style'",
                                    "How to apologize so it actually matters",
                                    "Moving from 'Me vs You' to 'Us vs The Problem'",
                                    "Repairing the bond after a major fight"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-20 px-4 md:px-8 bg-emerald-50/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">The Mastery Program Content</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {[
                            { title: "Module 1: Emotional Regulation", icon: <Wind className="w-5 h-5" />, text: "Techniques to stay calm when your partner is triggered." },
                            { title: "Module 2: The Art of Inquiry", icon: <MessageCircle className="w-5 h-5" />, text: "Asking the right questions to uncover the real issue." },
                            { title: "Module 3: Win-Win Negotiation", icon: <Scale className="w-5 h-5" />, text: "Finding middle ground that leaves both partners satisfied." },
                            { title: "Module 4: Post-Conflict Maintenance", icon: <Zap className="w-5 h-5" />, text: "Ensuring the same argument doesn't happen tomorrow." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 md:px-8 bg-emerald-600 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Start Your Journey to <br/> Lasting Peace.</h2>
                    <p className="text-emerald-100 text-lg md:text-xl">
                        A conflict-free home is possible. Learn the skills that therapists teach their high-value clients.
                    </p>
                    <div className="space-y-6">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH37"
                            className="inline-block w-full md:w-auto bg-white text-emerald-700 hover:bg-emerald-50 text-xl font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"
                        >
                            Yes! Give Me The Conflict Resolution Program
                        </Link>
                        <p className="text-emerald-200 text-sm font-medium flex items-center justify-center gap-2">
                           <Lock className="w-4 h-4" /> Secure 256-bit Encryption
                        </p>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
