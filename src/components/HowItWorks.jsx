import React from "react";
import { UserCheck, Search, LineChart } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const STEPS = [
  {
    number: "01",
    icon: UserCheck,
    title: "Build Your Profile",
    description: "Add your skills, experience, education and career goals.",
    badge: "Step 1"
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Opportunities",
    description: "Explore example opportunities matched to your profile.",
    badge: "Step 2"
  },
  {
    number: "03",
    icon: LineChart,
    title: "Improve & Track",
    description: "Use AI insights to strengthen applications and track progress.",
    badge: "Step 3"
  },
];

export default function HowItWorks() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
            3-Step Workflow
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How AI Career Copilot Works
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            From profile setup to tracked application — a structured path to your next role.
          </p>
        </div>

        {/* 3-Step Grid with Desktop Connecting Line */}
        <div
          ref={ref}
          className={`relative grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Desktop connecting line behind steps */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-0 pointer-events-none" />

          {STEPS.map(({ number, icon: Icon, title, description, badge }) => (
            <div
              key={number}
              className="relative z-10 flex flex-col items-center text-center bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-sm font-bold text-slate-400">{number}</span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 border border-slate-200">
                  {badge}
                </span>
              </div>

              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-blue-600 shadow-md shadow-slate-200/50 mb-5">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
