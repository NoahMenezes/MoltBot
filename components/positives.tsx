import React from 'react'
import { Zap, Settings2, Sparkles } from 'lucide-react'

export default function PositivesSection() {
    return (
        <section className="bg-white py-24 dark:bg-background">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-foreground">Proof and trust</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Reliability isn't a feature, it's the product.</p>
                </div>
                
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">What you’re actually getting</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
                                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"></div>
                                    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                        <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                    </div>
                                </div>
                                <h4 className="mt-6 font-medium">Managed VM Hosting</h4>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We deploy + maintain the instance. No local setup required.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
                                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"></div>
                                    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                        <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                    </div>
                                </div>
                                <h4 className="mt-6 font-medium">Monitoring + Auto-restart</h4>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Prevents silent downtime. If it drops, it comes back in seconds.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
                                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"></div>
                                    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                        <Sparkles className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                    </div>
                                </div>
                                <h4 className="mt-6 font-medium">Backups + Logs</h4>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Full audit trail and daily snapshots so recovery is quick.</p>
                            </div>
                        </div>

                         {/* Card 4 - Reusing Zap for Safe Update Flow as per HTML */}
                         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
                                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"></div>
                                    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                        <Zap className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                    </div>
                                </div>
                                <h4 className="mt-6 font-medium">Safe Update Flow</h4>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We avoid random breaks by testing upstream updates first.</p>
                            </div>
                        </div>

                         {/* Card 5 - Reusing Settings2 for Best-effort support as per HTML */}
                         <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default">
                            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                                <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
                                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"></div>
                                    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                        <Settings2 className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                                    </div>
                                </div>
                                <h4 className="mt-6 font-medium">Best-effort Support</h4>
                            </div>
                            <div data-slot="card-content" className="px-6">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We're here when upstream platforms change things unexpectedly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">What you don't need to worry about</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>No lock-in platform</li>
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>No forced AI billing</li>
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>No "figure it out yourself" docs</li>
                        </ul>
                    </div>
                    <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">You control</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>Your AI keys</li>
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>Your instance and data boundaries</li>
                            <li className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 rounded-full bg-primary"></span>What the bot is allowed to do</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
