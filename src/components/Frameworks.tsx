"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function Frameworks() {
  const { frameworks } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFramework = frameworks[activeIndex] || frameworks[0];

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {/* Section Header */}
      <SectionHeader
        badge="Methodologies"
        title="Consulting Frameworks & Models"
        description="Deploying industry standard models and customized blueprints to guarantee structured implementation governance."
      />

      {/* Tab Selector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4 items-start max-w-5xl mx-auto">
        {/* Left Side: Vertical Tabs */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b border-slate-100 lg:border-b-0 lg:border-r lg:border-slate-150 lg:pr-6 scrollbar-none">
          {frameworks.map((fw, idx) => {
            const isActive = activeIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex-shrink-0 text-left px-5 py-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-50 border-gold/20 text-gold shadow-sm font-semibold"
                    : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
                }`}
                id={`framework-tab-${idx}`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider">
                  {fw.abbreviation || fw.name}
                </div>
                <div className="font-serif text-sm font-bold tracking-wide mt-1 line-clamp-1">
                  {fw.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Details Pane */}
        {activeFramework && (
          <div
            className="lg:col-span-8 space-y-6 lg:pl-6 animate-fade-in"
            id={`framework-details-${activeIndex}`}
          >
            {/* Title / Description */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                Methodology Overview
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
                {activeFramework.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {activeFramework.description}
              </p>
            </div>

            {/* Checklist of Applications */}
            <div className="space-y-4 pt-4 border-t border-slate-150">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                Strategic Application & Deliverables
              </h4>
              <ul className="grid grid-cols-1 gap-3.5">
                {activeFramework.applications.map((app, appIdx) => (
                  <li
                    key={appIdx}
                    className="flex items-start space-x-3.5 text-sm text-slate-700 font-sans leading-relaxed"
                  >
                    {/* Gold Styled Checkmark */}
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border border-gold/15 bg-slate-50 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
