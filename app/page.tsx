import HeroSection from '@/components/hero-section'
import Features from '@/components/features-1'
import Pricing from '@/components/pricing'
import ContentSection from '@/components/content-1'

export default function Home() {
    return (
        <>
            <HeroSection />
            <section id="features">
                <Features />
            </section>
            <section id="content">
                <ContentSection />
            </section>
            <section id="pricing">
                <Pricing />
            </section>
        </>
    )
}
