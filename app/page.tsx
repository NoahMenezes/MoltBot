import HeroSection from '@/components/hero-section'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features-1'
import ContentSection from '@/components/content-1'
import ProcessSection from '@/components/process'
import FAQSection from '@/components/faq'
import PositivesSection from '@/components/positives'
import CTASection from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <section id="features">
                <Features />
            </section>
            <section id="content">
                <ContentSection />
            </section>
            <ProcessSection />
            <PositivesSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </>
    )
}
