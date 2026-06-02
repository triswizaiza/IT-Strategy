export interface ProjectOutcome {
  metric?: string; // e.g., "100% Alignment", "Maturity Score"
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  strategy: string;
  outcomes: ProjectOutcome[];
}

export interface Framework {
  name: string;
  abbreviation?: string; // e.g., "TOGAF", "COBIT"
  description: string;
  applications: string[];
}

export interface ExpertiseItem {
  title: string;
  description: string;
  iconName: "Compass" | "Layers" | "Cpu" | "ShieldCheck" | "Network" | "Activity";
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface PublicationLeadership {
  publications: string[];
  leadership: string[];
}

export interface ToolItem {
  name: string;
  category: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Triswiza Ariatama",
    title: "IT Strategy & Transformation Consultant",
    tagline: "Helping organisations align technology, enterprise architecture, data, and operating models with business priorities.",
    subTitle: "I am an IT Strategy & Transformation Consultant with experience across KPMG and PwC, supporting technology strategy, enterprise architecture, IT due diligence, change management, and data-driven transformation initiatives across aviation, financial services, and automotive sectors.",
    email: "triswizaiza@gmail.com",
    linkedIn: "https://www.linkedin.com/in/triswizaariatama",
    whatsApp: "628123456789", // Format: Kode internasional tanpa + atau 0 (contoh: 628123456789)
    location: "Jakarta, Indonesia",
    calendlyLink: "https://calendly.com", // Placeholder
    resumeUrl: "#", // Placeholder
    heroMetrics: [
      { value: "3+", label: "Years Consulting Experience" },
      { value: "3", label: "Sectors Covered" },
      { value: "2", label: "Global Consulting Firms" }
    ]
  },
  
  about: {
    headline: "Aligning Enterprise Technology with Corporate Strategy",
    paragraphs: [
      "I am an IT Strategy & Transformation Consultant with 3 years of experience supporting business and technology transformation initiatives. My work focuses on translating business priorities into structured IT strategies, enterprise architecture designs, transformation roadmaps, governance frameworks, and practical implementation plans.",
      "I have supported engagements involving IT Master Plan development, application portfolio assessment, enterprise architecture, IT due diligence, change management, platform implementation, and technology operations. My approach combines structured problem solving, stakeholder alignment, data-driven analysis, and clear executive-level communication."
    ],
    corePhilosophy: "Pragmatic technology alignment directly drives organizational capabilities, mitigates compliance risk, and unlocks growth."
  },

  expertise: [
    {
      title: "IT Strategy & Transformation",
      description: "Developing IT master plans, transformation roadmaps, strategic initiatives, and governance frameworks aligned with business priorities.",
      iconName: "Compass"
    },
    {
      title: "Enterprise Architecture",
      description: "Designing as-is and to-be architecture across business, application, data, and technology domains to support organisational transformation.",
      iconName: "Layers"
    },
    {
      title: "IT Due Diligence",
      description: "Assessing IT maturity, control gaps, integration risks, technology capabilities, and value creation opportunities to support strategic decision-making.",
      iconName: "ShieldCheck"
    },
    {
      title: "Change Management",
      description: "Supporting change readiness, stakeholder impact assessment, adoption tracking, communication planning, and business-IT alignment during transformation.",
      iconName: "Network"
    },
    {
      title: "Data & Analytics",
      description: "Using analytics, dashboards, and structured data analysis to generate insights for decision-making, performance tracking, and operational governance.",
      iconName: "Activity"
    },
    {
      title: "Platform Implementation & Business Analysis",
      description: "Supporting solution design, business requirements, stakeholder workshops, and delivery alignment for enterprise platform implementation.",
      iconName: "Cpu"
    }
  ] as ExpertiseItem[],

  experience: [
    {
      period: "Jun 2024 – Present",
      role: "Consultant – IT Strategy & Transformation",
      organization: "KPMG Indonesia",
      location: "Jakarta, Indonesia",
      description: "Supported strategic technology transformation engagements across aviation, financial services, and automotive sectors. Work included assessing application portfolios, identifying integration gaps and redundancies, designing enterprise architecture, defining transformation roadmaps, and preparing recommendations for senior stakeholders.",
      achievements: [
        "Led key components of IT Master Plan and multi-year transformation roadmap development for international clients.",
        "Conducted detailed application portfolio assessments, mapping current-state architectures to resolve redundancies.",
        "Supported IT due diligence work, identifying compliance risks and mapping operational system maturities.",
        "Facilitated stakeholder change readiness workshops to ease transitions and ensure smooth solution onboarding.",
        "Prepared detailed enterprise architecture deliverables using industry-standard frameworks."
      ]
    },
    {
      period: "Dec 2022 – Mar 2024",
      role: "Technology Operations Analyst",
      organization: "PwC Indonesia",
      location: "Jakarta, Indonesia",
      description: "Supported enterprise technology operations for a large user base, coordinating with global technology teams to resolve infrastructure and application issues. Developed dashboards and operational insights to improve project delivery tracking and senior leadership decision-making.",
      achievements: [
        "Managed ServiceNow workflows, leading request, incident, and change management procedures to ensure system continuity.",
        "Conducted root-cause analysis audits for operational discrepancies, reducing recurrence thresholds by key margins.",
        "Built comprehensive Power BI dashboards, providing real-time data to senior leadership to optimize technology delivery.",
        "Guided international teams through system maintenance schedules and global governance standard compliance."
      ]
    },
    {
      period: "May 2022 – Aug 2022",
      role: "Business Intelligence Intern",
      organization: "PT Cerdas Digital Nusantara",
      location: "Jakarta, Indonesia",
      description: "Conducted RFM segmentation and sentiment analysis to generate customer retention insights and built analytics dashboards to support customer journey analysis.",
      achievements: [
        "Analysed active customer data pools using Python to construct accurate RFM behavioral segmentations.",
        "Built interactive dashboards in Google Data Studio to present clear customer journey insights.",
        "Utilised sentiment analysis methods to evaluate feedback, supplying inputs for user acquisition strategies."
      ]
    }
  ] as ExperienceItem[],

  caseStudies: [
    {
      id: "it-master-plan-development",
      title: "IT Master Plan Development & Sequenced Roadmap Mapping",
      clientIndustry: "Transportation & Aviation",
      challenge: "An organisation needed a structured multi-year technology roadmap to align complex IT initiatives and capital investments with overarching corporate business priorities.",
      strategy: "Assessed current-state IT capabilities, thoroughly reviewed application portfolios, identified integration gaps and structural redundancies, and sequenced technology initiatives into an ROI-driven transformation roadmap.",
      outcomes: [
        { metric: "100% Alignment", description: "Directly mapped each proposed IT investment to core business strategy deliverables." },
        { metric: "Multi-Year Roadmap", description: "Defined clear, phased initiatives spanning systems, data assets, and organization capabilities." },
        { metric: "Reduced Overlaps", description: "Eliminated application redundancies to optimize the digital investment budget." }
      ]
    },
    {
      id: "enterprise-architecture-assessment",
      title: "Enterprise Architecture Assessment & Target-State Blueprinting",
      clientIndustry: "Financial Services",
      challenge: "An organisation required better visibility and structural alignment of its business, application, data, and technology landscape to support massive transformation planning.",
      strategy: "Developed comprehensive as-is and to-be architecture views, analysed technical application dependencies, identified operational capability gaps, and mapped technology initiatives directly to business capabilities.",
      outcomes: [
        { metric: "Clear Architecture", description: "Established full architecture diagrams across application, business, and data domains." },
        { metric: "Rationalised Assets", description: "Supplied actionable insights for application rationalisation and legacy wind-downs." },
        { metric: "Transition Plan", description: "Formulated transition states to guide architecture migration with minimal business interruption." }
      ]
    },
    {
      id: "it-due-diligence-assessment",
      title: "Comprehensive IT Due Diligence & Maturity Risk Assessment",
      clientIndustry: "Automotive & Manufacturing",
      challenge: "A corporate holding portfolio required an exhaustive risk assessment of IT maturity, legacy dependencies, and technology value creation opportunities ahead of major investment decisions.",
      strategy: "Structured a detailed IT maturity and risk assessment framework covering IT governance compliance, system security controls, integration capabilities, and infrastructure scalability.",
      outcomes: [
        { metric: "Detailed Risks", description: "Identified and catalogued core system integration risks and post-transaction exposure." },
        { metric: "Maturity Benchmarks", description: "Scored systems and operational workflows against international COBIT and ITIL standards." },
        { metric: "Value Roadmap", description: "Supplied strategic synergy and modernization recommendations for executive decision-makers." }
      ]
    },
    {
      id: "change-management-digital-transformation",
      title: "Change Management Strategy & Stakeholder Adoption Support",
      clientIndustry: "Enterprise Operations",
      challenge: "A major digital transformation initiative required robust stakeholder alignment and user adoption tracking to minimize friction and prevent productivity loss during platform rollout.",
      strategy: "Assessed change readiness across departments, mapped specific stakeholder impacts, defined communication intervention plans, and established ongoing adoption tracking metrics.",
      outcomes: [
        { metric: "Smooth Rollout", description: "Successfully supported system transitions, significantly mitigating user friction and operational delays." },
        { metric: "Active Adoption", description: "Tracked key adoption KPIs, proactively resolving usage bottlenecks through targeted training." },
        { metric: "Business-IT Unity", description: "Maintained complete structural alignment between engineering groups and operational heads." }
      ]
    }
  ] as CaseStudy[],

  frameworks: [
    {
      name: "IT Master Plan & Business-IT Alignment",
      abbreviation: "ITMP",
      description: "Aligning multi-year technology blueprints directly with corporate growth goals, scaling strategies, and core business capabilities.",
      applications: [
        "Auditing current-state systems against operational business capabilities.",
        "Formulating ROI-driven, sequenced technology investment roadmaps.",
        "Creating robust governance frameworks to oversee transformation portfolios."
      ]
    },
    {
      name: "Enterprise Architecture Frameworks",
      abbreviation: "TOGAF",
      description: "Designing modular, robust as-is and to-be architectures across business, data, application, and technology layers to eliminate technical debt.",
      applications: [
        "Mapping application topologies and interface dependencies to visualize gaps.",
        "Designing target-state blueprints optimized for modern cloud and SaaS models.",
        "Establishing architectural review boards to govern ongoing enterprise integrity."
      ]
    },
    {
      name: "Governance, Operations & Change Management",
      abbreviation: "COBIT/ITIL",
      description: "Utilizing standard operational governance guidelines to guarantee systems availability, risk mitigations, and smooth stakeholder transitions.",
      applications: [
        "Structuring incident, change, and request management workflows (ServiceNow).",
        "Conducting change readiness audits and stakeholder impact analyses.",
        "Defining clear operational RACI matrices and risk mitigation protocols."
      ]
    }
  ] as Framework[],

  education: [
    {
      degree: "M.Sc. Information Technology",
      institution: "Universitas Indonesia",
      period: "Feb 2024 – Dec 2025"
    },
    {
      degree: "B.Eng. Telecommunications",
      institution: "Telkom University",
      period: "Aug 2018 – Sep 2022",
      details: "Graduated Cum Laude"
    }
  ] as EducationItem[],

  publicationsLeadership: {
    publications: [
      "SINTA 2 National Publication",
      "IEEE Publication"
    ],
    leadership: [
      "Former Chief Executive of TESLA, leading national-scale events and a 110-member committee"
    ]
  } as PublicationLeadership,

  tools: [
    { name: "Python", category: "Analytics & Programming" },
    { name: "SQL", category: "Analytics & Programming" },
    { name: "Power BI", category: "Visualization & Dashboards" },
    { name: "Tableau", category: "Visualization & Dashboards" },
    { name: "Excel", category: "Visualization & Dashboards" },
    { name: "Google Data Studio", category: "Visualization & Dashboards" },
    { name: "Alteryx", category: "Analytics & Programming" },
    { name: "ServiceNow", category: "Operational Platforms" }
  ] as ToolItem[]
};

export type PortfolioData = typeof portfolioData;
