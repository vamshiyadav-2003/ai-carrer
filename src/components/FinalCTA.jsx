import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="get-started" className="relative py-20 sm:py-28 bg-slate-900 overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-violet-600/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          <span>Unified Career Workspace</span>
        </div>

        {/* Exact Headline Copy */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Build a smarter path to your next opportunity.
        </h2>

        {/* Exact Supporting Copy */}
        <p className="mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Bring your job search, resume insights and application tracking together in one place.
        </p>

        {/* CTA Button */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#top"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-500/40 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
