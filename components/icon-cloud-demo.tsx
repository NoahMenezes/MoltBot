import { IconCloud } from "@/components/ui/icon-cloud"

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

export function IconCloudDemo() {
    // Extract just the sources to pass to IconCloud
    const images = logos.map(logo => logo.src)

    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <div className="relative flex size-full items-center justify-center overflow-hidden bg-background">
                    <IconCloud images={images} />
                </div>
            </div>
        </section>
    )
}
