"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

interface IconProps {
  name: string;
  className?: string;
}

// Stylized corporate SVGs for enterprise strategy (Deep Navy Accent)
function StrategyIcon({ name, className = "h-6 w-6 text-gold" }: IconProps) {
  switch (name) {
    case "Compass":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" />
        </svg>
      );
    case "Layers":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17L12 22L22 17" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12L12 17L22 12" />
        </svg>
      );
    case "Cpu":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9H15V15H9V9Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case "ShieldCheck":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "Network":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="16" y="16" width="6" height="6" rx="1" strokeWidth={1.5} />
          <rect x="2" y="16" width="6" height="6" rx="1" strokeWidth={1.5} />
          <rect x="9" y="2" width="6" height="6" rx="1" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8M5 16v-4h14v4" />
        </svg>
      );
    case "Activity":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12H18L15 21L9 3L6 12H2" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        </svg>
      );
  }
}

export default function ExpertiseGrid() {
  const { expertise } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {/* Section Header */}
      <SectionHeader
        badge="Core Focus Areas"
        title="Strategic Advisory Capabilities"
        description="Deploying structured architecture blueprints, IT due diligence frameworks, and digital transformation roadmaps to bridge the gap between corporate planning and engineering excellence."
      />

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-8 group flex flex-col justify-between"
            id={`expertise-card-${idx}`}
          >
            <div className="space-y-5">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center group-hover:border-gold/15 group-hover:bg-gold/5 transition-all duration-300">
                <StrategyIcon name={item.iconName} className="h-5 w-5 text-gold group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Title & Body */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Subtle decorative bottom border line */}
            <div className="w-0 h-[2px] bg-gold absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
