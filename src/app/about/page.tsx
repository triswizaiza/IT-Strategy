import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Triswiza Ariatama - IT Strategy Consultant",
  description: "Professional profile, consulting philosophy, capabilities, and academic credentials of Triswiza Ariatama, IT Strategy & Transformation Consultant.",
  keywords: ["IT Strategy", "Enterprise Architecture", "Consultant Biography", "Professional Profile", "Education"],
};

export default function AboutPage() {
  const focusAreas = [
    { title: "IT Strategy & Roadmaps", desc: "Formulating multi-year technology blueprints that align with corporate growth and transform operational models." },
    { title: "Enterprise Architecture", desc: "Modeling as-is and to-be architecture layers across business, application, and data domains to minimize technical debt." },
    { title: "IT Due Diligence", desc: "Assessing system maturity indexes, software licenses, operational control gaps, and technology integration risks." },
    { title: "Change Management", desc: "Facilitating change readiness, stakeholder workshops, impact assessments, and adoption tracking for smooth rollouts." },
    { title: "Data & Analytics Strategy", desc: "Designing unified data warehouses, analytical dashboards, and metrics tracking to optimize decision-making." },
    { title: "Platform Implementation", desc: "Conducting business analysis, detailed system requirements, solution evaluations, and vendor alignment audits." }
  ];

  const approaches = [
    { title: "Business-Value Driven Alignment", desc: "Technology should never exist for its own sake. Every system migration, application rationalization, or dashboard implementation must directly support a core business capability, recover overhead, or mitigate compliance risk." },
    { title: "Structured & Data-Backed Analysis", desc: "Leveraging rigorous analytics tools (Python, SQL, Alteryx) and governance frameworks (TOGAF, COBIT, ITIL) to audit operational systems, replacing guesswork with quantitative benchmarks." },
    { title: "Executive-Level Communication", desc: "Translating complex point-to-point infrastructure configurations and technical debt metrics into simple, high-impact executive deliverables that build board alignment and ease decision-making." }
  ];

  const capabilities = [
    "IT Master Plan Development", "Enterprise Architecture Mapping", "TOGAF 10 Framework", "COBIT IT Governance", 
    "IT Operating Models", "Application Portfolio Assessment", "Business-IT Alignment", "Change Readiness Audits", 
    "Stakeholder Impact Analysis", "RAID Risk Management", "Data Analytics (Python/SQL)", "Power BI/Tableau", "Root-Cause Analysis"
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Back & Title Block */}
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover transition-colors"
            >
              <span>&larr; Return to Home</span>
            </Link>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 pt-2">
              Professional Biography
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              IT Strategy & Transformation Consultant bridging the gap between high-level business priorities and structured technology execution.
            </p>
          </div>

          {/* Grid Layout: Biography Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Biography Summary */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 tracking-wide border-b border-slate-100 pb-3">
                Profile Summary
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                <p>
                  I am an IT Strategy & Transformation Consultant with 3 years of experience supporting business and technology transformation initiatives. My work focuses on translating business priorities into structured IT strategies, enterprise architecture designs, transformation roadmaps, governance frameworks, and practical implementation plans.
                </p>
                <p>
                  My consulting background includes experience across <strong>KPMG</strong> and <strong>PwC</strong> Indonesia. I have supported high-profile engagements involving IT Master Plan development, application portfolio assessments, IT due diligence audits, and change management workflows across aviation, financial services, and automotive sectors.
                </p>
                <p>
                  I combine structured problem solving, stakeholder workshops, data-driven analysis, and clear executive-level communication to help organizations eliminate redundancies, establish strong operational controls, and scale technology systems safely.
                </p>
              </div>
            </div>

            {/* Right Approach Philosophy */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-5">
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide border-b border-slate-200 pb-3">
                How I Approach Work
              </h3>
              <div className="space-y-4">
                {approaches.map((app, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold text-gold font-sans uppercase tracking-wider">
                      {app.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Focus Areas Grid */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-slate-900 tracking-wide border-b border-slate-100 pb-3">
              Consulting Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="bg-white border border-slate-100 shadow-2xs p-6 rounded-xl space-y-3">
                  <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-gold transition-colors duration-200">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Selected Capabilities Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Education column */}
            <div className="lg:col-span-6 bg-white border border-slate-100 p-8 rounded-xl shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-wide border-b border-slate-100 pb-3">
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="space-y-1.5 border-l-2 border-l-gold pl-4 py-0.5">
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">
                      Feb 2024 – Dec 2025
                    </span>
                    <h4 className="font-serif text-base font-bold text-slate-900">
                      M.Sc. Information Technology
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Universitas Indonesia
                    </p>
                  </div>

                  <div className="space-y-1.5 border-l-2 border-l-gold pl-4 py-0.5">
                    <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">
                      Aug 2018 – Sep 2022
                    </span>
                    <h4 className="font-serif text-base font-bold text-slate-900">
                      B.Eng. Telecommunications
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Telkom University
                    </p>
                    <span className="inline-block px-2.5 py-0.5 border border-slate-200 bg-slate-50 text-[9px] uppercase tracking-widest text-gold font-bold rounded-md mt-1">
                      Graduated Cum Laude
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Capabilities column */}
            <div className="lg:col-span-6 bg-white border border-slate-100 p-8 rounded-xl shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-wide border-b border-slate-100 pb-3">
                  Selected Capabilities
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {capabilities.map((cap, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 border border-slate-200 bg-white hover:border-gold/30 hover:bg-slate-50 text-xs text-slate-700 rounded-md cursor-default transition-all duration-200 shadow-2xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
