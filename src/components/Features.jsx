import React from "react";
import { Target, FileSearch, ListChecks, TrendingUp, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const FEATURES = [
  {
    icon: Target,
    title: "Smart Job Matching",
    description: "AI-powered recommendations based on skills and career goals.",
    badge: "Matching Engine"
  },
  {
    icon: FileSearch,
    title: "Resume Insights",
    description: "Identify areas that can make your resume clearer and stronger.",
    badge: "Line-by-Line AI"
  },
  {
    icon: ListChecks,
    title: "Application Tracking",
    description: "Keep applications organized in one workspace.",
    badge: "Kanban Pipeline"
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    description: "Understand which skills you can develop for your target roles.",
    badge: "Career Growth"
  },
];

function FeatureCard({ icon: Icon, title, description, badge, delay }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-card-hover ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Top Card Badge */}
      <div className="flex items-center justify-between mb-5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
        </div>
        <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
          {badge}
        </span>
      </div>

      {/* Card Content */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Subtle indicator line */}
      <div className="mt-6 h-0.5 w-8 rounded-full bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for clarity and speed
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Every feature is focused on accelerating your job search with precision AI guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
