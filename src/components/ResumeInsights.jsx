import React, { useState } from "react";
import { FileText, CheckCircle2, AlertTriangle, Sparkles, ChevronRight, Lightbulb } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const SUGGESTED_IMPROVEMENTS = [
  {
    title: "Add measurable project outcomes",
    detail: "Include specific percentages, revenue growth, or time saved (e.g., 'reduced query runtime by 35%')."
  },
  {
    title: "Mention tools used in projects",
    detail: "Explicitly list libraries and tools in project descriptions (e.g., 'Power BI, PyTorch, dbt')."
  },
  {
    title: "Strengthen achievement statements",
    detail: "Lead each bullet point with high-impact action verbs rather than passive task descriptions."
  }
];

export default function ResumeInsights() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [ref, isVisible] = useReveal();

  return (
    <section id="resume-insights" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
            <Sparkles className="w-3.5 h-3.5" /> AI Resume Reviewer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Make every application stronger.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            AI Career Copilot audits phrasing, keyword alignment, and metric density before you submit.
          </p>
        </div>

        {/* Main Resume Card */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">Resume Strength</h3>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200 font-mono">
                    78% Demo Score
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">File: Jane_Doe_Data_Analyst_Resume.pdf</p>
              </div>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
              <span className="text-3xl font-extrabold text-slate-900 font-mono">78%</span>
              <div>
                <p className="text-xs font-bold text-slate-800">Demo Score</p>
                <p className="text-[11px] text-amber-600 font-medium">3 Fixes Suggested</p>
              </div>
            </div>
          </div>

          {/* Checklist Items - Exact requested copy */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/80 text-sm font-medium text-slate-800">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              <span>Strong skills section</span>
            </div>
            <div className="flex items-center gap-3 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/80 text-sm font-medium text-slate-800">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              <span>Clear experience</span>
            </div>
            <div className="flex items-center gap-3 bg-amber-50/80 p-3.5 rounded-xl border border-amber-200/80 text-sm font-medium text-slate-800">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
              <span className="font-semibold text-amber-900">Add measurable achievements</span>
            </div>
          </div>

          {/* Get AI Suggestions Button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowSuggestions((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span>{showSuggestions ? "Hide AI Suggestions" : "Get AI Suggestions"}</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${showSuggestions ? "rotate-90" : ""}`} />
            </button>
          </div>

          {/* Reveal Suggestions Panel */}
          {showSuggestions && (
            <div className="mt-6 animate-slide-down border-t border-slate-200 pt-6 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                  Suggested Improvements
                </h4>
                <span className="text-xs text-blue-600 font-semibold font-mono">3 Recommendations</span>
              </div>

              <ul className="space-y-3">
                {SUGGESTED_IMPROVEMENTS.map((item, idx) => (
                  <li key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <Lightbulb className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
