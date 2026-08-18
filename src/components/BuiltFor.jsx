import React from "react";
import { GraduationCap, ArrowRightLeft, Briefcase, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Build a stronger starting point for your career.",
    detail: "Identify entry-level skill requirements and structure your first portfolio projects effectively."
  },
  {
    icon: ArrowRightLeft,
    title: "Career Switchers",
    description: "Understand which skills transfer to your next role.",
    detail: "Map adjacent industry experience into clear, recruiter-friendly technical bullet points."
  },
  {
    icon: Briefcase,
    title: "Early-Career Professionals",
    description: "Find opportunities aligned with your growing skill set.",
    detail: "Accelerate advancement by targeting mid-level roles that match your expanding capabilities."
  },
];

export default function BuiltFor() {
  const [ref, isVisible] = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Tailored Guidance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for ambitious job seekers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Designed to bring structural clarity to every stage of professional growth.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {AUDIENCES.map(({ icon: Icon, title, description, detail }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">{description}</p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 font-mono">
                {title} Profile Engine
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
