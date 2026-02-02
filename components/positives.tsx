import React from 'react'

export default function PositivesSection() {
    const positives = [
        "Rides an existing, fast-rising wave instead of creating demand from scratch",
        "Solves a real, felt pain (setup + maintenance + cognitive load)",
        "Targets a paying ICP (CXOs, founders, ops, finance, HR)",
        "Strong time-to-market advantage by forking instead of building core tech",
        "Clear value exchange: convenience + speed + zero setup",
        "Converts open-source complexity into paid simplicity",
        "Usage-based pricing aligns well with perceived value",
        "Infra-first approach creates high switching friction once embedded",
        "Early product can be intentionally imperfect and still sell",
        "Can scale revenue without scaling headcount heavily (once infra stabilizes)",
        "Multi-VM strategy allows cost optimization over time",
        "Natural path from service → product → platform",
        "High virality potential due to hype + demos + comparisons",
        "Easy to create founder-led narrative around “AI butler / Jarvis”",
        "Strong optionality: SaaS, managed service, enterprise, white-label",
        "Learning moat early (infra + billing + usage patterns)",
        "Positions you close to the future of agentic workflows",
        "Builds credibility in an edge but understandable AI category",
        "Early revenue possible without perfect UX or polish",
        "Clear expansion surface for proprietary features later"
    ]

    return (
        <section className="py-24 bg-muted/50 border-y border-border/50">
            <div className="mx-auto max-w-4xl px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">Positives of this project</h2>
                </div>
                <div className="grid gap-y-4 gap-x-12 sm:grid-cols-2">
                    {positives.map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <span className="text-primary mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
