import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Target, Rocket, Lightbulb, TrendingUp, Users } from 'lucide-react'

export default function ProjectDetails() {
    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold md:text-5xl text-foreground">Deep Dive: Vision & Strategy</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-3xl">
                        Everything you need to know about what we&apos;re building, why we&apos;re different, and where we&apos;re headed.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* What are we exactly building? */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <Target className="size-6 text-primary" />
                                <h3 className="text-2xl font-bold">What are we exactly building?</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                The current problem with clawd bot is it needs a device to run itself fulltime. While control and privacy are advantages, the complexity of setup and constant management are massive limitations.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader className="pb-2">
                                    <h4 className="font-semibold text-foreground">The Solution</h4>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    A service where we host clawd in virtual machines. Users buy usage tokens, connect accounts (WhatsApp, Slack, Cursor), and we handle the setting up, maintenance, and hosting.
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader className="pb-2">
                                    <h4 className="font-semibold text-foreground">The Siddhartha Persona</h4>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Siddharth, a services agency co-founder, loves tech but finds local setup time-consuming. We remove that cognitive load so he can focus on his business.
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader className="pb-2">
                                    <h4 className="font-semibold text-foreground">Cognitive Load Theory</h4>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    People in manufacturing, pharma, and finance find tools like Cursor &quot;alien.&quot; We reach these non-tech ICPs by making powerful tech usable in a few clicks.
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30 border-border/50">
                                <CardHeader className="pb-2">
                                    <h4 className="font-semibold text-foreground">Technical Approach</h4>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    We fork and build on top of clawd. Usage-based credits, credit benchmarking per operation, and multi-user VM optimization/load balancing.
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <hr className="border-border/50" />

                    {/* Differentiation & Roadmap */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Lightbulb className="size-6 text-primary" />
                                    <h3 className="text-2xl font-bold">What makes us different?</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    We are a commodity service that makes setup cheap and easy. We are riding the clawd bot wave without building a proprietary product &quot;to start,&quot; focusing on immediate market demand.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Rocket className="size-4" /> Short Term Plan
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Positioned as a VM-hosted service for non-tech founders. GUI on top of VM outputs, focusing on infra and billing. We ride the hype and build paying users early.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <TrendingUp className="size-4" /> Long Term Plan
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Build a proprietary product (&quot;Jarvis&quot;) that replaces the butler role. We obsess over MOATs, innovation, and attracting high-potential talent.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="size-6 text-primary" />
                                    <h3 className="text-2xl font-bold">Distribution Strategy</h3>
                                </div>
                                <div className="space-y-4 text-sm text-muted-foreground">
                                    <p>
                                        <strong className="text-foreground">Short Term:</strong> Content via LinkedIn, IG, X, and viral-worthy reels (halku vs clawd characters, founder challenges, rage bait, trend riding).
                                    </p>
                                    <p>
                                        <strong className="text-foreground">Long Term:</strong> Sustained community of loyal users with high activity lock-in and deep data integration.
                                    </p>
                                </div>
                            </div>
                            <div className="p-8 rounded-3xl bg-muted/50 border border-border/50">
                                <h4 className="font-bold text-foreground mb-4">Positive Signals we look for:</h4>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">• High engagement and organic word-of-mouth</li>
                                    <li className="flex items-center gap-2">• Consistent repeat spending from paying users</li>
                                    <li className="flex items-center gap-2">• Non-tech ICPs feeling a &quot;180-degree shift&quot; in life</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
