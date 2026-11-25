import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedWork from '../components/home/FeaturedWork';
import WhyDevArchive from '../components/home/WhyDevArchive';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ToolsMarquee from '../components/home/ToolsMarquee';
import FinalCtaBand from '../components/home/FinalCtaBand';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dev Archive Lab | Full Stack, Design &amp; AI Automation Studio</title>
        <link rel="canonical" href="https://devarchivelab.com/" />
        <meta name="description" content="We build websites, apps and AI systems that win you clients. Led by founder Victoria, remote worldwide. 100% Job Success on Upwork, 5.0 client rating." />
        <meta property="og:title" content="Dev Archive Lab | Full Stack, Design &amp; AI Automation Studio" />
        <meta property="og:description" content="We build websites, apps and AI systems that win you clients. Direct 1-on-1 with founder Victoria, backed by a trusted network of specialists." />
        <meta property="og:url" content="https://devarchivelab.com/" />
        <meta property="og:image" content="https://devarchivelab.com/og-preview.png" />
        <meta name="twitter:title" content="Dev Archive Lab | Full Stack, Design &amp; AI Automation Studio" />
        <meta name="twitter:description" content="We build websites, apps and AI systems that win you clients." />
        <meta name="twitter:image" content="https://devarchivelab.com/og-preview.png" />
      </Helmet>

      <div className="relative">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trust Strip with Animated Counters */}
        <TrustStrip />

        {/* 3. Services Overview (5 Grouped Cards) */}
        <ServicesOverview />

        {/* 4. Featured Work (3 Concept Projects) */}
        <FeaturedWork />

        {/* 5. Why Dev Archive Lab (4 Benefit Cards) */}
        <WhyDevArchive />

        {/* 6. Process (4 Animated Steps) */}
        <ProcessSection />

        {/* 7. Real Upwork Testimonials (4 Reviews) */}
        <TestimonialsSection />

        {/* 8. Tools & Platforms Infinite Marquee */}
        <ToolsMarquee />

        {/* 9. Final Call to Action Band */}
        <FinalCtaBand />
      </div>
    </>
  );
}
