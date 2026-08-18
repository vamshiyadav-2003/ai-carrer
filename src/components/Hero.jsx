import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";

const HERO_BENEFITS = [
  "Smart Job Matching",
  "Resume Insights",
  "Application Tracking",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      {/* Background ambient lighting subtle gradient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-indigo-500/10 to-purple-500/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse-subtle" />
            <span>AI-Powered Career Workspace</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          </div>

          {/* Headline - Exact requested copy */}
          <h1 className="animate-fade-up mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]" style={{ animationDelay: "100ms" }}>
            Your next career move,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              powered by AI.
            </span>
          </h1>

          {/* Supporting description - Exact requested copy */}
          <p className="animate-fade-up mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: "200ms" }}>
            Discover relevant opportunities, understand your fit, and build stronger applications — all in one workspace.
          </p>

          {/* CTAs - Exact requested CTAs: "Get Started Free →" and "Try AI Match" */}
          <div className="animate-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "300ms" }}>
            <a
              href="#get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-blue-600 hover:shadow-blue-500/25 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#interactive-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Zap className="h-4 w-4 text-blue-600 fill-blue-100" />
              <span>Try AI Match</span>
            </a>
          </div>

          {/* Product Benefits - Exact requested 3 bullet points */}
          <div className="animate-fade-up mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" style={{ animationDelay: "400ms" }}>
            {HERO_BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
