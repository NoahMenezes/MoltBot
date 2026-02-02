import { Card } from '@/components/ui/card'
import { CheckCircle2, XCircle, ShieldCheck, Key } from 'lucide-react'

export default function ContentSection() {
    return (
        <section id="content" className="bg-white dark:bg-muted/50 py-16 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Main Why Choose Us Grid */}
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold md:text-4xl text-foreground">Why choose us?</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Because OpenClaw isn&apos;t the hard part. <strong className="text-foreground">Reliability is.</strong><br />
                            Most setups fail for boring reasons:
                        </p>
                        <ul className="mt-8 space-y-4">
                            {[
                                'session drops',
                                'updates break configs',
                                'heavy tasks kill the server',
                                'no alerts, no logs, no recovery plan'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-red-500/80 font-medium">
                                    <XCircle className="size-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Card className="p-8 lg:p-12 border-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
                        <h3 className="text-2xl font-semibold">We&apos;ve already fought those battles.</h3>
                        <p className="mt-4 text-muted-foreground">
                            So instead of spending nights debugging &quot;why it stopped replying&quot;, you get a virtual employee that stays online—with people to call when things get messy.
                        </p>
                        <p className="mt-4 text-muted-foreground italic text-sm">
                            we move fast, customize freely, and don&apos;t force you into a rigid template.
                        </p>
                        
                        <div className="mt-8 pt-8 border-t border-border/50">
                            <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                                <ShieldCheck className="size-5" />
                                Simplified Deployment Options
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                For those who want more control, we offer one-click templates via Hostinger (Docker marketplace), DigitalOcean 1-Click Droplets, and Cloudflare Workers.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* What you don't need to worry about + What you control */}
                <div className="mt-24 grid gap-12 lg:grid-cols-2">
                    <Card className="p-8 border-border/50 bg-background/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20 group">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="size-8 text-primary" />
                            <h3 className="text-xl font-semibold">What you don&apos;t need to worry about</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'No lock-in platform',
                                'No forced AI billing',
                                'No "figure it out yourself" docs'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-8 border-border/50 bg-background/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20 group">
                        <div className="flex items-center gap-3 mb-6">
                            <Key className="size-8 text-primary" />
                            <h3 className="text-xl font-semibold">You control</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Your AI keys',
                                'Your instance and data boundaries',
                                'What the bot is allowed to do'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    )
}
