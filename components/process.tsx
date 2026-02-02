export default function ProcessSection() {
    return (
        <section className="py-24 bg-background border-b border-border/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold md:text-4xl text-foreground">What we exactly do?</h2>
                    <p className="mt-4 text-muted-foreground text-lg">We handle the infra. You reap the productivity.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <div className="space-y-4 p-8 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-5xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">1</div>
                        <h3 className="text-xl font-bold">Deploy your instance</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• Provision weighted VM</li>
                            <li>• Deploy OpenClaw/Moltbot/Clawdbot</li>
                            <li>• Configure stability defaults</li>
                            <li>• Custom functionality setup</li>
                        </ul>
                    </div>
                    <div className="space-y-4 p-8 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-5xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">2</div>
                        <h3 className="text-xl font-bold">Connect your channels</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• WhatsApp & Telegram</li>
                            <li>• Slack & Discord</li>
                            <li>• Webhooks / Custom routes</li>
                            <li>• API integrations</li>
                        </ul>
                    </div>
                    <div className="space-y-4 p-8 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-5xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">3</div>
                        <h3 className="text-xl font-bold">Enable popular skills</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• Inbox help & reminders</li>
                            <li>• Research & summaries</li>
                            <li>• Workflow automation</li>
                            <li>• Browser-based tasks</li>
                        </ul>
                    </div>
                    <div className="space-y-4 p-8 rounded-3xl transition-all duration-300 bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 cursor-default group">
                        <div className="text-5xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">4</div>
                        <h3 className="text-xl font-bold">Monitor + Maintain</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 group-hover:text-foreground/80 transition-colors duration-300">
                            <li>• Uptime & Auto-restart</li>
                            <li>• Logs & Backups</li>
                            <li>• Safe update assistance</li>
                            <li>• Best-effort troubleshooting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
