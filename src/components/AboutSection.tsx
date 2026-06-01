"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const { headline, paragraphs, corePhilosophy } = portfolioData.about;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Executive Quote */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">
            Corporate Profile
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-slate-900">
            {headline}
          </h2>
          
          {/* Executive Blockquote Card */}
          <div className="border-l-4 border-l-gold pl-6 py-4 space-y-2 bg-white border border-slate-100/50 shadow-sm rounded-r-xl pr-4">
            <span className="font-serif text-4xl text-gold/30 font-black leading-none select-none block">“</span>
            <p className="font-serif text-base md:text-lg italic text-slate-800 leading-relaxed -mt-3">
              {corePhilosophy}
            </p>
          </div>
        </div>

        {/* Right Column: Bio Copy & Framework Badges */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-slate-600 font-sans text-sm md:text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>

          {/* Quick Credential Badges */}
          <div className="pt-6 border-t border-slate-150 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
              Primary Advisory Certifications & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {["IT Master Plan", "Enterprise Architecture (TOGAF)", "IT Governance (COBIT)", "IT Operating Model", "Change Readiness", "Data Analytics"].map((cred, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 border border-slate-200 bg-white hover:border-gold/30 text-xs text-slate-700 rounded-md cursor-default transition-colors duration-250 shadow-2xs hover:bg-slate-50"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
