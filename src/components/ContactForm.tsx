"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ContactForm() {
  const { email, location, linkedIn } = portfolioData.personalInfo;
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    engagement: "Strategy Advisory",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API request for premium lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        org: "",
        engagement: "Strategy Advisory",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12 bg-transparent">
      {/* Section Header */}
      <SectionHeader
        badge="Engagement"
        title="Initiate a Consultation"
        description="Schedule a discovery call or request a custom digital maturity evaluation for your enterprise."
      />

      {/* Grid: Instructions vs Lead Capture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-5xl mx-auto pt-4">
        
        {/* Left Side: Engagement Guidelines & Direct CTAs */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 tracking-wide">
              Engagement Parameters
            </h3>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              Let’s connect to discuss IT strategy, enterprise architecture, data strategy, or digital transformation opportunities. Initial consultation is complimentary and focused on determining architectural and strategic alignment.
            </p>
          </div>

          {/* Direct Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="flex-1 px-5 py-3 border border-slate-200 hover:border-gold/30 bg-white hover:bg-slate-50 text-slate-700 hover:text-gold text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 shadow-2xs flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Inquiry</span>
            </a>
            
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-5 py-3 border border-slate-200 hover:border-gold/30 bg-white hover:bg-slate-50 text-slate-700 hover:text-gold text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 shadow-2xs flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn Connect</span>
            </a>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0 w-8 h-8 border border-slate-100 bg-slate-50 flex items-center justify-center rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                  Corporate Office
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium">
                  {location} | Global Remote Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 relative">
          
          {submitSuccess ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in" id="contact-success-state">
              <div className="w-14 h-14 rounded-full border border-gold/15 bg-slate-50 flex items-center justify-center text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide">
                Submission Received Successfully
              </h3>
              <p className="text-xs text-slate-500 font-sans max-w-sm">
                Thank you. I have received your request parameters and will respond with a formal 
                scheduling proposal within one business day.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-800 border border-slate-200 rounded-md hover:bg-slate-50 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-inquiry-form">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-200 focus:border-gold rounded-md px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="example@organization.com"
                    className="w-full bg-white border border-slate-200 focus:border-gold rounded-md px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Org & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="org-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="org-input"
                    value={formState.org}
                    onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                    placeholder="e.g. Enterprise Ltd"
                    className="w-full bg-white border border-slate-200 focus:border-gold rounded-md px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="engagement-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                    Consultation Type
                  </label>
                  <select
                    id="engagement-input"
                    value={formState.engagement}
                    onChange={(e) => setFormState({ ...formState, engagement: e.target.value })}
                    className="w-full bg-white border border-slate-200 focus:border-gold rounded-md px-4 py-[11px] text-sm text-slate-800 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Strategy Advisory">IT Strategy & Roadmaps</option>
                    <option value="Enterprise Architecture">Enterprise Architecture Mapping</option>
                    <option value="Cloud Migration">Cloud Infrastructure Advisory</option>
                    <option value="Compliance Audit">IT Governance & Audits</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message-input" className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                  Project Scope / Core Friction *
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline the core friction points or technology requirements your organization is facing..."
                  className="w-full bg-white border border-slate-200 focus:border-gold rounded-md px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover border border-gold hover:border-gold-hover rounded-md transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                id="submit-inquiry-button"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting Request...</span>
                  </>
                ) : (
                  <span>Send Consultation Request</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
