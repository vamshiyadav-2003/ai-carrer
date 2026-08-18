import React, { useState } from "react";
import { PlusCircle, Filter, Inbox, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const TRACKER_COLUMNS = [
  { id: "applied", label: "Applied", color: "bg-blue-500" },
  { id: "interview", label: "Interview", color: "bg-amber-500" },
  { id: "shortlisted", label: "Shortlisted", color: "bg-indigo-500" },
  { id: "completed", label: "Completed", color: "bg-emerald-500" },
];

const INITIAL_DEMO_APPLICATIONS = [
  {
    id: "app-1",
    companyInitials: "SC",
    companyName: "Sample Company",
    role: "Business Intelligence Analyst",
    location: "Remote · Full-time",
    status: "interview",
    statusLabel: "Interview",
    date: "Aug 14, 2026",
    matchScore: 89,
    notes: "Technical interview scheduled for Thursday with Lead Data Architect."
  },
  {
    id: "app-2",
    companyInitials: "EC",
    companyName: "Example Company",
    role: "Data Analyst",
    location: "Hybrid · New York, NY",
    status: "applied",
    statusLabel: "Applied",
    date: "Aug 16, 2026",
    matchScore: 87,
    notes: "Submitted tailored resume with quantified SQL project metrics."
  },
  {
    id: "app-3",
    companyInitials: "DC",
    companyName: "Demo Company",
    role: "Analytics Associate",
    location: "Remote · Contract",
    status: "shortlisted",
    statusLabel: "Shortlisted",
    date: "Aug 10, 2026",
    matchScore: 91,
    notes: "Passed recruiter screening call. Awaiting technical assessment invite."
  }
];

export default function ApplicationTracker({ onOpenAddModal, applications = INITIAL_DEMO_APPLICATIONS }) {
  const [filter, setFilter] = useState("all");
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [selectedApp, setSelectedApp] = useState(applications[0]);
  const [ref, isVisible] = useReveal();

  const activeApps = showEmptyState ? [] : applications;
  const filteredApps = filter === "all" ? activeApps : activeApps.filter((a) => a.status === filter);

  return (
    <section id="tracker" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 font-mono">
              Pipeline Workspace
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Application Tracker
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Keep every application, interview stage, and follow-up organized in one workspace.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Toggle empty state preview button */}
            <button
              type="button"
              onClick={() => setShowEmptyState((prev) => !prev)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 transition-all"
            >
              {showEmptyState ? "Restore Demo Cards" : "Preview Empty State"}
            </button>

            {/* Primary Action Button: + Add Application */}
            <button
              type="button"
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-95 shrink-0"
            >
              <PlusCircle className="h-4 w-4 text-blue-400" />
              <span>+ Add Application</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-slate-500 font-mono flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Stage:
            </span>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                filter === "all" ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All ({activeApps.length})
            </button>
            {TRACKER_COLUMNS.map((col) => {
              const count = activeApps.filter((a) => a.status === col.id).length;
              return (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setFilter(col.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    filter === col.id ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {col.label} ({count})
                </button>
              );
            })}
          </div>

          <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 font-mono font-medium">
            Demo Applications
          </span>
        </div>

        {/* Full Empty State (Section 4 requirement) */}
        {showEmptyState || activeApps.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/60 p-12 text-center my-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-400 shadow-sm mb-4">
              <Inbox className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No applications yet</h3>
            <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
              Start tracking your opportunities here to keep stages, notes, and fit scores organized.
            </p>
            <button
              type="button"
              onClick={onOpenAddModal}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <PlusCircle className="h-4 w-4" />
              <span>+ Add Application</span>
            </button>
          </div>
        ) : (
          /* Kanban Columns Layout */
          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {TRACKER_COLUMNS.map((col) => {
              const apps = filteredApps.filter((a) => a.status === col.id);
              return (
                <div key={col.id} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between min-h-[380px]">
                  <div>
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${col.color}`} />
                        <h3 className="text-sm font-bold text-slate-900">{col.label}</h3>
                      </div>
                      <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-slate-600 border border-slate-200 font-mono">
                        {apps.length}
                      </span>
                    </div>

                    {/* Column App Cards */}
                    <div className="space-y-3">
                      {apps.length === 0 ? (
                        <p className="text-xs text-slate-400 italic py-6 text-center">No applications in this stage</p>
                      ) : (
                        apps.map((app) => (
                          <div
                            key={app.id}
                            onClick={() => setSelectedApp(app)}
                            className={`group cursor-pointer rounded-xl border p-4 transition-all duration-200 bg-white hover:border-blue-500 hover:shadow-md ${
                              selectedApp?.id === app.id ? "border-blue-600 ring-2 ring-blue-600/10 shadow-sm" : "border-slate-200"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              {/* Initials Badge - SC / EC / DC sample initials */}
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-extrabold text-white font-mono shadow-xs">
                                  {app.companyInitials}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {app.role}
                                  </p>
                                  <p className="text-[11px] text-slate-500">{app.companyName}</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                              <span>{app.date}</span>
                              <span className="font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                                {app.matchScore}% Match
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Footer status summary */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400 text-center font-mono">
                    Demo Pipeline Workspace
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Selected Application Detail Drawer */}
        {!showEmptyState && selectedApp && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-extrabold text-white font-mono shadow-md">
                {selectedApp.companyInitials}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900">{selectedApp.role}</h4>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200 font-mono capitalize">
                    {selectedApp.statusLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">{selectedApp.companyName} · {selectedApp.location}</p>
              </div>
            </div>
            <div className="text-xs text-slate-700 max-w-md bg-white p-3 rounded-xl border border-blue-100 shadow-2xs font-mono">
              <strong>Notes:</strong> {selectedApp.notes}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
