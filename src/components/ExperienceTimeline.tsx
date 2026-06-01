"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {/* Section Header */}
      <SectionHeader
        badge="Career Milestones"
        title="Professional Engagements"
        description="Proven history of technology operations management, enterprise architecture assessments, and IT Strategy consulting at global firms."
      />

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto pt-6">
        {/* Central Vertical Line (visible on desktop/tablet, shifted left on mobile) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200" />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {experience.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                id={`experience-item-${idx}`}
              >
                {/* Timeline Connector Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5.5px] top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-white z-10 timeline-glow" />

                {/* Left/Right Column: Sized to half on desktop */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                  {/* Outer Wrapper for alignment */}
                  <div className={`space-y-4 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    
                    {/* Period Badge */}
                    <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-gold text-xs font-semibold tracking-wider rounded-md font-sans">
                      {item.period}
                    </span>

                    {/* Role & Org */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-wide">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-700 font-medium">
                        {item.organization}
                      </p>
                      <p className={`text-xs text-slate-400 flex items-center justify-start gap-1.5 mt-1 ${
                        isEven ? "md:justify-start" : "md:justify-end"
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{item.location}</span>
                      </p>
                    </div>

                    {/* Description */}
                    <p className={`text-sm text-slate-500 font-sans leading-relaxed max-w-md ${isEven ? "" : "md:ml-auto"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Opposite Column: High-Impact Bullet Points */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8 mt-4 md:mt-0">
                  <div className="glass-card p-6 rounded-xl border border-slate-100/80 shadow-xs space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold border-b border-slate-100 pb-2">
                      Strategic Deliverables & ROI Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {item.achievements.map((ach, bulletIdx) => (
                        <li key={bulletIdx} className="text-xs sm:text-sm text-slate-600 font-sans flex items-start space-x-3 leading-relaxed">
                          <span className="text-gold font-serif mt-0.5 select-none">▪</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
