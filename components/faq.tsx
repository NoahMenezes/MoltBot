'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
    {
        question: "Is this official OpenClaw/Moltbot hosting?",
        answer: "No. Wibble Labs provides managed hosting + setup as an agency service. We ensure your agents run on professional-grade infrastructure."
    },
    {
        question: "Do you provide AI usage / tokens?",
        answer: "No. You bring your own AI keys (OpenAI/Anthropic/etc.). No lock-in. You only pay us for the management and infrastructure."
    },
    {
        question: "Do you support WhatsApp?",
        answer: "Yes, if WhatsApp is part of your requirement. It’s supported as a setup + maintenance service."
    },
    {
        question: "Do you guarantee uptime / SLA?",
        answer: "No formal SLA. It’s best-effort + monitoring, because upstream platforms and providers can change unexpectedly. Our focus is fast recovery and stable setups."
    },
    {
        question: "How long does setup take?",
        answer: "Typically 24–72 hours depending on channels, skills, and integrations."
    },
    {
        question: "Can teams use this or only solo founders?",
        answer: "Both. We can configure it for individuals, founders, ops, and small teams."
    },
    {
        question: "Can it do heavy automations / browser tasks?",
        answer: "Yes. For heavy tasks we recommend a separate worker so the main bot stays stable."
    },
    {
        question: "What if I want custom skills or integrations?",
        answer: "We can build and plug in custom skills as part of the agency service."
    },
    {
        question: "Can I leave later?",
        answer: "Yes. No lock-in. We can hand over or help migrate your setup."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-white dark:bg-background">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">Frequently Asked Questions</h2>
                    <p>Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-border/50 bg-muted/30 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left font-semibold hover:bg-muted/50 transition-colors"
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "size-5 shrink-0 transition-transform duration-200",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                )}
                            >
                                <p className="px-6 text-muted-foreground">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
