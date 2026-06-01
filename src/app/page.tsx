import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudies from "@/components/CaseStudies";
import Frameworks from "@/components/Frameworks";
import Credentials from "@/components/Credentials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Primary Sticky Header */}
      <Navigation />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* Section 2: About Philosophy */}
        <section id="about" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-b border-slate-100">
          <AboutSection />
        </section>

        {/* Section 3: Core Consulting Expertise */}
        <section id="expertise" className="py-20 md:py-28 relative">
          <ExpertiseGrid />
        </section>

        {/* Section 4: Professional Experience Timeline */}
        <section id="experience" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-b border-slate-100">
          <ExperienceTimeline />
        </section>

        {/* Section 5: High-Impact Case Studies */}
        <section id="case-studies" className="py-20 md:py-28 relative">
          <CaseStudies />
        </section>

        {/* Section 6: Standard & Proprietary Frameworks */}
        <section id="frameworks" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-b border-slate-100">
          <Frameworks />
        </section>

        {/* Section 7: Academic and Leadership Credentials */}
        <section id="credentials" className="py-20 md:py-28 relative">
          <Credentials />
        </section>

        {/* Section 8: Consultation Booking & Contact Lead Capture */}
        <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-b border-slate-100">
          <ContactForm />
        </section>
      </main>

      {/* Global Footer & NDAs Disclaimer */}
      <Footer />
    </div>
  );
}

