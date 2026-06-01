import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | Triswiza Ariatama - IT Strategy & Transformation",
  description: "Sanitized, board-ready management consulting case studies detailing enterprise IT Master Plans, architecture blueprints, and data analytics strategy.",
  keywords: ["IT Strategy", "Enterprise Architecture", "Case Studies", "Digital Transformation", "Consulting Portfolio"],
};

interface CaseStudyDetail {
  title: string;
  industry: string;
  context: string;
  challenge: string;
  approach: string[];
  output: string[];
  impact: { metric: string; description: string }[];
}

const detailedCaseStudies: CaseStudyDetail[] = [
  {
    title: "IT Master Plan Development & Technology Roadmap",
    industry: "Transportation & Aviation",
    context: "A large transportation services enterprise with multiple operating business divisions needed to align its technology investments and legacy application replacement schedules with corporate strategic growth goals.",
    challenge: "The organization faced significant legacy systems overhead, application duplication, data silo friction, and a lack of centralized technology roadmap visibility, which slowed down customer-facing service scaling.",
    approach: [
      "Conducted current-state IT capability assessments and catalogued the core application portfolio.",
      "Identified system redundancies and integration vulnerabilities through structured workshops with key heads.",
      "Defined a multi-year, ROI-focused investment plan mapped directly to core business capabilities."
    ],
    output: [
      "Enterprise IT Master Plan Blueprint Document",
      "Phased 3-Year Technology Implementation Roadmap",
      "Corporate IT Governance and RACI Guidelines"
    ],
    impact: [
      { metric: "100% Alignment", description: "Directly mapped IT investments to the board's operational priorities." },
      { metric: "Reduced Redundancy", description: "Identified and catalogued duplicate systems for rationalisation." },
      { metric: "Execution Foundation", description: "Provided a sequenced blueprint for platform rollout." }
    ]
  },
  {
    title: "Enterprise Architecture Assessment & Target-State Blueprinting",
    industry: "Financial Services",
    context: "A financial services institution undergoing system modernization needed to catalog its active applications, define dependencies, and outline a transition blueprint to limit technical debt.",
    challenge: "Complex, undocumented point-to-point systems integrations caused severe system maintenance blocks, high operational overheads, and regulatory compliance audit risks.",
    approach: [
      "Mapped as-is application dependencies and data-flow interfaces using TOGAF 10 standards.",
      "Evaluated system architectures against security, compliance, and scalability index parameters.",
      "Collaborated with operational heads to design target-state integration principles and transition stages."
    ],
    output: [
      "TOGAF-compliant As-Is and To-Be Architecture Blueprints",
      "Application Rationalisation and Integration Policy Framework",
      "Transition Roadmap and Dependency Flowcharts"
    ],
    impact: [
      { metric: "Full Visibility", description: "Mapped all active application interfaces and structural blocks." },
      { metric: "Mitigated Risk", description: "Designed clean transition patterns to minimize operational downtime." },
      { metric: "Debt Reduction", description: "Established standards to limit future ad-hoc custom builds." }
    ]
  },
  {
    title: "Data & Analytics Strategy Implementation",
    industry: "Automotive & Retail",
    context: "An automotive retail conglomerate sought to leverage customer behavioral data and transactional pools to optimize dealer inventory models and improve operational decision-making.",
    challenge: "Siloed data storage, inconsistent analytical pipelines, and reliance on manual Excel reporting led to slow supply chain tracking, inaccurate inventory predictions, and delayed executive decisions.",
    approach: [
      "Assessed data maturity indexes and catalogued distributed storage repositories.",
      "Designed unified data warehouse ingestion criteria and standardized analytics models.",
      "Established dashboarding patterns and operational KPIs to measure performance tracking."
    ],
    output: [
      "Corporate Data & Analytics Strategy Blueprint",
      "Power BI Real-Time Dashboard Templates",
      "Data Quality Standard and Governance Guidelines"
    ],
    impact: [
      { metric: "Data-Driven Culture", description: "Enabled structured analytics workflows replacing manual reports." },
      { metric: "Inventory Optimized", description: "Improved data visibility for dealer supply chain tracking." },
      { metric: "Real-Time Tracking", description: "Deployed dashboards to enable immediate decision-making by senior leadership." }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Sticky Header */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Header Block */}
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover transition-colors"
            >
              <span>&larr; Return to Home</span>
            </Link>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 pt-2">
              Advisory Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Selected management consulting engagements and strategic advisory outcomes delivered under strict confidentiality parameters.
            </p>
          </div>

          {/* Case Studies Loop */}
          <div className="space-y-16">
            {detailedCaseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 shadow-md rounded-2xl overflow-hidden p-8 sm:p-10 space-y-8"
              >
                {/* Header Metadata */}
                <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                      {caseStudy.industry}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-wide mt-1">
                      {caseStudy.title}
                    </h2>
                  </div>
                  <span className="px-3.5 py-1.5 border border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-600 rounded-md self-start sm:self-auto">
                    Sanitized Report
                  </span>
                </div>

                {/* Structured Sections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Context, Challenge, and Approach Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                        1. Context
                      </h4>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed">
                        {caseStudy.context}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                        2. The Challenge
                      </h4>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                        3. Strategic Approach
                      </h4>
                      <ul className="space-y-2.5">
                        {caseStudy.approach.map((step, stepIdx) => (
                          <li key={stepIdx} className="text-sm text-slate-600 font-sans flex items-start space-x-3 leading-relaxed">
                            <span className="text-gold font-serif mt-0.5 select-none">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outputs and Audited Impact */}
                  <div className="lg:col-span-5 space-y-6 lg:pl-4">
                    <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold border-b border-slate-200 pb-2">
                        4. Strategic Outputs
                      </h4>
                      <ul className="space-y-2.5">
                        {caseStudy.output.map((out, outIdx) => (
                          <li key={outIdx} className="text-xs sm:text-sm text-slate-700 font-sans flex items-start space-x-2.5 leading-relaxed">
                            <span className="text-gold font-serif mt-0.5 select-none">▪</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-2xs space-y-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold border-b border-slate-100 pb-2">
                        5. Audited Business Impact
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {caseStudy.impact.map((imp, impIdx) => (
                          <div key={impIdx} className="border-l-2 border-l-gold/40 pl-4 py-0.5">
                            <div className="text-lg font-serif font-black text-slate-900 leading-none">
                              {imp.metric}
                            </div>
                            <p className="text-xs text-slate-500 font-sans mt-1">
                              {imp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Anonymity Disclaimers Info Card */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans leading-relaxed">
              Advisory Integrity: In strict compliance with active non-disclosure agreements (NDAs) signed with KPMG, PwC, and associated corporate entities, client organizational names, custom hostnames, and specific systems configurations have been sanitized or genericized.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
