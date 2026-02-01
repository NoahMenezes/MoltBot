import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logos = [
    { name: 'WhatsApp', src: 'https://cdn.simpleicons.org/whatsapp' },
    { name: 'Telegram', src: 'https://cdn.simpleicons.org/telegram' },
    { name: 'Slack', src: 'https://cdn.simpleicons.org/slack' },
    { name: 'Discord', src: 'https://cdn.simpleicons.org/discord' },
    { name: 'iMessage', src: 'https://cdn.simpleicons.org/imessage' },
    { name: 'Anthropic', src: 'https://cdn.simpleicons.org/anthropic' },
    { name: 'OpenAI', src: 'https://html.tailus.io/blocks/customers/openai.svg' },
    { name: 'Google Gemini', src: 'https://cdn.simpleicons.org/googlegemini' },
    { name: 'DigitalOcean', src: 'https://cdn.simpleicons.org/digitalocean' },
    { name: 'Cloudflare', src: 'https://cdn.simpleicons.org/cloudflare' },
    { name: 'Hostinger', src: 'https://cdn.simpleicons.org/hostinger' },
    { name: 'Docker', src: 'https://cdn.simpleicons.org/docker' },
    { name: 'Google Workspace', src: 'https://cdn.simpleicons.org/googleworkspace' },
    { name: 'GitHub', src: 'https://html.tailus.io/blocks/customers/github.svg' },
    { name: 'Cursor', src: 'https://cdn.simpleicons.org/cursor' },
    { name: 'Stripe', src: 'https://cdn.simpleicons.org/stripe' },
    { name: 'Nvidia', src: 'https://html.tailus.io/blocks/customers/nvidia.svg' },
    { name: 'Lemon Squeezy', src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg' },
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
                                        className="mx-auto h-8 w-fit brightness-0 dark:invert"
                                        src={logo.src}
                                        alt={`${logo.name} Logo`}
                                        height="32"
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
