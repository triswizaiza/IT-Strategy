"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "case-studies", label: "Case Studies" },
  { id: "frameworks", label: "Frameworks" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      // Track current active section on homepage
      const scrollPosition = window.scrollY + 120; // Offset for navbar
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      e.preventDefault();
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const offset = 80; // height of sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href={isHomePage ? "#home" : "/#home"}
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center space-x-2 group"
          id="nav-logo"
        >
          <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-slate-900">
            {portfolioData.personalInfo.name.toUpperCase()}
          </span>
          <span className="text-gold font-serif text-lg md:text-xl font-black">.</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-sans pl-2 border-l border-slate-200 hidden sm:inline-block">
            Strategic IT Advisory
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={isHomePage ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:text-gold ${
                isHomePage && activeSection === item.id
                  ? "text-gold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover border border-gold hover:border-gold-hover rounded-md transition-all duration-200 shadow-sm shadow-gold/10"
          >
            Consultation
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-100 transition-all duration-300 ease-in-out shadow-lg ${
          mobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={isHomePage ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm font-semibold uppercase tracking-wider border-b border-slate-50 pb-2 ${
                isHomePage && activeSection === item.id ? "text-gold pl-2 border-l-2 border-l-gold" : "text-slate-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleNavClick(e, "contact")}
            className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-hover rounded-md transition-all duration-200"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
