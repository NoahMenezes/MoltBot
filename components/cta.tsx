import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section id="booking" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
            <div className="relative mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-4xl font-semibold md:text-5xl text-foreground mb-6">
                    Ready to deploy your first agent?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                    Stop debugging. Start executing. Let us handle the infrastructure while you focus on the growth.
                </p>
                <Button asChild size="lg" className="rounded-xl px-10 py-6 text-lg shadow-lg shadow-primary/25">
                    <Link href="#">
                        <span className="font-semibold">Book a Call</span>
                        <ArrowRight className="ml-2 size-5" />
                    </Link>
                </Button>
                <p className="mt-6 text-sm text-muted-foreground">
                    We&apos;ll map your needs → recommend a setup → send a quote.
                </p>
            </div>
        </section>
    )
}
