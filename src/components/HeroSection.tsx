"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function HeroSection() {
  const { name, title, tagline, subTitle, heroMetrics, linkedIn } = portfolioData.personalInfo;

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Visual Accent Background Grid (Faint Corporate Dark Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Warm Light Radial behind metrics card */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-slate-50/50 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and Taglines */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-slate-100 bg-slate-50 text-slate-700 text-[10px] uppercase tracking-widest font-sans font-semibold">
            <span>Executive Technology Advisory</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Enterprise Architect</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-slate-900">
            {tagline}
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-sans leading-relaxed max-w-xl">
            {subTitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection("case-studies")}
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-gold hover:bg-gold-hover border border-gold hover:border-gold-hover rounded-md transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              View My Work
            </button>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-350 bg-transparent hover:bg-slate-50 rounded-md transition-all duration-200 inline-block text-center cursor-pointer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Decorative Premium Light Metric Dashboard */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          <div className="w-full max-w-sm bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/60 relative z-10 flex flex-col space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
                {name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold mt-1">
                {title}
              </p>
            </div>

            {/* Core Metrics */}
            <div className="flex flex-col space-y-6">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center">
                    <span className="text-gold font-serif text-lg font-black">0{idx + 1}</span>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-serif font-black text-slate-900 leading-none">
                      {metric.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans font-semibold mt-1">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
