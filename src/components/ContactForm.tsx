"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ContactForm() {
  const { email, location, linkedIn } = portfolioData.personalInfo;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12 bg-transparent">
      {/* Section Header */}
      <SectionHeader
        badge="Engagement"
        title="Initiate a Consultation"
        description="Connect directly to discuss digital strategy advisory, enterprise architecture planning, or technology alignment initiatives."
      />

      <div className="max-w-4xl mx-auto pt-4">
        {/* Direct Email Consultation Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 p-8 sm:p-12 space-y-10 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-slate-50 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side: Call to Action */}
            <div className="md:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-slate-100">
                Direct Communication
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Let&apos;s discuss your organization&apos;s technology goals.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
                To prioritize confidentiality and direct collaboration, the inquiry form has been streamlined. You can initiate an engagement or schedule a discovery briefing by emailing me directly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`mailto:${email}?subject=IT%20Strategy%20%26%20Consultation%20Inquiry`}
                  className="px-6 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2.5 cursor-pointer"
                  id="email-direct-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-6 py-3.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 flex items-center justify-center space-x-2.5 cursor-pointer relative min-w-[160px]"
                  id="email-copy-btn"
                >
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-emerald-600 animate-scale-up" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-600">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right side: Key Metadata & Credentials */}
            <div className="md:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-6">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Consultation Channels
                </h4>
                
                {/* Email details */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Email Inquiry</span>
                  <p className="text-sm font-medium text-slate-800 break-all select-all font-mono">
                    {email}
                  </p>
                </div>

                {/* LinkedIn Details */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">LinkedIn Connect</span>
                  <div>
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-gold uppercase tracking-wider group transition-colors cursor-pointer"
                    >
                      <svg className="h-4 w-4 fill-current text-slate-600 group-hover:text-gold transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect Profile</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1 pt-2 border-t border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Headquarters</span>
                  <p className="text-xs text-slate-600 font-medium">
                    {location}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Supporting Global Delivery & Hybrid Models
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prep Guidelines Checklist */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h4 className="font-serif text-base font-bold text-slate-900">
                Recommended Consultation Details
              </h4>
              <p className="text-[11px] text-slate-400 font-sans italic">
                Include these parameters to ensure an impactful initial alignment briefing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2 p-4 bg-slate-50/50 rounded-lg border border-slate-100 hover:border-slate-200 transition-all duration-200">
                <div className="flex items-center space-x-2 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">1</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Business Context</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-7">
                  A brief outline of your organization, industry sector, and core operational scale.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-slate-50/50 rounded-lg border border-slate-100 hover:border-slate-200 transition-all duration-200">
                <div className="flex items-center space-x-2 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">2</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Technology Friction</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-7">
                  Key core architectural friction, compliance goals, or system integration hurdles faced.
                </p>
              </div>

              <div className="space-y-2 p-4 bg-slate-50/50 rounded-lg border border-slate-100 hover:border-slate-200 transition-all duration-200">
                <div className="flex items-center space-x-2 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">3</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Strategic Horizons</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-7">
                  Your desired engagement timeframe, milestones, or target digital maturity objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

