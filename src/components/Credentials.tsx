"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function Credentials() {
  const { education, publicationsLeadership, tools } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12">
      {/* Section Header */}
      <SectionHeader
        badge="Qualifications"
        title="Education, Publications & Tools"
        description="Structured credentials spanning academic pedigree, engineering leadership, peer-reviewed publications, and a corporate analytics tech stack."
      />

      {/* Tri-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-stretch">
        
        {/* Column 1: Academic Pedigree */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-card p-8 relative group border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide">
                Academic Pedigree
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2 relative border-l border-gold/25 pl-4 py-0.5">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                    {edu.period}
                  </span>
                  <h4 className="font-serif text-base font-bold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium font-sans">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <span className="inline-block mt-1 px-2.5 py-0.5 border border-slate-200 bg-slate-50 text-[9px] uppercase tracking-widest text-gold font-bold rounded-md">
                      {edu.details}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-0 h-[2px] bg-gold absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />
        </div>

        {/* Column 2: Research & Leadership */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-card p-8 relative group border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide">
                Publications & Leadership
              </h3>
            </div>

            <div className="space-y-5">
              {/* Publications Subhead */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                  Peer-Reviewed Works
                </h4>
                <ul className="space-y-2.5">
                  {publicationsLeadership.publications.map((pub, idx) => (
                    <li key={idx} className="text-sm text-slate-600 font-sans flex items-start space-x-2">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leadership Subhead */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                  Executive Leadership
                </h4>
                <ul className="space-y-2.5">
                  {publicationsLeadership.leadership.map((lead, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-600 font-sans flex items-start space-x-2 leading-relaxed">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{lead}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-0 h-[2px] bg-gold absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />
        </div>

        {/* Column 3: Tech & Analytics Suite */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-card p-8 relative group border border-slate-100 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide">
                Analytics & Tech Suite
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                Strategic Platforms & Tools
              </h4>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 border border-slate-200 bg-white hover:border-gold/30 hover:bg-slate-50 text-xs text-slate-700 rounded-md cursor-default transition-all duration-200 shadow-2xs"
                    title={tool.category}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-0 h-[2px] bg-gold absolute bottom-0 left-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-xl" />
        </div>

      </div>
    </div>
  );
}
