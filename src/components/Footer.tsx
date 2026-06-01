"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 md:py-16 relative overflow-hidden">
      {/* Subtle light background element */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start pb-12 border-b border-slate-150">
          {/* Logo & Corporate Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg font-bold tracking-wider text-slate-900">
                {portfolioData.personalInfo.name.toUpperCase()} ADVISORY
              </span>
              <span className="text-gold font-serif text-lg font-bold">.</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-sans leading-relaxed">
              {portfolioData.personalInfo.tagline}
            </p>
            <div className="pt-2">
              <a
                href={portfolioData.personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest text-gold hover:text-gold-hover transition-colors font-sans font-bold inline-flex items-center gap-2 cursor-pointer"
                id="footer-linkedin"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile &rarr;</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-700 font-bold font-sans">
              Expertise & Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500">
              {portfolioData.expertise.slice(0, 3).map((exp, idx) => (
                <li key={idx} className="hover:text-gold transition-colors duration-200 cursor-default">
                  {exp.title}
                </li>
              ))}
              <li className="hover:text-gold transition-colors duration-200 cursor-default">IT Governance & Audits</li>
            </ul>
          </div>

          {/* Location & Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-slate-700 font-bold font-sans">
              Professional Engagement
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-500">
              <p className="flex items-center space-x-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Based in {portfolioData.personalInfo.location} | Globally Available</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hover:text-gold transition-colors duration-200">{portfolioData.personalInfo.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright, Legal Disclaimer and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-[11px] text-slate-500 space-y-2 text-center sm:text-left">
            <p>
              &copy; {currentYear} {portfolioData.personalInfo.name} Advisory Services. All Rights Reserved.
            </p>
            <p className="max-w-xl text-[9px] text-slate-400 leading-normal font-sans uppercase tracking-wider">
              Advisory Disclaimer: Case studies represent actual consulting projects delivered. 
              Client organization names and highly sensitive database configurations are genericized 
              or anonymized in accordance with active non-disclosure agreements (NDAs).
            </p>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-2 px-4 py-2 border border-slate-200 hover:border-gold/30 hover:bg-slate-50 text-[10px] text-slate-500 hover:text-gold uppercase tracking-wider transition-all duration-300 rounded-md cursor-pointer"
            aria-label="Scroll back to top"
            id="back-to-top-button"
          >
            <span>Top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
