import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">What you’re actually getting</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Beyond simple code. We provide the stability layer your business agents need.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Managed VM Hosting</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We deploy and maintain the entire instance. No more local machine dependencies or terminal errors.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Monitoring + Auto-restart</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Our infrastructure watches your bot 24/7. If it hangs or crashes, we restart it before you even notice.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Backups + Logs</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Centralized logs for every interaction and automated snapshotting so recovery is always 5 minutes away.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Safe Update Flow</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We test upstream changes before pulling. No more random breaking updates that kill your workflow.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Bring Your Own Keys</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">You control the intelligence. Plug in your OpenAI or Anthropic keys. Zero platform lock-in.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Multi-Channel Support</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Connect your employee to WhatsApp, Telegram, Slack, or Discord with a few clicks.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
