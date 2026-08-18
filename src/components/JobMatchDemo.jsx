import React, { useState } from "react";
import { Search, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Lightbulb, RefreshCw, Zap } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const PRESET_ROLES = {
  "Data Analyst": {
    score: 87,
    skills: ["SQL", "Python", "Power BI"],
    needsImprovement: ["Statistics"],
    insight:
      "Your SQL and Power BI skills align strongly with this example role. Consider highlighting measurable project outcomes on your resume.",
    recommendations: [
      "Add quantified business metrics to your SQL project bullets (e.g., 'Optimized query latency by 40%').",
      "Complete a concise 2-hour Statistics refresher covering hypothesis testing and confidence intervals.",
      "Re-order your skills section to place Power BI and Data Modeling near the top."
    ]
  },
  "Frontend Engineer": {
    score: 92,
    skills: ["React", "TypeScript", "Tailwind CSS"],
    needsImprovement: ["Web Vitals Optimization"],
    insight:
      "Your frontend architectural skills and modern UI rendering experience match key senior engineering criteria exceptionally well.",
    recommendations: [
      "Highlight component reusability and bundle size optimizations in your recent projects.",
      "Add 1-2 examples of accessibility (WCAG 2.1 AA) implementations.",
      "Link directly to live demos or GitHub code samples in your header."
    ]
  },
  "Product Manager": {
    score: 81,
    skills: ["Product Roadmap", "User Research", "Agile/Scrum"],
    needsImprovement: ["SQL Data Querying"],
    insight:
      "Strong strategic alignment and user empathy. Strengthening direct SQL querying data skills will push your score above 90%.",
    recommendations: [
      "Quantify revenue or retention impact on your top 2 product launches.",
      "Detail your experience working directly with cross-functional engineering leads.",
      "Include a brief case study link demonstrating your feature prioritization framework."
    ]
  },
  "AI / ML Engineer": {
    score: 85,
    skills: ["Python", "PyTorch", "LLM Fine-Tuning"],
    needsImprovement: ["Vector Databases (Milvus/Pinecone)"],
    insight:
      "Solid deep learning fundamentals. Highlighting production RAG pipeline deployments will make your application stand out.",
    recommendations: [
      "Detail latency benchmarks achieved during LLM inference optimization.",
      "Mention hands-on experience with vector embeddings and semantic search indexing.",
      "Include repository links for your open-source AI projects."
    ]
  }
};

export default function JobMatchDemo() {
  const [jobTitle, setJobTitle] = useState("Data Analyst");
  const [validationError, setValidationError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(true);
  const [showImprovePanel, setShowImprovePanel] = useState(false);
  const [ref, isVisible] = useReveal();

  const currentData = PRESET_ROLES[jobTitle] || {
    score: 84,
    skills: ["Core Technical Skill 1", "Core Technical Skill 2", "Tooling"],
    needsImprovement: ["Advanced Analytics"],
    insight: `Your SQL and Power BI skills align strongly with this example role. Consider highlighting measurable project outcomes on your resume.`,
    recommendations: [
      `Tailor your summary section specifically for ${jobTitle || "target"} responsibilities.`,
      "Quantify achievements with percentage improvements or revenue saved.",
      "Align technical keywords with the target job posting description."
    ]
  };

  const handleAnalyze = (e) => {
    e?.preventDefault();
    if (!jobTitle.trim()) {
      setValidationError("Enter a job title to analyze your match.");
      return;
    }
    setValidationError("");
    setIsAnalyzing(true);
    setShowImprovePanel(false);

    // Controlled 1100ms loading state for smooth skeleton animation
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1100);
  };

  const handlePresetClick = (role) => {
    setJobTitle(role);
    setValidationError("");
    setIsAnalyzing(true);
    setShowImprovePanel(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1000);
  };

  return (
    <section id="interactive-demo" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Zap className="w-3.5 h-3.5" />
            Live AI Match Simulator
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See how AI Career Copilot evaluates your fit.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Type any target job title below to trigger instant skill matching and AI recommendations.
          </p>
        </div>

        {/* Input Form & Error Handling */}
        <div ref={ref} className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={handleAnalyze} className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <label htmlFor="job-title-input" className="sr-only">Target Job Title</label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  id="job-title-input"
                  type="text"
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                    if (validationError) setValidationError("");
                  }}
                  placeholder="Enter a job title (e.g. Data Analyst)"
                  aria-invalid={Boolean(validationError)}
                  aria-describedby={validationError ? "validation-error-msg" : undefined}
                  className={`w-full rounded-xl border bg-slate-50 pl-11 pr-4 py-3.5 text-slate-900 placeholder:text-slate-400 text-base transition-all shadow-sm font-medium focus:outline-none focus:ring-2 ${
                    validationError
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
                      : "border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-blue-600/20"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isAnalyzing}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Analyze Match</span>
                  </>
                )}
              </button>
            </div>

            {/* Validation Error Message */}
            {validationError && (
              <p id="validation-error-msg" className="text-xs font-semibold text-rose-600 flex items-center gap-1.5 pl-1 animate-slide-down">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>{validationError}</span>
              </p>
            )}
          </form>

          {/* Quick Preset Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Try example role:</span>
            {Object.keys(PRESET_ROLES).map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => handlePresetClick(role)}
                className={`rounded-full px-3 py-1 font-medium transition-all ${
                  jobTitle === role
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Skeleton Loading State (Section 5 requirement) */}
        {isAnalyzing && (
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-md space-y-6 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-28 bg-slate-200 rounded" />
                <div className="h-7 w-48 bg-slate-300 rounded" />
              </div>
              <div className="h-12 w-20 bg-slate-300 rounded-xl" />
            </div>

            <div className="flex items-center gap-3 bg-blue-100/60 p-4 rounded-xl text-blue-900 text-sm font-semibold">
              <RefreshCw className="h-5 w-5 animate-spin text-blue-600 shrink-0" />
              <span>Analyzing your profile against key requirements...</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-28 bg-slate-200 rounded-xl" />
              <div className="h-28 bg-slate-200 rounded-xl" />
            </div>
          </div>
        )}

        {/* Results Panel */}
        {!isAnalyzing && hasAnalyzed && (
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-xl transition-all duration-500">
            {/* Header Result Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-slate-500">Demo Match</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
                    Example Evaluation
                  </span>
                </div>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">{jobTitle || "Data Analyst"}</h3>
              </div>

              {/* Match Score Display - Exact 87% Demo Match */}
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-3xl font-extrabold text-blue-600 font-mono">{currentData.score}%</span>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">Demo Match</p>
                  <p className="text-[11px] text-slate-500 font-mono">Profile Score</p>
                </div>
              </div>
            </div>

            {/* Skills & Needs Improvement Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Matched Skills */}
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    Skills
                  </h4>
                </div>
                <div className="space-y-2">
                  {currentData.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-emerald-100 shadow-2xs">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Needs Improvement */}
              <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                    Needs Improvement
                  </h4>
                </div>
                <div className="space-y-2">
                  {currentData.needsImprovement.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-amber-100 shadow-2xs">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insight Box - Blockquote */}
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/80 p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 shadow-sm">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono mb-1">
                    AI Insight
                  </h4>
                  <blockquote className="text-sm text-slate-700 leading-relaxed font-medium italic border-l-2 border-blue-600 pl-3">
                    "{currentData.insight}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Action Button: Improve My Match → */}
            <div className="mt-6 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setShowImprovePanel((prev) => !prev)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-95"
              >
                <span>{showImprovePanel ? "Hide Recommendation Plan" : "Improve My Match →"}</span>
              </button>

              {/* Reveal Recommendation Panel */}
              {showImprovePanel && (
                <div className="mt-4 w-full animate-slide-down rounded-xl border border-slate-300 bg-white p-5 shadow-lg text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                      Actionable Improvement Plan
                    </h5>
                  </div>
                  <ul className="space-y-2.5">
                    {currentData.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                          {idx + 1}
                        </span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
