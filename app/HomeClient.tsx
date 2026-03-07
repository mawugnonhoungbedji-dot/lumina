'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { LogosSection } from '@/src/components/sections/LogosSection';
import { ProblemSection } from '@/src/components/sections/ProblemSection';
import { ApproachSection } from '@/src/components/sections/ApproachSection';
import { PortfolioSection } from '@/src/components/sections/PortfolioSection';
import { CTAIntermediateSection } from '@/src/components/sections/CTAIntermediateSection';
import { StudioSection } from '@/src/components/sections/StudioSection';

// Lazy load sections that are below the fold to improve LCP and initial JS execution
const TestimonialsSection = dynamic(() => import('@/src/components/sections/TestimonialsSection').then(mod => mod.TestimonialsSection), {
    loading: () => <div className="py-40 bg-sec-b h-[600px] animate-pulse" />,
    ssr: false
});

const FAQSection = dynamic(() => import('@/src/components/sections/FAQSection').then(mod => mod.FAQSection), {
    loading: () => <div className="py-40 bg-sec-b h-[400px] animate-pulse" />,
    ssr: false
});

const CTAFinalSection = dynamic(() => import('@/src/components/sections/CTAFinalSection').then(mod => mod.CTAFinalSection), {
    ssr: false
});

export function HomeClient() {
    return (
        <>
            <HeroSection />
            <LogosSection />
            <ProblemSection />
            <ApproachSection />
            <PortfolioSection />
            <TestimonialsSection />
            <CTAIntermediateSection />
            <StudioSection />
            <FAQSection />
            <CTAFinalSection />
        </>
    );
}
