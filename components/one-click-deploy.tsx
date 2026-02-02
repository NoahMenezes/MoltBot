import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Cloud, Server, Zap, Globe } from 'lucide-react'

export default function OneClickDeploySection() {
    const platforms = [
        {
            name: "Hostinger",
            icon: Server,
            features: [
                "Docker-based one-click deployment via VPS marketplace",
                "Pre-installed Docker with Moltbot and easy UI for environment variables",
                "VPS example: 2 vCPU, 8GB RAM, 100GB SSD — ~$6.99/mo"
            ]
        },
        {
            name: "DigitalOcean 1-Click Droplet",
            icon: Cloud,
            features: [
                "Launches Moltbot in a Docker container with firewall, logging, and token auth preconfigured",
                "Designed for quick spin-up of a production-ready bot",
                "No manual Docker setup needed"
            ]
        },
        {
            name: "Cloudflare Workers",
            icon: Zap,
            features: [
                "\"Deploy to Cloudflare\" flow using wrangler CLI and GitHub template",
                "Run Moltbot fully serverless in Workers + Browser Rendering sandbox",
                "Moltworker project available"
            ]
        },
        {
            name: "LumaDock & LightNode",
            icon: Globe,
            features: [
                "Template picker at VPS launch with networking/firewall preconfigured",
                "LightNode's OpenClaw VPS with preset configs",
                "Global region choice available"
            ]
        }
    ]

    return (
        <section className="py-24 bg-white dark:bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">One-Click Deploy / Templates</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Simplify deployment for non-technical users via templates or guided install flows.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {platforms.map((platform) => (
                        <Card 
                            key={platform.name} 
                            className="group shadow-zinc-950/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 cursor-default"
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <platform.icon className="size-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{platform.name}</h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {platform.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                                            <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
