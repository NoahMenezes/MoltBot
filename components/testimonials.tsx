'use client'

import { Card } from "@/components/ui/card"

const testimonials = [
    {
        quote: "We wanted OpenClaw, not a DevOps side-quest. Scaling our agent fleet used to take days; with Moltbot, it's just a call away. This just worked.",
        name: "Alex Rivera",
        role: "Founder, Stealth Startup"
    },
    {
        quote: "The monitoring + quick fixes mattered more than the bot itself. Seeing logs and having auto-restarts saved us from silent downtime on more than one occasion.",
        name: "Sarah Chen",
        role: "Ops Director, Fintech Lab"
    },
    {
        quote: "We run complex multi-channel automations across Slack and WhatsApp without the whole system collapsing. The best best-effort support in the game.",
        name: "James Miller",
        role: "Growth Lead, RevOps Inc."
    },
    {
        quote: "Setup was done in 48 hours. Now our virtual assistant handles inbox triage, calendar scheduling, and even drafts replies. Game changer for our small team.",
        name: "Priya Sharma",
        role: "Co-founder, Agency360"
    },
    {
        quote: "I was skeptical about managed hosting, but the peace of mind is worth every penny. No more 3 AM debugging sessions.",
        name: "Marcus Thompson",
        role: "CTO, DataFlow Systems"
    },
    {
        quote: "Finally, an AI assistant that doesn't require a PhD to maintain. The team handles all the complexity so we can focus on growth.",
        name: "Elena Rodriguez",
        role: "VP Operations, TechScale"
    }
]

// Tweet-style cards data
const tweets = [
    {
        name: "Dillion",
        handle: "@dillionverma",
        content: "today is my first day of @_buildspace school 🎒\n\na place where you turn your ideas into reality and make friends along the way 😊",
        likes: 24,
        date: "Jul 3, 2023"
    },
    {
        name: "Dillion",
        handle: "@dillionverma",
        content: "it took an insane amount of effort to go from nothing to this in 2 weeks lmao\n\ni hope yall like it 👀\n\nWhat components do you want to see next?",
        likes: 156,
        date: "Jul 3, 2023"
    },
    {
        name: "Farza",
        handle: "@FarzaTV",
        content: "Today, we're opening our first @_buildspace campus.\n\nA physical school for you to go all-in on your ideas.\n\nNo matter how big, or how small.",
        likes: 892,
        date: "Jun 28, 2023"
    },
    {
        name: "Alex Chen",
        handle: "@alexchen_dev",
        content: "Just deployed my first OpenClaw agent with @moltbot_io\n\nSetup took 30 mins. Would have taken me weeks to figure out the infra myself. 🚀",
        likes: 47,
        date: "Jan 15, 2024"
    },
    {
        name: "Sarah K.",
        handle: "@sarahk_ops",
        content: "The monitoring dashboard alone is worth it. Caught 3 potential downtime incidents before they happened.\n\nThis is what \"proactive support\" actually looks like.",
        likes: 89,
        date: "Jan 22, 2024"
    },
    {
        name: "Mike Rodriguez",
        handle: "@mikerodriguez",
        content: "Moved from self-hosted to @moltbot_io managed.\n\nMy weekends are mine again. No more SSH sessions at 2am. 🙏",
        likes: 234,
        date: "Feb 1, 2024"
    },
    {
        name: "Emma Thompson",
        handle: "@emmathompson_ai",
        content: "The fact that I can plug in my own API keys and don't have to worry about vendor lock-in? \n\nChef's kiss. 👨‍🍳💋",
        likes: 67,
        date: "Jan 28, 2024"
    },
    {
        name: "David Park",
        handle: "@davidpark_tech",
        content: "Asked for WhatsApp integration. Got it working within 24 hours.\n\nThis team actually delivers. Not just promises.",
        likes: 112,
        date: "Jan 30, 2024"
    },
    {
        name: "Jenny Liu",
        handle: "@jennyliu_founder",
        content: "3 months in with @moltbot_io\n\nZero downtime. Zero surprises. Zero regrets.\n\nThis is how hosting should feel.",
        likes: 189,
        date: "Feb 5, 2024"
    },
    {
        name: "Ryan Scott",
        handle: "@ryanscott_cto",
        content: "Our AI assistant now handles 70% of our customer inquiries.\n\nThe ROI on this setup is insane. 📈",
        likes: 245,
        date: "Feb 8, 2024"
    }
]

// Tweet Card Component
function TweetCard({ tweet }: { tweet: typeof tweets[0] }) {
    return (
        <div className="w-[350px] shrink-0 rounded-xl border border-border/50 bg-card p-4 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-white font-semibold text-sm">
                    {tweet.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-foreground">{tweet.name}</span>
                        <svg className="size-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{tweet.handle}</span>
                </div>
                <svg className="size-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </div>
            <p className="mt-3 text-sm text-foreground whitespace-pre-line leading-relaxed">{tweet.content}</p>
        </div>
    )
}

export default function Testimonials() {
    const row1Tweets = tweets.slice(0, 5)
    const row2Tweets = tweets.slice(5, 10)

    return (
        <section className="py-32 bg-background border-y border-border/50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-semibold md:text-4xl">Testimonials</h2>
                    
                </div>

                {/* Tweet Cards Section with Infinite Marquee */}
                <div className="mt-20">
                    
                    {/* First row - scrolls left */}
                    <div className="mb-6 overflow-hidden">
                        <div 
                            className="flex gap-6 animate-marquee-left"
                            style={{ '--marquee-duration': '50s' } as React.CSSProperties}
                        >
                            {row1Tweets.map((tweet, index) => (
                                <TweetCard key={`row1-1-${index}`} tweet={tweet} />
                            ))}
                            {row1Tweets.map((tweet, index) => (
                                <TweetCard key={`row1-2-${index}`} tweet={tweet} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Second row - scrolls right */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-6 animate-marquee-right"
                            style={{ '--marquee-duration': '55s' } as React.CSSProperties}
                        >
                            {row2Tweets.map((tweet, index) => (
                                <TweetCard key={`row2-1-${index}`} tweet={tweet} />
                            ))}
                            {row2Tweets.map((tweet, index) => (
                                <TweetCard key={`row2-2-${index}`} tweet={tweet} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
