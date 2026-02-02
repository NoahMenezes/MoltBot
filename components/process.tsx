import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProcessSection() {
    return (
        <section className="py-24 bg-white dark:bg-background border-b border-border/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">What we exactly do?</h2>
                </div>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-start">
                    <div className="space-y-3 p-6 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">1</div>
                        <h3 className="text-xl font-bold">We deploy your instance</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• Provision a VM based on your workload</li>
                            <li>• Deploy OpenClaw/Moltbot/Clawdbot in a clean, maintainable setup</li>
                            <li>• Customise the functionality and setup according to your choice</li>
                            <li>• Configure stability defaults from day one</li>
                        </ul>
                    </div>
                    <div className="space-y-3 p-6 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">2</div>
                        <h3 className="text-xl font-bold">We connect your channels</h3>
                        <p className="text-sm text-muted-foreground mb-2">Whatever you need:</p>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• WhatsApp</li>
                            <li>• Telegram</li>
                            <li>• Slack</li>
                            <li>• Discord</li>
                            <li>• Webhooks / custom routes</li>
                        </ul>
                    </div>
                    <div className="space-y-3 p-6 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">3</div>
                        <h3 className="text-xl font-bold">We enable popular skills <span className="font-normal text-muted-foreground">(the "crazy stuff")</span></h3>
                        <p className="text-sm text-muted-foreground mb-2">Based on your use-case, we can enable skills like:</p>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• inbox help (draft, summarize, reply suggestions)</li>
                            <li>• calendar + reminders</li>
                            <li>• research and summaries</li>
                            <li>• content writing (posts, scripts, docs)</li>
                            <li>• workflow automations (move info between tools)</li>
                            <li>• browser-based tasks (optional heavy worker recommended)</li>
                        </ul>
                    </div>
                    <div className="space-y-3 p-6 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">4</div>
                        <h3 className="text-xl font-bold">We monitor + maintain (best-effort)</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• uptime monitoring, auto-restart</li>
                            <li>• logs + backups</li>
                            <li>• safe update assistance</li>
                            <li>• troubleshooting when upstream platforms break things</li>
                        </ul>
                    </div>
                </div>

                {/* Repeat CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 inline-block">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-xl px-8 text-base shadow-lg shadow-primary/25">
                            <Link href="#booking">
                                <span className="text-nowrap font-semibold">Book a Call</span>
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        We'll map your needs → recommend a setup → send a quote.
                    </p>
                </div>
            </div>
        </section>
    )
}
