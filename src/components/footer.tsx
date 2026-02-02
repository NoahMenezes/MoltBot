import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-16 border-t border-border/50">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <div className="flex justify-center gap-10 mb-8">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Agency Info
                    </Link>
                </div>
                <p className="text-xs text-muted-foreground">
                    © 2026 Moltbot Agency. Not affiliated with OpenClaw or Anthropic. Managed Hosting Service.
                </p>
            </div>
        </footer>
    )
}
