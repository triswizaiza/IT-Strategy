import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = "text-center space-y-3 max-w-2xl mx-auto"
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">
        {badge}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="text-sm text-slate-500 font-sans">
        {description}
      </p>
    </div>
  );
}
