import React from 'react'
import { Zap, Settings2, Sparkles, Shield, RefreshCw, MessageSquare, Brain, Clock, Key } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: "Managed VM hosting",
        subtitle: "we deploy + maintain the instance",
        description: "Your bot runs on dedicated infrastructure. We handle provisioning, configuration, and ongoing maintenance so you never touch a terminal."
    },
    {
        icon: Settings2,
        title: "Monitoring + auto-restart",
        subtitle: "prevents silent downtime",
        description: "24/7 health checks ensure your assistant is always responsive. If something crashes, it's back online in seconds—automatically."
    },
    {
        icon: Sparkles,
        title: "Backups + logs",
        subtitle: "so recovery is quick",
        description: "Daily snapshots and full audit trails mean nothing is ever lost. Roll back anytime, debug anything, recover fast."
    },
    {
        icon: RefreshCw,
        title: "Safe update flow",
        subtitle: "avoid random breaks",
        description: "We test upstream changes before pushing them to your instance. No surprise failures from untested updates."
    },
    {
        icon: Shield,
        title: "Best-effort support",
        subtitle: "when upstream platforms change things",
        description: "When APIs shift or platforms update, we're on it. Quick fixes and workarounds to keep you running smoothly."
    },
    {
        icon: MessageSquare,
        title: "Multi-channel integration",
        subtitle: "connect all your platforms",
        description: "WhatsApp, Telegram, Slack, Discord—we connect your bot to all the channels your team actually uses. One assistant, everywhere."
    },
    {
        icon: Brain,
        title: "Skill enablement",
        subtitle: "unlock powerful capabilities",
        description: "From inbox management to calendar scheduling, research summaries to content drafting—we enable the skills that matter for your workflow."
    },
    {
        icon: Clock,
        title: "Fast setup",
        subtitle: "24-72 hours typical",
        description: "No weeks of configuration. We get your virtual employee deployed, connected, and ready to work within days, not months."
    },
    {
        icon: Key,
        title: "You own your keys",
        subtitle: "bring your own AI provider",
        description: "Use your own OpenAI, Anthropic, or other API keys. No lock-in, no markup on AI usage. Full transparency and control."
    }
]

export default function PositivesSection() {
    return (
        <section className="bg-white py-24 dark:bg-background">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-foreground tracking-tight">Proof and trust</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Reliability isn't a feature, it's the product.</p>
                </div>
                
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-10 border-l-4 border-primary pl-4 text-foreground">What you're actually getting</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="group relative bg-card rounded-2xl border border-border/60 p-8 min-h-[220px] transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-default"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="size-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mb-5">
                                        <feature.icon className="size-6 text-primary" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300 tracking-tight">{feature.title}</h4>
                                        <p className="text-sm font-medium text-primary/70 mb-3">({feature.subtitle})</p>
                                        <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* What you don't need to worry about */}
                    <div className="group relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl p-8 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="relative text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">What you don't need to worry about..</h3>
                        <ul className="relative space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                No lock-in platform
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                No forced AI billing
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                No "figure it out yourself" docs
                            </li>
                        </ul>
                    </div>
                    
                    {/* You control */}
                    <div className="group relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl p-8 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="relative text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">You control</h3>
                        <ul className="relative space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Your AI keys
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Your instance and data boundaries
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                What the bot is allowed to do
                            </li>
                        </ul>
                    </div>

                    {/* We handle the complexity */}
                    <div className="group relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl p-8 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="relative text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">We handle the complexity</h3>
                        <ul className="relative space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Server provisioning
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Security configurations
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Upstream compatibility
                            </li>
                        </ul>
                    </div>

                    {/* Transparent pricing */}
                    <div className="group relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl p-8 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="relative text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">Transparent pricing</h3>
                        <ul className="relative space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                No hidden fees
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Usage-based billing
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                                Cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
