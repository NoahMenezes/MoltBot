export default function ProcessSection() {
    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">The Onboarding Process</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:scale-105 cursor-default group">
                        <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">1</div>
                        <h3 className="text-xl font-semibold">Deploy</h3>
                        <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">We provision your VM with stability defaults.</p>
                    </div>
                    <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:scale-105 cursor-default group">
                        <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">2</div>
                        <h3 className="text-xl font-semibold">Connect</h3>
                        <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">WhatsApp, Slack, Telegram, or custom webhooks.</p>
                    </div>
                    <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:scale-105 cursor-default group">
                        <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">3</div>
                        <h3 className="text-xl font-semibold">Enable</h3>
                        <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Draft, research, automate browser tasks.</p>
                    </div>
                    <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:scale-105 cursor-default group">
                        <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">4</div>
                        <h3 className="text-xl font-semibold">Maintain</h3>
                        <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">Uptime, logs, backups, and proactive alerts.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
