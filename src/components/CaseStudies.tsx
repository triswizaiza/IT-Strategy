"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function CaseStudies() {
  const { caseStudies } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(caseStudies[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {/* Section Header */}
      <SectionHeader
        badge="Proven Outcomes"
        title="Client Case Studies"
        description="Quantifiable results delivered for mid-market and enterprise scale organizations under strict confidentiality standards."
      />

      {/* Accordion / Selector Layout */}
      <div className="max-w-5xl mx-auto space-y-4 pt-4">
        {caseStudies.map((study) => {
          const isExpanded = expandedId === study.id;

          return (
            <div
              key={study.id}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "bg-white border-slate-200 shadow-md" : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-xs"
              }`}
              id={`case-study-${study.id}`}
            >
              {/* Header Bar Toggle */}
              <button
                onClick={() => toggleExpand(study.id)}
                className="w-full px-6 py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between text-left space-y-2.5 md:space-y-0 cursor-pointer"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                    {study.clientIndustry}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 tracking-wide mt-1 transition-colors duration-200">
                    {study.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-4 self-start md:self-auto">
                  {/* Quantitative outcome highlights shown in header */}
                  <div className="hidden sm:flex items-center space-x-2.5">
                    {study.outcomes.slice(0, 2).map((out, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-gold font-bold bg-slate-50 border border-slate-200 rounded-md"
                      >
                        {out.metric}
                      </span>
                    ))}
                  </div>
                  
                  {/* Chevron Toggle Icon */}
                  <span className="p-1 rounded-full border border-slate-200 text-slate-400 bg-slate-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4.5 w-4.5 transform transition-transform duration-300 ${isExpanded ? "rotate-180 text-gold" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Expandable Content Block */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-[1000px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="p-6 md:p-8 space-y-8 bg-slate-50/20">
                  {/* Main Grid: Description vs Metrics */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Details Column */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                          Client Situation & Challenge
                        </h4>
                        <p className="text-sm text-slate-600 font-sans leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">
                          Strategic Advisory & Execution
                        </h4>
                        <p className="text-sm text-slate-600 font-sans leading-relaxed">
                          {study.strategy}
                        </p>
                      </div>
                    </div>

                    {/* Metrics/Outcomes Column */}
                    <div className="lg:col-span-5 space-y-4 bg-white border border-slate-100 p-6 rounded-xl shadow-2xs">
                      <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold border-b border-slate-100 pb-2">
                        Audited Business Outcomes
                      </h4>
                      <div className="grid grid-cols-1 gap-5">
                        {study.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start space-x-4 border-l-2 border-l-gold/40 pl-4 py-1">
                            <div>
                              <div className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-none">
                                {outcome.metric}
                              </div>
                              <p className="text-xs text-slate-500 font-sans mt-1">
                                {outcome.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
