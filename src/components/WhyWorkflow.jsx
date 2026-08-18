import React from "react";
import { Compass, BarChart3, FileCheck, Layers, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const WORKFLOW_STEPS = [
  {
    step: "01",
    label: "Discover",
    icon: Compass,
    title: "Find Matched Opportunities",
    description: "Discover roles matched to your actual profile, background, and career targets.",
  },
  {
    step: "02",
    label: "Understand",
    icon: BarChart3,
    title: "Analyze Role Fit",
    description: "Understand your exact match percentage, key skill overlaps, and experience alignment.",
  },
  {
    step: "03",
    label: "Improve",
    icon: FileCheck,
    title: "Optimize Applications",
    description: "Apply AI line-level resume suggestions to strengthen bullet points before applying.",
  },
  {
    step: "04",
    label: "Track",
    icon: Layers,
    title: "Manage Pipeline",
    description: "Track every application stage from submission to offer in one clean dashboard.",
  },
];

export default function WhyWorkflow() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 font-mono">
            <Sparkles className="w-3.5 h-3.5" /> End-to-End Career Architecture
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From job search to application — one workflow.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Stop juggling spread sheets, job boards, and disconnected document drafts.
          </p>
        </div>

        {/* Workflow steps container with desktop line */}
        <div
          ref={ref}
          className={`relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Desktop connecting line behind steps */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-0 pointer-events-none" />

          {WORKFLOW_STEPS.map(({ step, label, icon: Icon, title, description }) => (
            <div
              key={step}
              className="group relative z-10 flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-white hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    {step} {label}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-400 group-hover:text-blue-500 transition-colors">
                Workflow Phase {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
