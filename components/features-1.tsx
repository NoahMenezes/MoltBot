import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Proof and trust</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Reliability isn't a feature, it's the product.</p>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4">What you’re actually getting</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                                </CardDecorator>
                                <h4 className="mt-6 font-medium">Managed VM Hosting</h4>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We deploy + maintain the instance. No local setup required.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                                </CardDecorator>
                                <h4 className="mt-6 font-medium">Monitoring + Auto-restart</h4>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Prevents silent downtime. If it drops, it comes back in seconds.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Sparkles className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                                </CardDecorator>
                                <h4 className="mt-6 font-medium">Backups + Logs</h4>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Full audit trail and daily snapshots so recovery is quick.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                                </CardDecorator>
                                <h4 className="mt-6 font-medium">Safe Update Flow</h4>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We avoid random breaks by testing upstream updates first.</p>
                            </CardContent>
                        </Card>

                        <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                                </CardDecorator>
                                <h4 className="mt-6 font-medium">Best-effort Support</h4>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We're here when upstream platforms change things unexpectedly.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                             What you don't need to worry about
                        </h3>
                        <ul className="space-y-4">
                            {['No lock-in platform', 'No forced AI billing', 'No "figure it out yourself" docs'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                             You control
                        </h3>
                        <ul className="space-y-4">
                            {['Your AI keys', 'Your instance and data boundaries', 'What the bot is allowed to do'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
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
