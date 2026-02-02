import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

// Brand Logo Components
const HostingerLogo = () => (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
        <path d="M16.415 0v7.16l-4.152 2.39V2.39L16.415 0zM7.585 4.78v7.16l4.678 2.69V7.47L7.585 4.78zm8.83 5.09v7.16l-4.152 2.39v-7.16l4.152-2.39zM7.585 14.65v7.16L12.263 24v-7.16l-4.678-2.19z"/>
    </svg>
)

const DigitalOceanLogo = () => (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
        <path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.9a6.986 6.986 0 0 1 4.188 4.188c1.83 5.18-1.977 10.064-6.9 10.064v-3.538h-3.51v3.538H4.946v3.538h3.538V24h4.64c6.478 0 11.882-5.205 12.017-11.675C25.285 5.534 19.242-.02 12.04 0zM4.946 20.886H1.405v-3.538h3.54v3.538zm-3.54-3.538v-2.842h2.84v2.842h-2.84z"/>
    </svg>
)

const CloudflareLogo = () => (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
        <path d="M16.509 15.731c.134-.47.073-.903-.173-1.222-.224-.292-.578-.457-.997-.475l-8.548-.108a.296.296 0 0 1-.247-.135.298.298 0 0 1-.027-.278c.053-.139.178-.234.33-.245l8.643-.11c.974-.054 2.033-.87 2.432-1.878l.507-1.281c.024-.061.03-.126.017-.189-.347-1.651-1.831-2.887-3.596-2.887-1.552 0-2.88.956-3.428 2.31-.316-.267-.72-.425-1.159-.425-.963 0-1.746.783-1.746 1.746 0 .165.025.324.07.475-1.598.078-2.875 1.31-2.875 2.836 0 .128.008.254.023.379l.004.03.012.076.021.108.008.034a.298.298 0 0 0 .292.242h10.274c.154-.005.283-.085.358-.197a.298.298 0 0 0 .044-.234l-.438-1.532zm2.764-1.654a.106.106 0 0 0-.09-.076l-1.098-.142a.106.106 0 0 1-.08-.063.106.106 0 0 1 .008-.1c.07-.103.187-.178.31-.2l1.085-.141c.04-.007.072-.035.087-.072l.476-1.175c.016-.04.014-.085-.006-.123a.106.106 0 0 0-.096-.062h-4.198c-.041 0-.08.024-.098.061l-.476 1.175a.106.106 0 0 0 .08.145l1.085.141a.298.298 0 0 1 .247.278.298.298 0 0 1-.219.298l-1.098.142a.106.106 0 0 0-.09.076l-.286 1.003c-.018.063.006.13.06.165a.106.106 0 0 0 .057.017h4.586a.106.106 0 0 0 .1-.072l.476-1.175a.106.106 0 0 0-.008-.1z"/>
    </svg>
)

const LightNodeLogo = () => (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
)

interface Platform {
    name: string;
    logo: ReactNode;
    features: string[];
}

const platforms: Platform[] = [
    {
        name: "Hostinger",
        logo: <HostingerLogo />,
        features: [
            "Docker-based one-click deployment via VPS marketplace (often called \"OpenClaw\" or \"Clawdbot AI Assistant\")",
            "Pre-installed Docker with Moltbot and an easy UI for entering environment variables (Claude/OpenAI API key, gateway token, etc.)",
            "VPS example: 2 vCPU, 8GB RAM, 100GB SSD — ~$6.99/mo"
        ]
    },
    {
        name: "DigitalOcean 1-Click Droplet",
        logo: <DigitalOceanLogo />,
        features: [
            "Launches Moltbot in a Docker container with firewall, logging, and token auth preconfigured",
            "Designed for quick spin-up of a production-ready bot (no manual Docker setup needed)"
        ]
    },
    {
        name: "Cloudflare Workers",
        logo: <CloudflareLogo />,
        features: [
            "Not one-click in the traditional sense, but offers a \"Deploy to Cloudflare\" flow using their wrangler CLI and GitHub template",
            "You can run Moltbot fully serverless in their Workers + Browser Rendering sandbox (Moltworker project)"
        ]
    },
    {
        name: "LumaDock & LightNode",
        logo: <LightNodeLogo />,
        features: [
            "Smaller VPS providers like LumaDock offer a template picker at VPS launch that sets up Moltbot automatically with networking/firewall preconfigured",
            "LightNode's OpenClaw VPS similarly simplifies deployment with preset configs and global region choice"
        ]
    }
]

export default function OneClickDeploySection() {
    return (
        <section className="py-24 bg-white dark:bg-background">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">Deploy anywhere</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        <strong>Goal:</strong> Simplify deployment for non-technical users via templates or guided install flows.
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
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        {platform.logo}
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
