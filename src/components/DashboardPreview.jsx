import React, { useState } from "react";
import {
  LayoutDashboard,
  Search,
  FileText,
  Send,
  Sparkles,
  User,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BarChart3,
  BookOpen,
  Award,
  Layers,
  ChevronRight
} from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const SIDEBAR_NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "matches", label: "Job Matches", icon: Search },
  { id: "resume", label: "Resume Insights", icon: FileText },
  { id: "applications", label: "Applications", icon: Send },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "profile", label: "Profile", icon: User },
];

const SKILL_MATCH_LIST = [
  { name: "SQL", level: "Strong", status: "strong", score: 95 },
  { name: "Python", level: "Strong", status: "strong", score: 90 },
  { name: "Power BI", level: "Strong", status: "strong", score: 88 },
  { name: "Statistics", level: "Improve", status: "improve", score: 62 },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [ref, isVisible] = useReveal();

  return (
    <section id="dashboard" className="relative py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-700 border border-blue-200">
            Interactive Product Preview
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Your Career Workspace
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Click any sidebar tab to explore how AI Career Copilot evaluates matches and structures your applications.
          </p>
        </div>

        {/* Product Window Shell */}
        <div
          ref={ref}
          className={`overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Top Window Bar / Browser Chrome */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/90 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-slate-500 font-mono hidden sm:inline-block">
                app.aicareercopilot.demo / workspace
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">
                Demo Data
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
                Data Analyst
              </span>
            </div>
          </div>

          {/* Workspace Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] min-h-[520px]">
            {/* Sidebar */}
            <aside className="border-r border-slate-200 bg-slate-50/80 p-3 sm:p-4">
              <div className="mb-4 px-3 py-2 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  JD
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Jane Doe</p>
                  <p className="text-[11px] text-slate-500 truncate max-w-[120px]">Data Analyst Profile</p>
                </div>
              </div>

              <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none" aria-label="Dashboard views">
                {SIDEBAR_NAV.map(({ id, label, icon: Icon }) => {
                  const isActive = activeTab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveTab(id)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all whitespace-nowrap md:w-full text-left ${
                        isActive
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Main Dashboard Panel */}
            <main className="p-4 sm:p-6 lg:p-8 bg-white flex flex-col justify-between">
              {activeTab === "dashboard" && (
                <div className="space-y-6 animate-fade-up">
                  {/* Top Match Hero Card */}
                  <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 text-white shadow-md relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">Target Role Match</span>
                          <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-400/30">
                            Demo Match
                          </span>
                        </div>
                        <h3 className="mt-1 text-2xl font-bold text-white">Senior Data Analyst</h3>
                        <p className="text-sm text-slate-300">Sample Company · Remote</p>
                      </div>

                      {/* 87% Match Score Display */}
                      <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                        <div className="relative flex items-center justify-center">
                          <svg className="w-16 h-16 transform -rotate-90">
                            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" className="text-white/20" fill="transparent" />
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="currentColor"
                              strokeWidth="5"
                              className="text-blue-400"
                              strokeDasharray="163"
                              strokeDashoffset="21"
                              strokeLinecap="round"
                              fill="transparent"
                            />
                          </svg>
                          <span className="absolute text-lg font-extrabold text-white font-mono">87%</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-300">Overall Fit</p>
                          <p className="text-[11px] text-emerald-400 font-medium">Strong Alignment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Metric Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Skills Match Card */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Skills Match</span>
                        <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          3/4 Strong
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {SKILL_MATCH_LIST.map((skill) => (
                          <div key={skill.name} className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-700">{skill.name}</span>
                            <span
                              className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                                skill.status === "strong"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience Match Card */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Experience Match</span>
                          <span className="text-xs font-mono font-bold text-slate-800">82%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: "82%" }} />
                        </div>
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                          3.5 years matching required 3+ years experience in analytical querying & dash-building.
                        </p>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Meets tenure criteria
                      </span>
                    </div>

                    {/* Education Match Card */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Education Match</span>
                          <span className="text-xs font-mono font-bold text-slate-800">91%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000" style={{ width: "91%" }} />
                        </div>
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                          B.S. Computer Science / STEM degree aligns directly with quantitative requirement.
                        </p>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600">
                        <Award className="w-3.5 h-3.5" /> Degree Verified
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "matches" && (
                <div className="space-y-4 animate-fade-up">
                  <h3 className="text-lg font-bold text-slate-900">Job Opportunities (Demo Data)</h3>
                  <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50/50">
                    {[
                      { role: "Senior Data Analyst", company: "Sample Company", fit: "87%", tag: "Strong Match", score: "87" },
                      { role: "Business Intelligence Specialist", company: "Tech Corp Demo", fit: "84%", tag: "Good Match", score: "84" },
                      { role: "Data Operations Engineer", company: "Apex Cloud Example", fit: "76%", tag: "Moderate Match", score: "76" },
                    ].map((j) => (
                      <div key={j.role} className="flex items-center justify-between p-4 hover:bg-white transition-colors">
                        <div>
                          <p className="text-sm font-bold text-slate-900">{j.role}</p>
                          <p className="text-xs text-slate-500">{j.company}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono">
                            {j.fit} Demo Fit
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "resume" && (
                <div className="space-y-4 animate-fade-up">
                  <h3 className="text-lg font-bold text-slate-900">Resume AI Analysis</h3>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-800">Resume Health Score</span>
                      <span className="font-mono text-base font-extrabold text-blue-600">78% Demo Score</span>
                    </div>
                    <p className="text-xs text-slate-600">3 actionable recommendations ready to review.</p>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div className="space-y-4 animate-fade-up">
                  <h3 className="text-lg font-bold text-slate-900">Application Pipeline</h3>
                  <p className="text-xs text-slate-500">Track application stages from Applied to Interview and Offer.</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["Applied (3)", "Interview (1)", "Shortlisted (2)", "Completed (1)"].map((col) => (
                      <div key={col} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-700">
                        {col}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-4 animate-fade-up">
                  <h3 className="text-lg font-bold text-slate-900">Skill Matrix</h3>
                  <p className="text-xs text-slate-500">Identified proficiencies vs target job market demand.</p>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-4 animate-fade-up">
                  <h3 className="text-lg font-bold text-slate-900">Career Profile & Objectives</h3>
                  <p className="text-xs text-slate-500">Target role: Data Analyst / Analytics Engineer.</p>
                </div>
              )}

              {/* Bottom Workspace Footer Notice */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>AI Career Copilot Engine v2.4</span>
                <span className="font-mono">Demo Workspace</span>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
