import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logos = [
    { name: 'WhatsApp', slug: 'whatsapp' },
    { name: 'Telegram', slug: 'telegram' },
    { name: 'Slack', slug: 'slack' },
    { name: 'Discord', slug: 'discord' },
    { name: 'Anthropic', slug: 'anthropic' },
    { name: 'OpenAI', slug: 'openai' },
    { name: 'Google Gemini', slug: 'googlegemini' },
    { name: 'DigitalOcean', slug: 'digitalocean' },
    { name: 'Cloudflare', slug: 'cloudflare' },
    { name: 'Hostinger', slug: 'hostinger' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Google Workspace', slug: 'googleworkspace' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Stripe', slug: 'stripe' },
    { name: 'Nvidia', slug: 'nvidia' },
]

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row justify-center">
                    <div className="relative py-6 w-full">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {logos.map((logo) => (
                                <div key={logo.name} className="flex items-center justify-center">
                                    <img
                                        className="mx-auto h-10 w-fit dark:invert grayscale brightness-50"
                                        src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo.slug}.svg`}
                                        alt={`${logo.name} Logo`}
                                        height="40"
                                        width="auto"
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 z-10 w-24"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 z-10 w-24"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
                            direction="left"
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
                            direction="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
