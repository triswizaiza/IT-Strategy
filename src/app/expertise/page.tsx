import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expertise | Triswiza Ariatama - IT Strategy Consultant",
  description: "Executive advisory capabilities, professional frameworks, and sanitized work examples of IT Strategy, Enterprise Architecture, Data Strategy, Cloud, and IT Governance.",
  keywords: ["IT Strategy", "Enterprise Architecture", "Data Strategy", "IT Operating Model", "Consulting Capabilities"],
};

interface ExpertiseDetail {
  title: string;
  explanation: string;
  workExample: string;
  frameworksTools: string;
}

const expertiseList: ExpertiseDetail[] = [
  {
    title: "IT Strategy",
    explanation: "Developing multi-year technology master plans and blueprints that map technology investments directly to board-level corporate growth priorities.",
    workExample: "Co-authored an IT Master Plan for a national aviation services organization to align digital investments with strategic expansion targets.",
    frameworksTools: "Business-IT Alignment Matrices, SWOT Capability Mapping, ROI Investment Planning"
  },
  {
    title: "Enterprise Architecture",
    explanation: "Modeling conceptual as-is topologies and target-state architecture layers across application, business, and data domains to minimize technical debt.",
    workExample: "Mapped active integrations and point-to-point application landscapes for a financial institution to prepare for system modernization.",
    frameworksTools: "TOGAF 10 Framework, Application Rationalisation Indices, Capability Mapping"
  },
  {
    title: "Data Strategy",
    explanation: "Establishing unified data governance, storage cataloguing, quality guidelines, and analytical metrics to transform raw data into operational insights.",
    workExample: "Designed corporate data governance guidelines and ingestion workflows for an automotive retailer to optimize customer journey metrics.",
    frameworksTools: "DAMA-DMBOK Framework, RFM Segmentation, Power BI, SQL, Python"
  },
  {
    title: "Cloud Strategy",
    explanation: "Evaluating workload migration profiles, SaaS vendor parameters, and hybrid infrastructure structures to reduce legacy hosting overheads.",
    workExample: "Assessed application migration portfolios to define transition stages for moving legacy workflows to highly available AWS SaaS components.",
    frameworksTools: "AWS Cloud Adoption Framework (CAF), Workload Assessment matrices"
  },
  {
    title: "IT Governance",
    explanation: "Structuring incident response standards, change control parameters, and RACI matrices to guarantee maximum systems availability and risk mitigation.",
    workExample: "Managed ServiceNow incident workflows and operational audits for a large user base during service delivery engagements.",
    frameworksTools: "COBIT 2019, ITIL 4 Service Operations, RACI Matrices, ServiceNow"
  },
  {
    title: "Digital Transformation",
    explanation: "Guiding organizations through system rollouts, operational onboarding, change readiness audits, and stakeholder alignment to accelerate systems adoption.",
    workExample: "Facilitated change impact assessments and user onboarding protocols for a cross-departmental digital systems rollout.",
    frameworksTools: "Stakeholder Impact Analysis, Adoption KPIs, Communications Plans"
  },
  {
    title: "Technology Roadmap",
    explanation: "Sequencing capital and operational technology investments into logical, prioritised implementation phases to limit deployment dependencies.",
    workExample: "Structured a sequenced ERP replacement roadmap outlining critical path timelines and systems decommissioning schedules.",
    frameworksTools: "Critical Path Method, RAID Logs (Risks, Assumptions, Issues, Dependencies)"
  },
  {
    title: "IT Operating Model",
    explanation: "Designing internal IT operating structures and workflows to transition traditional siloed groups into high-performing, agile engineering units.",
    workExample: "Aligned internal helpdesk and incident tracking structures with agile delivery metrics to improve service turnaround parameters.",
    frameworksTools: "Agile Scaling Frameworks, Scrum, Service Level Agreements (SLAs)"
  }
];

export default function ExpertisePage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Sticky Header */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Header block */}
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover transition-colors"
            >
              <span>&larr; Return to Home</span>
            </Link>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 pt-2">
              Advisory Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Exhaustive capabilities grid detailing advisory services, industry-standard models, and sanitized real-world consulting outcomes.
            </p>
          </div>

          {/* Grids block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {expertiseList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                {/* Header Title */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-md bg-slate-50 border border-slate-150 flex items-center justify-center text-[10px] font-serif font-black text-gold">
                      0{idx + 1}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold transition-colors duration-200">
                      {item.title}
                    </h2>
                  </div>
                  
                  {/* Short Explanation */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    {item.explanation}
                  </p>
                </div>

                {/* Split Details Container */}
                <div className="space-y-4 pt-4 border-t border-slate-100/80">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                      Sanitized Example of Work
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                      {item.workExample}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1.5">
                    <h4 className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">
                      Relevant Frameworks or Tools
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
                      {item.frameworksTools}
                    </p>
                  </div>
                </div>

                {/* Subtle visual bottom border */}
                <div className="w-0 h-[2px] bg-gold absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl" />
              </div>
            ))}
          </div>

          {/* Anonymity Note */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans leading-relaxed">
              Advisory Integrity: Consistent with professional standards at KPMG and PwC, case engagement examples are genericized to safeguard operational parameters and corporate configurations under active NDAs.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
