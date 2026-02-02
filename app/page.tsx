import HeroSection from '@/components/hero-section'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features-1'
import ContentSection from '@/components/content-1'
import ProcessSection from '@/components/process'
import FAQSection from '@/components/faq'
import PositivesSection from '@/components/positives'
import ProjectDetails from '@/components/project-details'
import CTASection from '@/components/cta'
import Footer from '@/components/footer'
import OneClickDeploySection from '@/components/one-click-deploy'

export default function Home() {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <section id="features">
                <PositivesSection />
            </section>
            <section id="content">
                <ContentSection />
            </section>
            <ProcessSection />
            <OneClickDeploySection />
            <FAQSection />
            <CTASection />
            <Footer />
        </>
    )
}
