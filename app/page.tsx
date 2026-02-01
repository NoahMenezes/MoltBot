import HeroSection from '@/components/hero-section'
import { IconCloudDemo } from '@/components/icon-cloud-demo'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features-1'
import ContentSection from '@/components/content-1'
import ProcessSection from '@/components/process'
import FAQSection from '@/components/faq'
import CTASection from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <IconCloudDemo />
            <Testimonials />
            <section id="features">
                <Features />
            </section>
            <section id="content">
                <ContentSection />
            </section>
            <ProcessSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </>
    )
}
